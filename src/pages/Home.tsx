import React from 'react';
import { GraduationCap, Mail, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Portfolio BTS SIO</h1>
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                <span>BTS SIO SISR</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>France</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>contact@example.com</span>
              </div>
            </div>
          </div>
          <img
            src="https://www.w3bai.com/w3css/img_avatar3.png"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">À propos de moi</h2>
          <p className="text-gray-600 mb-6">
            Étudiant passionné en BTS SIO (Services Informatiques aux Organisations), 
            spécialisation SISR (Solutions d'Infrastructure, Systèmes et Réseaux). 
            Je développe mes compétences en administration système, réseaux et sécurité 
            informatique tout en travaillant sur des projets concrets.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Objectifs professionnels</h2>
          <p className="text-gray-600">
            Mon objectif est de devenir un professionnel polyvalent dans le domaine 
            des infrastructures informatiques, capable de concevoir, maintenir et 
            sécuriser des solutions adaptées aux besoins des entreprises.
          </p>
        </div>
      </div>
    </div>
  );
}