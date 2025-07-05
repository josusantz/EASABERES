import { Sprout, Users, BookOpen, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import NewsCard from '@/components/ui/news-card';
import { newsItems } from '@/data/mockData';

const Home = () => {
  const featuredNews = newsItems.find(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Educação Ambiental & Saberes da Tradição
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Este espaço foi criado com o objetivo de divulgar projetos vinculados à 
              Universidade Federal do Pará (UFPA), voltados à Educação Ambiental e aos 
              Saberes da Tradição, promovendo o diálogo entre o conhecimento científico 
              e os saberes populares.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Sprout className="h-5 w-5" />
                <span>Sustentabilidade</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Users className="h-5 w-5" />
                <span>Comunidade</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <BookOpen className="h-5 w-5" />
                <span>Educação</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2">
                <Users className="h-6 w-6 text-green-600" />
                <span>Participantes</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-700 mb-2">150+</div>
              <p className="text-gray-600">Alunos e professores de 4 cursos distintos</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2">
                <BookOpen className="h-6 w-6 text-green-600" />
                <span>Projetos</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-700 mb-2">25+</div>
              <p className="text-gray-600">Atividades e iniciativas realizadas</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2">
                <Award className="h-6 w-6 text-green-600" />
                <span>Impacto</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-700 mb-2">5+</div>
              <p className="text-gray-600">Comunidades beneficiadas</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* News Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Mural de Notícias</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Acompanhe as últimas atualizações e eventos dos nossos projetos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredNews && (
            <div className="md:col-span-2">
              <NewsCard news={featuredNews} featured />
            </div>
          )}
          <div className="space-y-6">
            {regularNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Junte-se à Nossa Missão
            </h2>
            <p className="text-xl mb-8">
              Faça parte da construção de um futuro mais sustentável através da 
              educação ambiental e valorização dos saberes tradicionais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contato"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Entre em Contato
              </a>
              <a
                href="/projetos"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Conheça os Projetos
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;