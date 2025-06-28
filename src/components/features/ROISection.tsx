import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { HomeAnchorLink } from '../ui/HomeAnchorLink';

const ROISection = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState(50000);
  const [currentCosts, setCurrentCosts] = useState(5000);
  
  // Calculate savings and ROI
  const monthlySavings = currentCosts * 0.3; // 30% reduction in operational costs
  const annualSavings = monthlySavings * 12;
  const roiPercentage = ((annualSavings - 3588) / 3588) * 100; // Anye cost vs savings
  
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl mb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 mb-4">
            <Calculator size={16} />
            <span>Calculadora de ROI</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Calcule seu Retorno sobre Investimento
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra quanto você pode economizar e lucrar usando a Anye
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Calculator Inputs */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-bold mb-6">Seus dados atuais</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Faturamento mensal (R$)
                </label>
                <Input
                  type="number"
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Custos operacionais mensais (R$)
                </label>
                <Input
                  type="number"
                  value={currentCosts}
                  onChange={(e) => setCurrentCosts(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="h-6 w-6" />
                <h4 className="text-lg font-semibold">Economia Anual</h4>
              </div>
              <p className="text-3xl font-bold">
                R$ {annualSavings.toLocaleString('pt-BR')}
              </p>
              <p className="text-green-100 text-sm">
                R$ {monthlySavings.toLocaleString('pt-BR')} por mês
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="h-6 w-6" />
                <h4 className="text-lg font-semibold">ROI Anual</h4>
              </div>
              <p className="text-3xl font-bold">
                {roiPercentage.toFixed(0)}%
              </p>
              <p className="text-blue-100 text-sm">
                Retorno sobre investimento
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <Users className="h-6 w-6" />
                <h4 className="text-lg font-semibold">Payback</h4>
              </div>
              <p className="text-3xl font-bold">2 meses</p>
              <p className="text-purple-100 text-sm">
                Tempo para recuperar investimento
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            *Valores baseados em médias de clientes que reduziram custos operacionais em 30%
          </p>
          <Button 
            asChild
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
          >
            <HomeAnchorLink to="/#pricing">
              Ver Planos e Economizar
            </HomeAnchorLink>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ROISection;
