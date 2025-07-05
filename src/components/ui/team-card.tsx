import { TeamMember } from '@/types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, User } from 'lucide-react';

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
          <User className="h-4 w-4 text-green-700" />
        </div>
      </div>
      <CardHeader className="pb-2">
        <h3 className="font-semibold text-lg text-gray-900">{member.name}</h3>
        <p className="text-green-700 font-medium">{member.role}</p>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {member.bio}
        </p>
        <div className="flex flex-wrap gap-2">
          {member.lattes && (
            <Button variant="outline" size="sm" asChild>
              <a href={member.lattes} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3 w-3 mr-1" />
                Lattes
              </a>
            </Button>
          )}
          {member.linkedin && (
            <Button variant="outline" size="sm" asChild>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3 w-3 mr-1" />
                LinkedIn
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamCard;