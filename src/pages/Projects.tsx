import { useState } from 'react';
import { Play, FileText, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ui/project-card';
import { projectActivities } from '@/data/mockData';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects = selectedCategory === 'all' 
    ? projectActivities 
    : projectActivities.filter(project => project.category === selectedCategory);

  const meetingTexts = [
    {
      id: '1',
      title: 'Educação Ambiental: Conceitos e Práticas',
      author: 'Dr. Silva Santos',
      theme: 'Fundamentos da Educação Ambiental',
      date: '2024-02-15'
    },
    {
      id: '2',
      title: 'Saberes Tradicionais da Amazônia',
      author: 'Profª. Ana Ribeiro',
      theme: 'Etnobotânica e Conhecimento Popular',
      date: '2024-02-20'
    },
    {
      id: '3',
      title: 'Sustentabilidade em Comunidades Rurais',
      author: 'Dr. Carlos Mendes',
      theme: 'Práticas Sustentáveis',
      date: '2024-02-25'
    }
  ];

  const meetingVideos = [
    {
      id: '1',
      title: 'Reunião 1: Introdução ao Projeto',
      description: 'Apresentação dos objetivos e metodologia do projeto',
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '45:32'
    },
    {
      id: '2',
      title: 'Reunião 2: Saberes Tradicionais',
      description: 'Discussão sobre conhecimentos tradicionais amazônicos',
      thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '52:18'
    },
    {
      id: '3',
      title: 'Reunião 3: Educação Ambiental',
      description: 'Práticas pedagógicas em educação ambiental',
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '38:45'
    }
  ];

  const presentationSlides = [
    {
      id: '1',
      title: 'Metodologia do Projeto',
      description: 'Apresentação da abordagem metodológica adotada',
      pages: 24,
      date: '2024-02-10'
    },
    {
      id: '2',
      title: 'Resultados Preliminares',
      description: 'Primeiros resultados obtidos nas comunidades',
      pages: 18,
      date: '2024-02-28'
    },
    {
      id: '3',
      title: 'Planejamento 2024',
      description: 'Ações e metas para o próximo semestre',
      pages: 15,
      date: '2024-03-05'
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Nossos Projetos</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Conheça as atividades e iniciativas que desenvolvemos para promover a 
          educação ambiental e valorizar os saberes tradicionais das comunidades.
        </p>
      </div>

      {/* Project Overview */}
      <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-lg p-8 mb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sobre o Projeto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-3">Objetivos</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Promover a educação ambiental em comunidades tradicionais</li>
                <li>• Valorizar e documentar saberes tradicionais</li>
                <li>• Integrar conhecimento científico e popular</li>
                <li>• Formar multiplicadores ambientais</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-700 mb-3">Público-Alvo</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Estudantes da UFPA de diversos cursos</li>
                <li>• Professores e pesquisadores</li>
                <li>• Lideranças comunitárias</li>
                <li>• Gestores escolares</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="atividades" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="atividades">Atividades</TabsTrigger>
          <TabsTrigger value="textos">Textos</TabsTrigger>
          <TabsTrigger value="videos">Vídeos</TabsTrigger>
          <TabsTrigger value="slides">Slides</TabsTrigger>
        </TabsList>

        <TabsContent value="atividades" className="space-y-8">
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
            >
              Todas
            </Button>
            <Button
              variant={selectedCategory === 'Educação Ambiental' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('Educação Ambiental')}
            >
              Educação Ambiental
            </Button>
            <Button
              variant={selectedCategory === 'Saberes Tradicionais' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('Saberes Tradicionais')}
            >
              Saberes Tradicionais
            </Button>
            <Button
              variant={selectedCategory === 'Documentação' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('Documentação')}
            >
              Documentação
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="textos" className="space-y-6">
          {meetingTexts.map((text) => (
            <Card key={text.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{text.title}</CardTitle>
                    <p className="text-sm text-gray-600 mt-1">por {text.author}</p>
                  </div>
                  <Badge variant="outline">{text.theme}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(text.date).toLocaleDateString('pt-BR')}
                  </span>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Ler Texto
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="videos" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meetingVideos.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button size="lg" className="bg-white/20 backdrop-blur-sm">
                      <Play className="h-6 w-6 mr-2" />
                      Assistir
                    </Button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="slides" className="space-y-6">
          {presentationSlides.map((slide) => (
            <Card key={slide.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{slide.title}</CardTitle>
                    <p className="text-sm text-gray-600 mt-1">{slide.description}</p>
                  </div>
                  <Badge variant="outline">{slide.pages} páginas</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(slide.date).toLocaleDateString('pt-BR')}
                  </span>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      Visualizar
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Projects;