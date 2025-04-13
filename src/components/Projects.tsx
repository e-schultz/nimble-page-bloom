
import PageTransition from './PageTransition';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  link?: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "Angular 2 Training Book",
    description: "Contributed and helped maintain Rangle's Angular Training book, an open source resource for learning Angular.",
    link: "https://angular-2-training-book.rangle.io/",
    technologies: ["Angular", "Technical Writing", "Education"]
  },
  {
    title: "JavaScript/React Training Workshop",
    description: "Created and ran a multi-day JavaScript/React workshop taught to over 200 students across Toronto, Ottawa, and Glasgow.",
    link: "https://github.com/e-schultz/ts-js-react-training",
    technologies: ["React", "TypeScript", "JavaScript", "Education"]
  },
  {
    title: "angular-redux",
    description: "Maintained bindings for Redux to Angular which was used on several projects at Rangle and saw adoption outside of Rangle.",
    technologies: ["Angular", "Redux", "Open Source"]
  },
  {
    title: "redux-beacon",
    description: "Contributed to analytics integration for Redux and co-presented at React Europe.",
    technologies: ["React", "Redux", "Analytics"]
  },
  {
    title: "Augury Angular Dev Tools",
    description: "Contributed to and supported the Augury Angular Dev Tools project for debugging Angular applications.",
    technologies: ["Angular", "Developer Tools", "Chrome Extension"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-background">
      <div className="section-container">
        <PageTransition>
          <h2 className="mb-8">Projects</h2>
          <div className="h-1 w-16 bg-pink mb-8"></div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-border rounded-lg p-6 hover:border-pink transition-colors flex flex-col"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 bg-secondary rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-pink hover:underline"
                    >
                      View Project →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </PageTransition>
      </div>
    </section>
  );
}
