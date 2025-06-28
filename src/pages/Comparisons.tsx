
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, XCircle, Star, Users, DollarSign, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Comparisons = () => {
  const competitors = [
    {
      id: 'avant-pro',
      name: 'Avant Pro',
      logo: '/lovable-uploads/a6a0c105-5b60-4b29-8594-ead1eb1e5048.png',
      description: 'Plataforma completa mas com interface complexa e alto custo',
      price: 'A partir de R$ 299/mês',
      users: '500+',
      features: {
        positive: [
          'Dashboard completo',
          'Relatórios avançados',
          'Integração com múltiplos marketplaces'
        ],
        negative: [
          'Interface complexa e confusa',
          'Preço elevado para pequenas empresas',
          'Curva de aprendizado alta'
        ]
      },
      anyeAdvantages: [
        'Interface 3x mais intuitiva',
        'Preço 40% mais acessível',
        'Onboarding simplificado'
      ]
    },
    {
      id: 'nubimetrics',
      name: 'Nubimetrics',
      logo: '/lovable-uploads/7f13d4c3-d1e8-492d-9b58-eb29629044bd.png',
      description: 'Bons dados, mas sem automação inteligente e integração limitada',
      price: 'A partir de R$ 199/mês',
      users: '300+',
      features: {
        positive: [
          'Dados precisos de mercado',
          'Análise de concorrência',
          'Histórico de preços'
        ],
        negative: [
          'Falta de automação',
          'Integração limitada',
          'Sem alertas inteligentes'
        ]
      },
      anyeAdvantages: [
        'Automação completa de processos',
        'Integração nativa com todos marketplaces',
        'Alertas inteligentes em tempo real'
      ]
    },
    {
      id: 'mercado-turbo',
      name: 'Mercado Turbo',
      logo: '/lovable-uploads/06944e6f-3c83-4561-92bf-c539a1999282.png',
      description: 'Foco em Mercado Livre, falta suporte para outros marketplaces',
      price: 'A partir de R$ 149/mês',
      users: '200+',
      features: {
        positive: [
          'Especializado em Mercado Livre',
          'Preço acessível',
          'Fácil configuração'
        ],
        negative: [
          'Limitado ao Mercado Livre',
          'Funcionalidades básicas',
          'Sem suporte a Amazon'
        ]
      },
      anyeAdvantages: [
        'Suporte a todos os principais marketplaces',
        'Funcionalidades avançadas',
        'Multi-canal integrado'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-blue/5 to-primary-light/5 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Por que a <span className="text-gradient">Anye</span> é a melhor escolha?
              </h1>
              <p className="text-lg text-neutral-dark mb-8">
                Compare nossa plataforma com as principais alternativas do mercado e descubra 
                por que milhares de empresas escolhem a Anye para otimizar suas vendas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Comparisons Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-12">
              {competitors.map((competitor, index) => (
                <motion.div
                  key={competitor.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Competitor Info */}
                    <div className="p-8 border-r border-neutral-light">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center shadow-sm border mr-4">
                          <img 
                            src={competitor.logo} 
                            alt={competitor.name}
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{competitor.name}</h3>
                          <p className="text-neutral-dark">{competitor.description}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2">
                          <DollarSign className="text-green-500 h-5 w-5" />
                          <span className="text-sm">{competitor.price}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="text-blue-500 h-5 w-5" />
                          <span className="text-sm">{competitor.users} usuários</span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-green-600">Pontos Positivos</h4>
                          <ul className="space-y-1">
                            {competitor.features.positive.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="text-green-500 h-4 w-4 mt-0.5 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 text-red-600">Limitações</h4>
                          <ul className="space-y-1">
                            {competitor.features.negative.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <XCircle className="text-red-500 h-4 w-4 mt-0.5 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Anye Advantages */}
                    <div className="p-8 bg-gradient-to-br from-primary-blue/5 to-primary-light/5">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-primary-blue flex items-center justify-center mr-4">
                          <img 
                            src="/lovable-uploads/235271d7-533d-4ed6-b58a-03c7ab7b4a3b.png" 
                            alt="Anye"
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-primary-blue">Anye</h3>
                          <p className="text-neutral-dark">A solução completa e intuitiva</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="text-primary-blue h-5 w-5" />
                          <span className="font-semibold text-primary-blue">Vantagens da Anye</span>
                        </div>
                        <ul className="space-y-2">
                          {competitor.anyeAdvantages.map((advantage, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Star className="text-amber-500 h-4 w-4 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{advantage}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-4">
                        <p className="text-sm text-neutral-dark mb-3">
                          Veja a comparação detalhada e descubra por que a Anye é superior:
                        </p>
                        <Link 
                          to={`/anye-vs-${competitor.id.replace('-', '-')}`}
                          className="inline-flex items-center gap-2 text-primary-blue hover:text-primary-light transition-colors font-medium"
                        >
                          Ver comparação completa
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-16 bg-gradient-to-r from-primary-blue to-primary-light rounded-2xl p-12 text-white"
            >
              <h2 className="text-3xl font-bold mb-4">Pronto para fazer a escolha certa?</h2>
              <p className="text-lg mb-8 opacity-90">
                Junte-se a milhares de empresas que já escolheram a Anye para revolucionar suas vendas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://app.anye.com.br/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary-blue hover:bg-gray-100 transition-colors px-8 py-3 rounded-lg font-medium"
                >
                  Começar Grátis
                </a>
                <Link 
                  to="/contato"
                  className="border border-white/30 hover:bg-white/10 transition-colors px-8 py-3 rounded-lg font-medium"
                >
                  Falar com Especialista
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Comparisons;
