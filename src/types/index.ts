export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  featured?: boolean;
}

export interface ProjectActivity {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  lattes?: string;
  linkedin?: string;
  category: 'professor' | 'colaborador' | 'bolsista';
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  url?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}