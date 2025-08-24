import React from 'react';
import { HighlightContent, Highlight } from '@/components/ui/highlight';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from 'next/image';
import { Home, Car, Map as MapIcon, ListChecks, CreditCard, AlertCircle, CircleDot, FileText, Smartphone, Tv, Wifi, AlertTriangle, ShieldCheck, Zap, Settings, HelpCircle, HardDrive, History, MessageSquare, User, Wrench, TerminalSquare, Siren, BarChart, MapPin, Link as LinkIcon, ParkingCircle, Unplug, GitBranch, BookUser, LogOut, FileBarChart, PlusCircle, CarTaxiFront, Info } from "lucide-react";


const Pill = ({ variant, children }: { variant: 'ok' | 'warn' | 'err', children: React.ReactNode }) => {
    const variants = {
        ok: 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800',
        warn: 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800',
        err: 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800',
    };
    return <span className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-bold ${variants[variant]}`}>{children}</span>
};

type ContentProps = {
    query: string;
    openItems?: string[];
    onOpenChange?: (items: string[]) => void;
};

const renderContent = (content: React.ReactNode, query: string) => {
    return <HighlightContent query={query}>{content}</HighlightContent>;
};

const accordionSections = {
    fluxo: ["fluxo-pa5", "fluxo-bolsao", "fluxo-pa3", "fluxo-pa2", "fluxo-piso-inf", "fluxo-piso-sup"],
    regras: ["regras-fila-unica", "regras-gerais", "regras-tunel", "regras-obs"],
    pda: ["pda-home", "pda-menu", "pda-exibicao", "pda-solucao", "pda-requisitos"]
};

export const manualSections = [
    {
        id: 'intro',
        icon: Home,
        title: 'Manual de Operações',
        content: ({ query }: ContentProps) => renderContent(
            <>
                <p className="lead"><strong>Aeroporto de Congonhas.</strong></p>
                <p>Este manual é o seu guia completo para operar no aeroporto pela <strong>D-TÁXI</strong>. Ele detalha o funcionamento de cada Ponto de Apoio (PA) e as regras que garantem a eficiência e o profissionalismo do nosso serviço. Siga estas orientações para maximizar seus ganhos e manter o alto padrão da empresa.</p>
                <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-400">
                    <p className="text-sm text-orange-800 dark:text-orange-200"><strong>⚡ OPERAÇÃO DE ALTA EFICIÊNCIA:</strong> A operação realiza cerca de <strong>3000 embarques por dia</strong>. Cada minuto perdido afeta diretamente o número de corridas e seus ganhos. A eficiência é crucial para maximizar sua receita diária.</p>
                </div>
                <div className="app-screenshot mt-4">
                    <Image src="/images/cgh.png" width={800} height={400} alt="Foto do Aeroporto de Congonhas" className="app-img" data-ai-hint="airport terminal" />
                </div>
            </>,
            query
        )
    },
    {
        id: 'padrao',
        icon: Car,
        title: 'Padrão Operacional Obrigatório',
        content: ({ query }: ContentProps) => renderContent(
            <>
                <p>Para representar a excelência da D-Táxi e garantir a confiança dos passageiros, o motorista deve estar devidamente uniformizado e com o veículo alinhado e limpo antes de entrar na fila no PA5. O não cumprimento deste padrão pode resultar em penalidades e afetar sua permanência no sistema. As regras de vestimenta são as seguintes:</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li><strong>Camisa:</strong> Social, branca, de manga comprida ou curta.</li>
                    <li><strong>Gravata:</strong> Na cor verde, no tom permitido pela empresa.</li>
                    <li><strong>Calça:</strong> Social preta ou de sarja preta, com o corte do bolso tipo faca.</li>
                    <li><strong>Sapato:</strong> Social preto ou sapatênis preto, totalmente preto, sem detalhes.</li>
                </ul>
                <div className="app-screenshot mt-4">
                    <Image src="/images/uniforme.png" width={600} height={400} alt="Uniforme padrão do motorista" className="app-img" data-ai-hint="taxi driver uniform" />
                </div>
            </>,
            query
        )
    },
    {
        id: 'estrutura',
        icon: MapIcon,
        title: '1. A Estrutura da Fila e a Localização dos PAs',
        content: ({ query }: ContentProps) => renderContent(
            <>
                <p>O sistema do D-Táxi é uma cadeia de espera inteligente e organizada, onde os carros se movem de áreas maiores para áreas menores, mais próximas ao embarque de passageiros. O fluxo é totalmente automático, baseado no sinal de GPS e na anotação cronológica (quem chega primeiro, é solicitado primeiro), garantindo justiça e eficiência para todos os motoristas.</p>
                <p className="mt-2">Apesar de ter 34 vagas, o Bolsão é dinâmico, com alta rotatividade, atendendo em média mais de 90 carros por hora. A intenção não é que todos fiquem estacionados, mas sim que o local sirva para organizar a fila e oferecer um ponto de apoio confortável e rápido para os motoristas, otimizando o tempo de espera e aumentando a produtividade.</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li><strong>PA5:</strong> A primeira entrada no sistema, com número ilimitado de vagas, localizado nas proximidades do Assaí Aeroporto.</li>
                    <li><strong>Bolsão Principal:</strong> Com 34 vagas, está localizado sob o viaduto da Washington Luís com Roberto Marinho, na Praça José Blota Júnior.</li>
                    <li><strong>PA3:</strong> Com 24 vagas, está localizado na Rua dos Tamoios, oposto ao número 100.</li>
                    <li><strong>PA2:</strong> Com 12 vagas, está localizado na extensão do desembarque, próximo à portaria 3 da Gol Linhas Aéreas.</li>
                    <li><strong>Piso Inferior:</strong> Conta com 2 vagas para o embarque de passageiros.</li>
                    <li><strong>Piso Superior (PA0):</strong> Possui 7 vagas para o embarque de passageiros.</li>
                </ul>
                <div className="app-screenshot mt-4">
                    <Image src="/images/mapas.png" width={800} height={500} alt="Mapa das áreas de espera (PAs)" className="app-img" data-ai-hint="airport map points" />
                </div>
            </>,
            query
        )
    },
    {
        id: 'fluxo',
        icon: ListChecks,
        title: '2. Fluxo de Trabalho e Regras por Ponto de Apoio',
        accordionItems: accordionSections.fluxo,
        content: ({ query, openItems, onOpenChange }: ContentProps) => (
            <Accordion type="multiple" className="w-full space-y-2" value={openItems} onValueChange={onOpenChange}>
                <AccordionItem value="fluxo-pa5">
                    <AccordionTrigger>
                        <Highlight text="PA5 (Ponto de Entrada)" query={query} />
                    </AccordionTrigger>
                    <AccordionContent>
                        {renderContent(<>
                            <p><strong>Função:</strong> A porta de entrada para a fila do aeroporto. O aplicativo usa seu GPS para registrar sua chegada e te colocar na última posição.</p>
                            <p><strong>Instruções de Operação:</strong></p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Acesso:</strong> Dirija até a área virtual e certifique-se de que o aplicativo registrou sua entrada.</li>
                                <li><strong>Padrão de Qualidade:</strong> A partir deste ponto, você deve estar devidamente uniformizado e com o carro limpo e alinhado, pronto para o atendimento.</li>
                                <li><strong>Conduta:</strong> Não é permitido obstruir entradas/saídas, parar em fila dupla ou na contramão.</li>
                                <li><strong>Disponibilidade:</strong> Evite refeições no PA5 com o PDA livre.</li>
                                <li><strong>Avanço:</strong> Aguarde a notificação do aplicativo para se mover ao Bolsão Principal.</li>
                            </ul>
                            <h4 className="font-bold text-base mt-4 mb-2">Como vai funcionar a área de espera do PA 5</h4>
                            <div className="space-y-4">
                                <div>
                                    <h5 className="font-semibold">1️⃣ Vindo do Centro pela Av. Washington Luís</h5>
                                    <ul className="list-disc pl-5 space-y-1 text-sm mt-1">
                                        <li><strong className="inline-flex items-center gap-2"><ParkingCircle size={14} /> Onde aguardar:</strong> região do Mercado Assaí (pontos permitidos nos arredores).</li>
                                        <li><strong className="inline-flex items-center gap-2">🔔 Quando chamado:</strong> siga pela pista local e acesse o bolsão com calma e atenção.</li>
                                        <li><a href="https://maps.app.goo.gl/mFXdgY2Pv4WjzWdf9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline"><LinkIcon size={14} /> Localização do ponto de espera no mapa</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-semibold">2️⃣ Vindo de Interlagos (Washington Luís → sentido aeroporto)</h5>
                                    <ul className="list-disc pl-5 space-y-1 text-sm mt-1">
                                        <li><strong className="inline-flex items-center gap-2"><ParkingCircle size={14} /> Onde aguardar:</strong> próximo à Nicom - Material de construção (nos pontos permitidos).</li>
                                        <li><strong className="inline-flex items-center gap-2">🔔 Quando chamado:</strong> mantenha-se na direita e entre no bolsão pela entrada indicada.</li>
                                        <li><a href="https://maps.app.goo.gl/ZHv32MjkMqVm5RxMA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline"><LinkIcon size={14} /> Localização do ponto de espera no mapa</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-semibold">3️⃣ Vindo do Brooklin (pela Av. Jornalista Roberto Marinho → sentido aeroporto)</h5>
                                    <ul className="list-disc pl-5 space-y-1 text-sm mt-1">
                                        <li><strong className="inline-flex items-center gap-2"><ParkingCircle size={14} /> Onde aguardar:</strong> vias próximas à comunidade, de preferência na "rua de cima", como Rua Joaquim Nabuco ou Rua Laplace.</li>
                                        <li><strong>✅ Alternativa:</strong> pode optar por aguardar próximo ao Assaí.</li>
                                        <li><strong className="inline-flex items-center gap-2">🔔 Quando chamado:</strong> siga com tranquilidade para a entrada do bolsão.</li>
                                        <li><a href="https://maps.app.goo.gl/igBXAEd3we3DGXxs5" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline"><LinkIcon size={14} /> Localização no mapa</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-semibold">4️⃣ Vindo do Jabaquara (pela Av. Jornalista Roberto Marinho → aeroporto)</h5>
                                    <ul className="list-disc pl-5 space-y-1 text-sm mt-1">
                                        <li><strong className="inline-flex items-center gap-2"><ParkingCircle size={14} /> Onde aguardar:</strong> próximo ao Parque do Chuvisco (há área de sombra de espera).</li>
                                        <li><strong>✅ Alternativa:</strong> aguardar no lado da Nicom - Material de construção.</li>
                                        <li><strong className="inline-flex items-center gap-2">🔔 Quando chamado:</strong> dirija-se ao bolsão pelo acesso indicado, sem paradas no caminho.</li>
                                        <li><a href="https://maps.app.goo.gl/9zqwPHT36vESbfMB6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline"><LinkIcon size={14} /> Localização do ponto de espera no mapa</a></li>
                                    </ul>
                                </div>
                            </div>
                        </>, query)}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="fluxo-bolsao">
                    <AccordionTrigger><Highlight text="Bolsão Principal (Ponto de Espera)" query={query} /></AccordionTrigger>
                    <AccordionContent>
                        {renderContent(<>
                            <p className='text-sm text-muted-foreground'>34 vagas rotativas • 06h–23h</p>
                            <p>Apesar de ter 34 vagas, o Bolsão é dinâmico, com alta rotatividade, atendendo em média mais de 90 carros por hora. Nenhum ponto de táxi comporta todos os carros estacionados; a ideia é ter um fluxo constante. O Bolsão, embora possa parecer pequeno, é muito útil para organizar a fila e trazer conforto aos motoristas, servindo como um rápido ponto de apoio.</p>
                            <p className='mt-2'><strong>Função:</strong> A primeira área de espera física. Organiza a transição dos motoristas do PA5 para os próximos PAs.</p>
                            <p className='mt-2'><strong>Localização:</strong> <a href="https://maps.app.goo.gl/78tV5ZfjWo7Wo3Jt7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline"><LinkIcon size={14} /> Ver localização do bolsão no mapa</a></p>
                            <p className="mt-2"><strong>Instruções de Operação:</strong></p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Conexão:</strong> A unidade deve estar anotada na fila do Bolsão e conectada ao PDA para permanecer no local.</li>
                                <li><strong>Fluxo de Veículos:</strong> Entrada pelo portão 1 e saída pelo portão 2.</li>
                                <li><strong>Proibições:</strong> Não lavar o carro com água, não buzinar, não abandonar o carro no local.</li>
                                <li><strong>Padrão:</strong> Não sair do Bolsão com o carro sujo ou sem uniforme.</li>
                            </ul>
                        </>, query)}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="fluxo-pa3">
                    <AccordionTrigger><Highlight text="PA3 (Ponto Estratégico)" query={query} /></AccordionTrigger>
                    <AccordionContent>
                        {renderContent(<>
                            <p className='text-sm text-muted-foreground'>24 vagas</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Localização:</strong> Rua dos Tamoios, oposto ao número 100. <a href="https://maps.app.goo.gl/MCb5Zgai8iVgnoqZ9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline"><LinkIcon size={14} /> Ver localização no mapa</a></li>
                                <li><strong>Capacidade:</strong> 24 vagas (17 baia principal + 7 extras).</li>
                                <li><strong>Função:</strong> Guarnecer o PA2; pode ser chamado para o Piso Inferior.</li>
                            </ul>
                            <p><strong>Instruções:</strong></p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Puxe os carros à frente quando um colega sair para evitar lacunas.</li>
                                <li>Limpeza rápida com pano é permitida; limpeza com água é proibida.</li>
                                <li>Não abandonar o carro no local.</li>
                            </ul>

                            <p className="mt-3"><strong className='text-red-500'>⚠️ MANOBRA OBRIGATÓRIA:</strong></p>
                            <p className="text-sm text-muted-foreground mb-2">É <strong>estritamente proibido</strong> manobrar diretamente na R. Tamoios a partir do PA3.</p>
                            <p className="text-sm"><strong>Rota Obrigatória:</strong> Para acessar a baia principal da rua Tamoios, siga obrigatoriamente o contorno pelas ruas laterais:</p>
                            <ol className="list-decimal pl-5 space-y-1 text-sm mt-2">
                                <li><strong>R. Tamoios</strong> → a direita na <strong>Rua Padre Leonardo</strong> ao lado do Habib's</li>
                                <li><strong>Rua Padre Leonardo</strong> → a esquerda na <strong>R. Capiberibe</strong></li>
                                <li><strong>R. Capiberibe</strong> → a esquerda na <strong>R. Visconde de Ourem</strong></li>
                                <li><strong>R. Visconde de Ourem</strong> → a esquerda na <strong>R. Tamoios</strong></li>
                                <li><strong>R. Tamoios</strong> →  estacione na baia principal no sentido <strong>Av. Washington Luís</strong></li>
                            </ol>
                            <p className="text-sm text-muted-foreground mt-2">Esta rota é obrigatória para evitar congestionamento e garantir a segurança do tráfego na avenida principal.</p>

                            <p className="mt-4"><strong className='text-blue-600'>🚗 ORGANIZAÇÃO DA BAIA:</strong></p>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                                <li><strong>Veículos Estacionados:</strong> Devem sempre ajustar os carros para acomodar as unidades que chegam, movendo-se para frente para preencher lacunas.</li>
                                <li><strong>Unidades Adicionais:</strong> Devem aguardar nas vias próximas sem obstruir garagens, comércios ou vias de acesso.</li>
                                <li><strong>Proibições:</strong> Não parar em fila dupla, não obstruir entradas de estabelecimentos ou garagens residenciais.</li>
                                <li><strong>Conduta:</strong> Manter sempre o fluxo organizado e respeitar o espaço dos moradores e comerciantes da região.</li>
                            </ul>
                        </>, query)}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="fluxo-pa2">
                    <AccordionTrigger><Highlight text="PA2 (Ponto Final de Espera)" query={query} /></AccordionTrigger>
                    <AccordionContent>
                        {renderContent(<>
                            {/* Visão Geral */}
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-orange-600 mb-3">📋 Visão Geral</h3>
                                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-2 border-orange-200 dark:border-orange-800 shadow-sm">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-orange-200 dark:border-orange-700">
                                                <span className="text-orange-500 font-bold text-2xl">🚗</span>
                                                <div>
                                                    <strong className="text-orange-700 dark:text-orange-300">Capacidade:</strong>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">12 vagas</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-orange-200 dark:border-orange-700">
                                                <span className="text-orange-500 font-bold text-2xl">🎯</span>
                                                <div>
                                                    <strong className="text-orange-700 dark:text-orange-300">Função:</strong>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">Alimentar estrategicamente o PA0 (Piso Superior)</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-orange-200 dark:border-orange-700">
                                                <span className="text-orange-500 font-bold text-2xl">⚡</span>
                                                <div>
                                                    <strong className="text-orange-700 dark:text-orange-300">Operação:</strong>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">Sistema pode solicitar até 7 carros simultaneamente</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-orange-200 dark:border-orange-700">
                                                <span className="text-orange-500 font-bold text-2xl">📍</span>
                                                <div>
                                                    <strong className="text-orange-700 dark:text-orange-300">Localização:</strong>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">Extensão do desembarque, próximo à portaria 3 da Gol</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-orange-200 dark:border-orange-700">
                                                <span className="text-orange-500 font-bold text-2xl">⚠️</span>
                                                <div>
                                                    <strong className="text-orange-700 dark:text-orange-300">Importância:</strong>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">Área crítica para manter a ordem física da fila e garantir eficiência</p>
                                                </div>
                                            </div>
                                            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500 shadow-sm">
                                                <p className="text-sm text-red-700 dark:text-red-300 flex items-center gap-2">
                                                    <AlertTriangle size={18} className="text-red-500" />
                                                    <strong>🚨 Alerta Crítico:</strong> O PA2 alimenta o PA0 com até 7 carros simultaneamente. ➡️ Respeitar a ordem física é essencial para a eficiência da operação.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Regras de Ultrapassagem */}
                            <div className="mb-6">
                                <h4 className="font-semibold text-red-700 dark:text-red-300 mb-4 flex items-center gap-2">
                                    <AlertTriangle size={18} />
                                    ⚖️ Regras de Ultrapassagem
                                </h4>
                                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        <div className="space-y-4">
                                            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border-2 border-red-300 dark:border-red-700 shadow-md hover:shadow-lg transition-all duration-300">
                                                <div className="flex items-start gap-1">
                                                    <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <span className="text-red-600 dark:text-red-400 text-xl">🚫</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h5 className="font-bold text-red-700 dark:text-red-300 mb-1">Proibição de Ultrapassagem</h5>
                                                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                                            <strong>Proibido ultrapassar</strong> a partir da faixa de pedestre da VASP <br/>(Corredor Norte-Sul)
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border-2 border-red-300 dark:border-red-700 shadow-md hover:shadow-lg transition-all duration-300">
                                                <div className="flex items-start gap-3">
                                                    <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <span className="text-red-600 dark:text-red-400 text-xl">🎯</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h5 className="font-bold text-red-700 dark:text-red-300 mb-2">Marco Visual</h5>
                                                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                                            <strong>A faixa é o marco visual</strong> que define o início da zona de proibição.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500">
                                                <div className="flex items-start gap-3">
                                                    <span className="text-amber-600 dark:text-amber-400 text-xl">⚠️</span>
                                                    <div>
                                                        <p className="text-sm text-amber-700 dark:text-amber-300 font-medium">
                                                            <strong>Importante:</strong> Respeitar esta regra é fundamental para a segurança e eficiência da operação.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex justify-center">
                                            <div className="relative group overflow-hidden rounded-xl border-2 border-red-300 dark:border-red-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                                <Image
                                                    src="/images/vasp.png"
                                                    width={500}
                                                    height={350}
                                                    alt="Faixa de pedestre da VASP - ponto de referência para proibição de ultrapassagens"
                                                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                <div className="absolute bottom-2 left-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                                                    📍 Ponto de Referência
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Regras de Operação */}
                            <div className="mb-6">
                                <h4 className="font-semibold text-blue-600 mb-3 flex items-center gap-2">
                                    <Settings size={18} />
                                    Regras de Operação
                                </h4>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                                        <h5 className="font-semibold text-green-700 dark:text-green-300 mb-3 flex items-center gap-2">
                                            ✅ <span className="text-sm">O que FAZER</span>
                                        </h5>
                                        <ul className="space-y-2 text-sm text-green-600 dark:text-green-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-bold">🚗</span>
                                                <span><strong>Ficar próximo ao veículo:</strong> Pronto para partir</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-bold">⚡</span>
                                                <span><strong>Estar sempre atento:</strong> A fila avança rápido</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-bold">🎯</span>
                                                <span><strong>Avançar apenas quando for solicitado</strong></span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-bold">📱</span>
                                                <span><strong>Monitorar constantemente o PDA</strong></span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-bold">🚙</span>
                                                <span><strong>Estacionar os carros próximos:</strong> Para acomodar melhor</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                                        <h5 className="font-semibold text-red-700 dark:text-red-300 mb-3 flex items-center gap-2">
                                            ❌ <span className="text-sm">O que NÃO fazer</span>
                                        </h5>
                                        <ul className="space-y-2 text-sm text-red-600 dark:text-red-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-red-500 font-bold">🧽</span>
                                                <span><strong>Limpar o carro no PA2</strong></span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-red-500 font-bold">🔊</span>
                                                <span><strong>Buzinar</strong></span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-red-500 font-bold">↩️</span>
                                                <span><strong>Dar ré e ou passar sobre a calçada</strong></span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-red-500 font-bold">🚕</span>
                                                <span><strong>Abandonar o carro na BAIA</strong></span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-red-500 font-bold">⏭️</span>
                                                <span><strong>Ultrapassar a fila física</strong></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Cenários Operacionais */}
                            <div className="mb-6">
                                <h4 className="font-semibold text-purple-600 mb-3 flex items-center gap-2">
                                    <ListChecks size={18} />
                                    🔄 Cenários Operacionais – Como Resolver Conflitos
                                </h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                                        <h5 className="font-semibold text-green-700 dark:text-green-300 mb-3 flex items-center gap-2">
                                            🚗 <span className="text-sm">Cenário 1 – Chamada Individual</span>
                                        </h5>
                                        <div className="space-y-3 text-sm text-green-600 dark:text-green-400">
                                            <p><strong>Situação:</strong> O PDA chama apenas a sua unidade.</p>

                                            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded border border-green-300 dark:border-green-700">
                                                <p className="mb-2"><strong>Exemplo Prático:</strong></p>
                                                <p>• Você chegou fisicamente em 2º lugar</p>
                                                <p>• Mas o PDA mostra você em 1º lugar</p>
                                                <p>• E o sistema chama apenas você</p>
                                                <p className="mt-2">➡️ <strong>SOLUÇÃO:</strong> Siga o PDA!</p>
                                            </div>

                                            <div className="bg-green-200 dark:bg-green-800 p-2 rounded border border-green-400 dark:border-green-600">
                                                <p className="text-green-800 dark:text-green-200">
                                                    ✅ <strong>Regra:</strong> Quando só você é chamado, a prioridade é do sistema.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                                        <h5 className="font-semibold text-red-700 dark:text-red-300 mb-3 flex items-center gap-2">
                                            🚙 <span className="text-sm">Cenário 2 – Chamada Múltipla</span>
                                        </h5>
                                        <div className="space-y-3 text-sm text-red-600 dark:text-red-400">
                                            <p><strong>Situação:</strong> O PDA chama várias unidades ao mesmo tempo.</p>

                                            <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded border border-red-300 dark:border-red-700">
                                                <p className="mb-2"><strong>Exemplo Prático:</strong></p>
                                                <p>• Você chegou fisicamente em 2º lugar</p>
                                                <p>• O PDA mostra você em 1º lugar</p>
                                                <p>• Mas o sistema chama você E o carro da frente</p>
                                                <p className="mt-2">➡️ <strong>SOLUÇÃO:</strong> Respeite a ordem física!</p>
                                            </div>

                                            <div className="bg-red-200 dark:bg-red-800 p-2 rounded border border-red-400 dark:border-red-600">
                                                <p className="text-red-800 dark:text-red-200">
                                                    ❌ <strong>Proibido:</strong> Ultrapassar quem chegou antes fisicamente.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
                                    <p className="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-2">
                                        <AlertTriangle size={16} className="text-amber-500" />
                                        <strong>⚠️ Regra Absoluta:</strong> Se uma unidade já estiver em movimento, não pode ser ultrapassada em nenhuma hipótese.
                                    </p>
                                </div>
                            </div>

                            {/* Alertas e Dicas Finais */}
                            <div className="space-y-4">


                                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                                    <p className="text-sm text-blue-700 dark:text-blue-300 flex items-center gap-2">
                                        <Info size={16} className="text-blue-500" />
                                        <strong>💡 Dica Operacional:</strong> Divergências podem ocorrer por falhas de GPS/internet. Em caso de dúvida → confirme com o fiscal operacional.
                                    </p>
                                </div>

                                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                                    <p className="text-sm text-green-700 dark:text-green-300 flex items-center gap-2">
                                        <Zap size={16} className="text-green-500" />
                                        <strong>💰 Impacto Operacional:</strong> Cada minuto de atraso ou desorganização prejudica a eficiência do PA0. ➡️ Ordem física + atenção ao sistema = produtividade para todos.
                                    </p>
                                </div>
                            </div>
                        </>, query)}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="fluxo-piso-inf">
                    <AccordionTrigger><Highlight text="Piso Inferior (Área de Embarque)" query={query} /></AccordionTrigger>
                    <AccordionContent>
                        {renderContent(<>
                            <p className='text-sm text-muted-foreground'>2 vagas</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Localização:</strong> <a href="https://maps.app.goo.gl/7Xvs4oDzc2jDkXFg7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline"><LinkIcon size={14} /> Ver localização do Piso Inferior no mapa</a></li>
                                <li><strong>Função:</strong> Guarnecido pelo PA3.</li>
                                <li><strong>Permanência Obrigatória:</strong> Para permanecer no Piso Inferior, a unidade deve estar anotada no PDA em qualquer horário, <strong>EXCETO</strong> durante a Fila Única (ver grupo do WhatsApp para detalhes).</li>
                                <li><strong>Regras ao Embarcar:</strong> Portas destravadas, vidros fechados e ar-condicionado ligado.</li>
                                <li>Não é permitido limpar o carro, entrar no saguão para chamar passageiros ou buzinar.</li>
                                <li><strong className='text-red-500'>Acesso Proibido:</strong> É estritamente proibido dar ré ou passar sobre a calçada para acessar o piso inferior. Esta atitude viola normas de trânsito (CTB), da AENA e das empresas.</li>
                                <li><strong className='text-yellow-500'>Erro de Rota:</strong> Se errar o acesso, é obrigatório retomar o processo e entrar na fila novamente. Não cometa infrações para retornar.</li>
                            </ul>
                        </>, query)}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="fluxo-piso-sup">
                    <AccordionTrigger><Highlight text="Piso Superior (PA0) – Área de Embarque" query={query} /></AccordionTrigger>
                    <AccordionContent>
                        {renderContent(<>
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-blue-600 mb-2">📋 Visão Geral</h3>
                                <p className='text-sm text-muted-foreground mb-3'>7 vagas • Principal área de embarque</p>
                                <p>O Piso Superior (PA0) é a área de embarque principal do aeroporto, onde os passageiros são atendidos de forma organizada e eficiente. Esta área pode alternar entre empresas conforme a demanda e horários de voos.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                                        <MapPin size={18} />
                                        Informações Principais
                                    </h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-500 font-bold">📍</span>
                                            <span><strong>Localização:</strong> Piso térreo – área de desembarque, próximo ao saguão principal. <a href="https://maps.app.goo.gl/yRZegzRPMffpFP2b6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline"><LinkIcon size={14} /> Ver localização no mapa</a></span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-500 font-bold">🚗</span>
                                            <span><strong>Capacidade:</strong> 7 vagas organizadas para embarque simultâneo.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-500 font-bold">🎯</span>
                                            <span><strong>Função:</strong> Principal área de embarque com alternância entre empresas.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-500 font-bold">⏰</span>
                                            <span><strong>Horário:</strong> Embarque das 6h00 às 23h00, conforme horários de voos das companhias aéreas.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3 flex items-center gap-2">
                                        <AlertCircle size={18} />
                                        Regras de Operação
                                    </h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-500 font-bold">👔</span>
                                            <span><strong>Conduta:</strong> Postura profissional e cortês com passageiros e colegas.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-500 font-bold">🚫</span>
                                            <span><strong>Proibições:</strong> Não fumar, não descer para socializar.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-500 font-bold">🚙</span>
                                            <span><strong>Permanência:</strong> Permaneça no veículo aguardando passageiros.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-500 font-bold">💬</span>
                                            <span><strong>Comunicação:</strong> Respeitosa com fiscais e coordenadores.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800 mb-6">
                                <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3 flex items-center gap-2">
                                    <Car size={18} />
                                    Instruções de Embarque
                                </h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h5 className="font-medium text-orange-600 mb-2">✅ Preparação do Veículo</h5>
                                        <ul className="space-y-1 text-sm">
                                            <li><strong>Limpeza:</strong> Veículo limpo e organizado</li>
                                            <li><strong>Ar-Condicionado:</strong> Ligado para conforto</li>
                                            <li><strong>Vidros:</strong> Fechados para controle térmico</li>
                                            <li><strong>Portas:</strong> Todas destravadas</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-orange-600 mb-2">⚡ Durante o Embarque</h5>
                                        <ul className="space-y-1 text-sm">
                                            <li><strong>Porta-Malas:</strong> Acessível para bagagens</li>
                                            <li><strong>Aguardo:</strong> Sem sair do veículo</li>
                                            <li><strong>Agilidade:</strong> Embarque rápido e eficiente</li>
                                            <li><strong>Endereços:</strong>
                                                <ul className="mt-1 ml-3 space-y-1">
                                                    <li>• Peça ao passageiro para inserir o endereço no app</li>
                                                    <li>• Use a função de comando de voz do seu app de navegação</li>
                                                    <li>• Se necessário, estacione brevemente para inserir com segurança</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-400">
                                    <p className="text-sm text-blue-800 dark:text-blue-200">
                                        <strong>💡 Dica:</strong> O Piso Superior é o ponto final da operação. Mantenha o padrão de excelência da D-Táxi para garantir uma experiência positiva aos passageiros e manter a reputação da empresa.
                                    </p>
                                </div>

                                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-400">
                                    <p className="text-sm text-red-800 dark:text-red-200">
                                        <strong>💰 IMPACTO FINANCEIRO:</strong> Com 3000 embarques diários, cada minuto de atraso pode custar corridas valiosas. A agilidade no embarque e respeito às regras operacionais são investimentos diretos no seu faturamento.
                                    </p>
                                </div>
                            </div>
                        </>, query)}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        )
    },
    {
        id: 'pagamentos',
        icon: CreditCard,
        title: '3. Pagamentos e Cobranças',
        content: ({ query }: ContentProps) => renderContent(
            <>
                <p><strong>Obrigação de Pagamento:</strong> Todas as unidades são obrigadas a aceitar os seguintes métodos para garantir o funcionamento da operação:</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li><strong className='flex items-center gap-2'><Zap size={16} className="text-yellow-500" />PIX:</strong> Exigência da operadora do aeroporto.</li>
                    <li><strong className='flex items-center gap-2'><CreditCard size={16} className="text-blue-500" />Cartões de Crédito e Débito:</strong> Regulamentados pela prefeitura; obrigatórios.</li>
                    <li><strong className='flex items-center gap-2'><Smartphone size={16} className="text-green-500" />Máquina de Cartão:</strong> É proibido trabalhar sem a máquina física.</li>
                    <li><strong className='flex items-center gap-2'><ShieldCheck size={16} className="text-purple-500" />Todas as Bandeiras:</strong> Devem ser aceitas conforme norma DTP.</li>
                    <li><strong className='flex items-center gap-2'><ShieldCheck size={16} className="text-indigo-500" />QR Code:</strong> Use para garantir melhor segurança e evitar fraudes.</li>
                </ul>
                <p className="mt-4"><strong>Práticas Proibidas:</strong></p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>Taxa de maquininha e "taxa de município" são proibidas.</li>
                    <li>É proibido cobrar bandeira 2 fora do horário.</li>
                    <li>É proibido prolongar o trajeto propositalmente.</li>
                    <li>É proibido cobrar taxas adicionais não autorizadas.</li>
                </ul>

                <p className="mt-4"><strong>Taxas Permitidas (devidamente combinadas com o passageiro):</strong></p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li><strong>Pedágios:</strong> Apenas na ida (os pedágios de volta são proibidos).</li>
                    <li><strong>Estacionamentos:</strong> Quando devidamente combinados com o passageiro.</li>
                </ul>

                <p className="mt-4"><strong>Penalidades:</strong> Recusa de pagamento ou cobrança indevida pode levar à rescisão do contrato.</p>
                <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-400">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                        <strong>⚠️ Lembre-se:</strong> Aceitar todos os métodos de pagamento não apenas cumpre as obrigações legais, mas também aumenta suas chances de receber corridas e maximizar seus ganhos diários.
                    </p>
                </div>
            </>,
            query
        )
    },
    {
        id: 'bolinhas',
        icon: CircleDot,
        title: '4. Observações sobre o Sistema de Bolinhas',
        content: ({ query }: ContentProps) => renderContent(
            <>
                <div className="mb-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-blue-800 dark:text-blue-200 flex items-center gap-2">
                        <CircleDot size={20} className="text-blue-500" />
                        <strong>O sistema de bolinhas é uma forma visual de identificar o status operacional de cada veículo na fila do aeroporto.</strong>
                    </p>
                    <p className="text-blue-700 dark:text-blue-300 mt-2 flex items-center gap-2">
                        <Zap size={16} className="text-yellow-500" />
                        Este sistema é apenas visual e organiza o embarque tornando-o mais eficiente, filtrando as unidades que executam os serviços.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border-2 border-gray-200 dark:border-gray-700 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-3xl">⚪</span>
                            </div>
                            <h4 className="font-bold text-gray-700 dark:text-gray-300">Bolinha Branca</h4>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Veículo aceita corridas com preço pré-fixado (tabela DTP).

                        </p>
                    </div>

                    <div className="p-4 bg-yellow-800 dark:bg-gray-800 rounded-lg border-2 border-yellow-200 dark:border-yellow-700 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg">
                                <img src="/images/logo99.png" alt="Logo 99" className="w-8 h-8 object-contain" />
                            </div>
                            <h4 className="font-bold text-yellow-700 dark:text-yellow-300">Bolinha Amarela</h4>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Veículo está na fila para embarque rápido da 99.
                        </p>
                    </div>
                </div>

                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-400">
                    <p className="text-sm text-green-800 dark:text-green-200 flex items-center gap-2">
                        <ShieldCheck size={16} className="text-green-500" />
                        <strong>💡 Importante:</strong> A unidade deve procurar um fiscal operacional para implementar a bolinha caso tenha interesse. Mantenha-se atento às mudanças para otimizar sua operação.
                    </p>
                </div>
            </>,
            query
        )
    },
    {
        id: 'regras',
        icon: AlertCircle,
        title: '5. Regras Gerais e Cenários Específicos',
        accordionItems: accordionSections.regras,
        content: ({ query, openItems, onOpenChange }: ContentProps) => (
            <Accordion type="multiple" className="w-full space-y-2" value={openItems} onValueChange={onOpenChange}>
                <AccordionItem value="regras-fila-unica">
                    <AccordionTrigger><Highlight text="Fila Única em Horários de Pico" query={query} /></AccordionTrigger>
                    <AccordionContent>
                        {renderContent(
                            <>
                                <p>Em horários de grande movimento (manhãs e fins de tarde), o fluxo de passageiros aumenta e o trânsito reduz o número de carros disponíveis. Nesses momentos, é formada uma <strong>fila única</strong> com veículos de todas as empresas credenciadas (D-Táxi, Rádio Táxi Vermelho e Branco, etc.) para otimizar o atendimento.</p>
                                <div className="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-400">
                                    <p className="text-sm text-yellow-800 dark:text-yellow-200"><strong>⚡ EFICIÊNCIA = LUCRO:</strong> Com 3000 embarques diários, cada minuto economizado na fila única representa mais corridas e maior faturamento para todos os motoristas.</p>
                                </div>
                                <p className="mt-2 font-semibold">Conduta na Fila Única:</p>
                                <ul className="list-disc pl-5 space-y-2 mt-2">
                                    <li><strong>Ordem e Cortesia:</strong> A regra é clara: respeite a ordem de chegada. Não ultrapasse e mantenha a cordialidade com todos os colegas.</li>
                                    <li><strong>Pisca Alerta:</strong> Mantenha o pisca alerta sempre ligado para sinalizar que você está na fila de operação.</li>
                                    <li><strong>Acessos:</strong>
                                        <ul className='list-decimal pl-5 mt-1 text-sm'>
                                            <li><strong>Vindo do Túnel:</strong> Permaneça à direita, peça passagem com cuidado e aguarde a preferência para entrar na fila.</li>
                                            <li><strong>Vindo da Av. Washington Luís/VASP:</strong> Mantenha-se na sua posição, sem cortar caminho ou furar a fila.</li>
                                        </ul>
                                    </li>
                                    <li><strong>Proibido Descer do Carro:</strong> Apenas em situações onde não há fiscais ou coordenadores presentes. A agilidade é crucial.</li>
                                    <li><strong>Agilidade no Embarque:</strong> Ao chegar ao ponto, deixe o carro destravado e o porta-malas liberado (se possível, já aberto) para agilizar o embarque.</li>
                                    <li><strong>Siga as Orientações:</strong> Fique atento às instruções dos fiscais e coordenadores de todas as empresas. A colaboração é fundamental.</li>
                                    <li>
                                        <strong><span className="text-red-500 font-bold">Tolerância Zero com Infrações:</span></strong> Unidades flagradas cortando fila, especialmente pelo acesso do piso inferior, serão <strong>removidas da fila e notificadas para suspensão</strong>.
                                    </li>
                                </ul>
                                <p className="mt-4 font-semibold">Uso do PDA na Fila Única:</p>
                                <ul className="list-disc pl-5 space-y-2 mt-2">
                                    <li><strong className='flex items-center gap-2'><Unplug size={16} />Operação Suspensa:</strong> Durante a fila única, o uso do PDA é parcialmente suspenso.</li>
                                    <li><strong className='flex items-center gap-2'><Pill variant='ok'>Status Livre:</Pill></strong> O PDA deve permanecer no status <strong>LIVRE</strong> para registrar sua passagem e reorganizar o fluxo quando a fila única terminar.</li>
                                    <li><strong>Permanência nos PAs:</strong> É proibido permanecer em qualquer PA sem estar devidamente anotado no sistema após o término da fila única.</li>
                                </ul>
                            </>,
                            query
                        )}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="regras-gerais">
                    <AccordionTrigger><Highlight text="Regras Gerais da Fila" query={query} /></AccordionTrigger>
                    <AccordionContent>
                        {renderContent(
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Respeito à Sequência:</strong> Siga a fila, sem ultrapassar veículos de nenhuma empresa.</li>
                                <li><strong>Problemas:</strong> Direcione reclamações à coordenação para resolução.</li>
                            </ul>,
                            query
                        )}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="regras-tunel">
                    <AccordionTrigger>
                        <Highlight text="Operação do Túnel (Acesso ao PA0)" query={query} />
                    </AccordionTrigger>
                    <AccordionContent>
                        {renderContent(<>
                            <p>O acesso ao <strong>PA0 (Piso Superior)</strong> via túnel é uma manobra estratégica para garantir que a área de embarque principal seja sempre abastecida. O controle desse fluxo é feito pela <strong>observação e bom senso</strong> dos motoristas, não pelo aplicativo.</p>
                            <p className="font-semibold mt-2">Lógica de Funcionamento:</p>
                            <ul className="list-disc pl-5 space-y-2 mt-2">
                                <li><strong className="flex items-center gap-2"><GitBranch size={16} className="text-green-500" />Quando o Túnel é uma Opção:</strong> O túnel deve ser usado <strong>apenas</strong> quando não há carros suficientes no PA2, PA3 e em deslocamento para preencher as 7 vagas do PA0. A prioridade é sempre do fluxo que já está nos PAs.</li>
                                <li><strong className="flex items-center gap-2"><AlertTriangle size={16} className="text-yellow-500" />Observação é Crucial:</strong> Não é porque o PA0 tem vagas que o túnel está liberado. Você deve avaliar todo o cenário: quantos carros estão no PA2? Quantos estão se movendo do PA3 para o PA2? Acessar o túnel sem essa análise pode congestionar a operação.</li>
                            </ul>
                            <p className="font-semibold mt-4">Exemplo Prático:</p>
                            <ul className="list-disc pl-5 space-y-2 mt-2 text-sm">
                                <li><strong className="text-red-500">Cenário de TÚNEL BLOQUEADO:</strong>
                                    <ul className="list-disc pl-5 mt-1">
                                        <li>PA0: 4 carros</li>
                                        <li>Em deslocamento para o PA0: 1 carro</li>
                                        <li>PA2: 2 carros</li>
                                        <li><strong>Resultado:</strong> O túnel está bloqueado. Embora o PA0 não esteja cheio, os 3 carros (1 em trânsito + 2 no PA2) são suficientes para completá-lo.</li>
                                    </ul>
                                </li>
                                <li className="mt-2"><strong className="text-green-500">Cenário de TÚNEL LIBERADO:</strong>
                                    <ul className="list-disc pl-5 mt-1">
                                        <li>PA0: 5 carros</li>
                                        <li>Em deslocamento para o PA0: 0 carros</li>
                                        <li>PA2: 0 carros</li>
                                        <li><strong>Resultado:</strong> O túnel está liberado para 2 carros. Assim que eles acessarem, o fluxo voltará a ter prioridade pelos PAs.</li>
                                    </ul>
                                </li>
                            </ul>
                        </>, query)}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="regras-obs">
                    <AccordionTrigger><Highlight text="Notificações e Sistema" query={query} /></AccordionTrigger>
                    <AccordionContent>
                        {renderContent(
                            <>
                                <div className="grid md:grid-cols-2 gap-6 mb-4">
                                    <div>
                                        <h4 className="font-semibold text-blue-600 mb-3 flex items-center gap-2">
                                            <MessageSquare size={18} className="text-blue-500" />
                                            Sistema de Notificações
                                        </h4>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li><strong>Notificações:</strong> As solicitações para avançar aos PAs são feitas por <strong>mensagem no app e aviso sonoro</strong>. Responda prontamente para manter a eficiência da operação.</li>
                                            <li><strong>GPS Ativo:</strong> Mantenha o GPS sempre ativo e com sinal forte para que o sistema funcione corretamente e sua posição seja registrada com precisão.</li>
                                            <li><strong>Perda da Posição:</strong> Sair de qualquer PA sem ser solicitado ou não responder a um chamado reposiciona a unidade ao final da fila no PA5, afetando sua produtividade.</li>
                                            <li><strong>Infrações:</strong> O descumprimento das regras pode resultar em suspensão temporária do acesso ao sistema, impactando diretamente seus ganhos.</li>
                                        </ul>
                                    </div>

                                    <div className="app-screenshot">
                                        <Image src="/images/notificacao.png" width={400} height={600} alt="Exemplo de notificação do app para avançar aos PAs" className="app-img rounded-lg border border-gray-200 dark:border-gray-700" data-ai-hint="app notification popup" />
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">Exemplo de notificação para avançar ao PA</p>
                                    </div>
                                </div>
                                <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-400">
                                    <p className="text-sm text-green-800 dark:text-green-200">
                                        <strong>✅ Dica de Eficiência:</strong> Mantenha o aplicativo sempre visível e responda rapidamente às notificações. Cada segundo economizado na resposta representa mais corridas e maior faturamento.
                                    </p>
                                </div>
                            </>,
                            query
                        )}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        )
    },
    {
        id: 'pda',
        icon: FileText,
        title: '6. Manual do Aplicativo PDA',
        accordionItems: accordionSections.pda,
        content: ({ query, openItems, onOpenChange }: ContentProps) => (
            <>
                {renderContent(
                    <>
                        <p className="lead"><strong>Guia da Tela Principal do Aplicativo D-Táxi.</strong></p>
                        <p>Esta seção detalha a interface principal do aplicativo PDA, sua ferramenta para operar eficientemente no sistema D-Táxi.</p>
                    </>,
                    query
                )}
                <Accordion type="multiple" className="w-full space-y-2 mt-4" value={openItems} onValueChange={onOpenChange}>
                    <AccordionItem value="pda-home">
                        <AccordionTrigger><Highlight text="Tela Principal (Home)" query={query} /></AccordionTrigger>
                        <AccordionContent>
                            {renderContent(<>
                                <p>A tela inicial oferece acesso rápido a todas as funções essenciais para o seu dia a dia.</p>
                                <div className="grid md:grid-cols-2 gap-4 mt-4">
                                    <div className="app-screenshot">
                                        <Image src="/images/pda-home.png" width={400} height={800} alt="Tela principal do aplicativo PDA" className="app-img" data-ai-hint="app homescreen" />
                                    </div>
                                    <div>
                                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mb-4">
                                            <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                                                <Settings size={18} className="text-blue-500" />
                                                Funcionalidades Principais
                                            </h4>
                                            <ul className="space-y-3">
                                                <li className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                                                            <User size={16} className="text-green-600 dark:text-green-400" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <strong className="text-gray-800 dark:text-gray-200">Status do Motorista:</strong>
                                                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Um botão central e grande permite alterar seu status com um toque. As cores indicam sua condição atual:</p>
                                                            <div className="flex flex-wrap gap-2 mt-2">
                                                                <Pill variant='ok'>🟢 Livre (Verde)</Pill>
                                                                <Pill variant='warn'>🟠 Ocupado (Laranja)</Pill>
                                                                <Pill variant='err'>🔴 Fim de Jornada (Vermelho)</Pill>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                                                            <MapPin size={16} className="text-purple-600 dark:text-purple-400" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <strong className="text-gray-800 dark:text-gray-200">Alternar Visualização:</strong>
                                                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Botões para alternar rapidamente entre a visualização de:</p>
                                                            <div className="flex flex-wrap gap-2 mt-2">
                                                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                                                                    <MapPin size={14} /> Mapa
                                                                </span>
                                                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
                                                                    <BarChart size={14} /> Status dos PAs
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                                                            <BarChart size={16} className="text-orange-600 dark:text-orange-400" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <strong className="text-gray-800 dark:text-gray-200">Exibição de PAs:</strong>
                                                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">A visualização de status mostra apenas os Pontos de Apoio (PAs) que têm veículos, otimizando a visualização e ocultando áreas vazias.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </>, query)}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="pda-menu">
                        <AccordionTrigger><Highlight text="Menu de Navegação (Menu Lateral)" query={query} /></AccordionTrigger>
                        <AccordionContent>
                            {renderContent(<>
                                <p>O menu lateral, acessado pelo ícone de "hambúrguer", contém atalhos para diversas áreas administrativas e de suporte do aplicativo, além de informações do perfil do motorista.</p>
                                <div className="grid md:grid-cols-2 gap-4 mt-4">
                                    <div className="app-screenshot">
                                        <Image src="/images/pda-menu.png" width={400} height={800} alt="Menu lateral do aplicativo PDA" className="app-img" data-ai-hint="app side menu" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-blue-600 mb-3">Cabeçalho do Perfil:</h4>
                                        <ul className="list-disc pl-5 space-y-2 my-2 mb-4">
                                            <li><strong className='flex items-center gap-2'><User size={16} />Perfil do Motorista:</strong> Exibe nome completo, telefone, tipo de veículo (CRONOS) e código de identificação (RWF-1C24).</li>
                                            <li><strong className='flex items-center gap-2'><CircleDot size={16} className="text-yellow-500" />Avaliação:</strong> Mostra a pontuação atual do motorista (0,0).</li>
                                            <li><strong className='flex items-center gap-2'><CircleDot size={16} className="text-green-500" />Status Online:</strong> Indicador verde que mostra que o motorista está ativo no sistema.</li>
                                        </ul>

                                        <h4 className="font-semibold text-gray-700 mb-3">Opções do Menu:</h4>
                                        <ul className="list-disc pl-5 space-y-2 my-2 mb-4">
                                            <li><strong className='flex items-center gap-2'><User size={16} />Meu Perfil:</strong> Acesse e edite suas informações de perfil e dados do motorista.</li>
                                            <li><strong className='flex items-center gap-2'><History size={16} />Histórico de Corridas:</strong> Consulte as corridas que você já realizou.</li>
                                            <li><strong className='flex items-center gap-2'><MessageSquare size={16} />Histórico de Mensagens:</strong> Acesse o histórico de comunicações com a central.</li>
                                            <li><strong className='flex items-center gap-2'><FileText size={16} />Relatórios:</strong> Visualize relatórios e estatísticas das suas atividades.</li>
                                            <li><strong className='flex items-center gap-2'><PlusCircle size={16} />Gerar Corrida:</strong> Funcionalidade para iniciar novas corridas. Totem ou em dinheiro (QRU).</li>
                                            <li><strong className='flex items-center gap-2'><Settings size={16} />Preferências:</strong> Personalize as configurações do aplicativo.</li>
                                            <li><strong className='flex items-center gap-2'><LogOut size={16} />Sair:</strong> Encerra a sessão e sai do aplicativo.</li>
                                        </ul>

                                        <h4 className="font-semibold text-gray-700 mb-3">Informações e Links:</h4>
                                        <ul className="list-disc pl-5 space-y-2 my-2">
                                            <li><strong className='flex items-center gap-2'><FileText size={16} />Termos de Uso:</strong> Link para consultar os termos e condições do serviço.</li>
                                            <li><strong className='flex items-center gap-2'><ShieldCheck size={16} />Política de Privacidade:</strong> Link para a política de privacidade da empresa.</li>
                                            <li><strong className='flex items-center gap-2'><Info size={16} />Versão:</strong> Exibe a versão atual do aplicativo (24.07.12).</li>
                                            <li><strong className='flex items-center gap-2'><FileText size={16} />Software:</strong> Informação sobre direitos autorais (Original Software © 2025).</li>
                                        </ul>
                                    </div>
                                </div>
                            </>, query)}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="pda-exibicao">
                        <AccordionTrigger><Highlight text="Exibição de PAs" query={query} /></AccordionTrigger>
                        <AccordionContent>
                            {renderContent(<>
                                <p>A visualização de status dos Pontos de Apoio (PAs) é otimizada para mostrar apenas as áreas que possuem veículos ativos, proporcionando uma interface limpa e eficiente.</p>

                                <div className="grid md:grid-cols-2 gap-4 mt-4">
                                    <div className="app-screenshot">
                                        <Image src="/images/PAs.png" width={400} height={800} alt="Visualização de PAs com veículos" className="app-img" data-ai-hint="PA status view" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-blue-600 mb-3">Funcionalidades da Visualização:</h4>
                                        <ul className="list-disc pl-5 space-y-2 my-2 mb-4">
                                            <li><strong className='flex items-center gap-2'><BarChart size={16} />Filtro Inteligente:</strong> Exibe apenas PAs com veículos, ocultando áreas vazias automaticamente.</li>
                                            <li><strong className='flex items-center gap-2'><MapPin size={16} />Organização por Área:</strong> Lista organizada com códigos dos PAs (0 AERO SUP, 1 AERO INF, 2 PA2, etc.).</li>
                                            <li><strong className='flex items-center gap-2'><Car size={16} />Contagem de Veículos:</strong> Mostra o número exato de veículos em cada PA ativo.</li>
                                            <li><strong className='flex items-center gap-2'><History size={16} />Métricas de Tempo:</strong> Colunas que mostram corridas agendadas nos PAs: 15 min, 30 min e 45+ min. Quando há dados, indicam quantas corridas estão programadas para esses intervalos de tempo.</li>
                                        </ul>

                                        <h4 className="font-semibold text-gray-700 mb-3">Benefícios da Otimização:</h4>
                                        <ul className="list-disc pl-5 space-y-2 my-2 mb-4">
                                            <li><strong>Interface Limpa:</strong> Evita confusão visual com PAs vazios ou inativos.</li>
                                            <li><strong>Foco na Operação:</strong> Permite concentrar atenção nas áreas que realmente precisam de monitoramento.</li>
                                            <li><strong>Atualização em Tempo Real:</strong> Sistema de refresh automático mantém dados sempre atualizados.</li>
                                            <li><strong>Navegação Eficiente:</strong> Alternância rápida entre visualização de mapa e status dos PAs.</li>
                                        </ul>

                                        <h4 className="font-semibold text-gray-700 mb-3">Como Funciona:</h4>
                                        <ul className="list-disc pl-5 space-y-2 my-2">
                                            <li><strong>Atualização Automática:</strong> Contador regressivo "Atualizando em X..." para próximo refresh.</li>
                                            <li><strong>Refresh Manual:</strong> Botão de atualização para forçar sincronização imediata.</li>
                                            <li><strong>Ordenação:</strong> Possibilidade de ordenar por nome dos PAs (crescente ou decrescente).</li>
                                            <li><strong>Sincronização GPS:</strong> Integração com sistema de posicionamento para dados precisos.</li>
                                        </ul>
                                    </div>
                                </div>
                            </>, query)}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="pda-solucao">
                        <AccordionTrigger><Highlight text="Solução de Problemas" query={query} /></AccordionTrigger>
                        <AccordionContent>
                            {renderContent(<>
                                <p className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 font-bold"><AlertTriangle size={20} /> IMPORTANTE: Antes de tentar resolver problemas, certifique-se de que:</p>
                                <ul className="list-disc pl-5 space-y-2 mt-2">
                                    <li><strong className='flex items-center gap-2'><Tv size={16} />Não há outros aplicativos rodando em paralelo</strong> (TikTok, bancos, YouTube, etc.)</li>
                                    <li><strong className='flex items-center gap-2'><Smartphone size={16} />Seu sistema Android está atualizado</strong> (mínimo Android 7.0)</li>
                                    <li><strong className='flex items-center gap-2'><ShieldCheck size={16} />O aplicativo D-Táxi tem todas as permissões</strong> necessárias</li>
                                    <li><strong className='flex items-center gap-2'><HardDrive size={16} />O dispositivo atende aos requisitos mínimos</strong> de sistema</li>
                                </ul>

                                <p className="mt-4"><strong>Problemas Comuns e Soluções:</strong></p>
                                <ul className="list-disc pl-5 space-y-2 mt-2">
                                    <li><strong><MapIcon size={16} className="inline mr-1" /> GPS Sem Sinal:</strong> Verifique se o GPS está ativo e com permissões concedidas</li>
                                    <li><strong><Wifi size={16} className="inline mr-1" /> Falha de Conexão:</strong> Use o botão de atualização e verifique a conexão de internet</li>
                                    <li><strong><HelpCircle size={16} className="inline mr-1" /> Erro de Posicionamento:</strong> Aguarde alguns minutes para nova sincronização automática</li>
                                    <li><strong><Settings size={16} className="inline mr-1" /> PDA Travado:</strong> Feche e reabra o aplicativo, mantendo o GPS ativo</li>
                                </ul>
                            </>, query)}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="pda-requisitos">
                        <AccordionTrigger><Highlight text="Requisitos do Sistema" query={query} /></AccordionTrigger>
                        <AccordionContent>
                            {renderContent(<>
                                <p><strong>Importante:</strong> O aplicativo D-Táxi funciona apenas como receptor de informações do seu próprio aparelho. Ele não controla ou interfere no sistema operacional.</p>

                                <p className="mt-4"><strong>Requisitos Mínimos:</strong></p>
                                <ul className="list-disc pl-5 space-y-2 mt-2">
                                    <li><strong>Sistema Android:</strong> Mantenha seu sistema Android sempre atualizado para garantir compatibilidade e segurança</li>
                                    <li><strong>Versão Mínima:</strong> Android 7.0 (API 24) ou superior - <strong>Obrigatório</strong></li>
                                    <li><strong>RAM:</strong> Mínimo 2GB de memória RAM disponível</li>
                                    <li><strong>Armazenamento:</strong> Pelo menos 500MB de espaço livre</li>
                                    <li><strong>GPS:</strong> GPS ativo e com permissões concedidas</li>
                                    <li><strong>Internet:</strong> Conexão estável (Wi-Fi ou 4G/5G)</li>
                                </ul>
                            </>, query)}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </>
        )
    },
];
