import React from 'react';
import { Server, Code, Shield, Users } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Infrastructure & Réseaux",
      icon: Server,
      skills: [
        "Administration Windows Server",
        "Configuration réseau TCP/IP",
        "Virtualisation (VMware, Hyper-V)",
        "Services réseau (DNS, DHCP)",
      ]
    },
    {
      title: "Développement",
      icon: Code,
      skills: [
        "HTML/CSS/JavaScript",
        "PHP/MySQL",
        "Python",
        "Git/GitHub",
      ]
    },
    {
      title: "Sécurité",
      icon: Shield,
      skills: [
        "Pare-feu & VPN",
        "Sécurité des réseaux",
        "Gestion des accès",
        "Sauvegarde & restauration",
      ]
    },
    {
      title: "Gestion de projet",
      icon: Users,
      skills: [
        "Méthodes agiles",
        "Documentation technique",
        "Support utilisateur",
        "Travail d'équipe",
      ]
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Compétences</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6 border rounded-lg">
              <div className="flex items-center mb-4">
                <category.icon className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">{category.title}</h2>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}