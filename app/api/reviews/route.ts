import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, rating, review, relationship, allowMarketing } = await request.json()

    // Validate required fields
    if (!name || !email || !review || !allowMarketing) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Down to Swim Contact Form <noreply@downtoswim.com>',
      to: ['DownToSwimllc@gmail.com'],
      replyTo: email,
      subject: `New Review Submission from ${name}`,
      html: `
        <h2>New Review Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Rating:</strong> ${rating}/5 stars</p>
        <p><strong>Relationship:</strong> ${relationship || 'Not provided'}</p>
        <p><strong>Review:</strong></p>
        <p>${review.replace(/\n/g, '<br>')}</p>
        <p><strong>Marketing Permission:</strong> ${allowMarketing ? 'Yes' : 'No'}</p>
        <hr>
        <p><em>This review was submitted from the Down to Swim website.</em></p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Review submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
