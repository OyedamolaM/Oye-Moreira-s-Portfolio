import {
  ArrowLeft,
  Download,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 md:py-12">
      <div className="bg-white mx-auto max-w-[794px] p-8 md:p-12 text-gray-900 font-sans">
        {/* Controls */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <div className="flex gap-3">
            {/* PDF */}
            <a href="/Resume.pdf" download>
              <Button className="inline-flex items-center gap-2">
                <Download size={16} />
                Download PDF
              </Button>
            </a>

            {/* WORD */}
            <a href="/Resume.docx" download>
              <Button
                variant="outline"
                className="inline-flex items-center gap-2"
              >
                <Download size={16} />
                Download Word
              </Button>
            </a>
          </div>
        </div>

        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Oyedamola Moreira
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-1">
            Full Stack Software Engineer
          </p>
          <p className="text-gray-500">
            Lagos, Nigeria • aoyedamola@gmail.com
          </p>
        </header>

        {/* Summary */}
        <section className="mb-10">
          <p className="text-gray-700 mb-3">
            Results-driven Full Stack Software Engineer with a proven track record
            of designing and delivering scalable, high-impact web applications
            across e-commerce, EdTech, and AI-powered platforms.
          </p>
          <p className="text-gray-700">
            Strong expertise in React, TypeScript, Next.js, and Node.js, with deep
            experience in modern backend architectures, performance optimization,
            and clean, maintainable codebases that drive measurable business
            outcomes.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2 mb-4">
            <Award size={22} /> Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <SkillCard
              title="Frontend"
              content="React, TypeScript, Next.js, Redux, Context API, Web Accessibility, Performance Optimization, Tailwind CSS, SCSS"
            />
            <SkillCard
              title="Backend"
              content="Node.js, Express.js, PostgreSQL, MongoDB, Supabase, REST APIs"
            />
            <SkillCard
              title="AI & Automation"
              content="OpenAI API, Gemini 2.5 Pro, GPT Engineer Integration"
            />
            <SkillCard
              title="Tools & Workflow"
              content="Git, GitHub, Docker, Postman, Vercel, Figma, ClickUp, Slack, Agile Methodologies"
            />
          </div>
        </section>

        {/* Experience */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2 mb-5">
            <Briefcase size={22} /> Professional Experience
          </h2>

          <ExperienceItem
            title="Bumpa – Software Engineer"
            date="Oct 2024 – Present"
            items={[
              "Contributed to ₦1B+ in monthly sales by delivering high-performance React and TypeScript features.",
              "Built SEO-optimized marketing pages improving conversion rates.",
              "Improved merchant workflows by over 40% through automation and reusable components.",
              "Developed dashboards and internal tools for analytics and operations.",
            ]}
          />

          <ExperienceItem
            title="Top Français Academy – Full Stack Developer"
            date="Jun 2025 – Present"
            items={[
              "Built a full-stack e-learning platform with course and progress tracking.",
              "Implemented scalable backend services and responsive UI.",
              "Optimized platform performance and accessibility.",
            ]}
          />

          <ExperienceItem
            title="Savans Pharmacy – Full Stack Developer"
            date="2025 – Ongoing"
            items={[
              "Developed a pharmacy e-commerce platform with cart, checkout, and payment flows.",
              "Integrated Supabase authentication and database services.",
              "Focused on scalability, security, and clean architecture.",
            ]}
          />
        </section>

        {/* Education */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2 mb-5">
            <GraduationCap size={22} /> Education
          </h2>

          <EduCard
            title="Bachelor of Pharmacy (B.Pharm)"
            institution="Obafemi Awolowo University, Nigeria"
            note="Graduated 2018"
          />
          <EduCard
            title="Web Development Training"
            institution="Appclick"
            note="Full-stack web development and modern engineering practices"
          />
        </section>

        {/* Languages & Interests */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2 mb-4">
            <Award size={22} /> Languages & Interests
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <SkillCard
              title="Languages"
              content="English (Native), Yoruba (Fluent), Igbo, French (Basic)"
            />
            <SkillCard
              title="Hobbies"
              content="Coding, Reading, Singing, Dancing, Exploring new technologies"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

/* Reusable Components */

function SkillCard({ title, content }: { title: string; content: string }) {
  return (
    <div className="p-5 border rounded-lg bg-gray-50">
      <h3 className="font-medium mb-2">{title}</h3>
      <p>{content}</p>
    </div>
  );
}

function ExperienceItem({
  title,
  date,
  items,
}: {
  title: string;
  date: string;
  items: string[];
}) {
  return (
    <div className="p-5 border rounded-lg bg-gray-50 mb-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-1">
        <h3 className="font-semibold">{title}</h3>
        <span className="text-gray-500 text-sm">{date}</span>
      </div>
      <ul className="list-disc pl-5 text-gray-600 space-y-1">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function EduCard({
  title,
  institution,
  note,
}: {
  title: string;
  institution: string;
  note: string;
}) {
  return (
    <div className="p-5 border rounded-lg bg-gray-50 mb-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-700">{institution}</p>
      <p className="text-gray-600">{note}</p>
    </div>
  );
}
