import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Music, Play, ExternalLink, Instagram, Twitter, Youtube, Globe } from 'lucide-react';

const Artists = () => {
  const featuredArtists = [
    {
      name: "Luna Noire",
      genre: "Électro-Rock Underground",
      location: "Paris, France",
      description: "Mélange explosif entre synthés vintage et guitares saturées. Luna Noire crée une atmosphère unique qui fait vibrer les salles souterraines.",
      image: "/api/placeholder/300/300",
      instruments: ["Synthétiseur", "Guitare", "Voix"],
      social: {
        instagram: "@luna_noire_music",
        twitter: "@lunanoire",
        youtube: "Luna Noire Official"
      },
      tracks: ["Neon Dreams", "Underground Pulse", "Electric Shadows"],
      bio: "Artiste émergente de la scène parisienne, Luna Noire puise son inspiration dans l'esthétique rétro-futuriste et l'énergie brute des concerts underground.",
      booking: "luna.noire.booking@email.com"
    },
    {
      name: "Les Décibels Perdus",
      genre: "Rock Alternatif",
      location: "Lyon, France",
      description: "Groupe de rock alternatif qui n'a pas peur de faire du bruit ! Leur son brut et authentique rappelle les grandes heures du rock français.",
      image: "/api/placeholder/300/300",
      instruments: ["Guitare", "Basse", "Batterie", "Voix"],
      social: {
        instagram: "@decibels_perdus",
        twitter: "@decibelsperdus",
        youtube: "Les Décibels Perdus"
      },
      tracks: ["Révolution Sonore", "Matos Cassé", "La Scène"],
      bio: "Formé en 2020, ce trio lyonnais défend un rock sans compromis, avec des textes qui parlent de musique, de passion et de la vie d'artiste indépendant.",
      booking: "contact@decibelsperdus.fr"
    },
    {
      name: "MC Frequency",
      genre: "Rap Conscient",
      location: "Marseille, France",
      description: "Rappeur engagé qui mélange flow technique et messages profonds. Ses textes parlent de musique, de société et de la culture underground.",
      image: "/api/placeholder/300/300",
      instruments: ["Voix", "Beatmaking", "Samples"],
      social: {
        instagram: "@mc_frequency",
        twitter: "@mcfrequency",
        youtube: "MC Frequency Official"
      },
      tracks: ["Fréquence Libre", "Underground State", "Le Micro et Moi"],
      bio: "Artiste marseillais reconnu pour ses performances live énergiques et ses collaborations avec des producteurs de la scène underground française.",
      booking: "mcfrequency.booking@gmail.com"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-orbitron font-black text-4xl md:text-6xl mb-6 neon-glow">
            <span className="text-primary">ARTISTES</span>
          </h1>
          <p className="font-roboto-condensed text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez les talents indépendants qui font vibrer la scène underground. 
            Chacun a sa place, sans jugement, juste de la passion !
          </p>
        </div>

        {/* Featured Artists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {featuredArtists.map((artist, index) => (
            <Card key={index} className="glass hover-glow transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 neon-box-shadow flex items-center justify-center">
                  <Music className="w-16 h-16 text-background" />
                </div>
                <CardTitle className="font-orbitron text-xl mb-2">{artist.name}</CardTitle>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline" className="text-primary border-primary">
                    {artist.genre}
                  </Badge>
                  <Badge variant="outline" className="text-muted-foreground">
                    {artist.location}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {artist.description}
                </p>

                {/* Instruments */}
                <div>
                  <h4 className="font-roboto-condensed font-semibold text-sm mb-2 text-accent">
                    Instruments
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {artist.instruments.map((instrument, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {instrument}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Tracks */}
                <div>
                  <h4 className="font-roboto-condensed font-semibold text-sm mb-2 text-accent">
                    Morceaux Phares
                  </h4>
                  <ul className="text-xs space-y-1">
                    {artist.tracks.map((track, i) => (
                      <li key={i} className="flex items-center text-muted-foreground">
                        <Play className="w-3 h-3 mr-2 text-primary" />
                        {track}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3 pt-4">
                  <Button size="sm" variant="ghost" className="hover-glow p-2">
                    <Instagram className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="hover-glow p-2">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="hover-glow p-2">
                    <Youtube className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="hover-glow p-2">
                    <Globe className="w-4 h-4" />
                  </Button>
                </div>

                <Button className="w-full neon-border hover-glow mt-4">
                  Découvrir l'Artiste
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action pour les Artistes */}
        <section className="mb-16">
          <Card className="glass max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="font-orbitron font-bold text-2xl mb-4 text-primary">
                Vous êtes Artiste ?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Rejoignez notre communauté d'artistes indépendants ! 
                Nous mettons en avant tous les talents, du débutant au professionnel. 
                Chacun a sa place dans l'underground.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Music className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h4 className="font-roboto-condensed font-semibold mb-2">Profil Complet</h4>
                  <p className="text-sm text-muted-foreground">
                    Bio, discographie, photos, liens sociaux
                  </p>
                </div>
                <div className="text-center">
                  <Play className="w-12 h-12 text-accent mx-auto mb-3" />
                  <h4 className="font-roboto-condensed font-semibold mb-2">Visibilité</h4>
                  <p className="text-sm text-muted-foreground">
                    Mise en avant sur le site et les réseaux
                  </p>
                </div>
                <div className="text-center">
                  <ExternalLink className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h4 className="font-roboto-condensed font-semibold mb-2">Réseau</h4>
                  <p className="text-sm text-muted-foreground">
                    Connexion avec d'autres artistes et fans
                  </p>
                </div>
              </div>
              <Button className="neon-border hover-glow" asChild>
                <a href="/contact">
                  Proposer mon Profil
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Section Premium */}
        <section>
          <Card className="glass max-w-4xl mx-auto border-accent/50">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="font-orbitron font-bold text-2xl mb-4 text-accent">
                  Profil Premium Artiste
                </h3>
                <p className="text-muted-foreground">
                  Boostez votre visibilité avec nos fonctionnalités premium
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-4 border border-accent/20 rounded-lg">
                  <h4 className="font-roboto-condensed font-semibold mb-2 text-accent">
                    Espace Étendu
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Plus de photos, vidéos et extraits audio
                  </p>
                </div>
                <div className="text-center p-4 border border-accent/20 rounded-lg">
                  <h4 className="font-roboto-condensed font-semibold mb-2 text-accent">
                    Outils Promo
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Kit presse, intégration billetterie
                  </p>
                </div>
                <div className="text-center p-4 border border-accent/20 rounded-lg">
                  <h4 className="font-roboto-condensed font-semibold mb-2 text-accent">
                    Statistiques
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Suivi des visites et engagement
                  </p>
                </div>
                <div className="text-center p-4 border border-accent/20 rounded-lg">
                  <h4 className="font-roboto-condensed font-semibold mb-2 text-accent">
                    Merchandising
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Vente directe sur votre profil
                  </p>
                </div>
                <div className="text-center p-4 border border-accent/20 rounded-lg">
                  <h4 className="font-roboto-condensed font-semibold mb-2 text-accent">
                    Soutien Fans
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Système de pourboires et dons
                  </p>
                </div>
                <div className="text-center p-4 border border-accent/20 rounded-lg">
                  <h4 className="font-roboto-condensed font-semibold mb-2 text-accent">
                    Ressources Pro
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Guides, contacts, conseils
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Button className="neon-border hover-glow" asChild>
                  <a href="/contact">
                    En Savoir Plus sur Premium
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Artists;

