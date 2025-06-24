import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Music, Heart, Users, Share2 } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-orbitron font-black text-4xl md:text-6xl mb-6 neon-glow">
            <span className="text-primary">À PROPOS</span>
          </h1>
          <p className="font-roboto-condensed text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez l'histoire et la mission d'Underground Music Hub, 
            votre communauté musicale sans prétention.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-16">
          <Card className="glass max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="font-orbitron text-2xl text-center text-primary">
                Notre Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg leading-relaxed mb-6">
                Underground Music Hub, c'est avant tout une histoire de <span className="text-accent font-semibold">passion partagée</span>. 
                Pas de prétention ici, juste l'envie de mettre les gens en lien, de partager des bons plans 
                et d'échanger des tutoriels, astuces ou toute autre information pratique.
              </p>
              <p className="text-lg leading-relaxed">
                Que vous soyez musicien débutant avec un "matos pourri" qui dépanne, 
                passionné avec du matériel milieu de gamme, ou artiste pro avec un setup de festival, 
                <span className="text-primary font-semibold"> chacun a sa place ici</span>.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Valeurs */}
        <section className="mb-16">
          <h2 className="font-orbitron font-bold text-3xl text-center mb-12 text-primary">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="glass hover-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Share2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-roboto-condensed font-semibold text-lg mb-3">Partage</h3>
                <p className="text-sm text-muted-foreground">
                  Échanger des connaissances, des bons plans et des expériences 
                  pour faire grandir la communauté.
                </p>
              </CardContent>
            </Card>

            <Card className="glass hover-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-roboto-condensed font-semibold text-lg mb-3">Bienveillance</h3>
                <p className="text-sm text-muted-foreground">
                  Toujours mis en avant, jamais critiqué pour blesser. 
                  Chacun a sa place, quoi qu'il arrive.
                </p>
              </CardContent>
            </Card>

            <Card className="glass hover-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Music className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-roboto-condensed font-semibold text-lg mb-3">Authenticité</h3>
                <p className="text-sm text-muted-foreground">
                  Un ton décalé, de l'argot, de l'humour. 
                  On reste vrais, comme dans une salle underground.
                </p>
              </CardContent>
            </Card>

            <Card className="glass hover-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-roboto-condensed font-semibold text-lg mb-3">Passion</h3>
                <p className="text-sm text-muted-foreground">
                  La musique avant tout ! Que ce soit rock, rap, électro... 
                  Si ça groove, ça nous va.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* L'Équipe */}
        <section className="mb-16">
          <h2 className="font-orbitron font-bold text-3xl text-center mb-12 text-primary">
            L'Esprit Underground
          </h2>
          <Card className="glass max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-orbitron font-bold text-xl mb-4 text-accent">
                    Inspiré par les Légendes
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Notre esthétique puise dans l'univers des icônes : 
                    l'énergie psychédélique de <span className="text-primary">Jimi Hendrix</span>, 
                    la théâtralité de <span className="text-accent">Queen</span>, 
                    le rétro-futurisme de <span className="text-primary">Retour vers le Futur</span>.
                  </p>
                  <p className="text-muted-foreground">
                    Mélangé avec l'ambiance des salles souterraines comme La Main Jaune à Paris, 
                    et la direction artistique décalée des rappeurs d'aujourd'hui.
                  </p>
                </div>
                <div className="text-center">
                  <div className="relative inline-block">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 neon-box-shadow"></div>
                    <Music className="w-16 h-16 text-background absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <p className="font-roboto-condensed font-semibold text-lg">
                    Le Son qui Claque !
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="glass max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-orbitron font-bold text-2xl mb-4 text-primary">
                Rejoignez la Communauté
              </h3>
              <p className="text-muted-foreground mb-6">
                Que vous soyez musicien, passionné, ou simple curieux, 
                venez partager votre amour de la musique avec nous !
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-roboto-condensed font-medium hover-glow transition-all duration-300"
                >
                  Nous Contacter
                </a>
                <a 
                  href="/blog" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md font-roboto-condensed font-medium hover-glow transition-all duration-300"
                >
                  Lire le Blog
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;

