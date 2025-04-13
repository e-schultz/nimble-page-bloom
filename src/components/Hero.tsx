
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <img 
                  src="/lovable-uploads/5b2b4f28-4e5e-4e5b-b117-a91ce3bc11c9.png" 
                  alt="Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="mb-4">Evan Schultz</h1>
              <div className="h-1 w-16 bg-pink my-6"></div>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Building high performing teams and the environment that enables them.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="flex flex-wrap gap-4 mt-8">
              <a 
                href="#about" 
                className="px-6 py-3 bg-pink text-white rounded-md hover:bg-pink-dark transition-colors"
              >
                Learn More
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-border rounded-md hover:border-pink transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background grid decoration */}
      <div className="absolute -top-20 right-0 w-full md:w-1/2 h-64 opacity-10 dark:opacity-20">
        <img 
          src="/lovable-uploads/a5d35b1a-8c88-414d-82d2-8e35a784739e.png" 
          alt="Decorative Grid" 
          className="w-full h-full object-cover opacity-20 dark:opacity-30"
        />
      </div>
    </section>
  );
}
