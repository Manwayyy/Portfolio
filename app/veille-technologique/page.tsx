'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const articles = [
  {
    title: 'L\'Impact de l\'IA sur le Développement Web',
    date: '2024-01-15',
    category: 'Intelligence Artificielle',
    summary: 'Analyse des dernières avancées en IA et leur impact sur le développement web moderne.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    link: '#',
  },
  {
    title: 'Web Assembly: Le Futur du Web',
    date: '2024-01-10',
    category: 'Technologies Web',
    summary: 'Exploration des possibilités offertes par WebAssembly pour les applications web performantes.',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80',
    link: '#',
  },
];

export default function TechWatch() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Veille Technologique</h1>
          <p className="text-muted-foreground text-lg">
            Découvrez mes analyses et réflexions sur les dernières tendances technologiques.
          </p>
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
                <h2 className="text-2xl font-semibold mb-3">{article.title}</h2>
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
    </div>
  );
}