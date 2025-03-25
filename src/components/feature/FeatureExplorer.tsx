
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, Plus, Zap, MousePointer } from 'lucide-react';
import { cn } from '@/lib/utils';
import { featureSections } from './featureData';

const FeatureExplorer = () => {
  const [activeSection, setActiveSection] = useState(featureSections[0].id);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  
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
    <section ref={React.useRef(null)} className="py-16 relative">
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
  );
};

export default FeatureExplorer;
