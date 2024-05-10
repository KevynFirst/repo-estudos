<h1>
    <img align="center" alt="GIT" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-plain.svg">
    <span>Comandos de GIT</span>
</h1>
Aqui está os comandos mais utilizados do git para consultas rapidas, para procurar o comando ou função que deseja, utilize a barra de pesquisa (crtl+F) do navegador, para achar o que procura.
<br>
<br>

## Sumário
1. <a href="#-1">Comandos essênciais</a>
2. <a href="#-Branch">Comandos para Branch</a>
3. <a href="#-Contribuição">Comandos para Contribuição open-source</a>
4. <a href="#-Análises">Comandos para Análises e inspeção</a>
5. <a href="#-Administração">Comandos para Administração do reposítorio</a>
6. <a href="#-Compartilhamento">Comandos para Compartilhamento e atualização</a>
<br>
<br>

## 1. Comandos essênciais

- #### Criando um Repositório Local

    Inicialize um repositório Git no diretório escolhido
    ```bash
     $ git init
     ```
    Conecte o repositório local com o repositório remoto
    ```bash
    $ git remote add origin https://github.com/username/nome-do-repositorio.git
    ```
<br>

- #### Clonar um repo remoto:

    ```bash
    $ git clone 'link do repo' . (o ponto refere-se ao diretorio atual)
    ```
<br>


- #### Configurando seu nome de usuário e e-mail (globalmente):
    ```bash
    $ git config --global user.name "Nome Sobrenome"
    $ git config --global user.email seuemail@email.com
    ```
<br>

- #### Configurando o nome da Branch Padrão:
    ```bash
    $ git config --global init.defaultBranch main
    ```
<br>

- #### Adicionando arquivos para monitoramento:

    ```bash
    $ git add "nome do arquivo"
    ```
    ```bash
    $ git add . (adiciona todos de uma vez)
    ```
<br>

- #### Salvando arquivos modificados com uma mensagem:

    ```bash
    $ git commit -m "mensagem do commit"
    ```
<br>

- #### Salvando arquivos alterados com uma mensagem:

    ```bash
    $ git commit -m "mensagem do commit"
    ```
    ```bash
    $ git commit -a -m "mensagem do commit"
    ```
<br>

- #### Enviar alterações para o repositório remoto:

    ```bash
    $ git push
    ```
<br>

- #### Para atualizar ou sincronizar seu repo atual com o remoto:

    ```bash
    $ git pull
    ```
<br>

- #### Remover arquivos do git local:

    ```bash
    $ git rm 'nome do arquivo'
    ```
<br>

- #### mostrar o historico de commits:

    ```bash
    $ git log (para sair do log pressione crtl +Q ou +C)
    ```
    ```bash
    $ git shortlog
    ```
<br>

- #### Mover um arquivo para outra pasta:

    ```bash
    $ git mv 'nome do arquivo' 'caminho novo'
    ```
<br>

- #### Mover um arquivo para outra pasta:

    ```bash
    $ git mv 'nome do arquivo' 'caminho novo'
    ```
<br>

- #### desfazer alterações feitas:

    ```bash
    $ git checkout 'nome do arquivo'
    ```
<br>

- #### Colocar o projeto no estado inicial:

    ```bash
    $ git reset --hard origin/master (a master ou main geralmente é o branch principal)
    ```
<br>







##

### Comandos para Branch
##

### Comandos para Contribuição open-source
##

### Comandos para Análises e inspeção
##

### Comandos para Administração do reposítorio
##

### Comandos para Compartilhamento e atualização
##

<div align="center">Feito por 🚀<a href="https://github.com/kevynfirst">kevynfirst </a></div>
