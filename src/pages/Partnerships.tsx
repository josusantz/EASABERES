import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { partners } from '@/data/mockData';

const Partnerships = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Parcerias</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Nossos projetos são fortalecidos através de parcerias estratégicas com 
          laboratórios, grupos de pesquisa e instituições que compartilham nossa 
          visão de sustentabilidade e educação ambiental.
        </p>
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {partners.map((partner) => (
          <Card key={partner.id} className="hover:shadow-lg transition-all duration-300 group">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-24 h-24 object-cover rounded-full mx-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardTitle className="text-lg text-center">{partner.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              {partner.url && (
                <Button variant="outline" size="sm" asChild>
                  <a href={partner.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visitar Site
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Partnership Types */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tipos de Parcerias</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Parcerias Institucionais</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Laboratórios de pesquisa da UFPA</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Grupos de estudo e pesquisa</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Programas de extensão universitária</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Institutos de pesquisa regional</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-amber-50 border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-800">Parcerias Comunitárias</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Comunidades quilombolas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Povos indígenas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Comunidades ribeirinhas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Escolas públicas municipais</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Benefits of Partnership */}
      <div className="mt-16 bg-gradient-to-r from-green-50 to-amber-50 rounded-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Benefícios das Parcerias
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Através das parcerias, conseguimos amplificar o impacto dos nossos 
            projetos e promover uma troca rica de conhecimentos e experiências.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-700 mb-2">+</div>
            <div className="font-semibold text-gray-900 mb-2">Recursos Compartilhados</div>
            <div className="text-gray-600 text-sm">
              Acesso a equipamentos, laboratórios e infraestrutura
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-700 mb-2">⚡</div>
            <div className="font-semibold text-gray-900 mb-2">Expertise Diversificada</div>
            <div className="text-gray-600 text-sm">
              Conhecimentos especializados de diferentes áreas
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-700 mb-2">🤝</div>
            <div className="font-semibold text-gray-900 mb-2">Rede de Contatos</div>
            <div className="text-gray-600 text-sm">
              Expansão da rede de colaboradores e parceiros
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Interessado em ser nosso Parceiro?
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Estamos sempre abertos a novas parcerias que compartilhem nossos 
          valores e objetivos. Entre em contato para discutirmos oportunidades 
          de colaboração.
        </p>
        <Button size="lg" asChild>
          <a href="/contato">
            Propor Parceria
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Partnerships;