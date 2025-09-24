import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Shield,
  Award,
  DollarSign,
  Star,
  CheckCircle,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[url(public/">
            <div className="space-y-6 bg-image">
              <Badge className="bg-accent/10 text-accent border-accent/20">
                Therapeutic Aquatics
              </Badge>
              <Badge className="bg-accent/10 text-accent border-accent/20">
                Private Swim Lessons{" "}
              </Badge>
              <Badge className="bg-accent/10 text-accent border-accent/20">
                Experienced Teacher{" "}
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
                Private swim lessons for all abilities
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                At Down to Swim, our focus is helping individuals gain
                confidence in the water. Down to Swim is committed to making
                swim lessons fun, engaging, and growth-oriented.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Book Your First Lesson
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  View Our Services
                </Button>
              </div>
            </div>
            <div className="relative"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Down to Swim?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              We're committed to providing the highest quality swimming
              instruction in a safe, supportive environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 text-primary p-3 rounded-full w-fit mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <CardTitle>Safety First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  All lessons are taught by Brooklynn Jackman, a CPR-certified
                  instructor. Your safety is the top priority.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-accent/10 text-accent p-3 rounded-full w-fit mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <CardTitle>Qualified Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Brooklynn Jackman (ATRIC) has been teaching swim for over 8
                  years, including 6 years dedicated to individuals who have
                  special needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 text-primary p-3 rounded-full w-fit mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <CardTitle>All Ages Welcome</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  From infant to adult, lessons are tailored to every age,
                  ability, and skill level.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-accent/10 text-accent p-3 rounded-full w-fit mx-auto mb-4">
                  <DollarSign className="h-8 w-8" />
                </div>
                <CardTitle>Affordable Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Accessible pricing without compromising quality. All students
                  receive the same, fair pricing, regardless of ability.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Swim Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty"></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden">
              <div className="absolute top-4 right-4"></div>
              <CardHeader>
                <CardTitle>Family Direct Services (FDS)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Children who have an FDS plan may qualify for therapeutic
                  aquatic sessions to be fully covered. Reach out through the
                  contact page or call to learn more about how.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Water safety fundamentals</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Basic stroke development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">One on one sessions</span>
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Special Needs Swim Lessons</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  With an experienced instructor, lessons are tailored to help
                  kids of all abilities. Whether your child is scared of water
                  or a little too confident, lessons will help them gain skills
                  with no extra costs because of their special needs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Water safety fundamentals</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Basic stroke development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">One on one sessions</span>
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Family Friendly</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Down to Swim strives to be a place fit for families. Siblings
                  are welcome to take lessons, with scheduling options that
                  allow them to be placed back-to-back or at different
                  times—whatever works best for your family
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Personalized curriculum</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Faster progress</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Flexible timing</span>
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Don't just take our word for it - hear from families who've
              experienced our programs coming soon.
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                <CardDescription>Parent of 6-year-old Emma</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">
                  "Emma was terrified of water before starting lessons here. Now
                  she's swimming confidently and asking to go to the pool every
                  weekend! The instructors are amazing with kids."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <CardTitle className="text-lg">Mike Chen</CardTitle>
                <CardDescription>Adult Student</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">
                  "I never learned to swim as a child and was embarrassed to
                  start as an adult. The instructors here made me feel
                  comfortable and confident. I can now swim laps!"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <CardTitle className="text-lg">Lisa Rodriguez</CardTitle>
                <CardDescription>Parent of twins</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">
                  "Both my twins learned to swim here. The small class sizes and
                  patient instructors made all the difference. Highly recommend
                  AquaLearn!"
                </p>
              </CardContent>
            </Card>
          </div> */}
          <div className="text-center mt-8">
            <Link
              href="/reviews"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-md bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
            >
              Leave a review
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">
            Ready to Start Your Swimming Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
            Join hundreds of satisfied students who've learned to swim with
            confidence at AquaLearn. Book your first lesson today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Book a Lesson Now
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
