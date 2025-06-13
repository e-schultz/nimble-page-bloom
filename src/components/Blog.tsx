
import PageTransition from './PageTransition';
import DetailedPostView from './DetailedPostView';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import imprintsData from '@/data/imprints.json';

const imprints = Object.values(imprintsData);

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

            {imprints.map((imprint) => (
              <TabsContent key={imprint.id} value={imprint.id} className="space-y-6">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`h-3 w-3 ${imprint.colorClass} rounded-full`}></div>
                    <h3 className="text-lg font-medium">{imprint.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-1">{imprint.tagline}</p>
                  <p className="text-muted-foreground">{imprint.description}</p>
                </div>
                
                {imprint.posts && imprint.posts.length > 0 ? (
                  <div className="grid gap-6">
                    {imprint.posts.map((post, index) => {
                      // Use detailed view for posts with structured body content
                      if (post.body) {
                        return (
                          <DetailedPostView 
                            key={post.title}
                            post={post}
                            index={index}
                          />
                        );
                      }
                      
                      // Fallback to simple view for other posts
                      return (
                        <motion.article 
                          key={post.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="border-b border-border pb-6 last:border-0"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm text-muted-foreground">{post.date}</span>
                            {post.type && (
                              <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                                {post.type}
                              </span>
                            )}
                          </div>
                          <h4 className="text-xl font-medium mt-1 mb-2">{post.title}</h4>
                          <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                          
                          {post.content && (
                            <div className="mb-4 p-4 bg-muted/50 rounded-lg">
                              {post.content.summary && (
                                <p className="text-sm font-medium mb-2">{post.content.summary}</p>
                              )}
                              {post.content.breakthroughs && (
                                <div className="mb-2">
                                  <p className="text-xs font-medium text-muted-foreground mb-1">Key Breakthroughs:</p>
                                  <ul className="text-xs text-muted-foreground space-y-1">
                                    {post.content.breakthroughs.map((breakthrough, i) => (
                                      <li key={i}>• {breakthrough}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              {post.content.philosophy && (
                                <p className="text-sm italic text-muted-foreground">"{post.content.philosophy}"</p>
                              )}
                            </div>
                          )}
                          
                          {post.url ? (
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
                          ) : (
                            <span className="text-muted-foreground text-sm">Dispatch archived</span>
                          )}
                        </motion.article>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">Content for this imprint is coming soon...</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </PageTransition>
      </div>
    </section>
  );
}
