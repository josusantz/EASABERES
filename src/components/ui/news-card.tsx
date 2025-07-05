import { NewsItem } from '@/types';
import { Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface NewsCardProps {
  news: NewsItem;
  featured?: boolean;
}

const NewsCard = ({ news, featured = false }: NewsCardProps) => {
  return (
    <Card className={`overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
      featured ? 'md:col-span-2 md:row-span-2' : ''
    }`}>
      <div className="relative">
        <img
          src={news.image}
          alt={news.title}
          className={`w-full object-cover ${featured ? 'h-64' : 'h-48'}`}
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <div className="flex items-center space-x-1 text-sm text-green-700">
            <Calendar className="h-3 w-3" />
            <span>{new Date(news.date).toLocaleDateString('pt-BR')}</span>
          </div>
        </div>
      </div>
      <CardHeader className="pb-2">
        <h3 className={`font-semibold text-gray-900 ${featured ? 'text-xl' : 'text-lg'}`}>
          {news.title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 leading-relaxed">
          {news.excerpt}
        </p>
      </CardContent>
    </Card>
  );
};

export default NewsCard;