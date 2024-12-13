'use client';

import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code2, Database, Layout, Server } from 'lucide-react';

const skills = {
  frontend: [
    { name: 'React/Next.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Tailwind CSS', level: 88 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'SQL', level: 75 },
    { name: 'API Design', level: 85 },
  ],
  tools: [
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 75 },
    { name: 'VS Code', level: 95 },
    { name: 'Figma', level: 70 },
  ],
};

export default function Skills() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Mes Compétences</h1>
        
        <Tabs defaultValue="frontend" className="space-y-8">
          <TabsList className="grid grid-cols-3 w-full max-w-[400px]">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="tools">Outils</TabsTrigger>
          </TabsList>

          <TabsContent value="frontend">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Layout className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold">Développement Frontend</h2>
              </div>
              <div className="space-y-6">
                {skills.frontend.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="backend">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Server className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold">Développement Backend</h2>
              </div>
              <div className="space-y-6">
                {skills.backend.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="tools">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Code2 className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold">Outils & Technologies</h2>
              </div>
              <div className="space-y-6">
                {skills.tools.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}