import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock, Send, Music, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      category: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pourriez ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
    alert('Message envoyé ! On vous répond rapidement.');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@undergroundmusichub.fr",
      description: "Pour toute question générale"
    },
    {
      icon: MessageSquare,
      title: "Réseaux Sociaux",
      content: "@UndergroundMusicHub",
      description: "Suivez-nous pour les dernières news"
    },
    {
      icon: Clock,
      title: "Réponse",
      content: "24-48h",
      description: "Délai moyen de réponse"
    }
  ];

  const contactReasons = [
    {
      title: "Proposer un Article",
      description: "Vous avez une info, un bon plan ou une découverte à partager ?",
      icon: "📝"
    },
    {
      title: "Profil Artiste",
      description: "Vous êtes musicien et souhaitez rejoindre notre communauté ?",
      icon: "🎤"
    },
    {
      title: "Test Matériel",
      description: "Vous avez testé du matos et voulez partager votre avis ?",
      icon: "🎛️"
    },
    {
      title: "Événement",
      description: "Vous organisez un concert ou festival à promouvoir ?",
      icon: "🎪"
    },
    {
      title: "Partenariat",
      description: "Vous souhaitez collaborer avec Underground Music Hub ?",
      icon: "🤝"
    },
    {
      title: "Autre",
      description: "Une question, suggestion ou juste envie de discuter musique ?",
      icon: "💬"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-orbitron font-black text-4xl md:text-6xl mb-6 neon-glow">
            <span className="text-primary">CONTACT</span>
          </h1>
          <p className="font-roboto-condensed text-xl text-muted-foreground max-w-3xl mx-auto">
            Une question, une suggestion, envie de partager votre passion ? 
            On est là pour échanger ! Le son qui claque, ça se partage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="font-orbitron text-xl text-primary">
                  Infos de Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-roboto-condensed font-semibold mb-1">
                        {info.title}
                      </h3>
                      <p className="text-primary font-medium mb-1">
                        {info.content}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="font-orbitron text-xl text-primary">
                  Notre Philosophie
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Chez Underground Music Hub, on croit au partage sans prétention. 
                  Que vous soyez débutant avec du "matos pourri" ou pro avec un setup de festival, 
                  <span className="text-accent font-semibold"> chacun a sa place</span> dans notre communauté.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="font-orbitron text-2xl text-primary">
                  Envoyez-nous un Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="font-roboto-condensed font-medium">
                        Nom / Pseudo
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Votre nom ou pseudo"
                        className="mt-1 bg-input border-border focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="font-roboto-condensed font-medium">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="votre@email.com"
                        className="mt-1 bg-input border-border focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="category" className="font-roboto-condensed font-medium">
                      Sujet de votre message
                    </Label>
                    <Select onValueChange={handleSelectChange}>
                      <SelectTrigger className="mt-1 bg-input border-border focus:border-primary">
                        <SelectValue placeholder="Choisissez un sujet" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="article">Proposer un Article</SelectItem>
                        <SelectItem value="artiste">Profil Artiste</SelectItem>
                        <SelectItem value="materiel">Test Matériel</SelectItem>
                        <SelectItem value="evenement">Événement</SelectItem>
                        <SelectItem value="partenariat">Partenariat</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="font-roboto-condensed font-medium">
                      Titre du message
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Ex: Découverte d'un artiste underground"
                      className="mt-1 bg-input border-border focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-roboto-condensed font-medium">
                      Votre message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Racontez-nous tout ! Plus c'est détaillé, mieux on peut vous aider."
                      rows={6}
                      className="mt-1 bg-input border-border focus:border-primary resize-none"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full neon-border hover-glow">
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer le Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Reasons */}
        <section className="mb-16">
          <h2 className="font-orbitron font-bold text-3xl text-center mb-12 text-primary">
            Pourquoi Nous Contacter ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactReasons.map((reason, index) => (
              <Card key={index} className="glass hover-glow transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{reason.icon}</div>
                  <h3 className="font-roboto-condensed font-semibold text-lg mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <Card className="glass max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="font-orbitron text-2xl text-center text-primary">
                Questions Fréquentes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-roboto-condensed font-semibold text-lg mb-2 text-accent">
                  Comment proposer mon profil d'artiste ?
                </h3>
                <p className="text-muted-foreground">
                  Utilisez le formulaire ci-dessus en sélectionnant "Profil Artiste". 
                  Partagez votre bio, vos liens, et quelques morceaux. On met en avant tous les talents !
                </p>
              </div>
              <div>
                <h3 className="font-roboto-condensed font-semibold text-lg mb-2 text-accent">
                  Puis-je tester du matériel pour le site ?
                </h3>
                <p className="text-muted-foreground">
                  Absolument ! Si vous avez testé du matos (du "pourri" au pro), 
                  partagez votre expérience. Vos retours aident la communauté.
                </p>
              </div>
              <div>
                <h3 className="font-roboto-condensed font-semibold text-lg mb-2 text-accent">
                  Comment fonctionne l'affiliation Amazon ?
                </h3>
                <p className="text-muted-foreground">
                  Nos liens d'affiliation nous permettent de maintenir le site gratuit. 
                  Vous payez le même prix, et nous touchons une petite commission.
                </p>
              </div>
              <div>
                <h3 className="font-roboto-condensed font-semibold text-lg mb-2 text-accent">
                  Vous acceptez tous les styles musicaux ?
                </h3>
                <p className="text-muted-foreground">
                  Bien sûr ! Rock, rap, électro, metal, jazz... Si ça groove et que c'est fait avec passion, 
                  ça nous va. L'underground, c'est la diversité !
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contact;

