import { Heart, Users, Sparkles, Award } from 'lucide-react';

export function About() {
  return (
    <div className="bg-gradient-to-br from-primary to-card container mx-auto px-4 py-12 pt-[180px]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-6">Sobre a Larioê Guias</h1>
          <p className="text-xl text-foreground">
            Tradição, qualidade e respeito à cultura afro-brasileira
          </p>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <div className="bg-[#ffffff18] p-8 rounded-lg mb-8">
            <p className="text-foreground leading-relaxed mb-4 text-2xl">
              A <strong>Larioê Guias</strong> nasceu do amor e respeito pela Umbanda e suas tradições sagradas. Trabalhamos com dedicação para oferecer artigos religiosos de alta qualidade, 
              abençoados e preparados com todo carinho e respeito que a fé merece.
            </p>
          </div>
          

          <h2 className="text-4xl mb-6 text-center">Nossos Valores</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#ffffff18] p-8 rounded-lg mb-8">
          <div className="bg-card p-6 rounded-lg shadow-md">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary text-primary-foreground rounded-lg">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg mb-2">Respeito e Tradição</h3>
                <p className="text-accent-foreground">
                  Honramos os ensinamentos dos orixás e guias espirituais em cada produto 
                  e atendimento.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-md">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary text-accent-foreground rounded-lg">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg mb-2">Qualidade Superior</h3>
                <p className="text-accent-foreground">
                  Selecionamos cuidadosamente fornecedores que compartilham nossos valores 
                  de excelência.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-md">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary text-accent-foreground rounded-lg">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg mb-2">Energia Positiva</h3>
                <p className="text-accent-foreground">
                  Todos os produtos são abençoados e preparados com boas vibrações e 
                  intenções puras.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-md">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary text-primary-foreground rounded-lg">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg mb-2">Comunidade</h3>
                <p className="text-accent-foreground">
                  Acreditamos na força da união e no apoio mútuo entre irmãos de fé.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#00000018] text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl mb-4">Nosso Compromisso</h2>
          <p className="text-lg mb-6">
            Comprometemo-nos a continuar oferecendo produtos autênticos, atendimento personalizado 
            e a energia positiva que nossa comunidade merece. Cada venda é uma oportunidade de 
            fortalecer os laços espirituais e contribuir para a jornada de fé de nossos clientes.
          </p>
          <p className="text-xl">
            <strong>Axé para todos! 🙏✨</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
