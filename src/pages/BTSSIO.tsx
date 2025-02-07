import React from 'react';
import { Download, Building, GraduationCap } from 'lucide-react';

export default function BTSSIO() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="glass-effect rounded-lg p-8 glow-effect">
        <h1 className="text-3xl font-bold gradient-text mb-8">BTS SIO à Gaston Berger</h1>

        {/* TC7 Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold gradient-text mb-4">TC7</h2>
          <div className="flex gap-4">
            <a
              href="/tutoriels/glpi-installation.pdf"
              className="inline-flex items-center px-4 py-2 bg-primary text-secondary font-semibold rounded-lg hover:bg-primary-light transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Tutoriel GLPI
            </a>
            <a
              href="/tutoriels/haproxy-installation.pdf"
              className="inline-flex items-center px-4 py-2 bg-primary text-secondary font-semibold rounded-lg hover:bg-primary-light transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Tutoriel HAPROXY
            </a>
          </div>
        </section>

        {/* Atelier Professionnel Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold gradient-text mb-4">Atelier Professionnel</h2>
          <div className="grid gap-6">
            <div className="glass-effect rounded-lg overflow-hidden border border-primary/10">
              <div className="relative h-48">
                <img
                  src="Portfolio/image/LeGrandBerger.png"
                  alt="Le Grand Berger"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold gradient-text mb-2">Le Grand Berger</h3>
                <p className="text-gray-300 mb-4">Site web pour une radio étudiante permettant la diffusion de contenus audio et la gestion de playlists.</p>
              </div>
            </div>
            <div className="glass-effect rounded-lg overflow-hidden border border-primary/10">
              <div className="relative h-48">
                <img
                  src="Potfolio/image.MarieTeam.png"
                  alt="MarieTeam"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold gradient-text mb-2">MarieTeam</h3>
                <p className="text-gray-300 mb-4">Plateforme de réservation de trajets en ferry avec système de gestion des liaisons maritimes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stage Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold gradient-text mb-4">Stage</h2>
          <div className="glass-effect rounded-lg p-6 border border-primary/10">
            <div className="flex items-center mb-4">
              <Building className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold gradient-text">AFPI - Centre de Formation</h3>
            </div>
            <p className="text-gray-300 mb-4">
              L'AFPI est un centre de Formation situer à Marcq-en-Baroeul cet établissement se spécialise 
              dans la formation professionnelle dans divers secteurs industriels et technologiques. 
              Il propose une approche pédagogique axée sur l'apprentissage pratique pour préparer ses 
              étudiants au monde professionnel.
            </p>
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-primary mb-2">Missions (13 Mai 2024 - 28 Juin 2024)</h4>
              <p className="text-gray-300">
                Durant mon stage, j'ai du apprendre a utiliser une nouvelle technologie appeler PowerApps 
                dans le cadre de faire une application de gestion de frais pour l'entreprise.
              </p>
            </div>
            <a
              href="/rapports/rapport-stage.pdf"
              className="inline-flex items-center px-4 py-2 bg-primary text-secondary font-semibold rounded-lg hover:bg-primary-light transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Télécharger le rapport de stage
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}