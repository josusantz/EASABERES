import { ProjectActivity } from '@/types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: ProjectActivity;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
            {project.category}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-green-700 transition-colors">
          {project.title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 leading-relaxed">
          {project.description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;