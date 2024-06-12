// src/components/PhpResumo.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const PhpResumo = () => {
    const sqlCode = `
CREATE TABLE tb_mural (
    id_mensagem INT(5) AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    mensagem TEXT,
    data DATE,
    hora TIME
);`;

    const phpFunctionCode = `
function nome_da_funcao($arg1, $arg2) {
    return $valor;
}`;

    const phpParamByValueCode = `
function mais5($numero) {
    $numero += 5;
}`;

    const phpParamByReferenceCode = `
function mais5(&$numero) {
    $numero += 5;
}`;

    const phpDefaultParamCode = `
function teste($texto = "testando") {
    echo $texto;
}`;

    const phpGlobalLocalCode = `
$texto = "Testando";

function teste() {
    global $texto;
    echo $texto;
}

teste(); // imprime "Testando"`;

    const phpIfElseCode = `
if ($num % 2 == 0) {
    echo "Par";
} else {
    echo "Ímpar";
}`;

    const phpTernaryCode = `
echo ($num % 2 == 0) ? "Par" : "Ímpar";`;

    const phpForLoopCode = `
for ($i = 0; i < 10; i++) {
    echo $i;
}`;

    const phpWhileLoopCode = `
while ($i < 10) {
    echo $i;
    $i++;
}`;

    const phpDoWhileLoopCode = `
do {
    echo $i;
    $i++;
} while ($i < 10);`;

    const phpDbConnectCode = `
$conexao = mysqli_connect("localhost", "root", "") or die("Conexão falhou");
mysqli_select_db($conexao, "Visitas") or die("Seleção do banco de dados falhou");`;

    const phpDbSelectCode = `
$query = "SELECT * FROM livro ORDER BY nome";
$resultado = mysqli_query($conexao, $query);
while ($linha = mysqli.fetch_array($resultado)) {
    echo $linha['nome'];
}`;

    const phpDbInsertCode = `
$query = "INSERT INTO livro (nome, localizacao, mensagem, data) VALUES ('$nome', '$localizacao', '$mensagem', NOW())";
mysqli.query($conexao, $query);`;

    const pdoConnectCode = `
$pdo = new PDO("mysql:host=localhost;dbname=aula", "root", "");`;

    const pdoSelectCode = `
$stmt = $pdo.query("SELECT * FROM agenda");
while ($row = $stmt.fetch()) {
    echo $row['nome'];
}`;

    const pdoSelectWithParamsCode = `
$stmt = $pdo.prepare("SELECT * FROM agenda WHERE nome = :nome");
$stmt.bindParam(':nome', $nome);
$stmt.execute();`;

    const pdoInsertCode = `
$stmt = $pdo.prepare("INSERT INTO agenda (nome, telefone, email) VALUES (:nome, :telefone, :email)");
$stmt.bindParam(':nome', $nome);
$stmt.bindParam(':telefone', $telefone);
$stmt.bindParam(':email', $email);
$stmt.execute();`;

    const pdoUpdateCode = `
$stmt = $pdo.prepare("UPDATE agenda SET telefone = :telefone WHERE nome = :nome");
$stmt.bindParam(':nome', $nome);
$stmt.bindParam(':telefone', $telefone);
$stmt.execute();`;

    const pdoDeleteCode = `
$stmt = $pdo.prepare("DELETE FROM agenda WHERE nome = :nome");
$stmt.bindParam(':nome', $nome);
$stmt.execute();`;

    const sqlCreateDbCode = `
CREATE DATABASE VeiculosDB;
USE VeiculosDB;
CREATE TABLE veiculos (
    codVeiculo INT AUTO_INCREMENT PRIMARY KEY,
    nomeVeiculo VARCHAR(100),
    marcaVeiculo VARCHAR(100),
    placaVeiculo VARCHAR(8),
    corVeiculo VARCHAR(15)
);`;

    const phpInsertVeiculoCode = `
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nomeVeiculo = $_POST['nomeVeiculo'];
    $marcaVeiculo = $_POST['marcaVeiculo'];
    $placaVeiculo = $_POST['placaVeiculo'];
    $corVeiculo = $_POST['corVeiculo'];

    $conn = mysqli.connect("localhost", "root", "", "VeiculosDB");
    $sql = "INSERT INTO veiculos (nomeVeiculo, marcaVeiculo, placaVeiculo, corVeiculo) VALUES ('$nomeVeiculo', '$marcaVeiculo', '$placaVeiculo', '$corVeiculo')";
    mysqli.query($conn, $sql);
    mysqli.close($conn);
}`;

    const phpSelectVeiculoCode = `
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $placaVeiculo = $_POST['placaVeiculo'];

    $conn = mysqli.connect("localhost", "root", "", "VeiculosDB");
    $sql = "SELECT * FROM veiculos WHERE placaVeiculo = '$placaVeiculo'";
    $result = mysqli.query($conn, $sql);
    if (mysqli.num_rows($result) > 0) {
        $veiculo = mysqli.fetch_assoc($result);
    } else {
        $veiculo = false;
    }
    mysqli.close($conn);
}`;

    const phpUpdateVeiculoCode = `
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $codVeiculo = $_POST['codVeiculo'];
    $nomeVeiculo = $_POST['nomeVeiculo'];
    $marcaVeiculo = $_POST['marcaVeiculo'];
    $placaVeiculo = $_POST['placaVeiculo'];
    $corVeiculo = $_POST['corVeiculo'];

    $conn = mysqli.connect("localhost", "root", "", "VeiculosDB");
    $sql = "UPDATE veiculos SET nomeVeiculo='$nomeVeiculo', marcaVeiculo='$marcaVeiculo', placaVeiculo='$placaVeiculo', corVeiculo='$corVeiculo' WHERE codVeiculo=$codVeiculo";
    mysqli.query($conn, $sql);
    mysqli.close($conn);
}`;

    return (
        <div>
            <h1>Resumo PHP & Algoritmos E Estrutura De Dados</h1>
            <div className="button-container">
                <Link to="/" className="button">Voltar pra Home</Link>
            </div>
            <h2>1. Introdução ao phpMyAdmin e MySQL</h2>
            <h3>O que é um Banco de Dados?</h3>
            <p>Um banco de dados é um arquivo que permite acessar informações de maneira fácil e organizada. MySQL é um dos melhores bancos de dados gratuitos.</p>

            <h3>Sistema de Banco de Dados</h3>
            <p>Composto por dados armazenados em um banco de dados, o software de gerenciamento de banco de dados (SGBD), e os programas de aplicação. As tabelas armazenam as informações dentro do banco de dados.</p>

            <h3>Utilizando o phpMyAdmin</h3>
            <p><strong>phpMyAdmin:</strong> Ferramenta para gerenciar MySQL.</p>
            <p><strong>Criando um Banco de Dados:</strong></p>
            <ol>
                <li>Acesse o phpMyAdmin.</li>
                <li>Digite o nome do banco de dados e clique em "Criar".</li>
                <li>Crie tabelas com campos específicos (nome, tipo, tamanho, etc.).</li>
            </ol>

            <h3>Estrutura das Tabelas</h3>
            <p><strong>Campos:</strong> Nome, Tipo (Int, Varchar, Text, Date, etc.), Tamanho, Extra (auto_increment), Primária.</p>
            <SyntaxHighlighter language="sql" style={vscDarkPlus}>
                {sqlCode}
            </SyntaxHighlighter>

            <h3>Criando Códigos</h3>
            <p>HTML/PHP para inserir e exibir informações do banco de dados.</p>

            <h2>2. Funções em PHP</h2>
            <h3>Definindo Funções</h3>
            <SyntaxHighlighter language="php" style={vscDarkPlus}>
                {phpFunctionCode}
            </SyntaxHighlighter>

            <h3>Passagem de Parâmetros</h3>
            <p><strong>Por Valor:</strong></p>
            <SyntaxHighlighter language="php" style={vscDarkPlus}>
                {phpParamByValueCode}
            </SyntaxHighlighter>

            <p><strong>Por Referência:</strong></p>
            <SyntaxHighlighter language="php" style={vscDarkPlus}>
                {phpParamByReferenceCode}
            </SyntaxHighlighter>

            <h3>Valores Padrão</h3>
            <SyntaxHighlighter language="php" style={vscDarkPlus}>
                {phpDefaultParamCode}
            </SyntaxHighlighter>

            <h3>Escopo e Contexto</h3>
            <p><strong>Variáveis Globais e Locais:</strong></p>
            <SyntaxHighlighter language="php" style={vscDarkPlus}>
                {phpGlobalLocalCode}
            </SyntaxHighlighter>

            <h2>3. Estruturas de Controle e Repetição em PHP</h2>
            <h3>Estruturas de Decisão</h3>
            <p><strong>if, else, elseif:</strong></p>
            <SyntaxHighlighter language="php" style={vscDarkPlus}>
                {phpIfElseCode}
            </SyntaxHighlighter>

            <p><strong>Decisão Ternária:</strong></p>
            <SyntaxHighlighter language="php" style={vscDarkPlus}>
                {phpTernaryCode}
            </SyntaxHighlighter>

            <h3>Estruturas de Repetição</h3>
            <p><strong>for:</strong></p>
            <SyntaxHighlighter language="php" style={vscDarkPlus}>
                {phpForLoopCode}
            </SyntaxHighlighter>

            <p><strong>while:</strong></p>
            <SyntaxHighlighter language="php" style={vscDarkPlus}>
                {phpWhileLoopCode}
            </SyntaxHighlighter>

            <p><strong>do-while:</strong></p>
            <SyntaxHighlighter language="php" style={vscDarkPlus}>
                {phpDoWhileLoopCode}
            </SyntaxHighlighter>

            <h2>4. Conexão com Banco de Dados MySQL</h2>
            <h3>Conectando ao Banco de Dados</h3>
            <SyntaxHighlighter language="php" style={vscDarkPlus}>
                {phpDbConnectCode}
            </SyntaxHighlighter>

            <h3>Executando Consultas</h3>
            <p><strong>Consultando Dados:</strong></p>
            <SyntaxHighlighter language="php" style={vscDarkPlus}>
                {phpDbSelectCode}
            </SyntaxHighlighter>

            <h3>Inserindo Dados</h3>
            <SyntaxHighlighter language="php" style={vscDarkPlus}>
                {phpDbInsertCode}
            </SyntaxHighlighter>

            <h2>5. PDO (PHP Data Objects)</h2>
            <h3>Introdução ao PDO</h3>
            <SyntaxHighlighter language="php" style={vscDarkPlus}>
                {pdoConnectCode}
            </SyntaxHighlighter>

            <h3>Executando Consultas</h3>
            <p><strong>Sem Parâmetros:</strong></p>
            <SyntaxHighlighter language="php" style={vscDarkPlus}>
                {pdoSelectCode}
            </SyntaxHighlighter>

            <p><strong>Com Parâmetros:</strong></p>
            <SyntaxHighlighter language="php" style={vscDarkPlus}>
                {pdoSelectWithParamsCode}
            </SyntaxHighlighter>

            <h3>Inserindo, Atualizando e Deletando Dados</h3>
            <p><strong>Inserindo:</strong></p>
            <SyntaxHighlighter language="php" style={vscDarkPlus}>
                {pdoInsertCode}
            </SyntaxHighlighter>

            <p><strong>Atualizando:</strong></p>
            <SyntaxHighlighter language="php" style={vscDarkPlus}>
                {pdoUpdateCode}
            </SyntaxHighlighter>

            <p><strong>Deletando:</strong></p>
            <SyntaxHighlighter language="php" style={vscDarkPlus}>
                {pdoDeleteCode}
            </SyntaxHighlighter>

            <h2>6. Projeto Completo: Sistema de Cadastro de Veículos</h2>
            <h3>Criando o Banco de Dados e Tabelas</h3>
            <SyntaxHighlighter language="sql" style={vscDarkPlus}>
                {sqlCreateDbCode}
            </SyntaxHighlighter>

            <h3>Página de Cadastro</h3>
            <SyntaxHighlighter language="php" style={vscDarkPlus}>
                {phpInsertVeiculoCode}
            </SyntaxHighlighter>

            <h3>Página de Consulta</h3>
            <SyntaxHighlighter language="php" style={vscDarkPlus}>
                {phpSelectVeiculoCode}
            </SyntaxHighlighter>

            <h3>Página de Alteração e Exclusão</h3>
            <SyntaxHighlighter language="php" style={vscDarkPlus}>
                {phpUpdateVeiculoCode}
            </SyntaxHighlighter>
        </div>
    );
};

export default PhpResumo;
