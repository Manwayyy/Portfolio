import React from 'react';
import { Code } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Développement",
      icon: Code,
      skills: [
        "HTML/CSS/JavaScript",
        "PHP/MySQL",
        "Python",
        "Git/GitHub",
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="glass-effect rounded-lg p-8 glow-effect">
        <h1 className="text-3xl font-bold gradient-text mb-8">Compétences</h1>
        
        <div className="grid gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-effect p-6 rounded-lg border border-primary/10">
              <div className="flex items-center mb-4">
                <category.icon className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-xl font-semibold gradient-text">{category.title}</h2>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
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