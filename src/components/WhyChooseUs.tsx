"use client";

import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Expert Instructors",
    description:
      "Learn from seasoned musicians and certified teachers with years of industry and teaching experience. Our instructors are passionate about helping you grow your skills and confidence in music.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-teal-500 to-blue-500 text-white font-bold text-xl">
        Learn from Real Musicians
      </div>
    ),
  },
  {
    title: "Interactive Lessons",
    description:
      "Our platform offers hands-on, engaging lessons for all levels. Whether you're a complete beginner or an experienced musician, our courses are tailored to make learning fun and effective.",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <img
          src="/guitar-lesson.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Guitar lesson"
        />
      </div>
    ),
  },
  {
    title: "Track Your Progress",
    description:
      "Stay motivated with progress tracking, milestones, and personalized feedback. You’ll know exactly how far you’ve come and what to focus on next in your musical journey.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-500 to-yellow-500 text-white font-bold text-xl">
        Real-Time Progress
      </div>
    ),
  },
  {
    title: "Practice Anytime, Anywhere",
    description:
      "Access your courses from any device at any time. With 24/7 access to lessons and practice materials, your musical growth fits perfectly into your lifestyle.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold text-xl">
        Flexible Learning
      </div>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <div className="w-full py-16 bg-black">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-8">
        Why Choose Us for Your Music Journey?
      </h2>
      <StickyScroll content={content} />
    </div>
  );
};

export default WhyChooseUs;
