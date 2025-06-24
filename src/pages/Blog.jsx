import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, ExternalLink, Ticket, Music, Star } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "JUL à Bercy : Le Rap Marseillais Met Le Feu !",
      category: "Concerts & Événements",
      date: "2024-06-15",
      readTime: "5 min",
      excerpt: "Retour sur le concert de JUL à Bercy qui a mis le feu ! Ambiance de dingue, son qui claque, et quelques anecdotes croustillantes...",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "Test : Le Micro Shure SM58, Toujours au Top ?",
      category: "Matériel Musical",
      date: "2024-06-12",
      readTime: "8 min",
      excerpt: "On a testé LA légende des micros ! Après 50 ans de bons et loyaux services, le SM58 fait-il encore le poids face à la concurrence ?",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 3,
      title: "Tuto : Enregistrer chez Soi avec du Matos Pourri",
      category: "Cours & Tutoriels",
      date: "2024-06-10",
      readTime: "12 min",
      excerpt: "Pas de budget pour un studio ? Pas de panique ! On vous montre comment faire sonner votre home studio avec trois fois rien.",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 4,
      title: "Interview : Luna Noire, l'Électro-Rock qui Monte",
      category: "Artistes Indépendants",
      date: "2024-06-08",
      readTime: "6 min",
      excerpt: "Rencontre avec Luna Noire, artiste parisienne qui mélange synthés vintage et guitares saturées. Une pépite de la scène underground !",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 5,
      title: "Bon Plan : Promo Folle sur les Interfaces Audio",
      category: "Bons Plans & Affiliation",
      date: "2024-06-05",
      readTime: "3 min",
      excerpt: "Amazon fait le ménage ! Des interfaces audio de qualité à prix cassés. On a sélectionné les meilleures affaires du moment.",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 6,
      title: "Actualité : Le Vinyl Fait Son Grand Retour",
      category: "Actualités Musicales",
      date: "2024-06-03",
      readTime: "7 min",
      excerpt: "Les ventes de vinyles explosent ! Effet de mode ou vrai retour aux sources ? On fait le point sur cette tendance qui cartonne.",
      image: "/api/placeholder/400/250",
      featured: false
    }
  ];

  const categories = [
    { name: "Actualités Musicales", count: 12, color: "text-primary" },
    { name: "Matériel Musical", count: 18, color: "text-accent" },
    { name: "Cours & Tutoriels", count: 15, color: "text-primary" },
    { name: "Artistes Indépendants", count: 9, color: "text-accent" },
    { name: "Bons Plans & Affiliation", count: 7, color: "text-primary" },
    { name: "Concerts & Événements", count: 11, color: "text-accent" }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-orbitron font-black text-4xl md:text-6xl mb-6 neon-glow">
            <span className="text-primary">BLOG</span>
          </h1>
          <p className="font-roboto-condensed text-xl text-muted-foreground max-w-3xl mx-auto">
            Actualités, bons plans, tutoriels... Tout ce qui fait vibrer la communauté underground. 
            Le son qui claque, c'est ici !
          </p>
        </div>

        {/* Featured Article */}
        {featuredPost && (
          <section className="mb-16">
            <Card className="glass hover-glow transition-all duration-300 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Music className="w-24 h-24 text-primary/50" />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="outline" className="text-destructive border-destructive">
                      Article Phare
                    </Badge>
                    <Badge variant="secondary">
                      {featuredPost.category}
                    </Badge>
                  </div>
                  <h2 className="font-orbitron font-bold text-2xl lg:text-3xl mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString('fr-FR')}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <Button className="neon-border hover-glow">
                      Lire l'Article
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Articles Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regularPosts.map((post) => (
                <Card key={post.id} className="glass hover-glow transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <Music className="w-12 h-12 text-primary/30" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                    </div>
                    <h3 className="font-roboto-condensed font-semibold text-lg mb-3 leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(post.date).toLocaleDateString('fr-FR')}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <Button size="sm" variant="ghost" className="hover-neon p-0 h-auto">
                        Lire →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="font-orbitron text-lg text-primary">
                  Catégories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between hover-neon cursor-pointer transition-colors">
                    <span className="font-roboto-condensed text-sm">{category.name}</span>
                    <Badge variant="outline" className={`text-xs ${category.color}`}>
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="font-orbitron text-lg text-primary">
                  Newsletter
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Restez branché sur les dernières news du underground !
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button size="sm" className="w-full neon-border hover-glow">
                    S'abonner
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="font-orbitron text-lg text-primary">
                  Articles Populaires
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {regularPosts.slice(0, 3).map((post, index) => (
                  <div key={post.id} className="flex items-start space-x-3 hover-neon cursor-pointer transition-colors">
                    <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-roboto-condensed font-medium text-sm leading-tight mb-1">
                        {post.title}
                      </h4>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.date).toLocaleDateString('fr-FR')}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <section className="mt-20 text-center">
          <Card className="glass max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-orbitron font-bold text-2xl mb-4 text-primary">
                Vous avez une Info à Partager ?
              </h3>
              <p className="text-muted-foreground mb-6">
                Découverte d'artiste, bon plan matériel, astuce de studio... 
                Partagez vos trouvailles avec la communauté !
              </p>
              <Button className="neon-border hover-glow" asChild>
                <a href="/contact">
                  Proposer un Article
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Blog;

