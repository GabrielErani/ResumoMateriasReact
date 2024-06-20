// src/components/AlgoritmosEstruturaDados.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ButtonLinkBackHome } from '../components/ButtonLink';

const Algoritmos = () => {
    const graphCode = `
#define V 5
int graph[V][V] = {
    {0, 1, 0, 0, 1},
    {1, 0, 1, 0, 0},
    {0, 1, 0, 1, 0},
    {0, 0, 1, 0, 1},
    {1, 0, 0, 1, 0}
};`;

    const treeCode = `
typedef struct No {
    int valor;
    struct No* esq;
    struct No* dir;
} No;`;

    const stackCode = `
typedef struct Pilha {
    int capacidade;
    int topo;
    int *valores;
} Pilha;

Pilha* criarPilha(int capacidade) {
    Pilha *pilha = (Pilha*)malloc(sizeof(Pilha));
    pilha->capacidade = capacidade;
    pilha->topo = -1;
    pilha->valores = (int*)malloc(capacidade * sizeof(int));
    return pilha;
}

int estaVazia(Pilha *pilha) {
    return pilha->topo == -1;
}

int estaCheia(Pilha *pilha) {
    return pilha->topo == pilha->capacidade - 1;
}

void empilhar(Pilha *pilha, int valor) {
    if (estaCheia(pilha))
        return;
    pilha->valores[++pilha->topo] = valor;
}

int desempilhar(Pilha *pilha) {
    if (estaVazia(pilha))
        return -1;
    return pilha->valores[pilha->topo--];
}`;

    const queueCode = `
typedef struct Fila {
    int capacidade;
    int frente;
    int tras;
    int *valores;
} Fila;

Fila* criarFila(int capacidade) {
    Fila *fila = (Fila*)malloc(sizeof(Fila));
    fila->capacidade = capacidade;
    fila->frente = fila->tras = -1;
    fila->valores = (int*)malloc(capacidade * sizeof(int));
    return fila;
}

int estaVazia(Fila *fila) {
    return fila->frente == -1;
}

int estaCheia(Fila *fila) {
    return fila->tras == fila->capacidade - 1;
}

void enfileirar(Fila *fila, int valor) {
    if (estaCheia(fila))
        return;
    if (fila->frente == -1)
        fila->frente = 0;
    fila->valores[++fila->tras] = valor;
}

int desenfileirar(Fila *fila) {
    if (estaVazia(fila))
        return -1;
    int valor = fila->valores[fila->frente];
    if (fila->frente >= fila->tras)
        fila->frente = fila->tras = -1;
    else
        fila->frente++;
    return valor;
}`;

    const linkedListCode = `
typedef struct No {
    int valor;
    struct No* prox;
} No;

No* criarNo(int valor) {
    No* novoNo = (No*)malloc(sizeof(No));
    novoNo->valor = valor;
    novoNo->prox = NULL;
    return novoNo;
}

void inserirNoInicio(No** cabeca, int valor) {
    No* novoNo = criarNo(valor);
    novoNo->prox = *cabeca;
    *cabeca = novoNo;
}

void imprimirLista(No* no) {
    while (no != NULL) {
        printf("%d -> ", no->valor);
        no = no->prox;
    }
    printf("NULL\\n");
}`;

    const bstCode = `
typedef struct No {
    int valor;
    struct No* esq;
    struct No* dir;
} No;

No* criarNo(int valor) {
    No* novoNo = (No*)malloc(sizeof(No));
    novoNo->valor = valor;
    novoNo->esq = novoNo->dir = NULL;
    return novoNo;
}

No* inserir(No* no, int valor) {
    if (no == NULL)
        return criarNo(valor);
    if (valor < no->valor)
        no->esq = inserir(no->esq, valor);
    else if (valor > no->valor)
        no->dir = inserir(no->dir, valor);
    return no;
}

void inOrder(No* no) {
    if (no != NULL) {
        inOrder(no->esq);
        printf("%d ", no->valor);
        inOrder(no->dir);
    }
}`;

    return (
        <div className='p-4 lg:min-w-screen-lg lg:max-w-screen-lg w-screen min-h-screen rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-100'>
            <h1 className="text-[#333] mt-[20px] mb-[10px]">Algoritmos e Estruturas de Dados</h1>
            <ButtonLinkBackHome />
            <h2 className="text-[#333] mt-[20px] mb-[10px]">1. Introdução a Grafos e Árvores</h2>
            <h3 className="text-[#333] mt-[20px] mb-[10px]">Grafos</h3>
            <p className='mx-[10px]'>Grafos são modelos matemáticos que representam relações entre objetos. Eles consistem em vértices (ou nós) conectados por arestas.</p>
            <SyntaxHighlighter language="c" style={vscDarkPlus}>
                {graphCode}
            </SyntaxHighlighter>

            <h3 className="text-[#333] mt-[20px] mb-[10px]">Árvores</h3>
            <p className='mx-[10px]'>Árvores são grafos acíclicos conectados. Elas possuem um nó raiz e nós filhos que formam uma hierarquia.</p>
            <SyntaxHighlighter language="c" style={vscDarkPlus}>
                {treeCode}
            </SyntaxHighlighter>

            <h2 className="text-[#333] mt-[20px] mb-[10px]">2. Pilhas</h2>
            <h3 className="text-[#333] mt-[20px] mb-[10px]">Implementação e Uso de Pilhas</h3>
            <SyntaxHighlighter language="c" style={vscDarkPlus}>
                {stackCode}
            </SyntaxHighlighter>

            <h2 className="text-[#333] mt-[20px] mb-[10px]">3. Filas</h2>
            <h3 className="text-[#333] mt-[20px] mb-[10px]">Implementação e Uso de Filas</h3>
            <SyntaxHighlighter language="c" style={vscDarkPlus}>
                {queueCode}
            </SyntaxHighlighter>

            <h2 className="text-[#333] mt-[20px] mb-[10px]">4. Listas Encadeadas</h2>
            <h3 className="text-[#333] mt-[20px] mb-[10px]">Implementação e Uso de Listas Encadeadas</h3>
            <SyntaxHighlighter language="c" style={vscDarkPlus}>
                {linkedListCode}
            </SyntaxHighlighter>

            <h2 className="text-[#333] mt-[20px] mb-[10px]">5. Árvores Binárias de Busca (BST)</h2>
            <h3 className="text-[#333] mt-[20px] mb-[10px]">Implementação e Uso de Árvores Binárias de Busca</h3>
            <SyntaxHighlighter language="c" style={vscDarkPlus}>
                {bstCode}
            </SyntaxHighlighter>
        </div>
    );
};

export default Algoritmos;
