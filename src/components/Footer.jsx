import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const quickLinks = [
    { name: 'Matériel', path: '/equipment' },
    { name: 'Artistes', path: '/artists' },
    { name: 'Blog', path: '/blog' },
    { name: 'Billetterie', path: '/tickets' },
  ];

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Music className="w-8 h-8 text-primary" />
              <span className="font-orbitron font-bold text-xl neon-glow">
                Underground Music Hub
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Le son qui claque ! Votre hub musical underground pour découvrir du matériel, 
              des artistes indépendants et partager la passion de la musique.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="hover-glow"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className="font-roboto-condensed font-semibold text-lg mb-4 text-primary">
              Navigation
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover-neon transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-roboto-condensed font-semibold text-lg mb-4 text-primary">
              Newsletter
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Restez branché sur les dernières news du underground !
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Votre email"
                className="px-3 py-2 bg-input border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="sm" className="neon-border hover-glow">
                <Mail className="w-4 h-4 mr-2" />
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Underground Music Hub. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-muted-foreground hover-neon text-sm transition-colors"
              >
                Confidentialité
              </Link>
              <Link
                to="/terms"
                className="text-muted-foreground hover-neon text-sm transition-colors"
              >
                Conditions
              </Link>
              <Link
                to="/contact"
                className="text-muted-foreground hover-neon text-sm transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

