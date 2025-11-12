"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectCards from "@/components/ProjectCards";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      {/* <section id="projects" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ProjectCards />
        </div>
      </section> */}

      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
