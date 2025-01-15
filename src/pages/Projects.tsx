import React from 'react';
import { Radio, Ship, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Le Grand Berger",
      icon: Radio,
      description: "Site web pour une radio étudiante permettant la diffusion de contenus audio et la gestion de playlists.",
      features: [
        "Streaming audio en direct",
        "Gestion des programmes",
        "Interface administrateur",
        "Calendrier des émissions",
      ],
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=80",
    },
    {
      title: "MarieTeam",
      icon: Ship,
      description: "Plateforme de réservation de trajets en ferry avec système de gestion des liaisons maritimes.",
      features: [
        "Réservation en ligne",
        "Gestion des horaires",
        "Système de paiement",
        "Espace client",
      ],
      image: "https://images.unsplash.com/photo-1519666336592-e225a99dcd2f?w=800&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Projets</h1>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <project.icon className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-semibold text-gray-800">{project.title}</h2>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Fonctionnalités principales:</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-4 flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Voir le projet
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}