import React from 'react';
import { NavLink } from 'react-router-dom';
import { Laptop, Home, Brain, FolderGit2 } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { path: '/', text: 'Accueil', icon: Home },
    { path: '/veille-technologique', text: 'Veille Technologique', icon: Laptop },
    { path: '/competences', text: 'Compétences', icon: Brain },
    { path: '/projets', text: 'Projets', icon: FolderGit2 },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors ${
                    isActive ? 'text-blue-600' : ''
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span>{item.text}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}