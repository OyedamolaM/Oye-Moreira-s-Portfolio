import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { link } from "fs";

const projects = [
  {
    title: "Bumpa E-commerce App",
    description: "A business management app that helps entrepreneurs manage sales, inventory & operations with modern React patterns.",
    tags: ["React", "TypeScript", "Redux"],
    image: "/Bumpa Web.png",
    role: "Frontend Developer",
    link: "https://app.getbumpa.com",
    featured: true,
  },
  {
    title: "Bumpa Website",
    description: "The main marketing website for Bumpa, showcasing product features and helping businesses discover the platform.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    image: "/Bumpa website.png",
    role: "Frontend Developer",
    link: "https://www.getbumpa.com",
    featured: true,
  },
  {
    title: "Top Français Academy",
    description: "Full-stack online French learning school with course management, student progress tracking, and interactive features.",
    tags: ["Node.js", "React", "PostgreSQL"],
    image: "/Topfrancais.jpg",
    role: "Full Stack Developer",
    link: "https://topfrancaisacademy.com",
    featured: false,
  },
  {
    title: "Codelabs AI",
    description: "AI-powered backend service integrating Google Gemini 2.5 Pro and OpenAI for intelligent automation.",
    tags: ["Node.js", "Gemini 2.5 Pro", "OpenAI API"],
    AIimage: "🤖",
    role: "Backend Developer",
    link: "https://github.com/OyedamolaM/CodeLab-AI",
    featured: false,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Real-world projects delivering impact for businesses and users
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 relative"
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-2 py-1 bg-primary/10 border border-primary/20 text-primary text-xs rounded-full flex items-center gap-1">
                      <Sparkles size={10} />
                      Featured
                    </span>
                  </div>
                )}
                
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-secondary/50 to-secondary flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                {project.image ? (<img src={project.image} alt="" /> ) : project.AIimage }
                  
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-xs text-primary font-medium mb-2 uppercase tracking-wider">
                    {project.role}
                  </p>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                   <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href="https://github.com/OyedamolaM" target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                    {project.link ? (
                      <Button variant="default" size="sm" className="flex-1" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          View Live
                        </a>
                      </Button>
                    ) : (
                      <Button variant="default" size="sm" className="flex-1">
                        <ExternalLink size={16} />
                        Demo
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
