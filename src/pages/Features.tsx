
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Check, 
  ChevronsUp, 
  Plus, 
  Play, 
  MousePointer,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import SavingsCalculator from '@/components/calculator/SavingsCalculator';
import { featureSections } from '@/components/feature/featureData';

const Features = () => {
  const [activeSection, setActiveSection] = useState(featureSections[0].id);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  
  // Reference for scroll animations
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Find active section data
  const currentSection = featureSections.find(section => section.id === activeSection);
  
  // Toggle feature expansion
  const toggleFeature = (title: string) => {
    if (expandedFeature === title) {
      setExpandedFeature(null);
    } else {
      setExpandedFeature(title);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-neutral-950 to-neutral-900 text-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.15),_transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(124,58,237,0.15),_transparent_50%)]"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-blue-300 mb-6">
                <Sparkles size={16} className="text-blue-400" />
                <span>Funcionalidades Anye</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Soluções Que Transformam <br/> Seu Negócio
              </h1>
              
              <p className="text-lg text-neutral-300 mb-10 max-w-2xl mx-auto">
                Descubra como a Anye pode revolucionar sua operação nos marketplaces com ferramentas 
                intuitivas e poderosas projetadas para o crescimento real.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-none h-12 px-6">
                  <span>Agendar Demonstração</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 h-12 px-6 gap-2">
                  <Play size={14} />
                  <span>Ver em ação</span>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Interactive Feature Explorer */}
        <section ref={containerRef} className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 to-neutral-900 z-0"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Explore Nossas Soluções
                </span>
              </h2>
              <p className="text-neutral-300 max-w-2xl mx-auto">
                Selecione uma categoria para explorar as funcionalidades que impulsionam o crescimento do seu negócio
              </p>
            </div>
            
            {/* Category Navigation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
              {featureSections.map((section) => (
                <motion.button
                  key={section.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveSection(section.id)}
                  className={cn(
                    "p-4 rounded-xl backdrop-blur-sm border transition-all duration-300",
                    "flex flex-col items-center text-center gap-2 h-full",
                    activeSection === section.id 
                      ? `border-${section.textColor.replace('text-', '')} bg-${section.textColor.replace('text-', '')}/10` 
                      : "border-white/10 hover:border-white/20 bg-white/5"
                  )}
                >
                  <div className={cn(
                    "rounded-full p-3 mb-2",
                    activeSection === section.id 
                      ? section.bgColor
                      : "bg-white/10"
                  )}>
                    <section.icon className={cn(
                      "h-6 w-6",
                      activeSection === section.id 
                        ? section.textColor
                        : "text-white"
                    )} />
                  </div>
                  <h3 className="text-sm font-medium">
                    {section.title}
                  </h3>
                </motion.button>
              ))}
            </div>
            
            {/* Active Section Features */}
            {currentSection && (
              <div>
                <motion.div
                  key={currentSection.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mb-10 text-center"
                >
                  <h3 className={cn("text-2xl font-bold mb-3", currentSection.textColor)}>
                    {currentSection.title}
                  </h3>
                  <p className="text-neutral-300 max-w-2xl mx-auto">
                    {currentSection.description}
                  </p>
                </motion.div>
                
                <div className="space-y-8">
                  <AnimatePresence mode="wait">
                    {currentSection.features.map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className={cn(
                          "relative rounded-xl overflow-hidden border bg-black/20 backdrop-blur-sm",
                          expandedFeature === feature.title ? "border-white/20" : "border-white/10"
                        )}
                        onMouseEnter={() => setHoveredFeature(index)}
                        onMouseLeave={() => setHoveredFeature(null)}
                      >
                        <div className="flex flex-col md:flex-row">
                          {/* Feature description */}
                          <div className="p-6 md:p-8 md:w-1/2 flex flex-col">
                            <h3 className="text-xl font-bold mb-3 text-white">
                              {feature.title}
                            </h3>
                            <p className="text-neutral-300 mb-4">
                              {feature.description}
                            </p>
                            
                            <button 
                              onClick={() => toggleFeature(feature.title)}
                              className={cn(
                                "flex items-center gap-2 text-sm font-medium w-fit",
                                currentSection.textColor,
                                "transition-all duration-300 hover:opacity-80"
                              )}
                            >
                              {expandedFeature === feature.title ? (
                                <>
                                  <span>Ver menos</span>
                                  <ChevronRight className="h-4 w-4 rotate-90" />
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
                                  className="overflow-hidden pt-4"
                                >
                                  <ul className="space-y-3">
                                    {feature.benefits.map((benefit, i) => (
                                      <motion.li 
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.2, delay: i * 0.05 }}
                                        className="flex items-start gap-2"
                                      >
                                        <div className={cn(
                                          "mt-1 rounded-full p-1",
                                          currentSection.bgColor
                                        )}>
                                          <Check className={cn("h-3 w-3", currentSection.textColor)} />
                                        </div>
                                        <span className="text-neutral-300">{benefit}</span>
                                      </motion.li>
                                    ))}
                                  </ul>
                                </motion.div>
                              )}
                            </AnimatePresence>
                            
                            <div className="mt-auto pt-6">
                              <div className={cn(
                                "inline-flex items-center gap-1.5 text-xs rounded-full",
                                "py-1 px-2 border border-white/10 bg-white/5"
                              )}>
                                <currentSection.icon className={cn("h-3 w-3", currentSection.textColor)} />
                                <span>Anye {currentSection.title}</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Feature image with interactive overlay */}
                          <div className="md:w-1/2 relative h-56 md:h-auto group">
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent md:bg-gradient-to-l md:via-black/20 md:from-transparent md:to-black/80 z-10"></div>
                            
                            <img 
                              src={feature.image} 
                              alt={feature.title}
                              className={cn(
                                "w-full h-full object-cover",
                                "transition-transform duration-700",
                                hoveredFeature === index ? "scale-105" : "scale-100"
                              )}
                            />
                            
                            {hoveredFeature === index && (
                              <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className={cn(
                                  "absolute bottom-6 right-6 rounded-lg",
                                  "bg-black/70 backdrop-blur-sm p-3 z-20"
                                )}
                              >
                                <Zap className={cn("h-5 w-5", currentSection.textColor)} />
                              </motion.div>
                            )}
                            
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ 
                                opacity: hoveredFeature === index ? 1 : 0,
                                scale: hoveredFeature === index ? 1 : 0.8
                              }}
                              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                            >
                              <div className={cn(
                                "flex items-center gap-2 rounded-full",
                                "py-2 px-4 bg-white/10 backdrop-blur-sm",
                                "border border-white/20"
                              )}>
                                <MousePointer className="h-4 w-4 text-white" />
                                <span className="text-sm font-medium text-white">Interagir</span>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Implementation Steps - Clean, Simplified Timeline */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.1),_transparent_70%)]"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-400 mb-4">
                <Sparkles size={16} />
                <span>Implementação</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">
                Implantação <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">Descomplicada</span>
              </h2>
              <p className="text-neutral-300">
                Comece a utilizar a Anye em menos de 48 horas, sem interrupções ao seu negócio.
              </p>
            </div>
            
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500/70 via-green-500/30 to-transparent"></div>
              
              {[
                {
                  step: 1,
                  title: "Onboarding Personalizado",
                  description: "Equipe dedicada para configurar sua conta de acordo com suas necessidades específicas."
                },
                {
                  step: 2,
                  title: "Integração com Marketplaces",
                  description: "Conexão rápida com todos os marketplaces onde você opera, sem necessidade de código."
                },
                {
                  step: 3,
                  title: "Importação de Dados",
                  description: "Seus dados históricos são importados e organizados para fornecer insights imediatos."
                },
                {
                  step: 4,
                  title: "Treinamento da Equipe",
                  description: "Sessões de treinamento para garantir que toda sua equipe aproveite ao máximo as funcionalidades."
                }
              ].map((item, index) => (
                <motion.div 
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative ml-16 mb-12"
                >
                  <div className="absolute -left-24 top-0 flex items-center justify-center w-16 h-16 rounded-full bg-black/40 border border-green-500/30">
                    <span className="text-green-400 font-bold text-xl">{item.step}</span>
                  </div>
                  <div className="p-6 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10">
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-neutral-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Value Calculator Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-neutral-950"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(124,58,237,0.1),_transparent_70%)]"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-400 mb-4">
                <ChevronsUp size={16} />
                <span>ROI Calculator</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">
                Calcule seu <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Potencial</span>
              </h2>
              <p className="text-neutral-300">
                Descubra quanto você pode economizar e potencializar seus resultados ao utilizar a Anye.
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
              <SavingsCalculator />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Features;

