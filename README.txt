
Instalar o npm utilizando o    { nvm install v12 }

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= BACK-END =-=-=-=-=-=-=-=-=-=-=-=-=
-----------------------------------------------------------------
    Primeiro foi criado os arquivos iniciais do projeto, utilizando o comando {  npm  init -y  },
ele va gerar os arquivos iniciais do projeto.

    Nós utilizamos o node.js para fazer o back-end. A primeira coisa que foi utilizada foi o
{  EXPRESS  }, que é um pacote que pode ser instalado usando o npm que serve para criar as routes 
Ex: {  http://site.com/route1 }. -> / npm install express
    
    Depois utiliamos instalamos o nodemon com npm, que nos permitiu editar o arquivo sem precisar ficar 
rodando o script a cada edição, ele ja fazia isso por si só. / npm install nodemon -g ou -D
    
    Então instalamos o knex e o sqlite3 com o npm, para criação do banco de dados. O knex ele fornece diversas
funções para criar e controlar o banco via codigo.
    /npm install knex - instala o knex
    /npm install sqlite3 - instala o sqlite
    /npx knex init  -  cria um arquivo knexfile que tem as confi de acesso ao banco de dados
    /npx knex migrate:make <nome_migration>  -  vai criar um arquivo de migration para criar a tabela <nome>
    /npx knex migrate:latest - vai executar as migrate criadas e criar o banco de dados slite3 a partir delas

    Depois instalamos o cor, que será usado mais em breve.

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= FRONT-END=-=-=-=-=-=-=-=-=-=-=-=-=
-----------------------------------------------------------------

    Primeiro foi criada a pasta onde vai ser criada o projeto do react então dentro da pasta 
    foi executado o seguinte comando: npx create-react-app <nome> .

    Obs: para executar e so / npm start

        Um componente no react nada mais é que uma função que retorna html.
    Quando um html está estcrito dentro do javascript, isso é chamado de JSX (javascript e XML)

        Agora baixamos um pacote de icones do react usando o comando /npm install react-icons, e depois importamos no cod
    e pasamos o nome do grupo de icones que queremos usar.

        Com a tela de logon feita, partimos para criar outra tela
    e para isso foi preciso um sistema de rotas, e para utilizarmos rotas no react 
    usamo usamos o react routes que baixamos assim -> /npm install react-router-dom

        Depois de criar as paginas é hora de fazer a conexão do front-end com o back-end. Vamos fazer isso usando o axio
    que é um pacote que faz a conexão com dados externos(cliente http).. Aqui vamos usar ele para fazer para conectar com nosso back-end
    e fazer o post/get/delete, e enviar e receber os dados atraves desses 2 lados.
    primeiro então instale>
    /npm install axios
    Depois criamos pasta chamada services, e um arquivo dentro chamado api.js.
    

        Depois precisavamos voltar para a pagina de login apos fazer o cadastro. mas não podemos usar o "Link" 
    que estavamos utilizando pois aquela e uma tag na HTML, precisamos de algo que seja dento do javascript
    Então chamamos o userHistory, que nos permite realizar o load de outra pagina dentro de uma função javascript.

        Agora utiliamos o "localStorage" que salva dados no localStorage do navegador, sendo assim , é
    possivel fazer um sstema de loguin, pois, quando um a pessoa loga, seu user fica salvo no localStorage
    e então todos os seus dados vão ser carregados a partir disso. 

        Vams utilizar uma função que nos permite realizar algumas funções em determinados momentos, por exemplo,
    ao abrir o codigo quero que carregue alguns dados, entao utilizaremos o useEffect.

    =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= MOBILE -=-=-=-=-=-======-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-

        Agora é hora de fazer o mobile, então utilizaremos o expo, que é uma plataforma para para criação de aplicativos
        universais, que funcionam em diferentes sistemas operacionais.

        primeira coisa que fizemos apos criar as pastas, foi arrumar um modo de controlaro sistema de rotas do app
        para isso utilizaremos o reac-vavigation aque encontramos nesse link https://reactnavigation.org/docs/getting-started
        
