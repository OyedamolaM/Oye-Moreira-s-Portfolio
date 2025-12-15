const frontendSkills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 92 },
  { name: "JavaScript (ES6+)", level: 95 },
  { name: "Tailwind CSS / SCSS", level: 90 },
  { name: "HTML5 / Bootstrap", level: 95 },
];

const backendSkills = [
  { name: "Node.js / Express.js", level: 90 },
  { name: "PostgreSQL", level: 85 },
  { name: "MongoDB", level: 88 },
  { name: "Supabase", level: 85 },
  { name: "REST APIs", level: 92 },
];

const tools = [
  { name: "Git", category: "Version Control" },
  { name: "GitHub", category: "Version Control" },
  { name: "ClickUp", category: "Project Management" },
  { name: "Slack", category: "Communication" },
  { name: "VS Code", category: "Development" },
  { name: "Postman", category: "API Testing" },
  { name: "Vercel", category: "Deployment" },
  { name: "Docker", category: "DevOps" },
  { name: "Figma", category: "UI/UX" },
];

const specializations = [
  "AI/GPT Integration",
  "E-commerce Development",
  "Full Stack Architecture",
  "Database Design",
  "API Development",
  "Responsive Design",
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4 text-center">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            A comprehensive full-stack toolkit built through real-world project experience
          </p>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Frontend Skills */}
            <div className="space-y-6">
              <h3 className="font-heading text-xl font-medium text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Frontend Development
              </h3>
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Backend Skills */}
            <div className="space-y-6">
              <h3 className="font-heading text-xl font-medium text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Backend Development
              </h3>
              {backendSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specializations */}
          <div className="mb-16">
            <h3 className="font-heading text-xl font-medium text-foreground mb-6 text-center">
              Specializations
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {specializations.map((spec) => (
                <span
                  key={spec}
                  className="px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Tools Grid */}
          <div>
            <h3 className="font-heading text-xl font-medium text-foreground mb-6 text-center">
              Tools & Workflow
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors text-center group"
                >
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">{tool.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{tool.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
