
import React from 'react';
import { HighlightContent, Highlight } from '@/components/ui/highlight';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from 'next/image';
import { Home, Car, Map as MapIcon, ListChecks, CreditCard, AlertCircle, CircleDot, FileText, Smartphone, Tv, Wifi, AlertTriangle, ShieldCheck, Zap, Settings, HelpCircle, HardDrive, History, MessageSquare, User, Wrench, TerminalSquare, Siren, BarChart, MapPin, Link as LinkIcon, ParkingCircle, Unplug, GitBranch } from "lucide-react";


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
    pda: ["pda-home", "pda-menu", "pda-solucao", "pda-requisitos"]
};

export const manualSections = [
    {
        id: 'intro',
        icon: Home,
        title: 'Manual de Operações',
        content: ({ query }: ContentProps) => renderContent(
            <>
                <p className="lead"><strong>Aeroporto de Congonhas.</strong></p>
                <p>Este manual é o seu guia completo para operar no aeroporto pela <strong>D-TÁXI</strong>. Ele detalha o funcionamento de cada Ponto de Apoio (PA) e as regras que garantem a eficiência e o profissionalismo do nosso serviço.</p>
                <div className="app-screenshot mt-4">
                  <Image src="/images/congonhas-airport.png" width={800} height={400} alt="Foto do Aeroporto de Congonhas" className="app-img" data-ai-hint="airport terminal" />
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
                <p>Para representar a excelência da D-Táxi, o motorista deve estar devidamente uniformizado e com o veículo alinhado e limpo antes de entrar na fila no PA5. O não cumprimento deste padrão pode resultar em penalidades. As regras de vestimenta são as seguintes:</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li><strong>Camisa:</strong> Social, branca, de manga comprida ou curta.</li>
                    <li><strong>Gravata:</strong> Na cor verde, no tom permitido pela empresa.</li>
                    <li><strong>Calça:</strong> Social preta ou de sarja preta, com o corte do bolso tipo faca.</li>
                    <li><strong>Sapato:</strong> Social preto ou sapatênis preto, totalmente preto, sem detalhes.</li>
                </ul>
                <div className="app-screenshot mt-4">
                  <Image src="/images/taxi-driver-uniform.png" width={600} height={400} alt="Uniforme padrão do motorista" className="app-img" data-ai-hint="taxi driver uniform" />
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
                <p>O sistema do D-Táxi é uma cadeia de espera, onde os carros se movem de áreas maiores para áreas menores, mais próximas ao embarque de passageiros. O fluxo é totalmente automático, baseado no sinal de GPS e na anotação cronológica (quem chega primeiro, é solicitado primeiro). Apesar de ter 34 vagas, o Bolsão é dinâmico, com alta rotatividade, atendendo em média mais de 90 carros por hora. A intenção não é que todos fiquem estacionados, mas sim que o local sirva para organizar a fila e oferecer um ponto de apoio confortável e rápido para os motoristas.</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li><strong>PA5:</strong> A primeira entrada no sistema, com número ilimitado de vagas, localizado nas proximidades do Assaí Aeroporto.</li>
                    <li><strong>Bolsão Principal:</strong> Com 34 vagas, está localizado sob o viaduto da Washington Luís com Roberto Marinho, na Praça José Blota Júnior.</li>
                    <li><strong>PA3:</strong> Com 24 vagas, está localizado na Rua dos Tamoios, oposto ao número 100.</li>
                    <li><strong>PA2:</strong> Com 12 vagas, está localizado na extensão do desembarque, próximo à portaria 3 da Gol Linhas Aéreas.</li>
                    <li><strong>Piso Inferior:</strong> Conta com 2 vagas para o embarque de passageiros.</li>
                    <li><strong>Piso Superior:</strong> Possui 7 vagas para o embarque de passageiros.</li>
                </ul>
                 <div className="app-screenshot mt-4">
                  <Image src="/images/airport-map.png" width={800} height={500} alt="Mapa das áreas de espera (PAs)" className="app-img" data-ai-hint="airport map" />
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
                        <Highlight text="PA5 (Ponto de Entrada)" query={query}/>
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
                                        <li><strong className="inline-flex items-center gap-2"><ParkingCircle size={14}/> Onde aguardar:</strong> região do Mercado Assaí (pontos permitidos nos arredores).</li>
                                        <li><strong className="inline-flex items-center gap-2">🔔 Quando chamado:</strong> siga pela pista local e acesse o bolsão com calma e atenção.</li>
                                        <li><a href="https://maps.app.goo.gl/mFXdgY2Pv4WjzWdf9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline"><LinkIcon size={14}/> Localização no mapa</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-semibold">2️⃣ Vindo de Interlagos (Washington Luís → sentido aeroporto)</h5>
                                    <ul className="list-disc pl-5 space-y-1 text-sm mt-1">
                                        <li><strong className="inline-flex items-center gap-2"><ParkingCircle size={14}/> Onde aguardar:</strong> próximo à Nikon (nos pontos permitidos).</li>
                                        <li><strong className="inline-flex items-center gap-2">🔔 Quando chamado:</strong> mantenha-se na direita e entre no bolsão pela entrada indicada.</li>
                                        <li><a href="https://maps.app.goo.gl/ZHv32MjkMqVm5RxMA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline"><LinkIcon size={14}/> Localização no mapa</a></li>
                                    </ul>
                                </div>
                                 <div>
                                    <h5 className="font-semibold">3️⃣ Vindo do Brooklin (pela Av. Jornalista Roberto Marinho → sentido aeroporto)</h5>
                                    <ul className="list-disc pl-5 space-y-1 text-sm mt-1">
                                        <li><strong className="inline-flex items-center gap-2"><ParkingCircle size={14}/> Onde aguardar:</strong> vias próximas à comunidade, de preferência na “rua de cima”, como Rua Joaquim Nabuco ou Rua Laplace.</li>
                                        <li><strong>✅ Alternativa:</strong> pode optar por aguardar próximo ao Assaí.</li>
                                        <li><strong className="inline-flex items-center gap-2">🔔 Quando chamado:</strong> siga com tranquilidade para a entrada do bolsão.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-semibold">4️⃣ Vindo do Jabaquara (pela Av. Jornalista Roberto Marinho → aeroporto)</h5>
                                     <ul className="list-disc pl-5 space-y-1 text-sm mt-1">
                                        <li><strong className="inline-flex items-center gap-2"><ParkingCircle size={14}/> Onde aguardar:</strong> próximo ao Parque do Chuvisco (há área de sombra de espera).</li>
                                        <li><strong>✅ Alternativa:</strong> aguardar no lado da Nikon.</li>
                                        <li><strong className="inline-flex items-center gap-2">🔔 Quando chamado:</strong> dirija-se ao bolsão pelo acesso indicado, sem paradas no caminho.</li>
                                        <li><a href="https://maps.app.goo.gl/9zqwPHT36vESbfMB6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline"><LinkIcon size={14}/> Localização no mapa</a></li>
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
                                <li><strong>Localização:</strong> Rua dos Tamoios, oposto ao número 100.</li>
                                <li><strong>Capacidade:</strong> 24 vagas (17 baia principal + 7 extras).</li>
                                <li><strong>Função:</strong> Guarnecer o PA2; pode ser chamado para o Piso Inferior.</li>
                            </ul>
                            <p><strong>Instruções:</strong></p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Puxe os carros à frente quando um colega sair para evitar lacunas.</li>
                                <li>Limpeza rápida com pano é permitida; limpeza com água é proibida.</li>
                                <li>Não abandonar o carro no local.</li>
                            </ul>
                        </>, query)}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="fluxo-pa2">
                    <AccordionTrigger><Highlight text="PA2 (Ponto Final de Espera)" query={query} /></AccordionTrigger>
                    <AccordionContent>
                        {renderContent(<>
                            <p className='text-sm text-muted-foreground'>12 vagas</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Localização:</strong> Extensão do desembarque, próximo à portaria 3 da Gol.</li>
                                <li><strong>Função:</strong> Última área antes do embarque no Piso Superior (P0).</li>
                            </ul>
                            <p><strong>Instruções:</strong></p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Permaneça próximo ao veículo; a fila avança rapidamente.</li>
                                <li>Ultrapassagens são proibidas a partir da faixa em frente à VASP.</li>
                                <li>Não limpar o carro no local, não buzinar, não abandonar o carro.</li>
                            </ul>
                        </>, query)}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="fluxo-piso-inf">
                    <AccordionTrigger><Highlight text="Piso Inferior (Área de Embarque)" query={query} /></AccordionTrigger>
                    <AccordionContent>
                        {renderContent(<>
                             <p className='text-sm text-muted-foreground'>2 vagas</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Função:</strong> Embarque de alta prioridade, abastecido pelo PA3.</li>
                                <li><strong>Regras:</strong> Portas destravadas, vidros fechados e ar-condicionado ligado.</li>
                                <li>Não é permitido limpar o carro, entrar no saguão para chamar passageiros ou buzinar.</li>
                                <li><strong className='text-red-500'>Acesso Proibido:</strong> É estritamente proibido dar ré ou passar sobre a calçada para acessar o piso inferior. Esta atitude viola normas de trânsito (CTB), da AENA e das empresas.</li>
                                <li><strong className='text-yellow-500'>Erro de Rota:</strong> Se errar o acesso, é obrigatório retomar o processo e entrar na fila novamente. Não cometa infrações para retornar.</li>
                            </ul>
                        </>, query)}
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="fluxo-piso-sup">
                    <AccordionTrigger><Highlight text="Piso Superior (PA-0) – Área de Embarque" query={query} /></AccordionTrigger>
                    <AccordionContent>
                        {renderContent(<>
                            <p className='text-sm text-muted-foreground'>7 vagas</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Localização:</strong> Piso térreo – área de desembarque.</li>
                                <li><strong>Função:</strong> Principal área de embarque; embarque pode alternar entre empresas conforme demanda.</li>
                                <li><strong>Regras:</strong> Não fumar, não descer para socializar, permanecer com cortesia e profissionalismo.</li>
                            </ul>
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
                <p><strong>Obrigação de Pagamento:</strong> Todas as unidades são obrigadas a aceitar os seguintes métodos:</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li><strong className='flex items-center gap-2'><Zap size={16} className="text-yellow-500" />PIX:</strong> Exigência da operadora do aeroporto.</li>
                    <li><strong className='flex items-center gap-2'><CreditCard size={16} className="text-blue-500" />Cartões de Crédito e Débito:</strong> Regulamentados pela prefeitura; obrigatórios.</li>
                    <li><strong className='flex items-center gap-2'><Smartphone size={16} className="text-green-500" />Máquina de Cartão:</strong> É proibido trabalhar sem a máquina física.</li>
                </ul>
                <p className="mt-4"><strong>Práticas Proibidas:</strong></p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>Taxa de maquininha e “taxa de município” são proibidas.</li>
                    <li>É proibido cobrar bandeira 2 fora do horário.</li>
                    <li>É proibido prolongar o trajeto propositalmente.</li>
                </ul>
                <p className="mt-4"><strong>Penalidades:</strong> Recusa de pagamento ou cobrança indevida pode levar à rescisão do contrato.</p>
            </>,
            query
        )
    },
    {
        id: 'bolinhas',
        icon: CircleDot,
        title: '4. Observações sobre o Sistema de Bolinhas',
        content: ({ query }: ContentProps) => renderContent(
            <ul className="list-disc pl-5 space-y-2 mt-4">
                <li><strong className='flex items-center gap-2'><CircleDot size={16} className="text-gray-400" />Bolinha Branca:</strong> Veículo aceita corridas com preço pré-fixado (tabela DTP).</li>
                <li><strong className='flex items-center gap-2'><CircleDot size={16} className="text-yellow-400" />Bolinha Amarela:</strong> Veículo está na fila para embarque rápido da 99.</li>
            </ul>,
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
                        <Highlight text="Operação do Túnel (Acesso ao PA2)" query={query}/>
                    </AccordionTrigger>
                    <AccordionContent>
                        {renderContent(<>
                            <p>O acesso ao PA2 via túnel é controlado automaticamente pelo sistema para garantir que o PA0 (Piso Superior) seja sempre abastecido, priorizando o embarque de passageiros.</p>
                            <p className="font-semibold mt-2">Lógica de Funcionamento:</p>
                             <ul className="list-disc pl-5 space-y-2 mt-2">
                                <li><strong className="flex items-center gap-2"><GitBranch size={16} className="text-green-500" />Túnel Liberado:</strong> O túnel é liberado <strong>automaticamente</strong> apenas quando não há carros suficientes no PA2 e PA3 para preencher as 7 vagas do PA0.</li>
                                <li><strong className="flex items-center gap-2"><GitBranch size={16} className="text-red-500" />Túnel Bloqueado:</strong> O túnel é fechado <strong>automaticamente</strong> assim que o sistema calcula que o PA0 será completado com os carros que já estão no PA2 e em deslocamento.</li>
                                <li><strong>Observação é Crucial:</strong> É fundamental observar o status dos PAs e os carros em deslocamento para não cometer equívocos. Não é porque o PA0 não tem 7 carros que o túnel estará livre. A prioridade é sempre o fluxo que vem dos PAs anteriores.</li>
                            </ul>
                            <p className="font-semibold mt-4">Exemplo Hipotético:</p>
                             <ul className="list-disc pl-5 space-y-2 mt-2 text-sm">
                                <li><strong className="text-red-500">Cenário de Túnel BLOQUEADO:</strong>
                                    <ul className="list-disc pl-5 mt-1">
                                        <li>PA0: 5 carros</li>
                                        <li>Em deslocamento para o PA0: 2 carros</li>
                                        <li>PA2: 0 carros</li>
                                        <li>Resultado: O túnel fica bloqueado, pois o sistema já tem 7 carros (5 + 2) para o PA0.</li>
                                    </ul>
                                </li>
                                <li className="mt-2"><strong className="text-green-500">Cenário de Túnel LIBERADO:</strong>
                                    <ul className="list-disc pl-5 mt-1">
                                        <li>PA0: 5 carros</li>
                                        <li>Em deslocamento para o PA0: 0 carros</li>
                                        <li>PA2: 0 carros</li>
                                        <li>Resultado: O túnel é liberado para que 2 carros avancem e completem o PA0. Ele fechará assim que esses 2 carros forem anotados.</li>
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
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Notificações:</strong> As solicitações para avançar aos PAs são feitas por <strong>mensagem no app e aviso sonoro</strong>. Responda prontamente.</li>
                                <li><strong>GPS Ativo:</strong> Mantenha o GPS sempre ativo e com sinal forte para que o sistema funcione corretamente.</li>
                                <li><strong>Perda da Posição:</strong> Sair de qualquer PA sem ser solicitado ou não responder a um chamado reposiciona a unidade ao final da fila no PA5.</li>
                                <li><strong>Infrações:</strong> O descumprimento das regras pode resultar em suspensão temporária do acesso ao sistema.</li>
                            </ul>,
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
                                    <Image src="/images/pda-app-home.png" width={300} height={550} alt="Tela principal do aplicativo PDA" className="app-img" data-ai-hint="app homescreen" />
                                </div>
                                <div>
                                    <p><strong>Funcionalidades Principais:</strong></p>
                                    <ul className="list-disc pl-5 space-y-2 my-2">
                                        <li>
                                            <strong>Status do Motorista:</strong> Um botão central e grande permite alterar seu status com um toque. As cores indicam sua condição atual:
                                            <ul className='my-2 space-y-1'>
                                                <li><Pill variant='ok'>Livre (Verde)</Pill></li>
                                                <li><Pill variant='warn'>Ocupado (Laranja)</Pill></li>
                                                <li><Pill variant='err'>Fim de Jornada (Vermelho)</Pill></li>
                                            </ul>
                                        </li>
                                        <li><strong>Alternar Visualização:</strong> Botões para alternar rapidamente entre a visualização de <strong className='inline-flex items-center gap-1'><MapPin size={14}/> Mapa</strong> e <strong className='inline-flex items-center gap-1'><BarChart size={14}/> Status dos PAs</strong>.</li>
                                        <li><strong>Exibição de PAs:</strong> A visualização de status mostra apenas os Pontos de Apoio (PAs) que têm veículos, otimizando a visualização e ocultando áreas vazias.</li>
                                    </ul>
                                </div>
                            </div>
                          </>, query)}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="pda-menu">
                    <AccordionTrigger><Highlight text="Menu de Navegação (Menu Hambúrguer)" query={query} /></AccordionTrigger>
                    <AccordionContent>
                        {renderContent(<>
                            <p>O menu lateral, acessado pelo ícone de "hambúrguer", contém atalhos para diversas áreas administrativas e de suporte do aplicativo.</p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li><strong className='flex items-center gap-2'><Settings size={16}/>Configurações:</strong> Ajustes gerais do aplicativo.</li>
                                <li><strong className='flex items-center gap-2'><History size={16}/>Histórico de Corridas:</strong> Consulte suas corridas anteriores.</li>
                                <li><strong className='flex items-center gap-2'><MessageSquare size={16}/>Histórico de Mensagens:</strong> Acesse o histórico de comunicações.</li>
                                <li><strong className='flex items-center gap-2'><Smartphone size={16}/>Versão do Aplicativo:</strong> Verifique a version atual do app.</li>
                                <li><strong className='flex items-center gap-2'><User size={16}/>Perfil:</strong> Acesse e edite suas informações de perfil.</li>
                                <li><strong className='flex items-center gap-2'><Car size={16}/>Dados do Carro:</strong> Informações sobre o veículo cadastrado.</li>
                                <li><strong className='flex items-center gap-2'><User size={16}/>Dados do Motorista:</strong> Suas informações como motorista.</li>
                                <li><strong className='flex items-center gap-2'><Wrench size={16}/>Preferências:</strong> Personalize as configurações do aplicativo.</li>
                                <li><strong className='flex items-center gap-2'><TerminalSquare size={16}/>Gerar Corrida via Totem:</strong> Funcionalidade para iniciar corridas a partir do totem.</li>
                                <li><strong className='flex items-center gap-2 text-red-500'><Siren size={16}/>QRU:</strong> Alerta de emergência.</li>
                            </ul>
                        </>, query)}
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="pda-solucao">
                    <AccordionTrigger><Highlight text="Solução de Problemas" query={query} /></AccordionTrigger>
                    <AccordionContent>
                        {renderContent(<>
                             <p className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 font-bold"><AlertTriangle size={20} /> IMPORTANTE: Antes de tentar resolver problemas, certifique-se de que:</p>
                            <ul className="list-disc pl-5 space-y-2 mt-2">
                                <li><strong className='flex items-center gap-2'><Tv size={16}/>Não há outros aplicativos rodando em paralelo</strong> (TikTok, bancos, YouTube, etc.)</li>
                                <li><strong className='flex items-center gap-2'><Smartphone size={16}/>Seu sistema Android está atualizado</strong> (mínimo Android 7.0)</li>
                                <li><strong className='flex items-center gap-2'><ShieldCheck size={16}/>O aplicativo D-Táxi tem todas as permissões</strong> necessárias</li>
                                <li><strong className='flex items-center gap-2'><HardDrive size={16}/>O dispositivo atende aos requisitos mínimos</strong> de sistema</li>
                            </ul>
                            
                            <p className="mt-4"><strong>Problemas Comuns e Soluções:</strong></p>
                            <ul className="list-disc pl-5 space-y-2 mt-2">
                                <li><strong><MapIcon size={16} className="inline mr-1"/> GPS Sem Sinal:</strong> Verifique se o GPS está ativo e com permissões concedidas</li>
                                <li><strong><Wifi size={16} className="inline mr-1"/> Falha de Conexão:</strong> Use o botão de atualização e verifique a conexão de internet</li>
                                <li><strong><HelpCircle size={16} className="inline mr-1"/> Erro de Posicionamento:</strong> Aguarde alguns minutes para nova sincronização automática</li>
                                <li><strong><Settings size={16} className="inline mr-1"/> PDA Travado:</strong> Feche e reabra o aplicativo, mantendo o GPS ativo</li>
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

    