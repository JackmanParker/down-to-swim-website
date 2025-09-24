"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Dummy data
const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    text: "Amazing experience! My daughter went from being afraid of water to swimming confidently. The instructors are patient and encouraging.",
    relationship: "Parent of Emma, age 8",
  },
  {
    id: 2,
    name: "Mike Chen",
    rating: 5,
    text: "Professional, safe, and fun. My son learned proper technique and gained confidence. Highly recommend Down to Swim!",
    relationship: "Parent of Alex, age 10",
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    rating: 5,
    text: "The adult lessons were perfect for me. I finally learned to swim at 35! The instructors made me feel comfortable and confident.",
    relationship: "Adult student",
  },
  {
    id: 4,
    name: "David Thompson",
    rating: 5,
    text: "Excellent competitive training program. My daughter improved her times significantly and learned advanced techniques.",
    relationship: "Parent of competitive swimmer",
  },
  {
    id: 5,
    name: "Jennifer Lee",
    rating: 5,
    text: "The group lessons are well-structured and fun. My kids look forward to every session. Great value for money!",
    relationship: "Parent of twins, ages 6 & 7",
  },
];

export default function ReviewsPage() {
  const [currentReview, setCurrentReview] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    review: "",
    relationship: "",
    allowMarketing: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          rating: 5,
          review: "",
          relationship: "",
          allowMarketing: false,
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">
            What Our Families Say
          </h1>
          <p className="text-muted-foreground mb-8 text-center">
            Don't just take our word for it - hear from families who've
            experienced our programs.
          </p>

          {/* Reviews Carousel */}
          <div className="mb-12">
            <Card className="p-8 text-center relative">
              <div className="flex justify-center mb-4">
                {renderStars(reviews[currentReview].rating)}
              </div>
              <blockquote className="text-lg italic mb-4">
                "{reviews[currentReview].text}"
              </blockquote>
              <div className="font-semibold text-primary">
                {reviews[currentReview].name}
              </div>
              <div className="text-sm text-muted-foreground">
                {reviews[currentReview].relationship}
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevReview}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextReview}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </Card>

            {/* Dots indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentReview ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Review Submission Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Share Your Experience
            </h2>

            {submitStatus === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md mb-6">
                Thank you for your review!
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md mb-6">
                Sorry, there was an error submitting your review. Please try
                again later.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="rating"
                    className="block text-sm font-medium mb-1"
                  >
                    Rating *
                  </label>
                  <select
                    id="rating"
                    name="rating"
                    required
                    value={formData.rating}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value={5}>5 Stars - Excellent</option>
                    <option value={4}>4 Stars - Very Good</option>
                    <option value={3}>3 Stars - Good</option>
                    <option value={2}>2 Stars - Fair</option>
                    <option value={1}>1 Star - Poor</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="relationship"
                    className="block text-sm font-medium mb-1"
                  >
                    Relationship
                  </label>
                  <input
                    type="text"
                    id="relationship"
                    name="relationship"
                    value={formData.relationship}
                    onChange={handleChange}
                    placeholder="e.g., Parent of Emma, age 8"
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="review"
                  className="block text-sm font-medium mb-1"
                >
                  Your Review *
                </label>
                <textarea
                  id="review"
                  name="review"
                  required
                  rows={4}
                  value={formData.review}
                  onChange={handleChange}
                  placeholder="Tell us about your experience with Down to Swim..."
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="allowMarketing"
                  name="allowMarketing"
                  checked={formData.allowMarketing}
                  onChange={handleChange}
                  className="mt-1"
                />
                <label
                  htmlFor="allowMarketing"
                  className="text-sm text-muted-foreground"
                >
                  I agree to allow this review to be published on the Down to
                  Swim website for marketing purposes. Your email will not be
                  displayed publicly.
                </label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Review"}
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
