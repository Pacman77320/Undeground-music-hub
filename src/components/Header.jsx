import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Music, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/about' },
    { name: 'Matériel', path: '/equipment' },
    { name: 'Artistes', path: '/artists' },
    { name: 'Blog', path: '/blog' },
    { name: 'Billetterie', path: '/tickets' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover-neon">
            <div className="relative">
              <Music className="w-8 h-8 text-primary" />
              <Zap className="w-4 h-4 text-accent absolute -top-1 -right-1" />
            </div>
            <span className="font-orbitron font-bold text-xl neon-glow">
              Underground Music Hub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="font-roboto-condensed font-medium hover-neon transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover-glow"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="font-roboto-condensed font-medium hover-neon transition-all duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

