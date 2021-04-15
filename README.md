<div align="center">
  <img height="200px" src="mobile/assets/Logo.png" alt="logotipo"/>
</div>

<p align="center">
    <img alt="Made by Sarct" src="https://img.shields.io/badge/made%20by-Sarct-7159c1">
</p>
<p align="center">
  <a href="#rodando-o-projeto-localmente">Rodando o projeto localmente</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias-utilizadas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#autores">Autores</a>
</p>

<div align="center">
  <img height=500 src="mobile/assets/splashscreen.png" alt="sign"/>
</div>

<div align="center">
<div>
<img height=500 src="mobile/assets/1618500046353.jpg" alt="list"/>
<img height=500 src="mobile/assets/1618500046337.jpg" alt="confirm"/>
</div>

O "Conta Comigo" é um projeto idealizado e desenvolvido pela equipe Sarct durante a maratona de inovação Hackathon IL-PCTec.

O Hackathon IL-PCTec foi um evento voltado para o desenvolvimento de soluções para o enfrentamento das barreiras de comunicação linguística para imigrantes, indígenas e surdos no acesso às demandas cotidianas e às políticas públicas no contexto da pandemia, através da construção de um APP no qual essas pessoas possam ter acesso a uma mediação linguística para se comunicar com agentes públicos.

No Brasil, temos que muitos povos indígenas, que assim como imigrantes, não sabem português. Essa situação acaba levando a uma dificuldades contidianas, principalmente relacionadas à comunicação com agentes públicos, o que por consequencia, dificulta o acesso por exemplo à educação, saúde, segurança, defensoria pública.

Devido a pandemia da Covid-19, o acesso aos serviços públicos se tornou ainda mais necessário, e houve ai, um crescimento na necessidade de comunicação. Assim como os povos indígenas e imigrantes, os surdos também acabam por sofrer, encontrarem também uma dificuldade de se comunicar. Temos como algumas dificuldades, o acesso ao auxílio emergencial, e até a tentativar de descrever sintomas em um hospital.

Atrelado a essa dificuldade se comunicar, também temos a dificuldade do acesso a informação. Em português, temos a disposição diversas cartilhas e informes com o objetivo de orientar as pessoas acerca da COVID-19. Com esse material apenas em português, é muito difícil para povos indígenas e imigrantes se manterem informados.

Algumas organização não governamentais buscam levar aos povos indígenas essas cartilhas e informativos em suas respectivas línguas. Durante o período da maratona, tivemos acesso a alguns desses materiais.

Como peça central da promoção desse material em línguas indígenas, temos os tradutores. Sem a presença dos tradutores, não seria possível esse material existir. Temos ainda, as formas de divulgação que não estão centralizadas.

Em busca de solucionar esses diversos problemas, surgiu o Conta Comigo. O nosso objetivo é garantir que os povos indígenas, imigrantes e surdos possuam acesso a informação e comunicação, ajudando a diminuir os casos de contaminação da Covid-19 através da disseminação de informação com qualidade e segurança, e auxiliar na comunicação desses grupos com agentes públicos, tornando o trabalho desses agentes mais rápido e eficaz.

Utilizando das tecnologias digitais, desenvolvemos o Conta Comigo, um aplicativo voltado para a informação em diversas línguas, capaz de ser utilizado através de guia ilustrativo.

Com o objetivo de manter todos informados, o Conta Comigo apresenta em sua página inicial, notícias, guias e cartilhas. Essas publicações podem ser acessadas na língua desejada alterando através de um seletor acima.

Surgiu porém, a necessidade de uma fonte confiável para traduzir esse material para um língua indígena. Como citado, os tradutores são a peça central da existência de materiais traduzidos. Partindo disso, inserimos a funcionalidade "traduzir", que permite a qualquer pessoa que saiba uma língua além do português, traduzir aquela publicação. O nosso objetivo com isso é propagar o voluntariado, mantendo assim, diversas notícias sempre em diversas línguas.

Com o objetivo de auxiliar na comunicação entre indivíduos que não sabem português e agente públicas, criamos mais uma funcionalidade, o guia ilustrativo. No guia ilustrativos, com o objetivo de usufruir da comunicação visual, inserimos desenhos. Através dos desenhos é possível que um indivíduo que não saiba português, indique através das figuras suas necessidades para uma gente público. Utilizando do poder da imagem na comunicação, além de indicar suas necessidades, é possível acessar guias pre definidas com temas que são recorrentes, auxiliando assim tanto o indivíduo que busca se informar, quanto o agente público do que fazer.

## Rodando o projeto localmente

### Pré requisitos

Para executar o software localmente, são necessárias as seguintes ferramentas:

<li>
<a href="https://expo.io/tools#cli">expo</a>
</li>
<li>
  <a href="https://yarnpkg.com/getting-started/install#global-install">yarn</a>
</li>

### Instalação

### 1 - Baixe o repositório

```bash
git clone https://github.com/Hackathon-IL/Sarct.git
```

### 2 - Entre na pasta do projeto

```
cd Sarct
```

### 3 - Instale as dependências

```
cd server
yarn
```

```
cd mobile
yarn
```

```
cd web
yarn
```

### 4 -Configurar o ambiente do backend

Configuração das variáveis de ambiente do banco de dados postgress:

```
DB_HOST=localhost
DB_USER={ USUÁRIO DO BANCO DE DADOS}
DB_PASS={ SENHA DO BANCO DE DADOS}
DB_NAME={ NOME DO BANCO DE DADOS}
```

### 5 -Configurar o ambiente do mobile

Configuração do arquivo mobile/.env
O API_URL é igual ao do expo porém sem a porta
Ex.: 192.168.0.XX

```
API_URL= ''
```

### 6 - Execute o backend

```
cd server
yarn run dev
```

### 7 - Execute o mobile

```
cd mobile
yarn start
```

### 8 - Execute o site

```
cd web
yarn start
```

## Tecnologias utilizadas

- [Express](https://expressjs.com/) - Framework utilizado no backend
- [Sequelize](https://sequelize.org/) - ORM para consular o banco de dados postgres
- [React Native](https://reactnative.dev/) - Framework utilizado no frontent
- [Styled components](https://styled-components.com/) - Estilização de componentes no react native

## Autores

- [João Magalhães](https://github.com/joaovictornm)
- [Richard Viana](https://github.com/richardjlv)
- [Robson Melo](https://github.com/RobinhoRamon)
- [Lucas Rosa](https://github.com/lucasharosa)

## Oque foi desenvolvido

Nosso projeto é dividido em 3 partes: Site, aplicativo mobile e o back end.

O aplicativo, foi feito para os voluntários e para os terceirizados que consigam utilizá-lo tornando a atualização de informações mais dinâmica. Nele já desenvolvemos a leitura do QR code e duas formas de visualização dos dispensers disponíveis no campus, uma através de uma lista contendo o estado do dispenser (cheio ou vazio) e um ponto de referência e a outra será um mapa da UnB, com as mesmas informações da lista porém com o ponto exato onde o dispenser está.

O site foi projetado para os postos de distribuição de refil e para a central de controle. Apesar de não estar integrado com o backend ele já possui as páginas referentes ao login, lista com todos os dispensers disponíveis e também de criar um novo ponto para um novo dispenser.

## Pitch

**[Link para o pitch](https://youtu.be/7mzZ77IM-vg)**
