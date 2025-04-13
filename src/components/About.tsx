
import PageTransition from './PageTransition';

export default function About() {
  return (
    <section id="about" className="bg-secondary/30">
      <div className="section-container">
        <PageTransition>
          <h2 className="mb-8">About Me</h2>
          <div className="h-1 w-16 bg-pink mb-8"></div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg">
                Full-stack Developer and Consultant with extensive experience in building high-performing teams and environments that enable them to succeed.
              </p>
              
              <h3 className="text-xl font-semibold mt-8">What I Do</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identify opportunities and challenges on project teams, and work with stakeholders to implement solutions</li>
                <li>Work with companies ranging from small startups to large enterprise organizations</li>
                <li>Influence the multi-year evolution of multiple enterprise products in production today</li>
                <li>Work across departments in large enterprises to understand business needs from diverse perspectives</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
              <div className="space-y-8">
                <div className="border-l-2 border-pink pl-4 relative">
                  <div className="absolute w-3 h-3 bg-pink rounded-full -left-[7px] top-1.5"></div>
                  <h4 className="font-medium">Technical Director, Coach</h4>
                  <p className="text-muted-foreground">Rangle.io - Oct 2021 - Nov 2022</p>
                </div>
                
                <div className="border-l-2 border-pink pl-4 relative">
                  <div className="absolute w-3 h-3 bg-pink rounded-full -left-[7px] top-1.5"></div>
                  <h4 className="font-medium">Software Engineering Manager</h4>
                  <p className="text-muted-foreground">PartnerStack, Canada - May 2020 - Apr 2021</p>
                </div>
                
                <div className="border-l-2 border-pink pl-4 relative">
                  <div className="absolute w-3 h-3 bg-pink rounded-full -left-[7px] top-1.5"></div>
                  <h4 className="font-medium">Director of Frontend Education</h4>
                  <p className="text-muted-foreground">Bridge School, Toronto, Canada - Oct 2019 – March 2020</p>
                </div>
                
                <div className="border-l-2 border-pink pl-4 relative">
                  <div className="absolute w-3 h-3 bg-pink rounded-full -left-[7px] top-1.5"></div>
                  <h4 className="font-medium">Technical Director</h4>
                  <p className="text-muted-foreground">Rangle, Toronto, Canada - Sept 2014 - March 2020</p>
                </div>
              </div>
            </div>
          </div>
        </PageTransition>
      </div>
    </section>
  );
}
