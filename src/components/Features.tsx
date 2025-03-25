
import React, { useState } from 'react';
import { 
  Users, 
  Puzzle, 
  ShoppingCart, 
  BrainCircuit, 
  Bell, 
  ArrowRight,
  Check,
  ChevronsUp,
  Sparkles,
  Plus
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const featureSections = [
  {
    id: 'suppliers',
    title: 'Gestão de Fornecedores',
    description: 'Otimize sua cadeia de suprimentos com dados confiáveis e insights valiosos.',
    icon: Users,
    color: 'from-blue-500/20 to-blue-700/20',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    bgColor: 'bg-blue-50',
    features: [
      {
        title: 'Painel de Fornecedores',
        description: 'Gerencie seus fornecedores de forma centralizada, com métricas de performance e confiabilidade.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
        benefits: [
          'Análise de Desempenho',
          'Gestão de Contratos',
          'Histórico de Pedidos',
          'Alertas de Atrasos'
        ]
      }
    ]
  },
  {
    id: 'purchasing',
    title: 'Compras Inteligentes',
    description: 'Tome decisões baseadas em dados para compras mais rentáveis e estratégicas.',
    icon: ShoppingCart,
    color: 'from-purple-500/20 to-purple-700/20',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-200',
    bgColor: 'bg-purple-50',
    features: [
      {
        title: 'Painel de Compras',
        description: 'Visualize oportunidades de compra com comparativos de preços entre diferentes fornecedores.',
        image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=800&auto=format&fit=crop',
        benefits: [
          'Recomendações de Compra',
          'Comparativo de Preços',
          'Previsão de Demanda',
          'Alertas de Oportunidades'
        ]
      }
    ]
  },
  {
    id: 'auto',
    title: 'Autopeças & Compatibilidade',
    description: 'Soluções especializadas para o setor automotivo com gestão avançada de compatibilidade.',
    icon: Puzzle,
    color: 'from-green-500/20 to-green-700/20',
    textColor: 'text-green-600', 
    borderColor: 'border-green-200',
    bgColor: 'bg-green-50',
    features: [
      {
        title: 'Compatibilidade Autoparts',
        description: 'Sistema avançado de verificação de compatibilidade para o setor de autopeças.',
        image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop',
        benefits: [
          'Banco de Dados de Veículos',
          'Verificação de Compatibilidade',
          'Importação de Catálogos',
          'Integração com Marketplaces'
        ]
      }
    ]
  },
  {
    id: 'ai',
    title: 'Inteligência Artificial',
    description: 'Recursos avançados com IA para impulsionar seu negócio e automatizar tarefas.',
    icon: BrainCircuit,
    color: 'from-amber-500/20 to-amber-700/20',
    textColor: 'text-amber-600',
    borderColor: 'border-amber-200',
    bgColor: 'bg-amber-50',
    features: [
      {
        title: 'Respostas Automáticas com IA',
        description: 'Atenda seus clientes automaticamente com respostas inteligentes baseadas em IA.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
        benefits: [
          'Chatbot Inteligente',
          'Sugestão de Respostas',
          'Personalização por Cliente',
          'Análise de Sentimento'
        ]
      },
      {
        title: 'Avisos Inteligentes',
        description: 'Saiba a hora certa de repor estoques do Full, FBA e muito mais com alertas personalizados.',
        image: 'https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?q=80&w=800&auto=format&fit=crop',
        benefits: [
          'Alertas de Reposição',
          'Previsão de Ruptura',
          'Alertas de Performance',
          'Notificações Personalizáveis'
        ]
      }
    ]
  }
];

const Features = () => {
  const [activeSection, setActiveSection] = useState(featureSections[0].id);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  
  // Find the currently active section
  const currentSection = featureSections.find(section => section.id === activeSection);
  
  const toggleExpandFeature = (title: string) => {
    if (expandedFeature === title) {
      setExpandedFeature(null);
    } else {
      setExpandedFeature(title);
    }
  };

  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,115,232,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(26,115,232,0.03)_1px,transparent_1px)] bg-[size:30px_30px] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-blue/10 px-4 py-1.5 text-sm font-medium text-primary-blue mb-4">
            <Sparkles size={16} />
            <span>Nossas Soluções</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Funcionalidades <span className="text-gradient">Poderosas</span>
          </h2>
          <p className="text-lg text-neutral-dark">
            Ferramentas avançadas que transformam dados em decisões estratégicas para seu negócio.
          </p>
        </motion.div>
        
        {/* Feature section tabs */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {featureSections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "group relative px-5 py-3 rounded-full border transition-all duration-300",
                  activeSection === section.id 
                    ? `${section.borderColor} ${section.bgColor} ${section.textColor}`
                    : "border-neutral-light hover:border-neutral-dark text-neutral-dark hover:text-foreground"
                )}
              >
                <div className="flex items-center gap-2">
                  <section.icon className="h-5 w-5" />
                  <span className="font-medium">{section.title}</span>
                </div>
                {activeSection === section.id && (
                  <motion.div 
                    layoutId="activeSectionIndicator"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r opacity-10"
                    initial={false}
                  />
                )}
              </motion.button>
            ))}
          </div>
          
          {/* Current section content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="text-center mb-10">
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={cn("text-2xl font-bold mb-3", currentSection?.textColor)}
                >
                  {currentSection?.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.1 } }}
                  className="text-neutral-dark"
                >
                  {currentSection?.description}
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentSection?.features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={cn(
                      "relative rounded-xl border overflow-hidden",
                      currentSection.borderColor,
                      hoveredFeature === feature.title ? "shadow-lg" : "shadow-sm",
                      "transition-all duration-300"
                    )}
                    onMouseEnter={() => setHoveredFeature(feature.title)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className={cn(
                          "w-full h-full object-cover transition-transform duration-500",
                          hoveredFeature === feature.title ? "scale-110" : "scale-100"
                        )}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                      <div className={cn(
                        "absolute top-4 left-4 rounded-full p-2",
                        currentSection.bgColor
                      )}>
                        <currentSection.icon className={cn("h-5 w-5", currentSection.textColor)} />
                      </div>
                    </div>
                    
                    <div className="p-6 relative">
                      <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                      <p className="text-neutral-dark mb-4">{feature.description}</p>
                      
                      <button 
                        onClick={() => toggleExpandFeature(feature.title)}
                        className={cn(
                          "flex items-center gap-2 text-sm font-medium transition-colors",
                          currentSection.textColor,
                          "hover:opacity-80"
                        )}
                      >
                        {expandedFeature === feature.title ? (
                          <>
                            <span>Ver menos</span>
                            <ChevronsUp className="h-4 w-4" />
                          </>
                        ) : (
                          <>
                            <span>Ver benefícios</span>
                            <Plus className="h-4 w-4" />
                          </>
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {expandedFeature === feature.title && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 space-y-2">
                              {feature.benefits.map((benefit, i) => (
                                <motion.div 
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: i * 0.1 }}
                                  className="flex items-start gap-2"
                                >
                                  <div className={cn(
                                    "mt-0.5 rounded-full p-1",
                                    currentSection.bgColor
                                  )}>
                                    <Check className={cn("h-3 w-3", currentSection.textColor)} />
                                  </div>
                                  <span className="text-neutral-dark">{benefit}</span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    
                    <div 
                      className={cn(
                        "absolute bottom-0 left-0 h-1 bg-gradient-to-r transition-all duration-500",
                        currentSection.color,
                        hoveredFeature === feature.title ? "w-full" : "w-0"
                      )}
                    />
                    
                    {hoveredFeature === feature.title && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md"
                      >
                        <ArrowRight className={cn("h-4 w-4", currentSection.textColor)} />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Features;
