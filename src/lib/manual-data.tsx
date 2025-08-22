import React from 'react';
import { HighlightContent, Highlight } from '@/components/ui/highlight';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from 'next/image';
import { Home, Car, Map as MapIcon, ListChecks, CreditCard, AlertCircle, CircleDot, FileText, Smartphone, Tv, Wifi, AlertTriangle, ShieldCheck, Zap, Settings, HelpCircle, HardDrive } from "lucide-react";


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
};

const renderContent = (content: React.ReactNode, query: string) => {
    return <HighlightContent query={query}>{content}</HighlightContent>;
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
                  <Image src="https://placehold.co/800x400.png" width={800} height={400} alt="Foto do Aeroporto de Congonhas" className="app-img" data-ai-hint="airport terminal" />
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
                  <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="Uniforme padrão do motorista" className="app-img" data-ai-hint="taxi driver uniform" />
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
                <p>O sistema do D-Táxi é uma cadeia de espera, onde os carros se movem de áreas maiores para áreas menores, mais próximas ao embarque de passageiros. O fluxo é totalmente automático, baseado no sinal de GPS e na anotação cronológica (quem chega primeiro, é solicitado primeiro).</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li><strong>PA5:</strong> A primeira entrada no sistema, com número ilimitado de vagas, localizado nas proximidades do Assaí Aeroporto.</li>
                    <li><strong>Bolsão Principal:</strong> Com 34 vagas, está localizado sob o viaduto da Washington Luís com Roberto Marinho, na Praça José Blota Júnior.</li>
                    <li><strong>PA3:</strong> Com 24 vagas, está localizado na Rua dos Tamoios, oposto ao número 100.</li>
                    <li><strong>PA2:</strong> Com 12 vagas, está localizado na extensão do desembarque, próximo à portaria 3 da Gol Linhas Aéreas.</li>
                    <li><strong>Piso Inferior:</strong> Conta com 2 vagas para o embarque de passageiros.</li>
                    <li><strong>Piso Superior:</strong> Possui 7 vagas para o embarque de passageiros.</li>
                </ul>
                 <div className="app-screenshot mt-4">
                  <Image src="https://placehold.co/800x500.png" width={800} height={500} alt="Mapa das áreas de espera (PAs)" className="app-img" data-ai-hint="airport map" />
                </div>
            </>,
            query
        )
    },
    {
        id: 'fluxo',
        icon: ListChecks,
        title: '2. Fluxo de Trabalho e Regras por Ponto de Apoio',
        content: ({ query }: ContentProps) => (
             <Accordion type="multiple" className="w-full space-y-2">
                <AccordionItem value="item-1">
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
                        </>, query)}
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-2">
                    <AccordionTrigger><Highlight text="Bolsão Principal (Ponto de Espera)" query={query} /></AccordionTrigger>
                    <AccordionContent>
                        {renderContent(<>
                             <p className='text-sm text-muted-foreground'>06h–23h</p>
                             <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Horário de Funcionamento:</strong> Das 6h às 23h.</li>
                                <li><strong>Função:</strong> A primeira área de espera com capacidade limitada. Organiza a transição dos motoristas do PA5 para os próximos PAs.</li>
                            </ul>
                            <p><strong>Instruções de Operação:</strong></p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Conexão:</strong> A unidade deve estar anotada na fila do Bolsão e conectada ao PDA para permanecer no local.</li>
                                <li><strong>Fluxo de Veículos:</strong> Entrada pelo portão 1 e saída pelo portão 2.</li>
                                <li><strong>Proibições:</strong> Não lavar o carro com água, não buzinar, não abandonar o carro no local.</li>
                                <li><strong>Padrão:</strong> Não sair do Bolsão com o carro sujo ou sem uniforme.</li>
                            </ul>
                        </>, query)}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
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
                <AccordionItem value="item-4">
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
                <AccordionItem value="item-5">
                    <AccordionTrigger><Highlight text="Piso Inferior (Área de Embarque)" query={query} /></AccordionTrigger>
                    <AccordionContent>
                        {renderContent(<>
                             <p className='text-sm text-muted-foreground'>2 vagas</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Função:</strong> Embarque de alta prioridade, abastecido pelo PA3.</li>
                                <li><strong>Regras:</strong> Portas destravadas, vidros fechados e ar-condicionado ligado.</li>
                                <li>Não é permitido limpar o carro, entrar no saguão para chamar passageiros ou buzinar.</li>
                            </ul>
                        </>, query)}
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-6">
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
        content: ({ query }: ContentProps) => (
             <Accordion type="multiple" className="w-full space-y-2">
                <AccordionItem value="item-1">
                    <AccordionTrigger><Highlight text="Fila Única" query={query} /></AccordionTrigger>
                    <AccordionContent>
                        {renderContent(
                             <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Pisca Alerta:</strong> Mantenha ligado.</li>
                                <li><strong>Respeito à Fila:</strong> Siga a sequência, sem ultrapassar veículos de nenhuma empresa.</li>
                                <li><strong>Problemas:</strong> Direcione reclamações à coordenação.</li>
                            </ul>,
                            query
                        )}
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-2">
                    <AccordionTrigger><Highlight text="Observações" query={query} /></AccordionTrigger>
                    <AccordionContent>
                        {renderContent(
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>GPS Ativo:</strong> Mantenha o GPS sempre ativo e com sinal forte.</li>
                                <li><strong>Responda Imediatamente:</strong> O sistema depende da sua resposta rápida.</li>
                                <li><strong>Perda da Posição:</strong> Sair de qualquer PA sem ser solicitado ou não responder a um chamado reposiciona a unidade ao final do PA5.</li>
                                <li><strong>Infrações:</strong> Descumprimento das regras pode resultar em suspensão temporária do acesso ao sistema.</li>
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
        content: ({ query }: ContentProps) => (
            <>
            {renderContent(
                <>
                <p className="lead"><strong>Guia completo para uso do sistema digital D-Táxi.</strong></p>
                <p>O aplicativo PDA é a ferramenta essencial para operar no sistema D-Táxi. Este guia explica todas as funcionalidades e como utilizá-las corretamente.</p>
                </>,
                query
            )}
            <Accordion type="multiple" className="w-full space-y-2 mt-4">
                <AccordionItem value="pda-1">
                    <AccordionTrigger><Highlight text="Tela Principal e Status" query={query} /></AccordionTrigger>
                    <AccordionContent>
                         {renderContent(<>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Header Azul:</strong> Mostra o número da sua unidade (ex: "732") e status atual ("LIVRE" quando disponível).</li>
                            <li><strong>Menu Hambúrguer:</strong> Acesso às configurações e opções do sistema.</li>
                            <li><strong>Ícone Verde:</strong> Indica status de conexão e operação do sistema.</li>
                            <li><strong>Abas de Navegação:</strong> "MAPA" para visualização geográfica e "ÁREAS/PAs" para controle da fila.</li>
                          </ul>
                          <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div>
                              <p><strong>Tela de Status:</strong></p>
                              <div className="app-screenshot">
                                <Image src="https://placehold.co/300x550.png" width={300} height={550} alt="Tela de alteração de status do aplicativo" className="app-img" data-ai-hint="app screenshot" />
                              </div>
                              <p>Quando precisar alterar seu status, o aplicativo mostra opções como:</p>
                              <ul className="list-disc pl-5 space-y-1">
                                <li><strong>OCUPADO:</strong> Quando estiver com passageiro</li>
                                <li><strong>FIM DE JORNADA:</strong> Quando encerrar seu turno</li>
                                <li><strong>CANCELAR:</strong> Para voltar ao status anterior</li>
                              </ul>
                              <p>Esta tela aparece ao clicar no seu status atual.</p>
                            </div>
                            <div>
                              <p><strong>Tela de Áreas/PAs:</strong></p>
                              <div className="app-screenshot">
                                <Image src="https://placehold.co/300x550.png" width={300} height={550} alt="Tela de áreas e PAs do aplicativo" className="app-img" data-ai-hint="app interface" />
                              </div>
                              <p>Mostra a distribuição de veículos em cada área:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>Área:</strong> Identificação do local (ex: "0 AERO SUP", "3 PA3")</li>
                                    <li><strong>Veículos:</strong> Quantidade de carros em cada área</li>
                                    <li><strong>Colunas 15/30/45+:</strong> <strong>Corridas agendadas</strong> - indicam quantas corridas estão programadas para cada horário (15 min, 30 min, 45+ min)</li>
                                </ul>
                                <p><strong>Sistema de Notificações:</strong> Quando há uma vaga disponível em um PA, o aplicativo exibe automaticamente uma mensagem de alerta centralizada com:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>Mensagem:</strong> "Seguir ao PA / Area: [NOME_DO_PA]. Vaga para [X] carros! (HH:MM:SS)"</li>
                                    <li><strong>Aviso Sonoro:</strong> Alerta sonoro para chamar atenção imediatamente</li>
                                    <li><strong>Botão "PARAR SOM":</strong> Para desativar o aviso sonoro</li>
                                    <li><strong>Botão "OK":</strong> Para confirmar a notificação</li>
                                </ul>
                                <p>Use esta tela para monitorar o fluxo, acompanhar corridas agendadas e responder rapidamente às notificações de vagas disponíveis.</p>
                            </div>
                          </div>
                          </>, query)}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="pda-2">
                    <AccordionTrigger><Highlight text="Controle de Áreas e PAs" query={query} /></AccordionTrigger>
                    <AccordionContent>
                        {renderContent(<>
                             <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Tabela de Áreas:</strong> Exibe todas as áreas disponíveis com contagem de veículos em cada uma.</li>
                                <li><strong>Coluna "Área":</strong> Nome da área (ex: "0 AERO SUP", "1 AERO INF", "2 PA2").</li>
                                <li><strong>Coluna "Veículos":</strong> Quantidade de veículos atualmente na área (ex: "4", "3", "2").</li>
                                <li><strong>Colunas "15", "30", "45+":</strong> <strong>Corridas agendadas</strong> - número de corridas programadas para cada intervalo de tempo:
                                <ul className="list-disc pl-5 space-y-1 my-2">
                                    <li><strong>15:</strong> Corridas agendadas para os próximos 15 minutos</li>
                                    <li><strong>30:</strong> Corridas agendadas para os próximos 30 minutos</li>
                                    <li><strong>45+:</strong> Corridas agendadas para além de 45 minutos</li>
                                </ul>
                                </li>
                                <li><strong>Ordenação:</strong> Clique na coluna "Área" para ordenar alfabeticamente.</li>
                            </ul>
                             <div className="app-screenshot mt-4">
                                <Image src="https://placehold.co/800x300.png" width={800} height={300} alt="Tabela de controle de áreas" className="app-img" data-ai-hint="data table" />
                            </div>
                        </>, query)}
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="pda-7">
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
                                <li><strong><HelpCircle size={16} className="inline mr-1"/> Erro de Posicionamento:</strong> Aguarde alguns minutos para nova sincronização automática</li>
                                <li><strong><Settings size={16} className="inline mr-1"/> PDA Travado:</strong> Feche e reabra o aplicativo, mantendo o GPS ativo</li>
                            </ul>
                        </>, query)}
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="pda-8">
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
