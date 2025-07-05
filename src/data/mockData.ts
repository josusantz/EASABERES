import { NewsItem, ProjectActivity, TeamMember, Partner } from '../types';

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'II GERSIN - Encontro de Gestão e Sustentabilidade',
    excerpt: 'Participe do maior evento de gestão sustentável da região amazônica.',
    date: '2024-03-15',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: '2',
    title: 'Nova Parceria com Comunidades Quilombolas',
    excerpt: 'Ampliando nossos trabalhos com saberes tradicionais.',
    date: '2024-03-10',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'Projeto de Educação Ambiental nas Escolas',
    excerpt: 'Levando conhecimento sustentável para jovens estudantes.',
    date: '2024-03-05',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const projectActivities: ProjectActivity[] = [
  {
    id: '1',
    title: 'Oficina de Plantas Medicinais',
    description: 'Resgatando o conhecimento tradicional sobre plantas da Amazônia.',
    image: 'https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Saberes Tradicionais'
  },
  {
    id: '2',
    title: 'Educação Ambiental em Comunidades Rurais',
    description: 'Promovendo práticas sustentáveis e consciência ambiental.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Educação Ambiental'
  },
  {
    id: '3',
    title: 'Documentário: Vozes da Tradição',
    description: 'Registrando histórias e saberes das comunidades tradicionais.',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Documentação'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Prof. Nixon Silva',
    role: 'Coordenador do Projeto',
    bio: 'Especialista em Educação Ambiental e Sustentabilidade, com mais de 15 anos de experiência.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
    lattes: 'http://lattes.cnpq.br/example1',
    linkedin: 'https://linkedin.com/in/example1',
    category: 'professor'
  },
  {
    id: '2',
    name: 'Profª. Daniana Santos',
    role: 'Professora Orientadora',
    bio: 'Doutora em Saberes Tradicionais e Antropologia Ambiental.',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
    lattes: 'http://lattes.cnpq.br/example2',
    linkedin: 'https://linkedin.com/in/example2',
    category: 'professor'
  },
  {
    id: '3',
    name: 'Ana Costa',
    role: 'Bolsista de Iniciação Científica',
    bio: 'Estudante de Biologia, pesquisadora em etnobotânica.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'bolsista'
  }
];

export const partners: Partner[] = [
  {
    id: '1',
    name: 'LabX',
    logo: 'https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg?auto=compress&cs=tinysrgb&w=200',
    url: 'https://labx.ufpa.br'
  },
  {
    id: '2',
    name: 'GEMAR',
    logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200',
    url: 'https://gemar.ufpa.br'
  },
  {
    id: '3',
    name: 'PROEX',
    logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=200',
    url: 'https://proex.ufpa.br'
  }
];