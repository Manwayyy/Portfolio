import React from 'react';
import { Stethoscope, Brain, Database, Shield } from 'lucide-react';

export default function TechWatch() {
  const articles = [
    {
      title: "L'Intelligence Artificielle en médecine",
      icon: Brain,
      content: "L'IA révolutionne le diagnostic médical en analysant les images médicales avec une précision accrue, permettant une détection précoce des maladies.",
    },
    {
      title: "Télémédecine et connectivité",
      icon: Stethoscope,
      content: "Les consultations à distance et le suivi des patients sont facilités par les nouvelles technologies de communication, améliorant l'accès aux soins.",
    },
    {
      title: "Gestion des données médicales",
      icon: Database,
      content: "Les systèmes d'information de santé permettent un meilleur partage des données entre professionnels tout en assurant la confidentialité des patients.",
    },
    {
      title: "Cybersécurité en santé",
      icon: Shield,
      content: "La protection des données médicales est cruciale face aux cybermenaces croissantes dans le secteur de la santé.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Comment l'informatique peut contribuer à la médecine ?
        </h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article, index) => (
            <div key={index} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <article.icon className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">{article.title}</h2>
              </div>
              <p className="text-gray-600">{article.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Impact sur l'avenir de la médecine
          </h3>
          <p className="text-gray-600">
            L'informatique continue de transformer le secteur médical, offrant de nouvelles 
            possibilités pour améliorer les soins aux patients, optimiser les processus 
            médicaux et faciliter la recherche médicale. Cette synergie entre technologie 
            et médecine ouvre la voie à une médecine plus précise, personnalisée et accessible.
          </p>
        </div>
      </div>
    </div>
  );
}