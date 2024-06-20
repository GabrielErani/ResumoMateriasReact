import React from 'react';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ButtonLinkBackHome } from '../components/ButtonLink';

const React_Page = () => {
    const componenteExemploReact = 
    `import React from 'react';

const ComponenteReact = () => (
    <div>
        <h1>Componente React</h1>
    </div>
);
export default ComponenteReact;`;

const componenteHomeExemploReact = 

`import * as React from "react";

export const Reactlogo = () => (
    <svg width="12rem" height="12rem" viewBox="0 -13 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
    <!-- Conteudo Do SVG -->
    <title>react</title>
    </svg>
);

export const Phplogo = () => (
    <svg width="12rem" height="12rem" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Conteudo Do SVG --> 
    </svg>
);
export const AlgoritmosData = () => (

    <svg width="12rem" height="12rem" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><!-- Conteudo Do SVG -->
    <title>Algoritmos e estrutura de dados</title>
    </svg>
);

export const Mysqllogo = () => (
    <svg fill="#000000" width="12rem" height="12rem" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>mysql</title>
       <!-- Conteudo Do SVG -->
    </svg>
);

export const SvgBackgroundAnimated = (props) => (
    <svg>
    <!-- Conteudo Do SVG -->
    </svg>
);

`;
    return(
    <div className='p-4 flex flex-col gap-4'>
        <h1 className="text-[#333] mt-[20px] mb-[10px]"><strong>O que estou aprendendo em React?</strong></h1>
        <ButtonLinkBackHome />
        <h2 className="text-[#333] mt-[20px] mb-[10px]"><strong>Componentes</strong></h2>
        <h3 className='text-[#333] mt-[20px] mb-[10px]'><strong>O que é um componente?</strong></h3>
        <p>Os componentes permitem que você divida a interface do usuário em partes independentes e reutilizáveis e pense em cada parte isoladamente.</p>
        <p>Conceitualmente, componentes são como funções JavaScript. Eles aceitam entradas arbitrárias (chamadas “props”) e retornam elementos React que descrevem o que deve aparecer na tela.</p>
        <div className=' p-2 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100'>
        <h3 className='text-[#333] mt-[20px] mb-[10px]'><strong>Exemplo de um componente react simples:</strong></h3>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                {componenteExemploReact}
            </SyntaxHighlighter>
        <p>Como é possivel ver no código acima, o componente esta sendo exportado como "default",<br /> só pode existir um export "default" por componente, mas pode existir varios "exportações nomeadas", como no arquivo de SVGS desse website!<br /><br /></p>
        <h3 className='text-[#333] mt-[20px] mb-[10px]'><strong>De uma olhada:</strong></h3>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                {componenteHomeExemploReact}
            </SyntaxHighlighter>
        </div>


    </div>
    );
};

export default React_Page;