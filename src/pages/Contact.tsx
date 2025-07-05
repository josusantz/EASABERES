import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Instagram, Linkedin, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(5, 'Assunto deve ter pelo menos 5 caracteres'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactForm) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Mensagem enviada com sucesso!',
        description: 'Entraremos em contato em breve.',
      });
      reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Tem alguma dúvida, sugestão ou deseja colaborar com nossos projetos? 
          Estamos aqui para conversar e construir juntos um futuro mais sustentável.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Envie uma Mensagem</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name">Nome Completo</Label>
                <Input
                  id="name"
                  {...register('name')}
                  placeholder="Seu nome completo"
                  className="mt-1"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  placeholder="seu@email.com"
                  className="mt-1"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="subject">Assunto</Label>
                <Input
                  id="subject"
                  {...register('subject')}
                  placeholder="Assunto da sua mensagem"
                  className="mt-1"
                />
                {errors.subject && (
                  <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  {...register('message')}
                  placeholder="Escreva sua mensagem aqui..."
                  rows={6}
                  className="mt-1"
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações de Contato</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-semibold">Endereço</p>
                  <p className="text-gray-600">
                    Universidade Federal do Pará<br />
                    Rua Augusto Corrêa, 01<br />
                    Belém - PA, CEP 66075-110
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">educacaoambiental@ufpa.br</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-semibold">Telefone</p>
                  <p className="text-gray-600">(91) 3201-7000</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Redes Sociais</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" asChild>
                  <a href="mailto:educacaoambiental@ufpa.br">
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-4 w-4 mr-2" />
                    Instagram
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Horário de Atendimento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-gray-600">
                <p><strong>Segunda a Sexta:</strong> 8h às 17h</p>
                <p><strong>Sábados:</strong> 8h às 12h</p>
                <p><strong>Domingos e Feriados:</strong> Fechado</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 bg-gradient-to-r from-green-50 to-amber-50 rounded-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600">
            Algumas das perguntas mais comuns que recebemos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Como posso participar dos projetos?
            </h3>
            <p className="text-gray-600 text-sm">
              Estudantes da UFPA podem se inscrever através do nosso email 
              oficial. Também aceitamos colaboradores externos interessados 
              em educação ambiental.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Vocês oferecem cursos ou workshops?
            </h3>
            <p className="text-gray-600 text-sm">
              Sim! Organizamos regularmente oficinas e cursos sobre educação 
              ambiental e saberes tradicionais. Acompanhe nosso mural de notícias.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Como posso propor uma parceria?
            </h3>
            <p className="text-gray-600 text-sm">
              Entre em contato conosco através do formulário ou email descrevendo 
              sua proposta. Avaliaremos todas as oportunidades de colaboração.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Vocês trabalham com escolas?
            </h3>
            <p className="text-gray-600 text-sm">
              Sim! Desenvolvemos projetos específicos para escolas públicas e 
              privadas, adaptando o conteúdo para diferentes faixas etárias.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;