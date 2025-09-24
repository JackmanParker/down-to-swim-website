import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Heart, CheckCircle, Target } from "lucide-react";

export default function LessonsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Program Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Choose Your Program
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Both programs are designed with safety and individual needs in
              mind, but each serves a different purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Private Swim Lessons */}
            <Card className="relative overflow-hidden border-2 border-primary/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Private Swim Lessons</CardTitle>
                <CardDescription className="text-lg">
                  Skill-focused lessons for building water confidence and skill
                  development
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Program Focus:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Water Confidence Building</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Stroke Development</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Water Safety Skills</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Age-Based Activities for Learning</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Price:</h3>
                  <h4 className="font-semibold text-lg">$25/ 30 min Session</h4>
                  <h4 className="font-semibold text-lg">$50/ 60 min Session</h4>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">All Ages Welcome</h4>
                  <p className="text-sm text-muted-foreground">
                    From infants to adults, private lessons are tailored to the
                    student's skill level and abilities.
                  </p>
                </div>

                <Link href="/contact">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Book Private Lessons
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Therapeutic Aquatics */}
            <Card className="relative overflow-hidden border-2 border-accent/20">
              <div className="absolute top-4 right-4">
                <Badge className="bg-accent text-accent-foreground">
                  FDS Eligible
                </Badge>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Therapeutic Aquatics</CardTitle>
                <CardDescription className="text-lg">
                  Student-centered lessons designed to improve coordinated
                  movements, build confidence, and develop water skills
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Program Focus:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Water Confidence Building</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Coordinated Movements</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Water Safety Skills</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Age-Based Activities for Learning</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Price:</h3>
                  <h4 className="font-semibold text-lg">$45/ 30 min Session</h4>
                  <h4 className="font-semibold text-lg">$90/ 60 min Session</h4>
                </div>

                <div className="bg-accent/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">FDS Coverage</h4>
                  <p className="text-sm text-muted-foreground">
                    This program may be covered by FDS (Family Directed
                    Services) plans. Contact us to discuss your coverage
                    options. (Ages 3-17)
                  </p>
                </div>

                <Link href="/contact">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Schedule a Session
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">
            Ready to Start Swimming?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
            Not sure which program is right for you? Contact us for a
            consultation and we'll help you choose the best path forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Get a Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Ask Questions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
