
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ChevronsUp, Sparkles, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import SavingsCalculator from '@/components/calculator/SavingsCalculator';
import { featureSections } from '@/components/feature/featureData';

const Features = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(featureSections[0].id);
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Funcionalidades que <span className="text-gradient">Transformam</span> seu Negócio
              </h1>
              <p className="text-lg text-neutral-dark mb-8">
                Descubra como a Anye pode ajudar você a maximizar seus resultados em marketplaces com ferramentas poderosas e intuitivas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vertical Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue={featureSections[0].id} className="w-full">
                <TabsList className="flex overflow-x-auto p-1 mb-8 space-x-1 bg-neutral-100 rounded-lg">
                  {featureSections.map((section) => (
                    <TabsTrigger 
                      key={section.id} 
                      value={section.id}
                      onClick={() => setExpandedSection(section.id)}
                      className="flex-shrink-0 data-[state=active]:bg-white data-[state=active]:shadow"
                    >
                      <div className="flex items-center gap-2">
                        <section.icon className={cn("h-4 w-4", section.textColor)} />
                        <span className="whitespace-nowrap">{section.title}</span>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>

                <div className="space-y-12">
                  {featureSections.map((section) => (
                    <TabsContent key={section.id} value={section.id} className="animate-in fade-in-50 duration-300">
                      <div className="space-y-8">
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-center mb-8"
                        >
                          <div className={cn("inline-flex rounded-full p-2 mb-4", section.bgColor)}>
                            <section.icon className={cn("h-6 w-6", section.textColor)} />
                          </div>
                          <h2 className={cn("text-3xl font-bold mb-3", section.textColor)}>
                            {section.title}
                          </h2>
                          <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
                            {section.description}
                          </p>
                        </motion.div>

                        <div className="space-y-10">
                          {section.features.map((feature, index) => (
                            <motion.div
                              key={feature.title}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
                            >
                              <div className="p-6 flex flex-col md:flex-row gap-8">
                                <div className="md:w-1/2 space-y-4">
                                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                                  <p className="text-neutral-dark">{feature.description}</p>
                                  
                                  <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="benefits" className="border-0">
                                      <AccordionTrigger className={cn("text-sm font-medium py-2 px-0", section.textColor)}>
                                        Ver benefícios
                                      </AccordionTrigger>
                                      <AccordionContent>
                                        <ul className="space-y-2 mt-2">
                                          {feature.benefits.map((benefit, i) => (
                                            <motion.li 
                                              key={i}
                                              initial={{ opacity: 0, x: -10 }}
                                              animate={{ opacity: 1, x: 0 }}
                                              transition={{ duration: 0.3, delay: i * 0.1 }}
                                              className="flex items-start gap-2"
                                            >
                                              <div className={cn("mt-1 rounded-full p-1", section.bgColor)}>
                                                <Check className={cn("h-3 w-3", section.textColor)} />
                                              </div>
                                              <span className="text-neutral-dark">{benefit}</span>
                                            </motion.li>
                                          ))}
                                        </ul>
                                      </AccordionContent>
                                    </AccordionItem>
                                  </Accordion>
                                </div>
                                
                                <div className="md:w-1/2 rounded-lg overflow-hidden relative h-56 md:h-auto group">
                                  <img 
                                    src={feature.image} 
                                    alt={feature.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                  <div className={cn(
                                    "absolute bottom-4 left-4 rounded-full py-1 px-3",
                                    "bg-white/90 backdrop-blur-sm flex items-center gap-2"
                                  )}>
                                    <section.icon className={cn("h-4 w-4", section.textColor)} />
                                    <span className="text-sm font-medium">Anye {section.title}</span>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </div>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Interactive Value Calculator Section */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-600 mb-4">
                <ChevronsUp size={16} />
                <span>ROI Calculator</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Calcule seu <span className="text-gradient">Potencial</span>
              </h2>
              <p className="text-lg text-neutral-dark">
                Descubra quanto você pode economizar e potencializar seus resultados ao utilizar a Anye.
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <SavingsCalculator />
            </div>
          </div>
        </section>

        {/* Implementation Steps */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-600 mb-4">
                <Sparkles size={16} />
                <span>Implementação</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Implantação <span className="text-gradient">Simplificada</span>
              </h2>
              <p className="text-neutral-dark">
                Comece a utilizar a Anye em menos de 48 horas, sem interrupções ao seu negócio.
              </p>
            </div>
            
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-100"></div>
              
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
                  <div className="absolute -left-24 top-0 flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 border border-blue-100">
                    <span className="text-blue-600 font-bold text-xl">{item.step}</span>
                  </div>
                  <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-neutral-dark">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-600 mb-4">
                <Plus size={16} />
                <span>FAQ</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-neutral-dark">
                Respostas para as dúvidas mais comuns sobre a Anye e suas funcionalidades.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "Quanto tempo leva para integrar a Anye ao meu negócio?",
                    answer: "A maioria das empresas consegue implementar completamente a Anye em menos de 48 horas. Nossa equipe de onboarding trabalha para garantir uma transição suave, sem interrupções às suas operações diárias."
                  },
                  {
                    question: "A Anye se integra com quais marketplaces?",
                    answer: "A Anye se integra nativamente com todos os principais marketplaces do Brasil, incluindo Mercado Livre, Amazon, Shopee, Magazine Luiza, B2W (Americanas, Submarino, Shoptime), Via Varejo (Extra, Ponto Frio, Casas Bahia) e outros. Se você utiliza um marketplace que não está nesta lista, entre em contato conosco."
                  },
                  {
                    question: "É necessário conhecimento técnico para usar a plataforma?",
                    answer: "Não. A Anye foi projetada para ser intuitiva e fácil de usar, independentemente do seu nível técnico. Nossa interface é amigável e oferecemos treinamento completo para toda a sua equipe durante o onboarding."
                  },
                  {
                    question: "Existe um limite de usuários ou produtos na plataforma?",
                    answer: "Os limites dependem do plano escolhido. Nosso plano Enterprise oferece usuários ilimitados e sem restrições quanto ao número de produtos. Para mais detalhes específicos sobre limites, consulte nossa página de preços ou fale com um de nossos consultores."
                  },
                  {
                    question: "A Anye oferece suporte técnico contínuo?",
                    answer: "Sim. Todos os planos incluem suporte técnico contínuo. Nossos clientes Enterprise contam com um gerente de sucesso dedicado, disponível para resolver qualquer problema e garantir que você esteja aproveitando ao máximo todas as funcionalidades da plataforma."
                  }
                ].map((item, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger className="text-lg font-medium py-5 px-0 text-left hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-neutral-dark pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              <div className="mt-10 text-center">
                <p className="text-neutral-dark mb-4">Não encontrou o que procurava?</p>
                <Button variant="outline" className="gap-2">
                  <span>Fale com um especialista</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
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
