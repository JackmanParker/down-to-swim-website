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
                className="rounded-lg"
              />

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center">
                  <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </Card>
                <Card className="p-4 text-center">
                  <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">500+</div>
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
                  Head Swimming Instructor & Program Director
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">Certified Instructor</Badge>
                  <Badge variant="secondary">Water Safety</Badge>
                  <Badge variant="secondary">Competitive Training</Badge>
                  <Badge variant="secondary">Adult Lessons</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Brooklynn brings over a decade of swimming instruction
                  experience to Down to Swim, with a passion for helping
                  students of all ages and skill levels achieve their swimming
                  goals.
                </p>

                <p className="text-muted-foreground">
                  As a former competitive swimmer and certified instructor,
                  Brooklynn understands both the technical aspects of swimming
                  and the confidence-building process that makes learning to
                  swim enjoyable and safe.
                </p>

                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary mb-2 flex items-center">
                    <Heart className="h-4 w-4 mr-2" />
                    Teaching Philosophy
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    "Every student learns differently, and my goal is to create
                    a supportive, encouraging environment where each person can
                    progress at their own pace while building confidence in the
                    water."
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-primary">Specialties</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      Beginner to advanced technique instruction
                    </li>
                    <li className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      Water safety and survival skills
                    </li>
                    <li className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      Competitive stroke refinement
                    </li>
                    <li className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      Adult learn-to-swim programs
                    </li>
                    <li className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      Special needs swimming instruction
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary mb-2">
                    Certifications & Training
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• American Red Cross Water Safety Instructor</li>
                    <li>• Lifeguard Certification</li>
                    <li>• CPR/AED Certified</li>
                    <li>• Special Needs Swimming Certification</li>
                    <li>• Competitive Swimming Coach License</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Ready to Start Your Swimming Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Book a lesson with Brooklynn and experience personalized
              instruction that builds confidence and proper technique.
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
