export interface GlossaryTerm {
    term: string;
    meaning: string;
    example: string;
    category: 'slang' | 'technical';
}

export const glossaryTerms: GlossaryTerm[] = [
    {
        term: "QSJ",
        meaning: "Dinheiro, grana, orçamento.",
        example: "O QSJ tá apertado, mas a geladeira é investimento.",
        category: "slang"
    },
    {
        term: "QAP",
        meaning: "Estar atento, na escuta, pronto para receber informação.",
        example: "Tô no QAP aguardando a liberação da carga.",
        category: "slang"
    },
    {
        term: "QSL",
        meaning: "Entendido, confirmado, positivo.",
        example: "QSL, parceiro! Vou conferir o preço da Resfriar agora.",
        category: "slang"
    },
    {
        term: "Tapetão",
        meaning: "A rodovia asfáltica, o chão de estrada.",
        example: "É no tapetão que a gente ganha a vida.",
        category: "slang"
    },
    {
        term: "Boleia",
        meaning: "A cabine do caminhão, o ambiente de trabalho do motorista.",
        example: "Geladeira no banco da boleia é luxo necessário.",
        category: "slang"
    },
    {
        term: "No Prego",
        meaning: "Quebrado, estragado, sem condições de rodar.",
        example: "Ficar no prego com carga de perecível é o pior pesadelo.",
        category: "slang"
    },
    {
        term: "Cristal",
        meaning: "A esposa ou companheira do motorista.",
        example: "Mandei um abraço pra cristal via rádio PX.",
        category: "slang"
    },
    {
        term: "PX",
        meaning: "Rádio comunicador de faixa do cidadão, essencial para a comunicação no trecho.",
        example: "A rádio peão no PX avisou que o pátio tá lotado.",
        category: "slang"
    },
    {
        term: "Muriçoca",
        meaning: "Caminhões pequenos ou antigos que costumam andar mais devagar.",
        example: "Tinha uma muriçoca subindo a serra a 20 por hora.",
        category: "slang"
    },
    {
        term: "Abastecer a Despensa",
        meaning: "Encher a geladeira de comida para evitar gastos em restaurantes.",
        example: "Vou abastecer a despensa pra economizar o QSJ na viagem.",
        category: "slang"
    },
    {
        term: "Quadrivolt",
        meaning: "Equipamento que funciona em 12V, 24V, 110V e 220V com seleção automática.",
        example: "Geladeira Quadrivolt é a melhor pra quem troca muito de caminhão.",
        category: "technical"
    },
    {
        term: "Compressor Hermético",
        meaning: "Motor selado da geladeira, projetado para trabalhar em movimento e inclinação.",
        example: "O compressor hermético aguenta a buraqueira da BR-163.",
        category: "technical"
    },
    {
        term: "Proteção de Bateria",
        meaning: "Sistema que desliga a geladeira antes de a voltagem cair a ponto de impedir a partida.",
        example: "A proteção de bateria me salvou de ficar no prego hoje cedo.",
        category: "technical"
    }
];
