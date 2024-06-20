// src/components/BancoDeDadosMySQL.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ButtonLinkBackHome } from '../components/ButtonLink';
const BancoDeDadosMySQL = () => {
    const criarTabelaCode = `
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    email VARCHAR(50),
    senha VARCHAR(50)
);
    `;

    const inserirDadosCode = `
INSERT INTO usuarios (nome, email, senha) VALUES ('João', 'joao@example.com', '123456');
    `;

    const selecionarDadosCode = `
SELECT * FROM usuarios;
    `;

    const atualizarDadosCode = `
UPDATE usuarios SET senha = 'nova_senha' WHERE email = 'joao@example.com';
    `;

    const excluirDadosCode = `
DELETE FROM usuarios WHERE email = 'joao@example.com';
    `;

    const transacaoCode = `
START TRANSACTION;
UPDATE conta SET saldo = saldo - 100 WHERE id = 1;
UPDATE conta SET saldo = saldo + 100 WHERE id = 2;
COMMIT;
    `;

    const indiceCode = `
CREATE INDEX idx_nome ON clientes(nome);
    `;

    const backupCode = `
mysqldump --host=localhost --user=root --password=1234 --databases banco > backup.sql;
    `;

    const restoreCode = `
mysql --host=localhost --user=root --password=1234 < backup.sql;
    `;

    const lockExclusivoCode = `
SELECT * FROM tabela FOR UPDATE;
    `;

    const lockCompartilhadoCode = `
SELECT * FROM tabela FOR SHARE;
    `;

    const deadlockCode = `
START TRANSACTION;
UPDATE conta SET saldo = saldo - 100 WHERE id = 1;
-- Espera o recurso 2
UPDATE conta SET saldo = saldo + 100 WHERE id = 2;
COMMIT;

START TRANSACTION;
UPDATE conta SET saldo = saldo - 200 WHERE id = 2;
-- Espera o recurso 1
UPDATE conta SET saldo = saldo + 200 WHERE id = 1;
COMMIT;
    `;

    const niveisIsolamento = `
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
    `;

    return (
        <div className='p-4 lg:min-w-screen-lg lg:max-w-screen-lg w-screen min-h-screen rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-100'>

            <h1 className="text-[#333] mt-[20px] mb-[10px]"><strong> Banco de Dados MySQL</strong></h1>
            <ButtonLinkBackHome />

            <h2 className="text-[#333] mt-[20px] mb-[10px]"><strong>1. Operações CRUD</strong></h2>
            <h3 className="text-[#333] mt-[20px] mb-[10px]"><strong>Criar Tabelas</strong></h3>
            <SyntaxHighlighter language="sql" style={vscDarkPlus}>
                {criarTabelaCode}
            </SyntaxHighlighter>
            <h3 className="text-[#333] mt-[20px] mb-[10px]"><strong>Inserir Dados</strong></h3>
            <SyntaxHighlighter language="sql" style={vscDarkPlus}>
                {inserirDadosCode}
            </SyntaxHighlighter>
            <h3 className="text-[#333] mt-[20px] mb-[10px]"><strong>Selecionar Dados</strong></h3>
            <SyntaxHighlighter language="sql" style={vscDarkPlus}>
                {selecionarDadosCode}
            </SyntaxHighlighter>
            <h3 className="text-[#333] mt-[20px] mb-[10px]"><strong>Atualizar Dados</strong></h3>
            <SyntaxHighlighter language="sql" style={vscDarkPlus}>
                {atualizarDadosCode}
            </SyntaxHighlighter>
            <h3 className="text-[#333] mt-[20px] mb-[10px]"><strong>Excluir Dados</strong></h3>
            <SyntaxHighlighter language="sql" style={vscDarkPlus}>
                {excluirDadosCode}
            </SyntaxHighlighter>

            <h2 className="text-[#333] mt-[20px] mb-[10px]"><strong>2. Transações e ACID</strong></h2>
            <p className="mx-[10px]">Uma transação no banco de dados é uma unidade de trabalho ou uma sequência de operações que são tratadas como um bloco único. As transações possuem as características ACID:</p>
            <ul>
                <li><strong>Atomicidade:</strong> A transação ocorre por inteiro, tudo ou nada.</li>
                <li><strong>Consistência:</strong> As transações sempre deixam o banco de dados consistente.</li>
                <li><strong>Isolamento:</strong> Uma transação não vê outra transação, garantindo isolamento.</li>
                <li><strong>Durabilidade:</strong> As mudanças commitadas são salvas permanentemente.</li>
            </ul>
            <h3 className="text-[#333] mt-[20px] mb-[10px]"><strong>Exemplo de Transação</strong></h3>
            <SyntaxHighlighter language="sql" style={vscDarkPlus}>
                {transacaoCode}
            </SyntaxHighlighter>

            <h2 className="text-[#333] mt-[20px] mb-[10px]"><strong>3. Concorrência e Locks</strong></h2>
            <p className="mx-[10px]">Concorrência é o processo em que vários sistemas ou usuários acessam os mesmos recursos simultaneamente. Locks são mecanismos para controlar esse acesso concorrente, garantindo consistência e integridade dos dados.</p>
            <h3 className="text-[#333] mt-[20px] mb-[10px]"><strong>Tipos de Locks</strong></h3>
            <ul>
                <li><strong>Locks Exclusivos:</strong> Apenas uma transação pode criar esse lock por vez.</li>
                <li><strong>Locks Compartilhados:</strong> Várias transações podem criar esse lock simultaneamente.</li>
            </ul>
            <h3 className="text-[#333] mt-[20px] mb-[10px]"><strong>Locks Exclusivos</strong></h3>
            <SyntaxHighlighter language="sql" style={vscDarkPlus}>
                {lockExclusivoCode}
            </SyntaxHighlighter>
            <h3 className="text-[#333] mt-[20px] mb-[10px]"><strong>Locks Compartilhados</strong></h3>
            <SyntaxHighlighter language="sql" style={vscDarkPlus}>
                {lockCompartilhadoCode}
            </SyntaxHighlighter>

            <h2 className="text-[#333] mt-[20px] mb-[10px]"><strong>4. Deadlocks</strong></h2>
            <p className="mx-[10px]">Deadlocks ocorrem quando duas ou mais transações não podem prosseguir porque cada uma está esperando que a outra libere um recurso. O sistema de gerenciamento de banco de dados resolve deadlocks automaticamente, escolhendo uma transação para rollback.</p>
            <h3 className="text-[#333] mt-[20px] mb-[10px]"><strong>Exemplo de Deadlock</strong></h3>
            <SyntaxHighlighter language="sql" style={vscDarkPlus}>
                {deadlockCode}
            </SyntaxHighlighter>

            <h2 className="text-[#333] mt-[20px] mb-[10px]"><strong>5. Índices</strong></h2>
            <p className="mx-[10px]">Índices são estruturas criadas em colunas de tabelas que visam deixar operações de leitura mais rápidas. Eles são utilizados principalmente nas cláusulas WHERE e ORDER BY.</p>
            <h3 className="text-[#333] mt-[20px] mb-[10px]"><strong>Criação de Índices</strong></h3>
            <SyntaxHighlighter language="sql" style={vscDarkPlus}>
                {indiceCode}
            </SyntaxHighlighter>

            <h2 className="text-[#333] mt-[20px] mb-[10px]"><strong>6. Backup e Restauração</strong></h2>
            <p className="mx-[10px]">Backups são cópias dos dados do banco de dados em um determinado momento. Existem dois tipos principais de backups:</p>
            <ul>
                <li><strong>Backups Físicos:</strong> Cópia das pastas ou arquivos do banco de dados.</li>
                <li><strong>Backups Lógicos:</strong> Criação de comandos SQL para recriar a estrutura e os dados do banco.</li>
            </ul>
            <h3 className="text-[#333] mt-[20px] mb-[10px]"><strong>Exemplo de Backup</strong></h3>
            <SyntaxHighlighter language="bash" style={vscDarkPlus}>
                {backupCode}
            </SyntaxHighlighter>
            <h3 className="text-[#333] mt-[20px] mb-[10px]"><strong>Exemplo de Restauração</strong></h3>
            <SyntaxHighlighter language="bash" style={vscDarkPlus}>
                {restoreCode}
            </SyntaxHighlighter>

            <h2 className="text-[#333] mt-[20px] mb-[10px]"><strong>7. Níveis de Isolamento</strong></h2>
            <p className="mx-[10px]">Transações são isoladas umas das outras, isolamento da sigla ACID. Os níveis de isolamento definem a forma como uma transação será isolada das demais:</p>
            <ul>
                <li><strong>READ UNCOMMITTED:</strong> Selects podem ler dados não commitados de outra transação, também conhecido como leitura suja.</li>
                <li><strong>READ COMMITTED:</strong> Cada select dentro da transação lê novos dados que foram commitados.</li>
                <li><strong>REPEATABLE READ:</strong> Todos os selects no mesmo recurso retornam o mesmo resultado dentro da mesma transação, eles lêem um snapshot (copia) dos dados realizados pela primeira leitura.</li>
                <li><strong>SERIALIZABLE:</strong> Nesse modo as leituras são iguais ao REPEATABLE READ, porém todos os selects dentro de uma transação adquirem shared locks automaticamente.</li>
            </ul>
            <h3 className="text-[#333] mt-[20px] mb-[10px]"><strong>Exemplo de Níveis de Isolamento</strong></h3>
            <SyntaxHighlighter language="sql" style={vscDarkPlus}>
                {niveisIsolamento}
            </SyntaxHighlighter>

            <h2 className="text-[#333] mt-[20px] mb-[10px]"><strong>8. Procedimentos para Concorrência</strong></h2>
            <p className="mx-[10px]">Procedimentos preparados para concorrência utilizam locks para garantir que os recursos sejam acessados de forma exclusiva, evitando race conditions e deadlocks.</p>
            <h3 className="text-[#333] mt-[20px] mb-[10px]"><strong>Exemplo de Procedimento com Lock Exclusivo</strong></h3>
            <SyntaxHighlighter language="sql" style={vscDarkPlus}>
                {lockExclusivoCode}
            </SyntaxHighlighter>

            <h3 className="text-[#333] mt-[20px] mb-[10px]"><strong>Exemplo de Procedimento com Lock Compartilhado</strong></h3>
            <SyntaxHighlighter language="sql" style={vscDarkPlus}>
                {lockCompartilhadoCode}
            </SyntaxHighlighter>
        </div>

    );
};

export default BancoDeDadosMySQL;
