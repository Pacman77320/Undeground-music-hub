import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Music, Zap, Users, Calendar, Star, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-orbitron font-black text-4xl md:text-6xl lg:text-7xl mb-6 neon-glow">
            <span className="text-primary">UNDERGROUND</span>
            <br />
            <span className="text-accent">MUSIC HUB</span>
          </h1>
          <p className="font-roboto-condensed text-xl md:text-2xl mb-8 text-muted-foreground">
            Le son qui claque ! Découvrez du matériel, des artistes indépendants 
            et partagez votre passion pour la musique underground.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="neon-border hover-glow font-roboto-condensed">
              <Music className="w-5 h-5 mr-2" />
              Explorer le Matériel
            </Button>
            <Button size="lg" variant="outline" className="neon-border hover-glow font-roboto-condensed">
              <Users className="w-5 h-5 mr-2" />
              Découvrir les Artistes
            </Button>
          </div>
        </div>
      </section>

      {/* Bandeau Événement */}
      <section className="bg-destructive/20 border-y border-destructive/50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center text-center">
            <Calendar className="w-5 h-5 mr-2 text-destructive" />
            <p className="font-roboto-condensed font-medium">
              <span className="text-destructive">ÉVÉNEMENT À VENIR :</span> 
              {" "}Concert de JUL à Bercy - Il reste peu de places ! 
              <Button variant="link" className="text-primary hover-neon ml-2 p-0">
                Voir les billets →
              </Button>
            </p>
          </div>
        </div>
      </section>

      {/* Sections Principales */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Matériel */}
            <Card className="glass hover-glow transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-primary mr-3" />
                  <h3 className="font-orbitron font-bold text-xl">Matériel</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Du "matos pourri" qui dépanne aux équipements pro pour les festivals. 
                  On teste tout pour que vous fassiez le bon choix !
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm">
                    <Star className="w-4 h-4 text-accent mr-2" />
                    <span>Les Pépites de la Déchèterie</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="w-4 h-4 text-accent mr-2" />
                    <span>Milieu de Gamme Abordable</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="w-4 h-4 text-accent mr-2" />
                    <span>Matos Pro pour les Festivals</span>
                  </div>
                </div>
                <Button className="w-full neon-border group-hover:neon-box-shadow">
                  Explorer le Matériel
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Artistes */}
            <Card className="glass hover-glow transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-primary mr-3" />
                  <h3 className="font-orbitron font-bold text-xl">Artistes</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Découvrez les talents indépendants qui font vibrer la scène underground. 
                  Chacun a sa place, sans jugement, juste de la passion !
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm">
                    <Star className="w-4 h-4 text-accent mr-2" />
                    <span>Portraits d'Artistes</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="w-4 h-4 text-accent mr-2" />
                    <span>Interviews Exclusives</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="w-4 h-4 text-accent mr-2" />
                    <span>Découvertes Musicales</span>
                  </div>
                </div>
                <Button className="w-full neon-border group-hover:neon-box-shadow">
                  Découvrir les Artistes
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Blog */}
            <Card className="glass hover-glow transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Music className="w-8 h-8 text-primary mr-3" />
                  <h3 className="font-orbitron font-bold text-xl">Blog</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Actualités, bons plans, tutoriels... Tout ce qui fait vibrer 
                  la communauté underground. Le son qui claque, c'est ici !
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm">
                    <Star className="w-4 h-4 text-accent mr-2" />
                    <span>Actualités Musicales</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="w-4 h-4 text-accent mr-2" />
                    <span>Bons Plans & Affiliation</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="w-4 h-4 text-accent mr-2" />
                    <span>Cours & Tutoriels</span>
                  </div>
                </div>
                <Button className="w-full neon-border group-hover:neon-box-shadow">
                  Lire le Blog
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Citation */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="font-orbitron text-2xl md:text-3xl mb-6 neon-glow">
              "La musique, c'est comme le matos pourri : 
              <br />
              <span className="text-primary">ça peut sonner comme une casserole,</span>
              <br />
              <span className="text-accent">mais quand ça groove, ça met le feu !"</span>
            </p>
            <footer className="font-roboto-condensed text-muted-foreground">
              — L'équipe Underground Music Hub
            </footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Home;

