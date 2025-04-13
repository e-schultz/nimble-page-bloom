
import PageTransition from './PageTransition';
import { motion } from 'framer-motion';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  url: string;
}

const blogPosts: BlogPost[] = [
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

export default function Blog() {
  return (
    <section id="blog" className="bg-secondary/30">
      <div className="section-container">
        <PageTransition>
          <h2 className="mb-8">Blog Posts</h2>
          <div className="h-1 w-16 bg-pink mb-8"></div>
          
          <div className="grid gap-8">
            {blogPosts.map((post, index) => (
              <motion.article 
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-border pb-8 last:border-0"
              >
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <h3 className="text-xl md:text-2xl font-medium mt-1 mb-2">{post.title}</h3>
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
        </PageTransition>
      </div>
    </section>
  );
}
