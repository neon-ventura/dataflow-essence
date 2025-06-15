
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from "@/components/ui/use-toast";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ["application/pdf"];

const formSchema = z.object({
  name: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, insira um email válido.' }),
  phone: z.string().min(10, { message: 'Por favor, insira um telefone válido.' }),
  position: z.string().min(2, { message: 'O cargo deve ter pelo menos 2 caracteres.' }),
  resume: z
    .any()
    .refine((files) => files?.length === 1, 'Currículo é obrigatório.')
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Tamanho máximo do arquivo é 5MB.`)
    .refine(
      (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
      "Apenas arquivos .pdf são aceitos."
    ),
});

const Careers = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      position: '',
      resume: undefined
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Aqui você lidaria com o envio do formulário, como fazer o upload do arquivo e enviar os dados.
    toast({
      title: "Candidatura enviada!",
      description: "Agradecemos seu interesse. Entraremos em contato em breve.",
    });
    form.reset();
  }

  const benefits = [
    'Plano de saúde e odontológico completo',
    'Cultura de aprendizado contínuo com acesso a cursos',
    'Ambiente de trabalho flexível e com opção de home office',
    'Vale refeição/alimentação e snacks no escritório',
  ];

  return (
    <section id="careers" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-blue/10 px-4 py-1.5 text-sm font-medium text-primary-blue mb-4">
            <Briefcase size={16} />
            <span>Trabalhe Conosco</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Junte-se a um time que está revolucionando o e-commerce
          </h2>
          <p className="text-lg text-neutral-dark">
            Estamos sempre em busca de talentos apaixonados por tecnologia e inovação para construir o futuro das vendas online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Nossa Cultura</h3>
              <p className="text-neutral-dark mb-6 text-base leading-relaxed">
                Valorizamos a colaboração, a inovação e a busca incessante pela excelência. Nosso ambiente é dinâmico, transparente e focado em resultados, onde cada membro da equipe tem a oportunidade de crescer e fazer a diferença.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Seus Benefícios</h3>
              <ul className="space-y-3 text-neutral-dark">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary-blue pt-1">&#10003;</span>
                    <span className="text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3 bg-gray-50 p-8 rounded-xl shadow-lg border"
          >
            <h3 className="text-2xl font-bold mb-6 text-center sm:text-left">Envie seu Currículo</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome Completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="seu@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone</FormLabel>
                        <FormControl>
                          <Input placeholder="(XX) XXXXX-XXXX" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cargo Pretendido</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: Desenvolvedor(a)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="resume"
                  render={({ field: { onChange, value, ...rest } }) => (
                    <FormItem>
                      <FormLabel>Anexe seu CV (PDF, máx. 5MB)</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept=".pdf"
                          onChange={(e) => {
                            onChange(e.target.files);
                          }}
                          {...rest}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-primary-blue hover:bg-primary-blue/90" size="lg">
                  Enviar Candidatura
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Careers;

