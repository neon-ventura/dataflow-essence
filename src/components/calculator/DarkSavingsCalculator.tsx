import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, Timer, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { HomeAnchorLink } from '../ui/HomeAnchorLink';

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const DarkSavingsCalculator: React.FC = () => {
  const [employees, setEmployees] = useState(1);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(30);
  
  const [monthlySavings, setMonthlySavings] = useState(0);
  const [yearlyROI, setYearlyROI] = useState(0);
  const [timePercentage, setTimePercentage] = useState(0);
  
  // Calculate savings based on inputs
  useEffect(() => {
    // Monthly cost of employees time
    const employeeCost = employees * hoursPerWeek * 4 * hourlyRate;
    
    // Estimated time saved with Anye (45%)
    const timeSavedPercentage = 45;
    setTimePercentage(timeSavedPercentage);
    
    // Monthly savings (cost of time saved - Anye subscription)
    const averageAnyeSubscription = 197; // Pro plan
    const monthlySaved = (employeeCost * timeSavedPercentage / 100) - averageAnyeSubscription;
    setMonthlySavings(monthlySaved > 0 ? monthlySaved : 0);
    
    // Yearly ROI
    const yearlySavings = monthlySaved * 12;
    const yearlySubscription = averageAnyeSubscription * 12;
    const roi = yearlySubscription > 0 ? (yearlySavings / yearlySubscription) * 100 : 0;
    setYearlyROI(roi > 0 ? roi : 0);
  }, [employees, hoursPerWeek, hourlyRate]);

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg p-6 md:p-8 border border-slate-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-500 p-2.5 rounded-full">
          <Calculator className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-blue-400">Calculadora de Economia</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-9">
          <div>
            <div className="flex justify-between mb-3">
              <label className="font-semibold flex items-center gap-2 text-slate-300">
                <Users className="h-5 w-5 text-blue-400" />
                Funcionários dedicados
              </label>
              <span className="text-lg font-bold text-blue-400">{employees} {employees === 1 ? 'pessoa' : 'pessoas'}</span>
            </div>
            <Slider 
              value={[employees]} 
              min={1} 
              max={10} 
              step={1} 
              onValueChange={(value) => setEmployees(value[0])}
              className="my-4"
            />
          </div>
          
          <div>
            <div className="flex justify-between mb-3">
              <label className="font-semibold flex items-center gap-2 text-slate-300">
                <Timer className="h-5 w-5 text-blue-400" />
                Horas semanais
              </label>
              <span className="text-lg font-bold text-blue-400">{hoursPerWeek} horas</span>
            </div>
            <Slider 
              value={[hoursPerWeek]} 
              min={5} 
              max={40} 
              step={1} 
              onValueChange={(value) => setHoursPerWeek(value[0])}
              className="my-4"
            />
          </div>
          
          <div>
            <div className="flex justify-between mb-3">
              <label className="font-semibold flex items-center gap-2 text-slate-300">
                <DollarSign className="h-5 w-5 text-blue-400" />
                Custo por hora
              </label>
              <span className="text-lg font-bold text-blue-400">{formatCurrency(hourlyRate)}</span>
            </div>
            <Slider 
              value={[hourlyRate]} 
              min={20} 
              max={100} 
              step={5} 
              onValueChange={(value) => setHourlyRate(value[0])}
              className="my-4"
            />
          </div>
        </div>
        
        <div className="bg-slate-800 rounded-xl p-7 shadow-md border border-slate-700">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-blue-400">
            <TrendingUp className="h-5 w-5 text-green-400" />
            Sua Economia Estimada
          </h4>
          
          <div className="space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-slate-700">
              <span className="font-medium text-slate-300">Redução nas horas operacionais</span>
              <span className="text-xl font-bold text-green-400">{timePercentage}%</span>
            </div>
            
            <div className="flex justify-between items-center pb-4 border-b border-slate-700">
              <span className="font-medium text-slate-300">Economia mensal</span>
              <span className="text-xl font-bold text-green-400">{formatCurrency(monthlySavings)}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="font-medium text-slate-300">Retorno anual sobre investimento</span>
              <span className="text-xl font-bold text-green-400">{yearlyROI.toFixed(0)}%</span>
            </div>
          </div>
          
          <div className="mt-8">
            <Button 
              asChild
              className="w-full bg-blue-600 hover:bg-blue-700 text-base py-6"
            >
              <HomeAnchorLink to="/#pricing">
                Ver Planos e Economizar
              </HomeAnchorLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkSavingsCalculator;
