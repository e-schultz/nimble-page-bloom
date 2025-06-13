
import { motion } from 'framer-motion';

interface PostContent {
  heading?: string;
  content?: string[];
  list?: {
    title?: string;
    items: string[];
  };
  subsections?: Array<{
    subheading: string;
    content?: string[];
    list?: string[];
  }>;
  quote?: string[];
}

interface DetailedPost {
  uid?: string;
  title: string;
  sigils?: string[];
  tags?: string[];
  personas?: string[];
  status?: string;
  type?: string;
  excerpt: string;
  date: string;
  body?: PostContent[];
  link?: string[];
  related?: string[];
}

interface DetailedPostViewProps {
  post: DetailedPost;
  index: number;
}

export default function DetailedPostView({ post, index }: DetailedPostViewProps) {
  const renderContent = (content: string[]) => (
    <div className="space-y-2">
      {content.map((paragraph, i) => (
        <p key={i} className="text-muted-foreground leading-relaxed">
          {paragraph}
        </p>
      ))}
    </div>
  );

  const renderList = (list: { title?: string; items: string[] } | string[]) => {
    if (Array.isArray(list)) {
      return (
        <ul className="space-y-1 ml-4">
          {list.map((item, i) => (
            <li key={i} className="text-muted-foreground text-sm">
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      );
    }
    
    return (
      <div className="mb-3">
        {list.title && (
          <h5 className="text-sm font-medium text-foreground mb-2">{list.title}</h5>
        )}
        <ul className="space-y-1 ml-4">
          {list.items.map((item, i) => (
            <li key={i} className="text-muted-foreground text-sm">
              • {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderSubsection = (subsection: any, i: number) => (
    <div key={i} className="ml-4 mb-4">
      <h5 className="text-sm font-medium text-foreground mb-2">{subsection.subheading}</h5>
      {subsection.content && renderContent(subsection.content)}
      {subsection.list && renderList(subsection.list)}
    </div>
  );

  const renderBodySection = (section: PostContent, i: number) => (
    <div key={i} className="mb-6">
      {section.heading && (
        <h4 className="text-lg font-medium text-foreground mb-3">{section.heading}</h4>
      )}
      
      {section.content && renderContent(section.content)}
      
      {section.list && renderList(section.list)}
      
      {section.subsections && (
        <div className="mt-4 space-y-3">
          {section.subsections.map(renderSubsection)}
        </div>
      )}
      
      {section.quote && (
        <blockquote className="border-l-4 border-pink pl-4 py-2 mt-4 bg-muted/30 rounded-r-lg">
          {section.quote.map((line, i) => (
            <p key={i} className="text-muted-foreground italic text-sm leading-relaxed">
              {line}
            </p>
          ))}
        </blockquote>
      )}
    </div>
  );

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-border pb-8 last:border-0"
    >
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm text-muted-foreground">{post.date}</span>
          {post.type && (
            <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
              {post.type}
            </span>
          )}
          {post.status && (
            <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded-full">
              {post.status}
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-medium mb-2">{post.title}</h3>
        
        {/* Metadata */}
        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-3">
          {post.sigils && (
            <div className="flex items-center gap-1">
              <span className="font-medium">sigils:</span>
              <span className="font-mono">{post.sigils.join('')}</span>
            </div>
          )}
          {post.personas && (
            <div className="flex items-center gap-1">
              <span className="font-medium">personas:</span>
              <span className="font-mono">{post.personas.join(', ')}</span>
            </div>
          )}
          {post.uid && (
            <div className="flex items-center gap-1">
              <span className="font-medium">uid:</span>
              <span className="font-mono text-xs">{post.uid}</span>
            </div>
          )}
        </div>
        
        {post.tags && (
          <div className="flex flex-wrap gap-1 mb-3">
            {post.tags.map((tag, i) => (
              <span key={i} className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <p className="text-muted-foreground">{post.excerpt}</p>
      </div>

      {/* Body Content */}
      {post.body && (
        <div className="space-y-6 mt-6">
          {post.body.map(renderBodySection)}
        </div>
      )}

      {/* Links and Related */}
      {(post.link || post.related) && (
        <div className="mt-6 pt-4 border-t border-border/50">
          {post.link && (
            <div className="mb-3">
              <h5 className="text-xs font-medium text-muted-foreground mb-2">LINKS:</h5>
              <div className="flex flex-wrap gap-2">
                {post.link.map((link, i) => (
                  <span key={i} className="text-xs font-mono px-2 py-1 bg-muted rounded text-muted-foreground">
                    {link}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {post.related && (
            <div>
              <h5 className="text-xs font-medium text-muted-foreground mb-2">RELATED:</h5>
              <div className="flex flex-wrap gap-2">
                {post.related.map((rel, i) => (
                  <span key={i} className="text-xs font-mono px-2 py-1 bg-muted rounded text-muted-foreground">
                    {rel}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      
      <div className="mt-4 pt-3 border-t border-border/30">
        <span className="text-muted-foreground text-sm">Draft archived in vault</span>
      </div>
    </motion.article>
  );
}
