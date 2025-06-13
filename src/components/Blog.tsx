
import PageTransition from './PageTransition';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  url: string;
}

const techArchivePosts: BlogPost[] = [
  {
    title: "Refactor to Hooks, not Classes",
    excerpt: "Exploring why and how to refactor React class components to functional components with hooks.",
    date: "2020-05-15",
    url: "https://rangle.io/blog/refactor-to-react-hooks-not-classes"
  },
  {
    title: "Simplifying React Forms with Hooks",
    excerpt: "Learn how to create cleaner, more maintainable form handling using React hooks.",
    date: "2020-02-22",
    url: "https://rangle.io/blog/simplifying-controlled-inputs-with-hooks"
  },
  {
    title: "Improving Your Mental Model of useEffect",
    excerpt: "Understanding React's useEffect hook and how to use it effectively in your applications.",
    date: "2019-11-10",
    url: "https://rangle.io/blog/improving-your-mental-model-of-useeffect"
  },
  {
    title: "How to Create Data-Driven User Interfaces with Vue",
    excerpt: "Building dynamic and reactive user interfaces with Vue.js.",
    date: "2018-09-05",
    url: "https://rangle.io/blog/how-to-create-data-driven-user-interfaces-in-vue"
  },
  {
    title: "Are Your Unit Tests Failing for the Expected Reasons?",
    excerpt: "Ensuring your tests are providing valuable feedback and catching the right issues.",
    date: "2018-04-12",
    url: "https://rangle.io/blog/are-your-unit-tests-failing-for-the-expected-reasons"
  },
  {
    title: "Recipes for Redux",
    excerpt: "Practical patterns and solutions for common Redux challenges.",
    date: "2017-08-30",
    url: "https://rangle.io/blog/recipes-for-redux"
  }
];

const imprints = [
  {
    id: "tech-archive",
    name: "Tech.Archive",
    tagline: "Historical Technical Writings",
    description: "Previously published technical articles and insights",
    colorClass: "bg-slate-500"
  },
  {
    id: "techcraft",
    name: "Techcraft",
    tagline: "Where Code Becomes Ritual",
    description: "Exploration of technical craftsmanship as spiritual practice",
    colorClass: "bg-blue-500"
  },
  {
    id: "archaeological-methods",
    name: "Archaeological Methods", 
    tagline: "Excavating Signal from Digital Sediment",
    description: "Systematic approaches to mining personal digital archives",
    colorClass: "bg-amber-600"
  },
  {
    id: "neuroqueer-architecture",
    name: "Neuroqueer Architecture",
    tagline: "Cognitive Sovereignty Through Design", 
    description: "Systems design informed by neurodivergent and queer lived experience",
    colorClass: "bg-purple-500"
  },
  {
    id: "ritual-computing",
    name: "Ritual Computing",
    tagline: "Sacred Interfaces, Meaningful Interactions",
    description: "Technology design that treats human-computer interaction as ceremonial practice",
    colorClass: "bg-violet-600"
  },
  {
    id: "clinical-integration",
    name: "Clinical Integration", 
    tagline: "Therapeutic Wisdom in Technical Design",
    description: "Application of clinical insights about trauma, healing, and human psychology",
    colorClass: "bg-emerald-600"
  },
  {
    id: "feral-duality",
    name: "Feral Duality",
    tagline: "Wild Hearts, Careful Gardens", 
    description: "Managing productive tension between structure and chaos",
    colorClass: "bg-orange-600"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="bg-secondary/30">
      <div className="section-container">
        <PageTransition>
          <h2 className="mb-8">Imprints</h2>
          <div className="h-1 w-16 bg-pink mb-8"></div>
          
          <Tabs defaultValue="tech-archive" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 mb-8">
              {imprints.map((imprint) => (
                <TabsTrigger 
                  key={imprint.id} 
                  value={imprint.id}
                  className="text-xs"
                >
                  {imprint.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="tech-archive" className="space-y-6">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-3 w-3 bg-slate-500 rounded-full"></div>
                  <h3 className="text-lg font-medium">Tech.Archive</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-1">Historical Technical Writings</p>
                <p className="text-muted-foreground">Previously published technical articles and insights</p>
              </div>
              
              <div className="grid gap-6">
                {techArchivePosts.map((post, index) => (
                  <motion.article 
                    key={post.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-b border-border pb-6 last:border-0"
                  >
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <h4 className="text-xl font-medium mt-1 mb-2">{post.title}</h4>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <a 
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink hover:underline inline-flex items-center"
                    >
                      Read More 
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </motion.article>
                ))}
              </div>
            </TabsContent>

            {imprints.slice(1).map((imprint) => (
              <TabsContent key={imprint.id} value={imprint.id} className="space-y-6">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`h-3 w-3 ${imprint.colorClass} rounded-full`}></div>
                    <h3 className="text-lg font-medium">{imprint.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-1">{imprint.tagline}</p>
                  <p className="text-muted-foreground">{imprint.description}</p>
                </div>
                
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Content for this imprint is coming soon...</p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </PageTransition>
      </div>
    </section>
  );
}
