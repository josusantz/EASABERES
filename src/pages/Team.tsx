import { useState } from 'react';
import { Button } from '@/components/ui/button';
import TeamCard from '@/components/ui/team-card';
import { teamMembers } from '@/data/mockData';

const Team = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredMembers = selectedCategory === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.category === selectedCategory);

  const categories = {
    all: 'Todos',
    professor: 'Professores',
    colaborador: 'Colaboradores',
    bolsista: 'Bolsistas'
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Nossa Equipe</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Conheça os professores, colaboradores e bolsistas que tornam possível 
          a realização dos nossos projetos de educação ambiental e valorização 
          dos saberes tradicionais.
        </p>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {Object.entries(categories).map(([key, label]) => (
          <Button
            key={key}
            variant={selectedCategory === key ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(key)}
          >
            {label}
          </Button>
        ))}
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>

      {/* Statistics */}
      <div className="mt-16 bg-gradient-to-r from-green-50 to-amber-50 rounded-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Diversidade e Colaboração
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nossa equipe multidisciplinar reúne especialistas de diferentes áreas 
            do conhecimento, promovendo uma abordagem integrada e inovadora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-700 mb-2">4</div>
            <div className="text-gray-600">Cursos Representados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-700 mb-2">150+</div>
            <div className="text-gray-600">Participantes Ativos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-700 mb-2">15+</div>
            <div className="text-gray-600">Disciplinas Envolvidas</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Interessado em Participar?
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Estamos sempre abertos a novas colaborações. Se você tem interesse em 
          educação ambiental e saberes tradicionais, entre em contato conosco.
        </p>
        <Button size="lg" asChild>
          <a href="/contato">
            Entre em Contato
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Team;