import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[var(--gradient-hero)]">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="animate-fade-in">
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            Full Stack Developer
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 leading-tight">
            Oyedamola <span className="text-primary">Moreira</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4 font-body">
            Building scalable web applications with Modern Javascripts & AI integrations
          </p>
          {/* <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Currently at <span className="text-foreground">Bumpa</span> & <span className="text-foreground">Top Français Academy</span>
          </p> */}
          
          {/* Social links */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <a 
              href="https://github.com/OyedamolaM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:aoyedamola@gmail.com"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
}
