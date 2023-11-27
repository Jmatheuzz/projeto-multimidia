import { OpenAiResult } from "./pages/Home";

const firstQuestionList: OpenAiResult = {
  questions: [
    {
      question: "Qual é o maior planeta do Sistema Solar?",
      options: [
        { id: "1", label: "Vênus" },
        { id: "2", label: "Júpiter" },
        { id: "3", label: "Marte" },
        { id: "4", label: "Saturno" },
      ],
      correctOptionId: "2",
    },
    {
      question: "Quem foi o líder da independência da Índia?",
      options: [
        { id: "1", label: "Jawaharlal Nehru" },
        { id: "2", label: "Subhas Chandra Bose" },
        { id: "3", label: "Mahatma Gandhi" },
        { id: "4", label: "Indira Gandhi" },
      ],
      correctOptionId: "3",
    },
    {
      question: "Em que ano ocorreu a Revolução Russa?",
      options: [
        { id: "1", label: "1914" },
        { id: "2", label: "1917" },
        { id: "3", label: "1920" },
        { id: "4", label: "1923" },
      ],
      correctOptionId: "2",
    },
    {
      question: "Qual é o metal mais abundante na crosta terrestre?",
      options: [
        { id: "1", label: "Ferro" },
        { id: "2", label: "Alumínio" },
        { id: "3", label: "Cobre" },
        { id: "4", label: "Ouro" },
      ],
      correctOptionId: "2",
    },
    {
      question: "Quem foi o autor da obra 'Grande Sertão: Veredas'?",
      options: [
        { id: "1", label: "Machado de Assis" },
        { id: "2", label: "Guimarães Rosa" },
        { id: "3", label: "Euclides da Cunha" },
        { id: "4", label: "Clarice Lispector" },
      ],
      correctOptionId: "2",
    },
    {
      question: "Qual é o rio mais extenso do mundo?",
      options: [
        { id: "1", label: "Nilo" },
        { id: "2", label: "Amazonas" },
        { id: "3", label: "Yangtzé" },
        { id: "4", label: "Mississipi" },
      ],
      correctOptionId: "2",
    },
    {
      question: "Quem foi o primeiro presidente do Brasil?",
      options: [
        { id: "1", label: "Getúlio Vargas" },
        { id: "2", label: "Juscelino Kubitschek" },
        { id: "3", label: "Deodoro da Fonseca" },
        { id: "4", label: "Fernando Henrique Cardoso" },
      ],
      correctOptionId: "3",
    },
    {
      question: "Qual é o instrumento musical mais antigo do mundo?",
      options: [
        { id: "1", label: "Flauta" },
        { id: "2", label: "Lira" },
        { id: "3", label: "Tambor" },
        { id: "4", label: "Harpa" },
      ],
      correctOptionId: "2",
    },
  ],
};

const secondQuestionList: OpenAiResult = {
  questions: [
    {
      question:
        "Qual linguagem de programação é conhecida por ser 'a linguagem dos web browsers'?",
      options: [
        { id: "1", label: "Python" },
        { id: "2", label: "Java" },
        { id: "3", label: "JavaScript" },
        { id: "4", label: "C#" },
      ],
      correctOptionId: "3",
    },
    {
      question: "O que significa a sigla HTML em programação web?",
      options: [
        { id: "1", label: "HyperText Markup Language" },
        { id: "2", label: "High-Level Text Language" },
        { id: "3", label: "Hyperlink and Text Markup Language" },
        { id: "4", label: "Home Tool Markup Language" },
      ],
      correctOptionId: "1",
    },
    {
      question:
        "Qual estrutura de dados utiliza o princípio 'último a entrar, primeiro a sair'?",
      options: [
        { id: "1", label: "Fila" },
        { id: "2", label: "Pilha" },
        { id: "3", label: "Árvore" },
        { id: "4", label: "Lista" },
      ],
      correctOptionId: "2",
    },
    {
      question: "Em programação, o que é um 'loop infinito'?",
      options: [
        { id: "1", label: "Um loop que nunca é executado" },
        { id: "2", label: "Um loop que executa apenas uma vez" },
        { id: "3", label: "Um loop que executa continuamente sem parar" },
        { id: "4", label: "Um erro de programação" },
      ],
      correctOptionId: "3",
    },
    {
      question:
        "Qual é a função da linguagem SQL em programação de bancos de dados?",
      options: [
        { id: "1", label: "Sintaxe de controle de fluxo" },
        { id: "2", label: "Manipulação de strings" },
        { id: "3", label: "Acesso a APIs externas" },
        { id: "4", label: "Gerenciamento de banco de dados" },
      ],
      correctOptionId: "4",
    },
    {
      question: "Em desenvolvimento web, o que é o CSS?",
      options: [
        { id: "1", label: "Counter Strike Source" },
        { id: "2", label: "Cascading Style Sheets" },
        { id: "3", label: "Content Storage System" },
        { id: "4", label: "Computer Style Standards" },
      ],
      correctOptionId: "2",
    },
    {
      question: "O que é um 'bug' em programação?",
      options: [
        { id: "1", label: "Um erro de compilação" },
        { id: "2", label: "Um inseto virtual" },
        {
          id: "3",
          label: "Um problema no código que causa comportamento inesperado",
        },
        { id: "4", label: "Um recurso indesejado no software" },
      ],
      correctOptionId: "3",
    },
    {
      question: "Qual é a finalidade do comando 'git clone' no Git?",
      options: [
        { id: "1", label: "Criar um novo repositório" },
        {
          id: "2",
          label: "Copiar um repositório remoto para o computador local",
        },
        { id: "3", label: "Criar um branch" },
        { id: "4", label: "Remover um repositório" },
      ],
      correctOptionId: "2",
    },
  ],
};

const thirdQuestionList: OpenAiResult = {
  questions: [
    {
      question:
        "Qual linguagem de programação é comumente utilizada para desenvolvimento backend com o framework Django?",
      options: [
        { id: "1", label: "Java" },
        { id: "2", label: "Ruby" },
        { id: "3", label: "Python" },
        { id: "4", label: "Node.js" },
      ],
      correctOptionId: "3",
    },
    {
      question: "O que é REST em desenvolvimento de APIs?",
      options: [
        { id: "1", label: "Representational State Transfer" },
        { id: "2", label: "Remote Execution Service Technology" },
        { id: "3", label: "Responsive Element Synchronization Technology" },
        { id: "4", label: "Reliable Endpoint Security Transfer" },
      ],
      correctOptionId: "1",
    },
    {
      question: "O que é o padrão MVC em arquitetura de software?",
      options: [
        { id: "1", label: "Model-View-Cache" },
        { id: "2", label: "Microservices-Virtualization-Cloud" },
        { id: "3", label: "Model-View-Controller" },
        { id: "4", label: "Message-Validation-Client" },
      ],
      correctOptionId: "3",
    },
    {
      question: "O que é uma 'query' em bancos de dados?",
      options: [
        { id: "1", label: "Um método HTTP" },
        { id: "2", label: "Uma solicitação de serviço" },
        { id: "3", label: "Uma instrução para buscar ou manipular dados" },
        { id: "4", label: "Um tipo de autenticação" },
      ],
      correctOptionId: "3",
    },
    {
      question: "Qual é a finalidade do protocolo HTTP em comunicação web?",
      options: [
        { id: "1", label: "Transferência de arquivos" },
        { id: "2", label: "Compartilhamento de recursos de hardware" },
        { id: "3", label: "Autenticação de usuários" },
        { id: "4", label: "Transferência de dados na web" },
      ],
      correctOptionId: "4",
    },
    {
      question: "O que é uma API RESTful?",
      options: [
        { id: "1", label: "Uma API que funciona apenas em servidores locais" },
        { id: "2", label: "Uma API que utiliza apenas autenticação básica" },
        { id: "3", label: "Uma API que segue os princípios REST" },
        { id: "4", label: "Uma API exclusiva para front-end" },
      ],
      correctOptionId: "3",
    },
    {
      question: "O que é o termo 'middleware' em desenvolvimento web?",
      options: [
        { id: "1", label: "Um tipo de framework" },
        {
          id: "2",
          label:
            "Um componente de software que fica entre aplicativos e sistemas operacionais",
        },
        {
          id: "3",
          label: "Uma linguagem de programação específica para servidores",
        },
        { id: "4", label: "Um protocolo de comunicação entre servidores" },
      ],
      correctOptionId: "2",
    },
    {
      question: "O que é Docker em desenvolvimento de software?",
      options: [
        { id: "1", label: "Uma linguagem de programação" },
        { id: "2", label: "Um banco de dados NoSQL" },
        { id: "3", label: "Uma plataforma de virtualização de contêineres" },
        { id: "4", label: "Uma biblioteca de gráficos" },
      ],
      correctOptionId: "3",
    },
  ],
};

const fourthQuestionList: OpenAiResult = {
  questions: [
    {
      question: "O que é um pixel em computação gráfica?",
      options: [
        { id: "1", label: "Um modelo 3D" },
        { id: "2", label: "Um ponto em uma imagem digital" },
        { id: "3", label: "Uma unidade de medida de resolução" },
        { id: "4", label: "Um algoritmo de renderização" },
      ],
      correctOptionId: "2",
    },
    {
      question: "O que é anti-aliasing em gráficos computacionais?",
      options: [
        { id: "1", label: "Um tipo de filtro de imagem" },
        {
          id: "2",
          label: "Um método para reduzir o número de polígonos em um modelo 3D",
        },
        { id: "3", label: "Uma técnica para suavizar bordas serrilhadas" },
        { id: "4", label: "Uma forma de compressão de texturas" },
      ],
      correctOptionId: "3",
    },
    {
      question: "O que é o 'Z-buffer' em computação gráfica?",
      options: [
        { id: "1", label: "Um algoritmo de ordenação" },
        { id: "2", label: "Um tipo de antena para transmissão de dados" },
        { id: "3", label: "Um buffer de profundidade" },
        { id: "4", label: "Um modelo de iluminação" },
      ],
      correctOptionId: "3",
    },
    {
      question: "Qual é a função do shader em gráficos computacionais?",
      options: [
        { id: "1", label: "Gerar sombras em uma cena" },
        { id: "2", label: "Processar operações de entrada e saída" },
        { id: "3", label: "Definir a cor e textura de um objeto" },
        { id: "4", label: "Executar cálculos na GPU" },
      ],
      correctOptionId: "4",
    },
    {
      question: "O que é o 'ray tracing' em gráficos computacionais?",
      options: [
        { id: "1", label: "Uma técnica de modelagem 3D" },
        { id: "2", label: "Uma forma de compressão de imagens" },
        { id: "3", label: "Um método de renderização baseado em raios" },
        { id: "4", label: "Uma técnica de animação por computador" },
      ],
      correctOptionId: "3",
    },
    {
      question: "O que é um 'viewport' em computação gráfica?",
      options: [
        { id: "1", label: "Uma ferramenta de edição de texturas" },
        {
          id: "2",
          label: "Uma janela de visualização em um software de modelagem 3D",
        },
        { id: "3", label: "Um tipo de shader" },
        { id: "4", label: "Uma técnica de otimização de texturas" },
      ],
      correctOptionId: "2",
    },
    {
      question: "O que é o modelo de cor RGB?",
      options: [
        { id: "1", label: "Um modelo de cor baseado em tons de cinza" },
        { id: "2", label: "Um modelo de cor para impressão gráfica" },
        {
          id: "3",
          label: "Um modelo de cor baseado em vermelho, verde e azul",
        },
        { id: "4", label: "Um modelo de cor para televisores antigos" },
      ],
      correctOptionId: "3",
    },
    {
      question: "O que é mapeamento de texturas em gráficos 3D?",
      options: [
        { id: "1", label: "Um método de compressão de imagens" },
        { id: "2", label: "Um tipo de anti-aliasing" },
        { id: "3", label: "Uma técnica de modelagem de terreno" },
        {
          id: "4",
          label: "A aplicação de uma imagem 2D na superfície de um objeto 3D",
        },
      ],
      correctOptionId: "4",
    },
  ],
};

export const mockedQuestionLists = [
  firstQuestionList,
  secondQuestionList,
  thirdQuestionList,
  fourthQuestionList,
];
