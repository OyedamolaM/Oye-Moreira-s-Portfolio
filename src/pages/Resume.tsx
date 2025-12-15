import { ArrowLeft, Download, Briefcase, GraduationCap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!resumeRef.current) return;

    const canvas = await html2canvas(resumeRef.current, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Oyedamola_Moreira_Resume.pdf");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans" ref={resumeRef}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Back + Download */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <Button variant="default" onClick={handleDownload}>
            <Download size={16} className="mr-2" />
            Download PDF
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Oyedamola Moreira</h1>
          <p className="text-xl font-medium text-gray-700 mb-1">Full Stack Developer</p>
          <p className="text-gray-500">Lagos, Nigeria • aoyedamola@gmail.com</p>
        </div>

        {/* Professional Summary */}
        <section className="mb-12">
          <p className="text-gray-700 mb-2">
            Results-driven Full Stack Engineer with expertise in building scalable web applications in e-commerce, EdTech, and AI-powered platforms. Proven track record delivering measurable business impact, enhancing user engagement, and driving revenue growth.
          </p>
          <p className="text-gray-700">
            Adept at translating complex technical challenges into elegant, user-focused solutions. Experienced in React.js, TypeScript, Next.js, Node.js, and integrating AI technologies to optimize workflows and deliver intelligent automation.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <Award size={24} /> Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg bg-gray-50">
              <h3 className="font-medium mb-2">Frontend</h3>
              <p>ReactJS, TypeScript, NextJS, Redux, Context API, Web Accessibility, Performance Optimization, Tailwind CSS, SCSS</p>
            </div>
            <div className="p-6 border rounded-lg bg-gray-50">
              <h3 className="font-medium mb-2">Backend</h3>
              <p>NodeJS, Express.js, PostgreSQL, MongoDB, Supabase, REST APIs</p>
            </div>
            <div className="p-6 border rounded-lg bg-gray-50">
              <h3 className="font-medium mb-2">AI / Automation</h3>
              <p>OpenAI API, Gemini 2.5 Pro, GPT Engineer Integration</p>
            </div>
            <div className="p-6 border rounded-lg bg-gray-50">
              <h3 className="font-medium mb-2">Tools & Workflow</h3>
              <p>Git, GitHub, ClickUp, Slack, VS Code, Postman, Vercel, Docker, Figma, Agile Methodologies</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
            <Briefcase size={24} /> Experience
          </h2>

          {/* Bumpa */}
          <div className="p-6 border rounded-lg bg-gray-50 mb-4">
            <div className="flex justify-between mb-1">
              <h3 className="font-semibold text-lg">Bumpa - Software Engineer</h3>
              <span className="text-gray-500">Oct 2024 – Present</span>
            </div>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Drove ₦1 billion in monthly sales by delivering high-performance frontend features using React, TypeScript, and Redux.</li>
              <li>Built and maintained Bumpa marketing website, improving SEO rankings and user acquisition.</li>
              <li>Optimized merchant workflows by 40% with email campaigns, templates, and automation features.</li>
              <li>Developed dashboards and real-time analytics for partner ecosystem management.</li>
            </ul>
          </div>

          {/* Top Français Academy */}
          <div className="p-6 border rounded-lg bg-gray-50 mb-4">
            <div className="flex justify-between mb-1">
              <h3 className="font-semibold text-lg">Top Français Academy - Full Stack Developer</h3>
              <span className="text-gray-500">Jun 2025 – Present</span>
            </div>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Developed full-stack platform for online French learning using Node.js, React, PostgreSQL, Express.js.</li>
              <li>Implemented course management, student progress tracking, and interactive features.</li>
              <li>Ensured platform scalability and responsiveness across devices.</li>
            </ul>
          </div>

          {/* Codelabs AI */}
          <div className="p-6 border rounded-lg bg-gray-50 mb-4">
            <div className="flex justify-between mb-1">
              <h3 className="font-semibold text-lg">Codelabs AI - Backend Developer</h3>
              <span className="text-gray-500">2025</span>
            </div>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Built AI-powered backend services integrating OpenAI API and Gemini 2.5 Pro for intelligent automation.</li>
              <li>Implemented scalable APIs, enabling seamless integration with frontend and third-party services.</li>
              <li>Optimized performance, logging, and monitoring for enterprise-grade reliability.</li>
            </ul>
          </div>

          {/* Savans Pharmacy */}
          <div className="p-6 border rounded-lg bg-gray-50 mb-4">
            <div className="flex justify-between mb-1">
              <h3 className="font-semibold text-lg">Savans Pharmacy - Full Stack Developer</h3>
              <span className="text-gray-500">2025 – Ongoing</span>
            </div>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Developed a fully functional e-commerce platform for pharmacy products using React, Node.js, PostgreSQL, and Supabase.</li>
              <li>Implemented real-time cart management, product catalog, and payment integration.</li>
              <li>Focus on scalability, clean architecture, and optimized user experience.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
            <GraduationCap size={24} /> Education & Certifications
          </h2>
          <div className="space-y-4">
            <div className="p-6 border rounded-lg bg-gray-50">
              <h3 className="font-semibold text-lg mb-1">B.Pharm – Bachelor of Pharmacy</h3>
              <p className="font-medium text-gray-700 mb-1">Obafemi Awolowo University, Nigeria</p>
              <p className="text-gray-600">Graduated 2018</p>
            </div>
            <div className="p-6 border rounded-lg bg-gray-50">
              <h3 className="font-semibold text-lg mb-1">Web Development Training</h3>
              <p className="font-medium text-gray-700 mb-1">Appclick</p>
              <p className="text-gray-600">Full-stack development, modern web technologies, and best practices</p>
            </div>
            <div className="p-6 border rounded-lg bg-gray-50">
              <h3 className="font-semibold text-lg mb-1">Software Engineering Certificate</h3>
              <p className="text-gray-600">ALX Africa, 2024</p>
            </div>
          </div>
        </section>

        {/* Languages & Hobbies */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <Award size={24} /> Languages & Hobbies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg bg-gray-50">
              <h3 className="font-medium mb-2">Languages</h3>
              <p>English - Native</p>
              <p>Yoruba fluent</p>
              <p>Igbo</p>
              <p>Some French</p>

            </div>
            <div className="p-6 border rounded-lg bg-gray-50">
              <h3 className="font-medium mb-2">Hobbies</h3>
              <p>Learning, Reading, Coding, Exploring new technologies</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
