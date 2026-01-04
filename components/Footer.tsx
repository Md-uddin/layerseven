'use client';

import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Layer<span className="text-accent">Seven</span>
            </h3>
            <p className="text-foreground/70 text-sm">
              Building exceptional web applications with cutting-edge technologies and modern development practices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-foreground/70 hover:text-accent transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-accent transition-colors text-sm">
                  Services
                </a>
              </li>
              {/* Uncomment when portfolio is active */}
              {/* <li>
                <a href="#portfolio" className="text-foreground/70 hover:text-accent transition-colors text-sm">
                  Portfolio
                </a>
              </li> */}
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-accent transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="mailto:hello@layersevenstudio.com" className="hover:text-accent transition-colors">
                  hello@layersevenstudio.com
                </a>
              </li>
              <li className="flex gap-4 mt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-accent hover:text-background transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-accent hover:text-background transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-accent hover:text-background transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-foreground/60">
          <p>&copy; {currentYear} Layer Seven Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
