"use client";

import Link from "next/link";
import Coursesdata from "../data/music_company.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  name: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  level: string;
  instructor: string;
}

function FeaturedCourses() {
  const featuredCourses = Coursesdata.courses.slice(0, 5); // Show top 3 courses only

  return (
    <div className="py-16 bg-black">
      {/* Heading Section */}
      <div className="text-center">
        <h2 className="text-xl md:text-2xl text-teal-500 font-semibold tracking-wide uppercase">
          Featured Courses
        </h2>
        <p className="mt-3 text-3xl md:text-4xl font-extrabold text-white">
          Learn With the Best
        </p>
      </div>

      {/* Course Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16">
        {featuredCourses.map((course: Course) => (
          <div key={course.id} className="flex justify-center">
            <BackgroundGradient className="rounded-2xl p-6 w-full max-w-sm bg-gray-900 text-white shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{course.description}</p>

              <div className="flex flex-col gap-1 text-sm text-gray-300">
                <span><strong>Instructor:</strong> {course.instructor}</span>
                <span><strong>Duration:</strong> {course.duration}</span>
                <span><strong>Level:</strong> {course.level}</span>
                <span><strong>Price:</strong> ${course.price}</span>
              </div>

              <Link
                href="/courses"
                className="mt-4 inline-block px-4 py-2 text-sm bg-indigo-600 hover:bg-indigo-700 rounded-md transition duration-300"
              >
                Enroll Now
              </Link>
            </BackgroundGradient>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-16 text-center">
        <Link
          href="/courses"
          className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md"
        >
          🎓 View All Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
