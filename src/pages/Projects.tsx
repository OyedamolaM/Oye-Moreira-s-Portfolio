import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Bumpa E-commerce App",
    description: "A business management app that helps entrepreneurs manage sales, inventory & operations. Built with modern React patterns and Redux for state management.",
    tags: ["React", "TypeScript", "Redux", "REST APIs"],
    role: "Frontend Developer",
    link: "https://app.getbumpa.com",
    category: "Enterprise",
  },
  {
    title: "Bumpa Website",
    description: "The main marketing website for Bumpa, showcasing the product features and helping businesses discover the platform.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    role: "Frontend Developer",
    link: "https://www.getbumpa.com",
    category: "Marketing",
  },
  {
    title: "Top Français Academy",
    description: "Full-stack development of an online French learning school with course management, student progress tracking, and interactive learning features.",
    tags: ["Node.js", "React", "PostgreSQL", "Express.js"],
    role: "Full Stack Developer",
    link: "https://topfrancaisacademy.com",
    category: "EdTech",
  },
  {
    title: "Codelabs AI",
    description: "AI-powered backend service integrating Google Gemini 2.5 Pro and OpenAI for intelligent automation and content generation.",
    tags: ["Node.js", "Gemini 2.5 Pro", "OpenAI API", "TypeScript"],
    role: "Backend Developer",
    category: "AI/ML",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Projects
          </h1>
          <p className="text-muted-foreground mb-12 text-lg">
            A collection of projects I've built and contributed to
          </p>

          <div className="space-y-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h2 className="font-heading text-2xl font-semibold text-foreground mt-1">
                      {project.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">{project.role}</p>
                  </div>
                  <div className="flex gap-2">
                    {project.link && (
                      <Button variant="default" size="sm" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          View Live
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
