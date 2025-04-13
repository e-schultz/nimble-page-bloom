
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import PageTransition from './PageTransition';

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:evan@schultz.codes',
    icon: Mail,
    label: 'evan@schultz.codes'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/e-schultz',
    icon: Github,
    label: 'github.com/e-schultz'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/evanschultz1/',
    icon: Linkedin,
    label: 'linkedin.com/in/evanschultz1'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/e_p82',
    icon: Twitter,
    label: '@e_p82'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="bg-background">
      <div className="section-container">
        <PageTransition>
          <h2 className="mb-8">Contact Information</h2>
          <div className="h-1 w-16 bg-pink mb-8"></div>
          
          <div className="max-w-lg mx-auto">
            <p className="text-muted-foreground mb-8 text-center">
              Feel free to reach out for speaking opportunities, consulting work,
              or just to connect about technology and teams.
            </p>
            
            <ul className="space-y-6">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 border border-border rounded-lg hover:border-pink transition-colors"
                    >
                      <div className="bg-secondary/50 p-3 rounded-full">
                        <Icon className="h-6 w-6 text-pink" />
                      </div>
                      <div className="ml-4">
                        <p className="font-medium">{link.name}</p>
                        <p className="text-sm text-muted-foreground">{link.label}</p>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </PageTransition>
      </div>
    </section>
  );
}
