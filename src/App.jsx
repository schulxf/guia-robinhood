import React, { useState, useEffect } from 'react';
import { 
  Droplet, ArrowRightLeft, Image as ImageIcon, Code, 
  CheckCircle2, Circle, ExternalLink, ShieldCheck, 
  ChevronDown, ChevronUp, Trophy, Globe, AlertTriangle, ArrowRight
} from 'lucide-react';
import { SpeedInsights } from '@vercel/speed-insights/react';

// --- Dados do Tutorial ---
const tutorialSteps = [
  {
    id: 'phase1',
    title: 'Fase 1: Preparação e Faucets (Tokens de Teste)',
    description: 'O primeiro passo é obter fundos na rede de testes para pagar pelas taxas de transação (gas).',
    icon: <Droplet className="w-6 h-6 text-[#D2FF00]" />,
    tasks: [
      {
        id: 't1_1',
        title: 'Fazer Bridge de Sepolia para Robinhood',
        desc: 'Transfira seu $ETH de teste da rede Sepolia para a Robinhood Testnet usando a ponte da Arbitrum.',
        link: 'https://portal.arbitrum.io/bridge'
      },
      {
        id: 't1_2',
        title: 'Reivindicar Tokens no Faucet Oficial',
        desc: 'Acesse o faucet oficial da Robinhood para solicitar seus primeiros tokens de teste nativos.',
        link: 'https://faucet.testnet.chain.robinhood.com'
      },
      {
        id: 't1_3',
        title: 'Reivindicar no OmniHub Faucet',
        desc: 'Obtenha fundos adicionais para garantir que não faltará gas durante as interações.',
        link: 'https://omnihub.xyz/faucet'
      }
    ]
  },
  {
    id: 'phase2',
    title: 'Fase 2: Interações DeFi',
    description: 'Interaja com protocolos de Finanças Descentralizadas para gerar volume e histórico de transações.',
    icon: <ArrowRightLeft className="w-6 h-6 text-[#D2FF00]" />,
    tasks: [
      {
        id: 't2_1',
        title: 'Edel Finance - Lending & Borrowing',
        desc: 'Conecte sua carteira. Vá na aba "Faucet" e pegue os tokens. Na plataforma, forneça liquidez (Supply), pegue um empréstimo (Borrow) e depois pague-o (Repay).',
        link: 'https://robinhood.edel.finance'
      },
      {
        id: 't2_2',
        title: 'Synthra - Swap e Liquidez',
        desc: 'Faça swaps (trocas) entre diferentes tokens de teste e adicione liquidez nos pools disponíveis na rede Robinhood.',
        link: 'https://app.synthra.org/#/swap?chain=robinhood'
      }
    ]
  },
  {
    id: 'phase3',
    title: 'Fase 3: Implantação e Cunhagem de NFTs',
    description: 'Crie seus próprios contratos e cunhe NFTs de diferentes projetos parceiros na testnet.',
    icon: <ImageIcon className="w-6 h-6 text-[#D2FF00]" />,
    tasks: [
      {
        id: 't3_1',
        title: 'Implantar seu próprio NFT no NFTs2Me',
        desc: 'Crie e faça o deploy (implantação) de uma coleção própria de NFTs de forma simplificada.',
        link: 'https://nfts2me.com/app/robinhood-testnet/'
      },
      {
        id: 't3_2',
        title: 'Criar Contrato no OmniHub',
        desc: 'Utilize a ferramenta do OmniHub para fazer o deploy de um contrato inteligente básico na rede.',
        link: 'https://omnihub.xyz/create/robinhood-testnet'
      },
      {
        id: 't3_3',
        title: 'Mintar NFTs Promocionais (Diversos)',
        desc: 'Acesse os links abaixo e cunhe (mint) os NFTs promocionais disponíveis na testnet:',
        subLinks: [
          { name: 'Omnihub NFT', url: 'https://omnihub.xyz/collection/robinhood-testnet/robinhood-omnihub' },
          { name: 'Mintaura Daydream', url: 'https://mintaura.io/daydream' },
          { name: 'Mintaura Marian', url: 'https://mintaura.io/marian' },
          { name: 'Morkie Robinson', url: 'https://morkie.xyz/robinson' },
          { name: 'Morkie Archer', url: 'https://morkie.xyz/archer' },
          { name: 'Oku Skateboard', url: 'https://oku.xyz/skateboard' },
          { name: 'Draze Robinhood', url: 'https://draze.io/robinhood' },
          { name: 'Draze Barbaros', url: 'https://draze.io/barbaros' },
          { name: 'Alze Roobin', url: 'https://alze.xyz/roobin' },
          { name: 'Amazing Robinhood', url: 'https://amazing-robinhood-chain.testnet.nfts2.me' },
          { name: 'Robinhood Flamenco', url: 'https://robinhood-flamenco.testnet.nfts2.me' },
        ]
      }
    ]
  },
  {
    id: 'phase4',
    title: 'Fase 4: Contratos Inteligentes e Domínios Web3',
    description: 'Atividades avançadas que aumentam muito a qualidade da sua carteira perante o airdrop.',
    icon: <Code className="w-6 h-6 text-[#D2FF00]" />,
    tasks: [
      {
        id: 't4_1',
        title: 'Implantar Contrato (Documentação Oficial)',
        desc: 'Siga o guia oficial da Robinhood para criar e fazer o deploy de um Smart Contract via terminal ou Remix.',
        link: 'https://docs.robinhood.com/chain/deploy-smart-contracts'
      },
      {
        id: 't4_2',
        title: 'Implantar via OnchainGM',
        desc: 'Uma alternativa mais fácil para fazer o deploy de um contrato diretamente pelo navegador.',
        link: 'https://onchaingm.com/deploy'
      },
      {
        id: 't4_3',
        title: 'Registrar Domínio InfinityName',
        desc: 'Registre seu nome de usuário (ex: seunome.robinhood) usando a testnet.',
        link: 'https://infinityname.com/?ref=0x9aC26D73B0a6dB219DD61a660C5e7Ce94f6796db'
      },
      {
        id: 't4_4',
        title: 'Enviar GM e Mintar Badge',
        desc: 'Interaja com o protocolo OnchainGM enviando um "GM" e mintando o Badge exclusivo da Robinhood.',
        subLinks: [
          { name: 'Enviar GM', url: 'https://onchaingm.com/?ref=0x9aC26D73B0a6dB219DD61a660C5e7Ce94f6796db' },
          { name: 'Mintar Badge Robinhood', url: 'https://onchaingm.com/badge-robinhood' }
        ]
      }
    ]
  },
  {
    id: 'phase5',
    title: 'Fase 5: Campanhas e Rastreamento',
    description: 'Finalize validando suas ações nas plataformas de quests e confira seu histórico.',
    icon: <Trophy className="w-6 h-6 text-[#D2FF00]" />,
    tasks: [
      {
        id: 't5_1',
        title: 'Campanha Superboard',
        desc: 'Complete as quests listadas na Superboard para registrar sua participação oficial na exploração da testnet.',
        link: 'https://superboard.xyz/campaigns/robinhood-testnet-exploration'
      },
      {
        id: 't5_2',
        title: 'Tarefas e Pass ZNS',
        desc: 'Conclua as tarefas sociais e on-chain no ZNS Bio e garanta seu passe (pass).',
        link: 'https://zns.bio/airdrops/robinhood'
      },
      {
        id: 't5_3',
        title: 'Verificar no Explorer',
        desc: 'Cole o endereço da sua carteira no Explorer oficial para acompanhar todas as transações realizadas.',
        link: 'https://explorer.testnet.chain.robinhood.com'
      }
    ]
  }
];

export default function App() {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [expandedPhase, setExpandedPhase] = useState('phase1');

  // Configuração para o Discord e Navegador (Meta Tags, Title e Favicon)
  useEffect(() => {
    // ----------------------------------------------------------------------
    // 1. ALTERE O NOME DA ABA AQUI (Texto que aparece no topo do navegador)
    // ----------------------------------------------------------------------
    document.title = "Mercurius | Robinhood Testnet";
    
    // 2. CONFIGURA O ÍCONE DA ABA (Favicon)
    let favicon = document.querySelector("link[rel~='icon']");
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      document.head.appendChild(favicon);
    }
    // Usando a logo da Mercurius como ícone da aba
    favicon.href = "https://i.imgur.com/QAqVuyN.png";

    // 3. CONFIGURA O CARD DO DISCORD
    const setMetaTag = (property, content) => {
      let element = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        if (property.startsWith('og:')) element.setAttribute('property', property);
        else element.setAttribute('name', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('og:title', 'Guia de Interação: Robinhood Testnet');
    setMetaTag('og:description', 'Passo a passo completo e gratuito para interagir na testnet da Robinhood e se posicionar para o possível airdrop. Exclusivo Mercurius Crypto.');
    setMetaTag('og:image', 'https://i.imgur.com/QAqVuyN.png'); // Imagem do preview
    setMetaTag('theme-color', '#D2FF00'); // Cor da barra lateral do embed no Discord
  }, []);

  // Calcula o progresso total
  const totalTasks = tutorialSteps.reduce((acc, phase) => acc + phase.tasks.length, 0);
  const progressPercentage = Math.round((completedTasks.length / totalTasks) * 100);

  const toggleTask = (taskId) => {
    setCompletedTasks(prev => 
      prev.includes(taskId) 
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  const togglePhase = (phaseId) => {
    setExpandedPhase(prev => prev === phaseId ? null : phaseId);
  };

  return (
    <div className="min-h-screen bg-[#070707] text-gray-200 font-sans selection:bg-[#D2FF00] selection:text-black pb-12">
      {/* Navbar */}
      <nav className="border-b border-gray-800 bg-[#070707]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-3">
              {/* Logo Mercurius Crypto */}
              <img 
                src="https://i.imgur.com/QAqVuyN.png" 
                alt="Mercurius Crypto" 
                className="h-12 sm:h-[72px] object-contain py-2"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden items-center gap-2 font-bold text-xl tracking-widest text-white">
                MERCURIUS <span className="text-gray-500 font-light">CRYPTO</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-[#D2FF00] bg-[#D2FF00]/10 px-4 py-2 rounded-full border border-[#D2FF00]/20 font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span className="hidden sm:inline">Custo de Interação:</span> $0
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        
        {/* Banner Estilizado Baseado na Imagem (Reduzido e Compacto) */}
        <div className="bg-[#D2FF00] rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-[0_0_30px_rgba(210,255,0,0.1)] mb-6">
          {/* Elementos Gráficos de Fundo */}
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 200" className="absolute -right-10 -top-10 w-64 h-64 text-black" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M50 150 L150 50 M150 50 L150 150 L50 150 Z" />
              <path d="M70 170 L170 70 M170 70 L170 170 L70 170 Z" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-start">
            <h1 className="text-3xl md:text-4xl font-extrabold text-black tracking-tighter uppercase leading-none mb-1">
              Testnet Pública <span className="bg-black text-[#D2FF00] px-3 py-1 rounded-lg inline-block transform -skew-x-6">No Ar</span>
            </h1>
            
            <div className="flex items-center gap-2 text-black text-xl font-medium mt-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="transform -rotate-45">
                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
              Rede <span className="font-light">Robinhood</span>
            </div>
          </div>
          
          <div className="relative z-10 mt-4 md:mt-0">
            <div className="inline-block border-2 border-black rounded-full px-5 py-1.5 bg-black/5 backdrop-blur-sm">
              <span className="text-black font-bold text-sm uppercase tracking-wide">Arrecadou $5.7B</span>
            </div>
          </div>
        </div>

        {/* CTA Mercurius Crypto Discreto */}
        <a 
          href="https://analise.mercuriuscrypto.com/reset-cripto" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex flex-col sm:flex-row items-center justify-center gap-2 bg-[#111] hover:bg-[#151515] border border-gray-800 hover:border-gray-700 rounded-xl p-4 transition-all mb-8 text-center"
        >
          <span className="text-gray-400 text-sm">
            Participe do meu treinamento
          </span>
          <span className="text-[#D2FF00] text-sm font-semibold flex items-center gap-1 group-hover:underline">
            Reset Cripto <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </a>

        {/* Estatísticas / Progresso */}
        <div className="mt-12 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">Guia de Interações Passo a Passo</h3>
            <span className="text-[#D2FF00] font-mono font-bold bg-[#D2FF00]/10 px-3 py-1 rounded-md">
              {progressPercentage}% Concluído
            </span>
          </div>
          <div className="w-full bg-gray-900 h-2 rounded-full overflow-hidden border border-gray-800">
            <div 
              className="bg-[#D2FF00] h-full transition-all duration-500 ease-out shadow-[0_0_10px_#D2FF00]"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Content / Steps */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {tutorialSteps.map((phase, index) => {
            const isExpanded = expandedPhase === phase.id;
            const phaseTasksCompleted = phase.tasks.filter(t => completedTasks.includes(t.id)).length;
            const isPhaseComplete = phaseTasksCompleted === phase.tasks.length;

            return (
              <div key={phase.id} className="bg-[#111] border border-gray-800 rounded-xl overflow-hidden transition-all duration-200 hover:border-gray-700">
                {/* Phase Header */}
                <button 
                  onClick={() => togglePhase(phase.id)}
                  className="w-full px-6 py-5 flex items-center justify-between bg-[#151515] hover:bg-[#1a1a1a] transition-colors text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${isPhaseComplete ? 'bg-[#D2FF00]/20 text-[#D2FF00]' : 'bg-gray-800 text-gray-400'}`}>
                      {isPhaseComplete ? <CheckCircle2 className="w-6 h-6" /> : phase.icon}
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${isPhaseComplete ? 'text-gray-500 line-through decoration-gray-600' : 'text-white'}`}>
                        {phase.title}
                      </h3>
                      <p className="text-sm text-gray-400 hidden sm:block mt-0.5">{phase.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-mono text-gray-500">
                      {phaseTasksCompleted}/{phase.tasks.length}
                    </span>
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </div>
                </button>

                {/* Phase Content (Tasks) */}
                {isExpanded && (
                  <div className="p-6 border-t border-gray-800 space-y-4 bg-[#0a0a0a]">
                    {phase.tasks.map(task => {
                      const isTaskDone = completedTasks.includes(task.id);
                      
                      return (
                        <div key={task.id} className={`p-5 rounded-xl border ${isTaskDone ? 'bg-[#D2FF00]/5 border-[#D2FF00]/20' : 'bg-[#111] border-gray-800'} transition-all`}>
                          <div className="flex flex-col sm:flex-row gap-5 justify-between items-start sm:items-center">
                            <div className="flex-1">
                              <h4 className={`text-base font-bold ${isTaskDone ? 'text-gray-400' : 'text-white'} flex items-center gap-2`}>
                                {task.title}
                              </h4>
                              <p className="text-sm text-gray-400 mt-1.5 leading-relaxed">{task.desc}</p>
                              
                              {/* Sublinks if available */}
                              {task.subLinks && (
                                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                  {task.subLinks.map((sub, idx) => (
                                    <a 
                                      key={idx} 
                                      href={sub.url} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="text-xs flex items-center justify-between px-3 py-2.5 bg-black hover:bg-gray-900 border border-gray-800 rounded-lg text-gray-300 hover:text-[#D2FF00] transition-colors group"
                                    >
                                      <span className="truncate pr-2 font-medium">{sub.name}</span>
                                      <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-gray-600 group-hover:text-[#D2FF00]" />
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                            
                            <div className="flex flex-row sm:flex-col items-center sm:items-stretch gap-3 w-full sm:w-auto mt-4 sm:mt-0">
                              {task.link && (
                                <a 
                                  href={task.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-semibold transition-colors border border-gray-700"
                                >
                                  Acessar <ExternalLink className="w-4 h-4" />
                                </a>
                              )}
                              
                              <button 
                                onClick={() => toggleTask(task.id)}
                                className={`flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors border ${
                                  isTaskDone 
                                    ? 'bg-[#D2FF00]/10 text-[#D2FF00] border-[#D2FF00]/30 hover:bg-[#D2FF00]/20' 
                                    : 'bg-transparent text-gray-400 border-gray-600 hover:border-gray-400 hover:text-white'
                                }`}
                              >
                                {isTaskDone ? (
                                  <><CheckCircle2 className="w-4 h-4" /> Concluído</>
                                ) : (
                                  <><Circle className="w-4 h-4" /> Marcar Feito</>
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-800 bg-[#070707] py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4 text-center">
          
          {/* Aviso de Airdrop Discreto no Rodapé */}
          <div className="flex items-center justify-center gap-2 text-yellow-500/80 text-xs font-medium bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20 mb-2">
            <AlertTriangle className="w-4 h-4" />
            <span>Airdrop não confirmado. Interações de caráter especulativo e educacional.</span>
          </div>

          <div className="flex items-center gap-2 text-gray-500">
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-widest">Testnet Environment</span>
          </div>
          <p className="text-gray-600 text-xs max-w-2xl mt-2">
            Este material foi criado com o objetivo de mapear interações gratuitas na rede de testes (Testnet) e não garante qualquer tipo de retorno financeiro, airdrop ou recompensa por parte da Robinhood ou projetos associados.
          </p>
        </div>
      </footer>
      <SpeedInsights />
    </div>
  );
}
