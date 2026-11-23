const DETALHES = {
  2026: {
    titulo: 'Ponto de partida',
    custo: '100%', co2: '100%', prazo: '45 dias',
    aconteceu: 'Toda a produção da NovaTech está concentrada na China, em Shenzhen e Xangai. Os produtos seguem por poucas rotas oceânicas longas até Brasil, Estados Unidos e Europa. Qualquer atraso em um porto afeta a empresa inteira.',
    influencia: 'A IA ainda tem papel pequeno: relatórios e planilhas analisados manualmente, com decisões baseadas no histórico do ano anterior. A empresa reconhece que essa dependência é o maior risco do negócio.',
    fez: 'Neste ano a IA é usada apenas de forma experimental, para classificar documentos de embarque e organizar dados soltos de fornecedores e transportadoras.',
    ajudou: 'Mesmo simples, essa organização dos dados cria a base para tudo que vem depois: sem dado limpo e centralizado, nenhuma IA avançada funcionaria.',
    destaque: 'Linha de base: 100% de custo, 100% de emissões e 45 dias de entrega.'
  },
  2027: {
    titulo: 'Mapeando os gargalos',
    custo: '97%', co2: '98%', prazo: '42 dias',
    aconteceu: 'A empresa cria seu primeiro hub de consolidação em Singapura e passa a acompanhar a carga em tempo real, de ponta a ponta.',
    influencia: 'A IA deixa de olhar para o passado e passa a olhar para o presente: ela cruza dados de portos, clima e tráfego marítimo para mostrar onde a operação está travando.',
    fez: 'Modelos de IA identificam portos congestionados, rotas com atrasos recorrentes e etapas em que a carga fica parada sem motivo. Também sugerem desvios antes de o problema crescer.',
    ajudou: 'A equipe passa a agir antes do atraso acontecer e não depois. O prazo cai três dias e surgem os primeiros ganhos de custo.',
    destaque: 'Prazo de entrega: de 45 para 42 dias.'
  },
  2028: {
    titulo: 'Consolidação de cargas',
    custo: '92%', co2: '93%', prazo: '39 dias',
    aconteceu: 'Singapura vira o centro da rede. As cargas de várias fábricas são agrupadas e seguem em menos navios, mais cheios, para Estados Unidos, Brasil, Europa e Índia.',
    influencia: 'O desafio deixa de ser achar gargalos e passa a ser decidir como agrupar milhares de pedidos sem atrasar nenhum. É um problema grande demais para ser resolvido à mão.',
    fez: 'Algoritmos de otimização montam as cargas, escolhem em qual navio cada pedido vai e calculam o melhor momento de fechar cada embarque.',
    ajudou: 'Menos viagens e menos espaço vazio nos contêineres. O custo por unidade enviada cai de forma visível e as emissões caem junto.',
    destaque: 'Custo logístico: 92% do valor de partida.'
  },
  2029: {
    titulo: 'Montagem perto do cliente',
    custo: '86%', co2: '85%', prazo: '31 dias',
    aconteceu: 'Nasce a primeira fábrica de montagem em Manaus. Em vez de enviar o produto pronto, a empresa envia componentes e monta perto de onde vende.',
    influencia: 'A IA passa a apoiar decisões de estratégia e não só de operação: onde vale a pena montar, quais componentes enviar e em que quantidade.',
    fez: 'Simulações com IA comparam cenários de custo, impostos, tempo de transporte e demanda para escolher a localização e o formato da nova fábrica. Na linha de montagem, sistemas de visão computacional apoiam a inspeção de qualidade.',
    ajudou: 'O prazo cai oito dias de uma vez e o transporte de produtos finais diminui. A decisão de Manaus se apoia em números e não em intuição.',
    destaque: 'Maior queda de prazo até aqui: 39 para 31 dias.'
  },
  2030: {
    titulo: 'América do Norte regionalizada',
    custo: '80%', co2: '76%', prazo: '24 dias',
    aconteceu: 'Uma nova planta em Monterrey passa a atender os Estados Unidos por terra, com ligações para Houston e Los Angeles. A empresa depende muito menos do transporte oceânico longo.',
    influencia: 'Com duas regiões produtoras operando juntas, a IA precisa coordenar fábricas, estoques e rotas ao mesmo tempo, algo que antes era feito região por região.',
    fez: 'Sistemas de IA distribuem a produção entre Manaus e Monterrey, decidem de qual planta sai cada pedido e ajustam o plano quando há mudança de demanda ou imprevisto.',
    ajudou: 'O mercado norte-americano passa a ser atendido em poucos dias por estrada, e as emissões caem de forma expressiva.',
    destaque: 'Emissões de CO2 em 76% do valor de partida.'
  },
  2031: {
    titulo: 'Logística preditiva',
    custo: '75%', co2: '68%', prazo: '20 dias',
    aconteceu: 'A empresa deixa de reagir aos pedidos e passa a se antecipar a eles. Os estoques são posicionados antes de a demanda aparecer.',
    influencia: 'Este é o ano em que a IA muda a forma de operar: o planejamento passa a ser guiado por previsões, e não por pedidos já feitos.',
    fez: 'Modelos de previsão de demanda usam histórico de vendas, sazonalidade, lançamentos, clima e eventos locais para estimar quanto cada região vai vender. A partir disso, a IA move estoque antes da necessidade.',
    ajudou: 'Menos produto parado em armazém e muito menos envio urgente por avião, que é o transporte mais caro e mais poluente.',
    destaque: 'Prazo abaixo de três semanas: 20 dias.'
  },
  2032: {
    titulo: 'Frota mais limpa',
    custo: '72%', co2: '52%', prazo: '18 dias',
    aconteceu: 'Navios com combustível de baixa emissão e trens elétricos assumem as rotas terrestres. A pegada de carbono cai pela metade.',
    influencia: 'A sustentabilidade passa a ser uma meta medida e otimizada, no mesmo nível de custo e prazo. A IA ganha mais uma variável para equilibrar.',
    fez: 'A IA calcula as emissões de cada viagem, sugere velocidade e rota que gastam menos combustível, e escolhe entre navio, trem e caminhão considerando custo, prazo e carbono ao mesmo tempo.',
    ajudou: 'A empresa mostra com dados o quanto reduziu e passa a cumprir metas ambientais sem perder prazo nem aumentar custo.',
    destaque: 'Emissões de CO2 cortadas quase pela metade: 52%.'
  },
  2033: {
    titulo: 'Rede multipolar',
    custo: '68%', co2: '44%', prazo: '14 dias',
    aconteceu: 'Três polos regionais, Ásia, Américas e Europa, produzem e distribuem quase de forma independente. Se um polo falha, os outros cobrem.',
    influencia: 'A prioridade passa a ser a resiliência. A IA ajuda a empresa a suportar crises, como greves, bloqueios de porto e eventos climáticos, sem parar.',
    fez: 'A IA monitora riscos em todos os polos, simula falhas e prepara planos de contingência. Quando algo dá errado, ela redireciona produção e entrega em minutos para outro polo.',
    ajudou: 'Um problema em uma região deixa de virar um problema global. Os clientes quase não percebem a interrupção.',
    destaque: 'Entrega em duas semanas: 14 dias.'
  },
  2034: {
    titulo: 'Logística circular',
    custo: '65%', co2: '38%', prazo: '12 dias',
    aconteceu: 'Aparelhos usados voltam pela mesma rede para reciclagem e reaproveitamento de componentes, o que reduz a necessidade de matéria-prima nova.',
    influencia: 'A rede deixa de ter apenas um sentido. A IA passa a gerenciar fluxos de ida e de volta, o que multiplica a complexidade da operação.',
    fez: 'Sistemas de IA avaliam o estado de cada aparelho devolvido, decidem se ele será reparado, reaproveitado em peças ou reciclado, e planejam o caminho de volta usando a capacidade ociosa dos transportes.',
    ajudou: 'Menos extração de matéria-prima, menos lixo eletrônico e novas receitas com componentes recuperados.',
    destaque: 'Emissões em 38% do valor de partida.'
  },
  2035: {
    titulo: 'Eficiência em macro escala',
    custo: '65%', co2: '35%', prazo: '10 dias',
    aconteceu: 'A rede global está enxuta, regional, preditiva e circular. O custo é 35% menor, as emissões são 65% menores e a entrega leva menos de duas semanas.',
    influencia: 'A IA deixa de ser uma ferramenta isolada e passa a ser a camada que conecta toda a operação, da previsão de demanda à devolução do produto usado.',
    fez: 'Previsão, otimização de rotas, coordenação de fábricas, gestão de riscos e economia circular funcionam como um só sistema, que aprende continuamente com cada entrega.',
    ajudou: 'A NovaTech chega ao fim da década com uma operação mais barata, mais limpa, mais rápida e muito menos vulnerável a crises do que a de 2026.',
    destaque: 'Resultado final: custo -35%, CO2 -65%, entrega em 10 dias.'
  }
};
