/* eslint-disable */
"use client";
import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
} from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                <span className="text-teal-700 text-sm font-medium">
                  Available for opportunities
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Saksham Tiwari
              </h1>

              <p className="text-2xl md:text-3xl text-gray-600 font-medium">
                Full Stack Web Developer
              </p>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                A passionate professional dedicated to creating innovative
                solutions and driving meaningful impact through technology and
                creative thinking. Let's build something extraordinary together.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-600" />
                <span>Bhopal, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-600" />
                <a
                  href="mailto:sakshamtiwari157@gmail.com"
                  className="hover:text-teal-600 transition-colors"
                >
                  sakshamtiwari157@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-600" />
                <span>9589726600</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContact}
                className="group px-8 py-4 bg-teal-500 hover:bg-teal-600 rounded-xl text-white font-medium shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-all flex items-center gap-2"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://drive.google.com/file/d/16SwJbtWWEIXrE6X35_936Qf1nat2vpLO/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white hover:bg-gray-50 rounded-xl text-gray-900 font-medium transition-all flex items-center gap-2 border border-gray-300 shadow-sm"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://github.com/SakshamTiwarikk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/saksham-tiwari-4044a817a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:sakshamtiwari157@gmail.com"
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative">
            <div className="relative mx-auto max-w-md">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-teal-400 rounded-full blur-3xl opacity-20"></div>

              {/* Image Container */}
              <div className="relative aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src="/profile.jpg" // Put your image inside /public folder as /public/profile.jpg
                  alt="Saksham Tiwari - Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 border border-gray-200 shadow-xl">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">8+</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Months Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
