import React from 'react';
import { NavLink } from 'react-router-dom';
import { Laptop, Home, Brain, GraduationCap } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { path: '/', text: 'Accueil', icon: Home },
    { path: '/bts-sio', text: 'BTS SIO', icon: GraduationCap },
    { path: '/veille-technologique', text: 'Veille Technologique', icon: Laptop },
    { path: '/competences', text: 'Compétences', icon: Brain },
  ];

  return (
    <nav className="sticky top-0 z-50 py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="glass-effect rounded-full px-8 py-4 border border-primary/20 backdrop-blur-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `group flex items-center space-x-2 text-gray-300 transition-all duration-300 hover:text-primary ${
                      isActive ? 'text-primary scale-110' : ''
                    }`
                  }
                >
                  <item.icon className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative">
                    {item.text}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}