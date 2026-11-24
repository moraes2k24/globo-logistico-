// Simulação de crise: greve no porto de Xangai. Dados de entrada fictícios.
const CRISE = {
  nome: 'Greve no porto de Xangai',
  unidadesParadas: 300000,
  diasFechado: 9,
  mercadosAfetados: { roterda: 300, mumbai: 120 }
};

function simularCrise() {
  const passos = [];
  const base = CRISE.unidadesParadas;

  // SETOR 1: previsão de demanda
  const demandaAfetada = Object.values(CRISE.mercadosAfetados).reduce((a, b) => a + b, 0);
  const semanasDeVenda = Math.round(base / (demandaAfetada * 1000 / 4));
  passos.push({
    setor: 'Previsão de demanda',
    conta: 'Os mercados afetados consomem cerca de ' + demandaAfetada + ' mil unidades por mês. As 300 mil paradas cobrem ' + semanasDeVenda + ' semanas de vendas.',
    resultado: semanasDeVenda + ' semanas de venda em risco'
  });

  // SETOR 2: estoque
  const estoqueRegional = 90000;
  const cobertura = Math.min(1, estoqueRegional / base);
  const faltante = Math.round(base * (1 - cobertura));
  passos.push({
    setor: 'Estoque',
    conta: 'O estoque regional de Roterdã e Mumbai cobre ' + Math.round(cobertura * 100) + '% da carga parada. Faltam ' + faltante.toLocaleString('pt-BR') + ' unidades.',
    resultado: faltante.toLocaleString('pt-BR') + ' unidades sem cobertura'
  });

  // SETOR 3: consolidação de cargas
  const ocupacaoAntes = 0.78, ocupacaoDepois = 0.88;
  const viagensAntes = Math.ceil(faltante / (2000 * ocupacaoAntes));
  const viagensDepois = Math.ceil(faltante / (2000 * ocupacaoDepois));
  passos.push({
    setor: 'Consolidação de cargas',
    conta: 'Reagrupando pedidos, a ocupação dos contêineres sobe de 78% para 88%. As viagens caem de ' + viagensAntes + ' para ' + viagensDepois + '.',
    resultado: (viagensAntes - viagensDepois) + ' viagens a menos'
  });

  // SETOR 4: rotas e modais
  const opcoes = [
    { nome: 'Esperar o porto reabrir', dias: CRISE.diasFechado + 22, custo: 1.00, co2: 1.00 },
    { nome: 'Desviar por Singapura', dias: 5 + 22, custo: 1.12, co2: 1.08 },
    { nome: 'Desviar por Mumbai e trem', dias: 8 + 14 * 0.55 + 4, custo: 1.18, co2: 0.80 },
    { nome: 'Ponte aérea', dias: 4, custo: 3.40, co2: 6.50 }
  ];
  opcoes.forEach(o => o.pontos = o.custo * 10 + o.co2 * 4 + o.dias * 0.8);
  opcoes.sort((a, b) => a.pontos - b.pontos);
  const melhor = opcoes[0];
  passos.push({
    setor: 'Rotas e modais',
    conta: 'Comparando custo, carbono e prazo das ' + opcoes.length + ' alternativas, a melhor pontuação é: ' + melhor.nome + ' (' + Math.round(melhor.dias) + ' dias).',
    resultado: melhor.nome
  });

  // SETOR 5: risco e resiliência
  const atrasoSemIA = CRISE.diasFechado + 10;
  const atrasoComIA = Math.round(melhor.dias - 22 + 6);
  passos.push({
    setor: 'Risco e resiliência',
    conta: 'Sem plano, o atraso seria de ' + atrasoSemIA + ' dias. Com o desvio e outro polo cobrindo, o atraso estimado é de ' + Math.max(atrasoComIA, 3) + ' dias.',
    resultado: 'Atraso de ' + atrasoSemIA + ' para ' + Math.max(atrasoComIA, 3) + ' dias'
  });

  // SETOR 6: frota e combustível
  const co2Esperar = faltante * 0.5 * opcoes.find(o => o.nome === 'Esperar o porto reabrir').co2;
  const co2Melhor = faltante * 0.5 * melhor.co2 * 0.78;
  const reducaoCo2 = Math.round((1 - co2Melhor / co2Esperar) * 100);
  passos.push({
    setor: 'Frota e combustível',
    conta: 'Com navios de baixa emissão e trem elétrico no trecho final, a rota escolhida emite ' + Math.abs(reducaoCo2) + '% ' + (reducaoCo2 >= 0 ? 'menos' : 'mais') + ' CO2 que esperar.',
    resultado: 'CO2 ' + (reducaoCo2 >= 0 ? '-' : '+') + Math.abs(reducaoCo2) + '%'
  });

  // SETOR 7: economia circular
  const reaproveitavel = Math.round(base * 0.02);
  const economia = reaproveitavel * 18;
  passos.push({
    setor: 'Economia circular',
    conta: 'Cerca de 2% da carga parada pode voltar como componente reaproveitado, ' + reaproveitavel.toLocaleString('pt-BR') + ' peças, com economia estimada de ' + economia.toLocaleString('pt-BR') + ' dólares.',
    resultado: 'US$ ' + economia.toLocaleString('pt-BR') + ' recuperados'
  });

  // COORDENADOR: antes e depois
  const custoEsperar = faltante * 10 * 1.00;
  const custoMelhor = faltante * 10 * melhor.custo * (1 - 0.03);
  const antes = { prazo: atrasoSemIA, custo: Math.round(custoEsperar) };
  const depois = { prazo: Math.max(atrasoComIA, 3), custo: Math.round(custoMelhor) };
  return { crise: CRISE, passos, antes, depois, escolha: melhor.nome, reducaoCo2 };
}
