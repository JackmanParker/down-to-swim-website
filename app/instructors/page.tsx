import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Award, Users, Clock, Heart } from "lucide-react";

export default function InstructorsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Meet The Instructor
          </h1>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Photo placeholder - replace with actual photo */}
            <div className="space-y-4">
              <Image
                src="/Broolynn-Instructor.jpeg"
                alt="Brooklyn Instructor"
                width={300}
                height={300}
                className="rounded-lg mx-auto"
              />

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center">
                  <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">8+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </Card>
                <Card className="p-4 text-center">
                  <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">150+</div>
                  <div className="text-sm text-muted-foreground">
                    Students Taught
                  </div>
                </Card>
              </div>
            </div>

            {/* Bio content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-2">
                  Brooklynn Jackman
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Head Swim Instructor, Business Owner, Therapeutic Aquatics
                  Teacher, ATRIC
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Brooklynn brings over 8 years of swim teaching experience,
                  with a specialization and passion for teaching those with
                  special needs. Wherever a student is at, Brooklynn is excited
                  to help them learn the next skill!
                </p>

                <p className="text-muted-foreground">
                  After finishing a degree in Data Science through BYU-Idaho,
                  she realized she missed the water and working with the amazing
                  kids and students. Because of this, she started Down to Swim,
                  a company focused on helping those with special needs gain
                  real water skills, assisting students to gain confidence and
                  have fun while also helping parents trust their child’s safety
                  around water.
                </p>

                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary mb-2 flex items-center">
                    <Heart className="h-4 w-4 mr-2" />
                    Teaching Philosophy
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    “My goal is to help every person gain real water skills.
                    When a child’s needs are different from others, they can
                    still learn water safety and how to have fun in the water!
                    Watching my students learn a new skill is what keeps me
                    going. People can do amazing things when given clear
                    direction and someone who believes in them.”
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-primary">Specialties</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      Special Needs Swim Lessons
                    </li>
                    <li className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      Todler Swim Lessons
                    </li>
                    <li className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      Helping Students Overcome Fear of Water
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary mb-2">
                    Certifications & Training
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• CPR/AED - American Heart Association</li>
                    <li>
                      • Aquatic Therapy and Rehab Certification (ATRIC) - AEA
                    </li>
                    <li>• Intro to Aquatic Therapy Training - AEA</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Ready to Start Swimming?
            </h3>
            <p className="text-muted-foreground mb-6">
              Book a lesson with Brooklynn and experience personalized
              instruction that builds confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                Book a Lesson
              </a>
              <a
                href="/contact"
                className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary/10 transition-colors"
              >
                Ask Questions
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
