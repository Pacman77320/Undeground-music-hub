import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, ExternalLink, Ticket, Music, Star, Clock } from 'lucide-react';

const Tickets = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "JUL en Concert",
      venue: "AccorHotels Arena (Bercy)",
      location: "Paris",
      date: "2024-07-15",
      time: "20:00",
      price: "À partir de 45€",
      status: "Peu de places",
      description: "Le rappeur marseillais débarque à Paris pour un concert exceptionnel !",
      ticketUrl: "https://www.ticketmaster.fr/jul-concert",
      image: "/api/placeholder/400/250",
      featured: true,
      genre: "Rap"
    },
    {
      id: 2,
      title: "Festival Rock Underground",
      venue: "La Cigale",
      location: "Paris",
      date: "2024-07-22",
      time: "19:30",
      price: "À partir de 35€",
      status: "Disponible",
      description: "Une soirée dédiée aux talents émergents du rock français.",
      ticketUrl: "https://www.fnacspectacles.com/rock-underground",
      image: "/api/placeholder/400/250",
      featured: false,
      genre: "Rock"
    },
    {
      id: 3,
      title: "Nuit Électro-Industrielle",
      venue: "Le Bataclan",
      location: "Paris",
      date: "2024-08-05",
      time: "21:00",
      price: "À partir de 28€",
      status: "Disponible",
      description: "Plongez dans l'univers sombre et hypnotique de l'électro industrielle.",
      ticketUrl: "https://www.dice.fm/electro-industrielle",
      image: "/api/placeholder/400/250",
      featured: false,
      genre: "Électro"
    },
    {
      id: 4,
      title: "Soirée Hip-Hop Indépendant",
      venue: "Le Trianon",
      location: "Paris",
      date: "2024-08-12",
      time: "20:30",
      price: "À partir de 22€",
      status: "Disponible",
      description: "Découvrez les nouveaux talents du rap français dans une ambiance intimiste.",
      ticketUrl: "https://www.ticketmaster.fr/hip-hop-independant",
      image: "/api/placeholder/400/250",
      featured: false,
      genre: "Hip-Hop"
    },
    {
      id: 5,
      title: "Metal Underground Session",
      venue: "Le Gibus",
      location: "Paris",
      date: "2024-08-18",
      time: "19:00",
      price: "À partir de 18€",
      status: "Disponible",
      description: "Une soirée métal dans l'une des salles les plus mythiques de Paris.",
      ticketUrl: "https://www.fnacspectacles.com/metal-underground",
      image: "/api/placeholder/400/250",
      featured: false,
      genre: "Metal"
    }
  ];

  const ticketPlatforms = [
    {
      name: "Ticketmaster",
      description: "La référence pour les gros événements et les salles principales.",
      url: "https://www.ticketmaster.fr",
      logo: "🎫"
    },
    {
      name: "Fnac Spectacles",
      description: "Large choix de concerts, théâtre et spectacles en France.",
      url: "https://www.fnacspectacles.com",
      logo: "🎭"
    },
    {
      name: "Dice",
      description: "Plateforme moderne spécialisée dans les événements underground.",
      url: "https://dice.fm",
      logo: "🎲"
    },
    {
      name: "See Tickets",
      description: "Billetterie alternative avec de bons plans réguliers.",
      url: "https://www.seetickets.fr",
      logo: "👀"
    }
  ];

  const featuredEvent = upcomingEvents.find(event => event.featured);
  const regularEvents = upcomingEvents.filter(event => !event.featured);

  const getStatusColor = (status) => {
    switch (status) {
      case "Peu de places":
        return "text-destructive border-destructive";
      case "Complet":
        return "text-muted-foreground border-muted-foreground";
      default:
        return "text-primary border-primary";
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-orbitron font-black text-4xl md:text-6xl mb-6 neon-glow">
            <span className="text-primary">BILLETTERIE</span>
          </h1>
          <p className="font-roboto-condensed text-xl text-muted-foreground max-w-3xl mx-auto">
            Tous les événements qui font vibrer la scène musicale ! 
            Concerts, festivals, soirées underground... Ne ratez rien !
          </p>
        </div>

        {/* Featured Event */}
        {featuredEvent && (
          <section className="mb-16">
            <div className="bg-destructive/20 border border-destructive/50 rounded-lg p-4 mb-6 text-center">
              <div className="flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-2 text-destructive" />
                <p className="font-roboto-condensed font-medium">
                  <span className="text-destructive">ÉVÉNEMENT À VENIR :</span> 
                  {" "}{featuredEvent.title} - {featuredEvent.status} !
                </p>
              </div>
            </div>
            
            <Card className="glass hover-glow transition-all duration-300 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-destructive/20 to-accent/20 flex items-center justify-center">
                  <Music className="w-24 h-24 text-destructive/50" />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="outline" className="text-destructive border-destructive">
                      Événement Phare
                    </Badge>
                    <Badge variant="secondary">
                      {featuredEvent.genre}
                    </Badge>
                  </div>
                  <h2 className="font-orbitron font-bold text-2xl lg:text-3xl mb-2">
                    {featuredEvent.title}
                  </h2>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {featuredEvent.venue}, {featuredEvent.location}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(featuredEvent.date).toLocaleDateString('fr-FR')}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      {featuredEvent.time}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {featuredEvent.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Badge variant="outline" className={getStatusColor(featuredEvent.status)}>
                        {featuredEvent.status}
                      </Badge>
                      <span className="font-roboto-condensed font-semibold text-lg text-primary">
                        {featuredEvent.price}
                      </span>
                    </div>
                    <Button className="neon-border hover-glow" asChild>
                      <a href={featuredEvent.ticketUrl} target="_blank" rel="noopener noreferrer">
                        <Ticket className="w-4 h-4 mr-2" />
                        Réserver
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* Events Grid */}
        <section className="mb-16">
          <h2 className="font-orbitron font-bold text-3xl text-center mb-12 text-primary">
            Prochains Événements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularEvents.map((event) => (
              <Card key={event.id} className="glass hover-glow transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <Music className="w-12 h-12 text-primary/30" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {event.genre}
                    </Badge>
                    <Badge variant="outline" className={`text-xs ${getStatusColor(event.status)}`}>
                      {event.status}
                    </Badge>
                  </div>
                  <h3 className="font-roboto-condensed font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <div className="space-y-1 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-2" />
                      {event.venue}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-2" />
                      {new Date(event.date).toLocaleDateString('fr-FR')} - {event.time}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-roboto-condensed font-semibold text-primary">
                      {event.price}
                    </span>
                    <Button size="sm" className="neon-border hover-glow" asChild>
                      <a href={event.ticketUrl} target="_blank" rel="noopener noreferrer">
                        <Ticket className="w-3 h-3 mr-1" />
                        Billets
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Ticket Platforms */}
        <section className="mb-16">
          <h2 className="font-orbitron font-bold text-3xl text-center mb-12 text-primary">
            Plateformes Partenaires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ticketPlatforms.map((platform, index) => (
              <Card key={index} className="glass hover-glow transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{platform.logo}</div>
                  <h3 className="font-roboto-condensed font-semibold text-lg mb-3">
                    {platform.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {platform.description}
                  </p>
                  <Button size="sm" variant="outline" className="neon-border hover-glow" asChild>
                    <a href={platform.url} target="_blank" rel="noopener noreferrer">
                      Visiter
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="glass max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-orbitron font-bold text-2xl mb-4 text-primary">
                Organisateur d'Événements ?
              </h3>
              <p className="text-muted-foreground mb-6">
                Vous organisez un concert, festival ou soirée musicale ? 
                Faites-le connaître à notre communauté underground !
              </p>
              <Button className="neon-border hover-glow" asChild>
                <a href="/contact">
                  Proposer un Événement
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Tickets;

