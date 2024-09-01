<h1>
    <img align="center" alt="GIT" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-plain.svg">
    <span>COMANDOS GIT</span>
</h1>
Aqui está os comandos mais utilizados do git para consultas rapidas, para procurar o comando ou função que deseja, utilize a barra de pesquisa (crtl+F) do navegador, para achar o que procura.
<br>
<br>

## Sumário
- <a href="#-Essênciais">Comandos essênciais</a>
- <a href="#-Branch">Comandos para Branch</a>
- <a href="#-Contribuição">Comandos para Contribuição open-source</a>
- <a href="#-Análises">Comandos para Análises e inspeção</a>
- <a href="#-Administração">Comandos para Administração do reposítorio</a>
- <a href="#-Compartilhamento">Comandos para Compartilhamento e atualização</a>
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
    Obs.: o ponto refere-se ao diretorio atual
    ```bash
    $ git clone 'link do repo' .
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
    Obs.: o ponto indica para adicionar todos de uma vez
    ```bash
    $ git add "nome do arquivo"
    ```
    ```bash
    $ git add .
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
    Obs.: para sair do log, pressione crtl +Q ou +C
    ```bash
    $ git log 
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
    Obs.: A master ou main geralmente é o branch principal
    ```bash
    $ git reset --hard origin/master
    ```

<br>

## 2. Comandos para Branch

- #### Visualizar todos os branch:
    ```bash
    $ git branch
    ```
<br>

- #### Criar um branch:
    ```bash
    $ git branch 'nome do branch'
    ```
<br>

- #### Deletar uma branch:
    ```bash
    $ git branch -d 'nome do branch'  (ou com a flag --delete)
    ```
    ```bash
    $ git branch --delete 'nome do branch'
    ```    
<br>

- #### Mudar de branch:
    ```bash
    $ git checkout "nome da branch"
    ```
    ```bash
    $ git checkout -b "nome do novo branch"
    ```
    Obs.: Usar a flag -b, criar um novo branch no processo da mudança
<br>

- #### Unir dois branches:
    ```bash
    $ git merge 'nome do branch que quer unir'
    ```
<br>

- #### Enviar um branch para o repo remoto:
    ```bash
    $ git push --set-upstream origin 'nome do branch'
    ```
<br>

- #### Para criar uma tag que seria um checkpoint de um branch:
    ```bash
    $ git tag -a v1.0 -m "Versão_X"
    ```
<br>

- #### Para criar uma tag que seria um checkpoint de um branch:
    ```bash
    $ git tag -a v1.0 -m "Versão_X"
    ```
<br>


<br>

<div align="center">Feito por 🚀<a href="https://github.com/kevynfirst">kevynfirst </a></div>
