import { Leaf, Users, BookOpen, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Concepts = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Conceitos Fundamentais</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Entenda os pilares que fundamentam nosso trabalho: a Educação Ambiental 
          e os Saberes da Tradição como elementos essenciais para a construção 
          de uma sociedade mais sustentável.
        </p>
      </div>

      <Tabs defaultValue="educacao-ambiental" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="educacao-ambiental">Educação Ambiental</TabsTrigger>
          <TabsTrigger value="saberes-tradicao">Saberes da Tradição</TabsTrigger>
        </TabsList>

        <TabsContent value="educacao-ambiental" className="space-y-8">
          <div className="bg-green-50 rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-green-600 rounded-full">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-green-800">O que é Educação Ambiental?</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A Educação Ambiental é um processo educativo que visa formar cidadãos 
              críticos e conscientes sobre as questões ambientais, promovendo a 
              compreensão das relações entre sociedade e natureza. Mais do que 
              transmitir conhecimentos, busca transformar comportamentos e atitudes 
              em prol da sustentabilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-6 w-6 text-green-600" />
                  <span>Princípios Fundamentais</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Desenvolvimento de consciência crítica sobre questões ambientais</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Promoção da participação ativa na sociedade</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Integração entre conhecimento científico e experiências práticas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Valorização da diversidade cultural e biológica</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lightbulb className="h-6 w-6 text-green-600" />
                  <span>Objetivos Principais</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Formar cidadãos ambientalmente responsáveis</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Promover mudanças de comportamento sustentáveis</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Desenvolver competências para resolução de problemas ambientais</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Incentivar a participação comunitária</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="saberes-tradicao" className="space-y-8">
          <div className="bg-amber-50 rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-amber-600 rounded-full">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-amber-800">O que são Saberes da Tradição?</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Os Saberes da Tradição representam o conjunto de conhecimentos, práticas 
              e valores transmitidos de geração em geração pelas comunidades tradicionais. 
              Estes saberes, construídos através da experiência direta com o ambiente, 
              constituem um patrimônio cultural invaluável para a sustentabilidade e 
              conservação ambiental.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-6 w-6 text-amber-600" />
                  <span>Características</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Transmissão oral e prática entre gerações</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Conhecimento empírico sobre o meio ambiente</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Práticas sustentáveis de manejo dos recursos naturais</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Integração entre aspectos culturais, sociais e ambientais</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lightbulb className="h-6 w-6 text-amber-600" />
                  <span>Importância</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Contribuem para a conservação da biodiversidade</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Oferecem alternativas sustentáveis de desenvolvimento</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Representam patrimônio cultural da humanidade</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Complementam o conhecimento científico</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Integration Section */}
      <div className="mt-16 bg-gradient-to-r from-green-50 to-amber-50 rounded-lg p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            A Integração dos Saberes
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Nosso trabalho busca promover o diálogo entre a Educação Ambiental e os 
            Saberes da Tradição, reconhecendo que ambos são fundamentais para a 
            construção de uma sociedade mais justa e sustentável. A integração 
            desses conhecimentos permite uma compreensão mais completa e holística 
            das questões ambientais, valorizando tanto a ciência quanto a sabedoria 
            tradicional das comunidades locais.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Concepts;