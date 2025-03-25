
import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, Timer, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { 
  Table,
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const SavingsCalculator: React.FC = () => {
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
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-primary-blue/10 p-2 rounded-full">
          <Calculator className="h-6 w-6 text-primary-blue" />
        </div>
        <h3 className="text-xl font-bold">Calculadora de Economia</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-medium flex items-center gap-2">
                <Users className="h-4 w-4 text-neutral-dark" />
                Funcionários dedicados: <span className="font-bold text-primary-blue">{employees}</span>
              </label>
              <span className="text-sm text-neutral-dark">{employees} {employees === 1 ? 'pessoa' : 'pessoas'}</span>
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
            <div className="flex justify-between mb-2">
              <label className="font-medium flex items-center gap-2">
                <Timer className="h-4 w-4 text-neutral-dark" />
                Horas semanais: <span className="font-bold text-primary-blue">{hoursPerWeek}</span>
              </label>
              <span className="text-sm text-neutral-dark">{hoursPerWeek} horas</span>
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
            <div className="flex justify-between mb-2">
              <label className="font-medium flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-neutral-dark" />
                Custo por hora: <span className="font-bold text-primary-blue">{formatCurrency(hourlyRate)}</span>
              </label>
              <span className="text-sm text-neutral-dark">{formatCurrency(hourlyRate)}/hora</span>
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
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
          <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            Sua Economia Estimada
          </h4>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Métrica</TableHead>
                <TableHead>Valor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Redução nas horas operacionais</TableCell>
                <TableCell className="text-green-600 font-bold">{timePercentage}%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Economia mensal</TableCell>
                <TableCell className="text-green-600 font-bold">{formatCurrency(monthlySavings)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Retorno anual sobre investimento</TableCell>
                <TableCell className="text-green-600 font-bold">{yearlyROI.toFixed(0)}%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          
          <div className="mt-6">
            <Button className="w-full bg-primary-blue hover:bg-primary-blue/90">
              Ver Planos e Economizar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsCalculator;
