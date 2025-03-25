
import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface Feature {
  name: string;
  anye: boolean;
  competitor: boolean;
  anyeDetail?: string;
  competitorDetail?: string;
}

interface FeatureGroup {
  title: string;
  features: Feature[];
}

interface ComparisonTableProps {
  competitor: string;
  featureGroups: FeatureGroup[];
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ competitor, featureGroups }) => {
  return (
    <section id="compare" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Anye vs {competitor}: <span className="text-gradient">Comparativo Detalhado</span>
        </motion.h2>
        
        <div className="overflow-x-auto">
          <div className="min-w-[768px]">
            {featureGroups.map((group, groupIndex) => (
              <motion.div 
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                className="mb-10"
              >
                <h3 className="text-2xl font-bold mb-4">{group.title}</h3>
                
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="grid grid-cols-5 bg-primary-blue/5 p-4">
                    <div className="col-span-3 font-medium">Funcionalidade</div>
                    <div className="col-span-1 font-medium text-center text-primary-blue">Anye</div>
                    <div className="col-span-1 font-medium text-center">{competitor}</div>
                  </div>
                  
                  {group.features.map((feature, index) => (
                    <div 
                      key={feature.name}
                      className={`grid grid-cols-5 p-4 ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-light/10'}`}
                    >
                      <div className="col-span-3">
                        <p className="font-medium">{feature.name}</p>
                        {feature.anyeDetail && (
                          <p className="text-sm text-neutral-dark mt-1 hidden md:block">{feature.anyeDetail}</p>
                        )}
                      </div>
                      
                      <div className="col-span-1 flex justify-center items-center">
                        {feature.anye ? (
                          <div className="rounded-full bg-green-100 p-1">
                            <Check className="h-5 w-5 text-green-600" />
                          </div>
                        ) : (
                          <div className="rounded-full bg-red-100 p-1">
                            <X className="h-5 w-5 text-red-600" />
                          </div>
                        )}
                      </div>
                      
                      <div className="col-span-1 flex justify-center items-center">
                        {feature.competitor ? (
                          <div className="rounded-full bg-green-100 p-1">
                            <Check className="h-5 w-5 text-green-600" />
                          </div>
                        ) : (
                          <div className="rounded-full bg-red-100 p-1">
                            <X className="h-5 w-5 text-red-600" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
