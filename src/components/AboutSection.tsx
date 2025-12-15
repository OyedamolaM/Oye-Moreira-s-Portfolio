import { Code2, Database, Layers, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Layers,
    title: "Frontend Excellence",
    description: "React, Next.js, TypeScript with pixel-perfect responsive designs"
  },
  {
    icon: Database,
    title: "Backend Mastery",
    description: "Node.js, Express, PostgreSQL, MongoDB, Supabase architectures"
  },
  {
    icon: Code2,
    title: "Full Stack Solutions",
    description: "End-to-end development from database design to deployment"
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description: "GPT-powered features and intelligent automation systems"
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4 text-center">
            About Me
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Passionate about building products that make a difference
          </p>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <span className="text-foreground font-medium">Oyedamola Moreira</span>, a Full Stack Developer 
                trained at <span className="text-primary font-medium">Appclick</span>, with a passion for building 
                scalable, user-centric web applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At <span className="text-primary font-medium">Bumpa,</span> I Built multimodular E-commerce business and utility
                app and marketing website as a Front-end Developer.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At<span className="text-primary font-medium"> Top Français Academy</span>I Built a globally recognized online French school website and database as a Full-Stack Developer
              </p>
               

              <p className="text-lg text-muted-foreground leading-relaxed">
                At <span className="text-primary font-medium">Codelabs AI</span>, I built backend services with 
                Gemini 2.5 Pro and OpenAI, creating intelligent automation systems.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div 
                  key={item.title}
                  className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-heading font-medium text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
            <div className="text-center">
              <p className="text-4xl font-heading font-semibold text-primary">3+</p>
              <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-heading font-semibold text-primary">20+</p>
              <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-heading font-semibold text-primary">2</p>
              <p className="text-sm text-muted-foreground mt-1">World Class Projects</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-heading font-semibold text-primary">10+</p>
              <p className="text-sm text-muted-foreground mt-1">Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
