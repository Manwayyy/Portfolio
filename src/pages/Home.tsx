import React from 'react';
import { GraduationCap, Mail, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="glass-effect rounded-lg p-8 glow-effect">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold gradient-text mb-2">Portfolio BTS SIO</h1>
            <div className="flex items-center space-x-4 text-gray-300">
              <div className="flex items-center">
                <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                <span>BTS SIO SLAM</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                <span>France</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                <span>alexander.kalinin.pro@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold gradient-text mb-4">À propos de moi</h2>
          <p className="text-gray-300 mb-6">
            Étudiant passionné en BTS SIO (Services Informatiques aux Organisations), 
            spécialisation SLAM (Solutions Logicielles et Applications Métiers). 
            Je développe mes compétences en développement d'applications et en programmation 
            tout en travaillant sur des projets concrets.
          </p>

          <h2 className="text-2xl font-semibold gradient-text mb-4">Objectifs professionnels</h2>
          <p className="text-gray-300">
            Mon objectif est de devenir un développeur polyvalent, capable de concevoir 
            et développer des applications innovantes et performantes répondant aux besoins 
            des entreprises.
          </p>
        </div>
      </div>
    </div>
  );
}