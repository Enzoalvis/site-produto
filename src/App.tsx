import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Brain,
  Clock,
  Focus,
  Laptop,
  LineChart,
  ListTodo,
  Target,
  Zap,
  Check,
  Menu,
  X,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  BookOpen,
  FileText,
  Calendar,
  Table,
  Gift,
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const Navegacao = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold text-purple-900">MestreDaProdutividade</span>
          </div>
          
          {/* Navegação Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="text-gray-600 hover:text-purple-600">Sobre</a>
            <a href="#recursos" className="text-gray-600 hover:text-purple-600">Recursos</a>
            <a href="#produto" className="text-gray-600 hover:text-purple-600">Produto</a>
            <a href="#precos" className="text-gray-600 hover:text-purple-600">Preços</a>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Comece Agora
            </button>
          </div>

          {/* Botão do menu móvel */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-purple-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Navegação Móvel */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#sobre"
                className="block px-3 py-2 text-gray-600 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#recursos"
                className="block px-3 py-2 text-gray-600 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                Recursos
              </a>
              <a
                href="#produto"
                className="block px-3 py-2 text-gray-600 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                Produto
              </a>
              <a
                href="#precos"
                className="block px-3 py-2 text-gray-600 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                Preços
              </a>
              <button
                className="w-full mt-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Comece Agora
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const CartaoDeRecurso: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-purple-100 rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const CartaoDePreco = () => {
  return (
    <div className="group perspective">
      <div className="relative preserve-3d duration-1000 group-hover:rotate-y-180 w-full h-[400px]">
        {/* Frente do cartão */}
        <div className="absolute backface-hidden w-full h-full bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center">
          <h3 className="text-3xl font-bold text-purple-900 mb-4">Mestre da Produtividade</h3>
          <div className="text-5xl font-bold text-purple-600 mb-6">R$29,99</div>
          <p className="text-gray-600 text-center mb-8">Transforme sua produtividade com nosso guia abrangente</p>
          <div className="text-purple-500 text-lg font-semibold">Passe o mouse para ver os benefícios →</div>
        </div>
        
        {/* Verso do cartão */}
        <div className="absolute backface-hidden rotate-y-180 w-full h-full bg-purple-900 rounded-2xl shadow-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">O que você receberá</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Check className="w-5 h-5 mr-3 text-purple-300" />
              <span>200+ Páginas de Conteúdo Prático</span>
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 mr-3 text-purple-300" />
              <span>Plano de Implementação de 30 Dias</span>
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 mr-3 text-purple-300" />
              <span>Coleção de Ferramentas de Produtividade</span>
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 mr-3 text-purple-300" />
              <span>Atualizações Vitalícias</span>
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 mr-3 text-purple-300" />
              <span>Acesso ao Suporte Premium</span>
            </li>
          </ul>
          <button className="mt-8 w-full py-4 bg-white text-purple-900 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
            Comece Agora
          </button>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [productRef, productInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navegacao />

      {/* Seção Hero */}
      <div className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-purple-700 bg-purple-100 rounded-full">
              Transforme sua Produtividade
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Domine seu Tempo,
              <span className="text-purple-600"> Domine sua Vida</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Descubra estratégias comprovadas para multiplicar sua produtividade por 10, alcançar seus objetivos mais rapidamente e criar hábitos duradouros que transformam sua vida.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl">
                Obtenha o Ebook Agora
              </button>
              <button className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors shadow-lg hover:shadow-xl border border-purple-200">
                Leia o Capítulo de Amostra
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Seção Sobre Atualizada */}
      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0 }}
        animate={aboutInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20"
        id="sobre"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">O que você receberá</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ebook Principal de Produtividade */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center justify-center mb-6">
                  <FileText className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Guia Mestre de Produtividade</h3>
                <p className="text-gray-600 mb-4">
                  Nosso guia abrangente de mais de 200 páginas cobrindo tudo, desde gerenciamento de tempo até técnicas de trabalho profundo.
                  Domine a arte da produtividade com estratégias práticas e acionáveis.
                </p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Planos de implementação passo a passo</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Estudos de caso do mundo real</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Ferramentas de avaliação de produtividade</span>
                  </li>
                </ul>
              </div>

              {/* Guia de Início Rápido */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center justify-center mb-6">
                  <Zap className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Guia de Início Rápido</h3>
                <p className="text-gray-600 mb-4">
                  Um guia focado de 30 páginas para ajudá-lo a implementar estratégias-chave de produtividade imediatamente.
                  Perfeito para profissionais ocupados que desejam resultados rápidos.
                </p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Plano de ação de 30 dias</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Roteiro da rotina matinal</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Lista de verificação de produtividade diária</span>
                  </li>
                </ul>
              </div>

              {/* Planejador Semanal */}
              <div className="bg-purple-50 rounded-xl shadow-lg p-8">
                <div className="absolute top-4 right-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">Bônus</span>
                </div>
                <div className="flex items-center justify-center mb-6">
                  <Calendar className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Planejador Semanal Inteligente</h3>
                <p className="text-gray-600 mb-4">
                  Um planejador digital personalizável que ajuda você a organizar sua semana para máxima produtividade.
                  Inclui modelos de planejamento semanal e diário.
                </p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Sistema de mapeamento de prioridades</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Modelos de bloqueio de tempo</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Folhas de acompanhamento de metas</span>
                  </li>
                </ul>
              </div>

              {/* Rastreador de Despesas */}
              <div className="bg-purple-50 rounded-xl shadow-lg p-8">
                <div className="absolute top-4 right-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">Bônus</span>
                </div>
                <div className="flex items-center justify-center mb-6">
                  <Table className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Sistema de Rastreamento de Despesas</h3>
                <p className="text-gray-600 mb-4">
                  Um sistema abrangente de planilhas para rastrear despesas, monitorar orçamentos e otimizar sua produtividade financeira.
                </p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Cálculos automatizados</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Ferramentas de planejamento de orçamento</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Acompanhamento de metas financeiras</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Grade de Recursos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="recursos">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Recursos Principais</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tudo o que você precisa para transformar sua produtividade e alcançar seus objetivos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CartaoDeRecurso
            icon={<Brain className="w-8 h-8 text-purple-600" />}
            title="Gestão da Mente"
            description="Aprenda técnicas para otimizar sua clareza mental e foco para desempenho máximo."
            delay={0.1}
          />
          <CartaoDeRecurso
            icon={<Clock className="w-8 h-8 text-purple-600" />}
            title="Domínio do Tempo"
            description="Descubra poderosas estratégias de gerenciamento de tempo que ajudam você a fazer mais em menos tempo."
            delay={0.2}
          />
          <CartaoDeRecurso
            icon={<Target className="w-8 h-8 text-purple-600" />}
            title="Alcance de Metas"
            description="Defina e alcance metas significativas com nossa estrutura comprovada para o sucesso."
            delay={0.3}
          />
          <CartaoDeRecurso
            icon={<Focus className="w-8 h-8 text-purple-600" />}
            title="Foco Profundo"
            description="Domine a arte do trabalho profundo e elimine distrações para máxima produtividade."
            delay={0.4}
          />
          <CartaoDeRecurso
            icon={<ListTodo className="w-8 h-8 text-purple-600" />}
            title="Formação de Hábitos"
            description="Construa hábitos duradouros que automatizam seu sucesso e geram resultados consistentes."
            delay={0.5}
          />
          <CartaoDeRecurso
            icon={<LineChart className="w-8 h-8 text-purple-600" />}
            title="Acompanhamento de Progresso"
            description="Acompanhe seu progresso e otimize seu desempenho com insights baseados em dados."
            delay={0.6}
          />
          <CartaoDeRecurso
            icon={<Zap className="w-8 h-8 text-purple-600" />}
            title="Gestão de Energia"
            description="Otimize seus níveis de energia para um desempenho sustentado ao longo do dia."
            delay={0.7}
          />
          <CartaoDeRecurso
            icon={<Laptop className="w-8 h-8 text-purple-600" />}
            title="Ferramentas Digitais"
            description="Aproveite as melhores ferramentas e sistemas de produtividade para simplificar seu fluxo de trabalho."
            delay={0.8}
          />
        </div>
      </div>

      {/* Apresentação do Produto */}
      <motion.div
        ref={productRef}
        initial={{ opacity: 0 }}
        animate={productInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-purple-50 py-20"
        id="produto"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">O que há dentro do livro?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Um guia abrangente que leva você de sobrecarregado a organizado,
              de distraído a focado, de ocupado a produtivo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt="Book Preview"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">1</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Construção de Fundamentos</h3>
                  <p className="text-gray-600">Compreendendo seu estilo de produtividade e configurando seu sistema perfeito.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">2</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Planejamento Estratégico</h3>
                  <p className="text-gray-600">Criando planos acionáveis que se alinham com seus objetivos e valores.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">3</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Guia de Implementação</h3>
                  <p className="text-gray-600">Instruções passo a passo para colocar tudo em prática.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">4</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Manutenção e Crescimento</h3>
                  <p className="text-gray-600">Estratégias para sustentar sua produtividade e continuar melhorando.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Seção CTA */}
      <motion.div
        ref={ctaRef}
        initial={{ opacity: 0 }}
        animate={ctaInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-purple-900 text-white py-20 mt-16"
        id="precos"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Pronto para Transformar sua Vida?</h2>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de leitores que já desbloquearam seu potencial máximo com nosso sistema de produtividade comprovado.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <CartaoDePreco />
          </div>
          
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-purple-800 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl border border-purple-700">
              Veja Histórias de Sucesso
            </button>
          </div>
        </div>
      </motion.div>

      {/* Rodapé */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-purple-400" />
                <span className="ml-2 text-xl font-bold">MestreDaProdutividade</span>
              </div>
              <p className="text-gray-400">
                Transforme sua produtividade e alcance seus objetivos com nosso guia abrangente.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#sobre" className="text-gray-400 hover:text-purple-400">Sobre</a></li>
                <li><a href="#recursos" className="text-gray-400 hover:text-purple-400">Recursos</a></li>
                <li><a href="#produto" className="text-gray-400 hover:text-purple-400">Produto</a></li>
                <li><a href="#precos" className="text-gray-400 hover:text-purple-400">Preços</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-purple-400">Política de Privacidade</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400">Termos de Serviço</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400">Política de Reembolso</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Conecte-se Conosco</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Mestre da Produtividade. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;