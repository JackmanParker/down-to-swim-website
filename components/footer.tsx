import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div>
                <Image
                  src="/downToSwimLogo.png"
                  alt="Down to Swim"
                  width={200}
                  height={64}
                />
              </div>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/lessons"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Lessons/Pricing
              </Link>
              <Link
                href="/instructors"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Instructors
              </Link>
              <Link
                href="/reviews"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Reviews
              </Link>
              <Link
                href="/contact"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <div className="space-y-2">
              <Link
                href="/lessons"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Therapeutic Aquatics
              </Link>
              <Link
                href="/lessons"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Private Swim Lessons
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">TBA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <Link href="/contact">
                  <span className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Email
                  </span>
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">
                  Idaho Falls/Rexburg Idaho
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              {/* Where social meadia link will go */}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Down To Swim LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
