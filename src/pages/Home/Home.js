// CSS
import styles from "./Home.module.css";
import React from 'react';
// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useNavigate, Link } from "react-router-dom";

// react
import { useState } from "react";

// components
import PostDetail from "../../components/PostDetail";

const Home = () => {
  const { documents: posts, loading } = useFetchDocuments("posts");

  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  console.log(loading);

  return (
    <div className={styles.home}>
       <h1>Teste técnico Bitrix 24</h1>
    <div>
        <h1>Seção 1:</h1>
        <h2>Criando tarefas no Bitrix24</h2>
        
        <p>1.1 - Acessar o Bitrix24:</p>
        <p>Faça login na sua conta Bitrix24 através do <a href="https://www.bitrix24.com.br/"><strong>site.</strong></a></p>
        
        <p>1.2 - Navegar até a seção de Tarefas:</p>
        <p>No menu lateral esquerdo, clique em "Tarefas e Projetos".</p>
        
        <p>1.3 - Criar Nova Tarefa:</p>
        <p>Clique no botão “Criar” (ao lado do título “Minhas tarefas”).</p>
        
        <p>1.4 - Preencher os Detalhes da Tarefa:</p>
        <ul>
            <li><strong>Título:</strong> Digite o título da tarefa.</li>
            <li><strong>Descrição:</strong> Adicione uma descrição detalhada da tarefa, explicando o que precisa ser feito.</li>
            <li><strong>Prazos:</strong> Defina a data e hora de início e término da tarefa.</li>
        </ul>
        
        <p>1.5 - Atribuir a um Membro da Equipe:</p>
        <p><strong>Responsável:</strong> No campo de responsável, selecione o membro da equipe a quem a tarefa será atribuída. Você pode buscar pelo nome ou selecionar a partir da lista de usuários.</p>
    </div>

    <div>
        <h1>Integrando Calendário Externo (Usando o Protocolo CalDAV)</h1>
        
        <h2>1.1 - Acesse a Seção de Calendário:</h2>
        <p>No Bitrix24, vá até a seção "Calendário".</p>
        
        <h2>1.2 - Sincronize o Calendário:</h2>
        <p>Clique na opção "Conectar calendário".</p>
        
        <h2>1.3 - Escolher Calendário Externo:</h2>
        <p>Clique na opção "Conectar outros calendários" e depois em “calendário externo”.</p>
        
        <h2>1.4 - Inserir Detalhes do Calendário:</h2>
        <p>Insira os detalhes necessários:</p>
        <ul>
            <li>Nome do calendário para exibição na lista de seus calendários.</li>
            <li>Endereço do servidor do calendário.</li>
            <li>Login e senha para acessar o calendário externo.</li>
        </ul>
        
        <h2>1.5 - Conectar:</h2>
        <p>Após inserir todas as informações, clique em "Conectar".</p>
        <p>Se tudo estiver correto, o calendário externo aparecerá na sua lista de calendários no Bitrix24.</p>
    </div>
    <div>
    <h1>Seção 2:</h1>
    <h2>Configurando um Novo Usuário e Configurando Permissões de Acesso</h2>
    
    <h3>Usuário:</h3>
    <p>testeconta202333@gmail.com</p>
    
    <h3>Senha:</h3>
    <p>Teste@123</p>
    
    <h3>Navegue até a seção de usuários:</h3>
    <p>No menu lateral, clique em “Empresa” e, em seguida, em “Usuários”.</p>
    
    <h3>Adicionar Novo Usuário:</h3>
    <p>Clique no botão “Adicionar” e selecione “Adicionar usuário”.</p>
    
    <h3>Preencher as Informações do Novo Usuário:</h3>
    <p>Preencha os campos necessários, como nome, sobrenome, e-mail, cargo, etc.</p>
    
    <h3>Salvar as Informações:</h3>
    <p>Clique em “Salvar” ou “Convidar” para criar a nova conta de usuário.</p>
    
    <h3>Atribuir o usuário a um departamento específico:</h3>
    <ul>
        <li><strong>Acessar Perfil do Usuário:</strong> Na lista de usuários, clique no nome do usuário recém-criado para acessar seu perfil.</li>
        <li><strong>Editar Informações do Usuário:</strong> No perfil do usuário, clique em “Editar”.</li>
        <li><strong>Atribuir a um Departamento:</strong> Na seção de “Departamento”, selecione o departamento específico ao qual o usuário deve ser atribuído.</li>
        <li><strong>Salvar Alterações:</strong> Clique em “Salvar” para confirmar as alterações.</li>
    </ul>
    
    <h3>Configurar permissões de acesso para o CRM:</h3>
    <ul>
        <li><strong>Acessar Configurações de Permissões:</strong> No menu lateral, clique em “CRM” - “Configurações”. Selecione “Permissões de Acesso”.</li>
        <li><strong>Criar uma Nova Função de Permissão:</strong> No campo “Funções”, clique em “Adicionar Função”. Dê um nome à nova função, por exemplo, “Visualizar e Editar Contatos”.</li>
        <li><strong>Definir Permissões para a Função:</strong> Na seção de permissões, ajuste as configurações para permitir apenas visualizar e editar a seção "Contatos" do CRM: CRM - Contatos: Defina as permissões como “Todos” nos campos “Ler” e “Editar”. Certifique-se de que outras seções, como “Leads”, “Negócios”, “Faturas”, etc., estejam definidas como “Negar permissão”.</li>
        <li><strong>Atribuir a Função ao Usuário:</strong> Vá para a seção “Permissões de Acesso”. Clique em “Adicionar” e selecione o usuário recém-criado. Atribua a função de permissão “Visualizar e Editar Contatos” a esse usuário.</li>
        <li><strong>Salvar Configurações:</strong> Clique em “Salvar” para aplicar as configurações de permissão ao usuário.</li>
    </ul>

    <h1>Seção 3:</h1>
    <h2>Usando a REST API do Bitrix24</h2>
    
    <h3>Documentação do Código para Adicionar Contato no Bitrix24 Usando Webhook</h3>
    <p>Este documento fornece uma explicação detalhada sobre o funcionamento do código Python que utiliza um webhook para adicionar um novo contato no Bitrix24.</p>
    
    <h3>Visão Geral</h3>
    <p>Este script Python usa a biblioteca requests para enviar uma solicitação HTTP POST a um webhook do Bitrix24, com o objetivo de adicionar um novo contato ao sistema CRM do Bitrix24. O script inclui dados do contato, como nome, sobrenome, telefone e e-mail, e verifica a resposta da solicitação para garantir que o contato foi adicionado com sucesso.</p>
    
    <h3>Bibliotecas Necessárias</h3>
    <p>O código requer a biblioteca requests, que pode ser instalada usando o seguinte comando:</p>
    <pre><code>pip install requests</code></pre>
    
    <h3>Explicação do Código</h3>
    <h4>Importação da Biblioteca ‘requests’</h4>
    <p>O script começa importando a biblioteca requests, que é usada para enviar solicitações HTTP em Python.</p>
    
    <h4>URL do Webhook</h4>
    <p><code>webhook_url = 'https://b24-l0aump.bitrix24.com.br/rest/1/rdf6d0u57nbelyl9/profile.json'</code></p>
    <p>A variável webhook_url armazena o URL do webhook fornecido pelo Bitrix24. Este URL é usado para enviar a solicitação HTTP POST para adicionar um novo contato.</p>
    
    
    <p>O dicionário contact_details contém os dados do novo contato a ser adicionado ao Bitrix24. Os campos incluem:</p>
    <ul>
        <li><strong>NAME:</strong> Primeiro nome do contato.</li>
        <li><strong>LAST_NAME:</strong> Sobrenome do contato.</li>
        <li><strong>OPENED:</strong> Indica se o contato é público ("Y") ou privado ("N").</li>
        <li><strong>ASSIGNED_BY_ID:</strong> ID do usuário responsável pelo contato.</li>
        <li><strong>TYPE_ID:</strong> Tipo de contato, como "CLIENT" (cliente).</li>
        <li><strong>SOURCE_ID:</strong> Fonte do contato, como "WEB" (web).</li>
        <li><strong>PHONE:</strong> Lista de números de telefone com seus respectivos tipos ("WORK", "MOBILE", etc.).</li>
        <li><strong>EMAIL:</strong> Lista de endereços de e-mail com seus respectivos tipos ("WORK", "HOME", etc.).</li>
    </ul>
    
    <h4>Envio da Solicitação POST</h4>
    <pre><code>response = requests.post(webhook_url, json=contact_details)</code></pre>
    <p>Este comando envia uma solicitação HTTP POST para o webhook_url, com os dados do contato (contact_details) no formato JSON. A resposta do Bitrix24 é armazenada na variável response.</p>
    
    <h4>Verificação da Resposta</h4>
    <pre><code>if response.status_code == 200:
    print("Contato adicionado com sucesso!")
    print(response.json())
else:
    print("Falha ao adicionar contato.")
    print(response.text)</code></pre>
    <p>O script verifica o código de status da resposta (response.status_code). Se o código de status for 200, significa que a solicitação foi bem-sucedida, e uma mensagem de sucesso é impressa junto com a resposta JSON. Se o código de status for diferente de 200, uma mensagem de erro é impressa junto com o texto da resposta.</p>
    
    <h4>Como Executar o Código</h4>
    <ol>
        <li>Certifique-se de ter Python instalado.</li>
        <li>Instale a biblioteca requests usando o comando:
            <pre><code>pip install requests</code></pre>
        </li>
        <li>Crie um arquivo Python (por exemplo, add_contact.py) e baixe o código no botão abaixo</li>
        <li>Execute o código abrindo um terminal, navegando até o diretório onde o arquivo está localizado e executando:
            <pre><code>python add_contact.py</code></pre>
        </li>
    </ol>
    
    <h3>Baixar o Código:</h3>
    <button onclick="window.location.href='https://www.dropbox.com/scl/fo/v89yvhoge22k38arur0ak/AATD37OTFNvaZfIeVesuo98?rlkey=eiz64vypdgn9ou86udkfd2umc&st=ovje3ubt&dl=0'">Baixar Código</button>
    
    <h1>Seção 4:</h1>
    <h2>Desenhando um Fluxo de Automação</h2>
    
    <h3>1.1 - Acesse a seção “CRM”</h3>
    <p>No menu lateral, clique em “CRM”.</p>
    
    <h3>1.2 - Clique em “Automação de vendas”</h3>
    <p>Dentro da seção CRM, selecione “Automação de vendas”.</p>
    
    <h3>1.3 - Clique em “Editar no Criador de Fluxo de Trabalho”</h3>
    <p>Na página de automação de vendas, clique em “Editar no Criador de Fluxo de Trabalho”.</p>
    <img src="https://www.dropbox.com/scl/fi/zzrgeq2zsxi5sw65y0auo/Capturar.PNG?rlkey=itr06nfb679wkon240vt153y0&st=eptce4ca&dl=0" alt="Editar no Criador de Fluxo de Trabalho"></img>
    
    </div>
    <button onclick="window.location.href='https://www.dropbox.com/scl/fi/zlb113r0igaa070i06qec/Documento-24-1.pdf?rlkey=uc2z7px5otiir2u1mawkui7fn&e=1&st=ozendol4&dl=0'">Baixar documentação do teste técnico</button>
      </div>
     
   
  );
};

export default Home;
