import {
  ArrowLeft,
  Download,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

export default function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);

  /* ====== PDF Styles ====== */
  const pdfStyles = StyleSheet.create({
    page: { padding: 20, fontSize: 12, fontFamily: "Helvetica", backgroundColor: "#f3f4f6" },
    container: { backgroundColor: "#fff", padding: 20, borderRadius: 5 },
    header: { textAlign: "center", marginBottom: 15 },
    name: { fontSize: 24, fontWeight: "bold", marginBottom: 5 },
    title: { fontSize: 14, marginBottom: 2 },
    contact: { fontSize: 10, color: "#6b7280", marginBottom: 10 },
    section: { marginBottom: 12 },
    sectionHeader: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
    skillBox: { borderWidth: 1, borderColor: "#d1d5db", padding: 5, marginBottom: 5, borderRadius: 3 },
    skillRow: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
    experienceBox: { borderWidth: 1, borderColor: "#d1d5db", padding: 5, marginBottom: 5, borderRadius: 3 },
    eduBox: { borderWidth: 1, borderColor: "#d1d5db", padding: 5, marginBottom: 5, borderRadius: 3 },
    listItem: { marginLeft: 10, marginBottom: 2 },
  });

  /* ====== PDF Component ====== */
  const ResumePDF = () => (
    <Document>
      <Page style={pdfStyles.page}>
        <View style={pdfStyles.container}>
          {/* Header */}
          <View style={pdfStyles.header}>
            <Text style={pdfStyles.name}>Oyedamola Moreira</Text>
            <Text style={pdfStyles.title}>Full Stack Software Engineer</Text>
            <Text style={pdfStyles.contact}>Lagos, Nigeria • aoyedamola@gmail.com</Text>
          </View>

          {/* Summary */}
          <View style={pdfStyles.section}>
            <Text style={pdfStyles.sectionHeader}>Summary</Text>
            <Text>
              Results-driven Full Stack Software Engineer with proven experience
              building scalable, high-impact web applications across e-commerce,
              EdTech, and AI-powered platforms.
            </Text>
            <Text>
              Strong expertise in React, TypeScript, Node.js, and modern backend
              systems, delivering measurable business outcomes through performance
              optimization, clean architecture, and user-focused engineering.
            </Text>
          </View>

          {/* Skills */}
          <View style={pdfStyles.section}>
            <Text style={pdfStyles.sectionHeader}>Technical Skills</Text>
            <View style={pdfStyles.skillRow}>
              {[
                { title: "Frontend", content: "React, TypeScript, Next.js, Redux, Context API, Web Accessibility, Performance Optimization, Tailwind CSS, SCSS" },
                { title: "Backend", content: "Node.js, Express.js, PostgreSQL, MongoDB, Supabase, RESTful APIs" },
                { title: "AI & Automation", content: "OpenAI API, Gemini, GPT Engineer, AI-driven workflow automation" },
                { title: "Tools & Workflow", content: "Git, GitHub, Docker, Postman, Slack, ClickUp Vercel, Figma, Agile / Scrum" },
              ].map((skill, i) => (
                <View key={i} style={{ ...pdfStyles.skillBox, width: "48%" }}>
                  <Text style={{ fontWeight: "bold", marginBottom: 2 }}>{skill.title}</Text>
                  <Text>{skill.content}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Experience */}
          <View style={pdfStyles.section}>
            <Text style={pdfStyles.sectionHeader}>Professional Experience</Text>
            {[
              { title: "Bumpa – Software Engineer", date: "Oct 2024 – Present", items: ["Contributed to ₦1B+ in monthly sales by delivering high-performance React and TypeScript features.", "Built and maintained SEO-optimized marketing pages improving conversion rates.", "Improved merchant workflows by over 40% using automation and reusable templates.", "Developed dashboards and real-time analytics for internal and partner teams."] },
              { title: "Top Français Academy – Full Stack Developer", date: "Jun 2025 – Present", items: ["Built a full-stack e-learning platform for French language education.", "Implemented course management, student progress tracking, and interactive features.", "Ensured responsive design and scalable backend architecture."] },
              { title: "Codelabs AI – Backend Developer", date: "2025", items: ["Developed AI-powered backend services integrating OpenAI and Gemini.", "Designed scalable APIs and automation pipelines.", "Improved performance, logging, and system reliability."] },
              { title: "Savans Pharmacy – Full Stack Developer", date: "2025 – Ongoing", items: ["Developed a pharmacy e-commerce platform using React, Node.js, PostgreSQL, and Supabase.", "Implemented cart management, checkout workflows, and payment integrations.", "Focused on scalability, clean architecture, and user experience."] },
            ].map((exp, i) => (
              <View key={i} style={pdfStyles.experienceBox}>
                <Text style={{ fontWeight: "bold" }}>{exp.title} ({exp.date})</Text>
                {exp.items.map((item, idx) => (
                  <Text key={idx} style={pdfStyles.listItem}>• {item}</Text>
                ))}
              </View>
            ))}
          </View>

          {/* Education */}
          <View style={pdfStyles.section}>
            <Text style={pdfStyles.sectionHeader}>Education</Text>
            {[
              { title: "Bachelor of Pharmacy (B.Pharm)", institution: "Obafemi Awolowo University, Nigeria", note: "Graduated 2018" },
              { title: "Web Development Training", institution: "Appclick", note: "Full-stack web development and modern engineering practices" },
            ].map((edu, i) => (
              <View key={i} style={pdfStyles.eduBox}>
                <Text style={{ fontWeight: "bold" }}>{edu.title}</Text>
                <Text>{edu.institution}</Text>
                <Text>{edu.note}</Text>
              </View>
            ))}
          </View>

          {/* Languages & Hobbies */}
          <View style={pdfStyles.section}>
            <Text style={pdfStyles.sectionHeader}>Languages & Hobbies</Text>
            <View style={pdfStyles.skillRow}>
              <View style={{ ...pdfStyles.skillBox, width: "48%" }}>
                <Text style={{ fontWeight: "bold" }}>Languages</Text>
                <Text>English (Native), Yoruba (Fluent), Igbo, French (Basic)</Text>
              </View>
              <View style={{ ...pdfStyles.skillBox, width: "48%" }}>
                <Text style={{ fontWeight: "bold" }}>Hobbies</Text>
                <Text>Coding, Reading, Singing, Dancing, Exploring new technologies</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-6 md:py-12">
      {/* ====== HTML Resume Render ====== */}
      <div
        ref={resumeRef}
        className="bg-white mx-auto max-w-[794px] p-8 md:p-12 text-gray-900 font-sans"
      >
        {/* Controls */}
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900">
            <ArrowLeft size={20} /> Back to Home
          </Link>
          <PDFDownloadLink document={<ResumePDF />} fileName="Oyedamola_Moreira_Resume.pdf">
            {({ loading }) =>
              loading ? (
                <Button className="bg-gray-500 text-white px-4 py-2 rounded">Loading...</Button>
              ) : (
                <Button className="bg-blue-600 text-white px-4 py-2 rounded inline-flex items-center gap-2">
                  <Download size={16} /> Download PDF
                </Button>
              )
            }
          </PDFDownloadLink>
        </div>

        {/* Full HTML Resume Content (matches your previous Tailwind layout) */}
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Oyedamola Moreira</h1>
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-1">Full Stack Software Engineer</p>
          <p className="text-gray-500">Lagos, Nigeria • aoyedamola@gmail.com</p>
        </header>

        {/* Summary */}
        <section className="mb-10">
          <p className="text-gray-700 mb-3">
            Results-driven Full Stack Software Engineer with a proven track record of designing and delivering scalable, high-impact web applications across e-commerce, EdTech, and AI-driven platforms.
          </p>
          <p className="text-gray-700">
            Specializes in React JavaScript, TypeScript, Next js and Node.js. Styles like Tailwind CSS and other modern styles, with deep expertise in modern backend architectures. Adept at optimizing performance, implementing clean and maintainable code, and translating complex technical requirements into user-centric solutions that drive measurable business results.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2 mb-4">
            <Award size={22} /> Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <SkillCard title="Frontend" content="React, TypeScript, Next.js, Redux, Context API, Web Accessibility, Performance Optimization, Tailwind CSS, SCSS" />
            <SkillCard title="Backend" content="Node.js, Express.js, PostgreSQL, MongoDB, Supabase, RESTful APIs" />
            <SkillCard title="AI & Automation" content="OpenAI API, Gemini, GPT Engineer, AI-driven workflow automation" />
            <SkillCard title="Tools & Workflow" content="Git, GitHub, Docker, Postman, Vercel, Figma, Agile / Scrum" />
          </div>
        </section>

        {/* Experience */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2 mb-5">
            <Briefcase size={22} /> Professional Experience
          </h2>
          <ExperienceItem title="Bumpa – Software Engineer" date="Oct 2024 – Present" items={[
            "Contributed to ₦1B+ in monthly sales by delivering high-performance React and TypeScript features.",
            "Built and maintained SEO-optimized marketing pages improving conversion rates.",
            "Improved merchant workflows by over 40% using automation and reusable templates.",
            "Developed dashboards and real-time analytics for internal and partner teams.",
          ]}/>
          <ExperienceItem title="Top Français Academy – Full Stack Developer" date="Jun 2025 – Present" items={[
            "Built a full-stack e-learning platform for French language education.",
            "Implemented course management, student progress tracking, and interactive features.",
            "Ensured responsive design and scalable backend architecture.",
          ]}/>
          <ExperienceItem title="Codelabs AI – Backend Developer" date="2025" items={[
            "Developed AI-powered backend services integrating OpenAI and Gemini.",
            "Designed scalable APIs and automation pipelines.",
            "Improved performance, logging, and system reliability.",
          ]}/>
          <ExperienceItem title="Savans Pharmacy – Full Stack Developer" date="2025 – Ongoing" items={[
            "Developed a pharmacy e-commerce platform using React, Node.js, PostgreSQL, and Supabase.",
            "Implemented cart management, checkout workflows, and payment integrations.",
            "Focused on scalability, clean architecture, and user experience.",
          ]}/>
        </section>

        {/* Education */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2 mb-5">
            <GraduationCap size={22} /> Education
          </h2>
          <EduCard title="Bachelor of Pharmacy (B.Pharm)" institution="Obafemi Awolowo University, Nigeria" note="Graduated 2018" />
          <EduCard title="Web Development Training" institution="Appclick" note="Full-stack web development and modern engineering practices" />
        </section>

        {/* Languages & Interests */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2 mb-4">
            <Award size={22} /> Languages & Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <SkillCard title="Languages" content="English (Native), Yoruba (Fluent), Igbo, French (Basic)" />
            <SkillCard title="Hobbies" content="Coding, Reading, Singing, Dancing, Exploring new technologies" />
          </div>
        </section>
      </div>
    </div>
  );
}

/* Components */
function SkillCard({ title, content }: { title: string; content: string }) {
  return (
    <div className="p-5 border rounded-lg bg-gray-50">
      <h3 className="font-medium mb-2">{title}</h3>
      <p>{content}</p>
    </div>
  );
}
function ExperienceItem({ title, date, items }: { title: string; date: string; items: string[] }) {
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
function EduCard({ title, institution, note }: { title: string; institution: string; note: string }) {
  return (
    <div className="p-5 border rounded-lg bg-gray-50 mb-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-700">{institution}</p>
      <p className="text-gray-600">{note}</p>
    </div>
  );
}
