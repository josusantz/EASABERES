import { Link } from 'react-router-dom';
import { Mail, Instagram, Linkedin, Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-green-600 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">UFPA</h3>
            </div>
            <p className="text-green-100 mb-4">
              Promovendo o diálogo entre conhecimento científico e saberes populares
              através da educação ambiental.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:contato@ufpa.br" className="text-green-200 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-green-200 hover:text-white transition-colors">
                Início
              </Link>
              <Link to="/conceitos" className="block text-green-200 hover:text-white transition-colors">
                Conceitos
              </Link>
              <Link to="/projetos" className="block text-green-200 hover:text-white transition-colors">
                Projetos
              </Link>
              <Link to="/equipe" className="block text-green-200 hover:text-white transition-colors">
                Equipe
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-green-200">
              <p>Universidade Federal do Pará</p>
              <p>Belém - PA</p>
              <p>contato@ufpa.br</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-200">
          <p>&copy; 2024 UFPA - Educação Ambiental e Saberes da Tradição. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;