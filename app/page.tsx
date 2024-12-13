'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Code2,
  Send,
  Mail,
  Phone,
  MapPin,
  Github,
  ExternalLink,
  Layout,
  Server,
  CalendarDays,
  ArrowUpRight,
  GraduationCap,
  BookOpen,
  Laptop,
  BookMarked,
} from 'lucide-react';

import { skills, projects, articles, contactInfo } from '@/lib/data';

export default function Home() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="accueil" className="py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
            Kalinin Alexander
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Badge variant="secondary" className="flex items-center gap-1">
              <GraduationCap className="w-4 h-4" />
              BTS SIO SLAM
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              Première Année
            </Badge>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Étudiant passionné en première année de BTS SIO (Services Informatiques aux Organisations) 
            option SLAM (Solutions Logicielles et Applications Métiers) au lycée Gaston Berger à Lille. 
            Spécialisé dans le développement d'applications, je combine créativité et rigueur technique 
            pour créer des solutions innovantes.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="competences" className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Laptop className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Compétences</h2>
          </div>
          <Tabs defaultValue="frontend" className="space-y-8">
            <TabsList className="grid grid-cols-3 w-full max-w-[400px]">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="tools">Outils</TabsTrigger>
            </TabsList>

            <TabsContent value="frontend">
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Layout className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-semibold">Développement Frontend</h3>
                </div>
                <div className="space-y-6">
                  {skills.frontend.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="backend">
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Server className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-semibold">Développement Backend</h3>
                </div>
                <div className="space-y-6">
                  {skills.backend.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="tools">
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Code2 className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-semibold">Outils & Technologies</h3>
                </div>
                <div className="space-y-6">
                  {skills.tools.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Code2 className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Mes Projets</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden bg-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Watch Section */}
      <section id="veille" className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <BookMarked className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Veille Technologique</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge>{article.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CalendarDays className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString('fr-FR')}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{article.title}</h3>
                  <p className="text-muted-foreground mb-4">{article.summary}</p>
                  <Button variant="outline" asChild>
                    <a href={article.link} className="flex items-center gap-2">
                      Lire l'article
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Mail className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Contact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-muted-foreground mb-8">
                N'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">{contactInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Téléphone</h3>
                    <p className="text-muted-foreground">{contactInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Localisation</h3>
                    <p className="text-muted-foreground">{contactInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom
                  </label>
                  <Input id="name" placeholder="Votre nom" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="votre@email.com" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Votre message..."
                    className="min-h-[150px]"
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}