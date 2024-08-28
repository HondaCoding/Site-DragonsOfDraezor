<h1>Site Dragons Of Draezor</h1>

<div align="center">
  <img src="css/imgs/dd_logo_semfundo.png" width="200">
</div>

   Projeto de desenvolvimeto de um site para divulgação da guilda **Dragons Of Draezor** do jogo online ***Guild Wars 2*** promovido pela empresa ***ArenaNet***.
  O site se trata de uma landing page que tem o objetivo de divulgar a guilda, caso o usuário se interesse o mesmo é encaminhado ao Discord da guilda onde estão concentradas todas as informações. Além disso, há também links que encaminham o usuário para o youtube e instagram da guilda.
<br><br>
Para conferir o site <a href="https://hondacoding.github.io/Site-DragonsOfDraezor/">clique aqui!</a>
<br>
## 🤯 Principais preocupações durante o desenvolvimento:
- **Estrutura do site**: estruturar o site de forma a eliminar redundâncias, utilizando variáveis e classes reutizáveis.
- **Organização do CSS**: organizar o css de forma lógica, simples e fácil manutenção.
- **UX/UI** : a experiência do usário, levando em conta o design, cores chamativas, fácil navegação, informações curtas e diretas de forma que instigue o usuário a *saber mais*.
- **Fundamentos da Programação Web**: o site foi desenvolvido sem o uso de bibliotecas/frameworks que otimizam o design, com o objetivo de consolidar conceitos básicos de html, css, javascript e flexbox.
- **Responsividade**: tornar o site bem acessível para mobile, de forma que a navegação e leitura fique adequada.

## 🧱 Estrutura de construção do site:
A estrutura do site foi pensada de forma a possuir **2 Containers principais**, ou seja, **2 Classes principais** que seriam reutizadas ao longo do site, como por exemplo o afastamento dos elementos na tela com relação a margem limite da direita e esquerda (padding), etc. Esses 2 containers principais são divididos em:
- **1º Container principal**: está relacionado a seção que possui vídeo como fundo, ou seja, a primeira seção quando o site é aberto;
- **2º Container principal**: está relacionado as demais seções da página como **Quem é a DD**, **World VS World**, **Junte-se a nós** e **STAFF**, que também podem ser observadas no nav.

<img src="assets/EstruturaDoSite.png" width="100%">

De forma resumida, o **1º Container principal** será utilizado só uma vez, pois há somente uma seção com vídeo de fundo e barra de navegação, as demais seções possuem imagens de fundo e botões. Sendo assim, as classes do **2º Container principal** serão reutilizadas nas demais seções de forma a manter um padrão de posicionamento, tamanho, cor, etc e não ser necessário declarar os mesmo estilos toda hora para cada elemento.  

Podemos usar como exemplo a classe "container-content", essa classe é responsável por afastar todos os elementos das bordas do site (através do padding), portanto, todas as demais seções que utilzarem esta classe irão ter seus elementos afastados da borda, seguindo um padrão.  

<img src="assets/1container.gif" width="30%">

Além disso, todas as **div** que se tratam de 'content' (conteúdo) utilizam width de 100% pensando em um melhor manejo na hora de aplicar a responsividade. Dessa forma, a estilização quanto a posição do texto, tamanho e cor ficam por responsabilidade das classes **.format-** ("format-title", "format-text", etc). 

## 📑 Organização do CSS:
O CSS foi dividido em categorias da seguinte maneira:
- Reset de margin,padding e border do elemento pai principal **BODY** e o  upload de fontes de texto;
- **VARIÁVEIS DE COR:** variáveis de cores de forma a padronizar as cores utilizadas nos textos, titulos e botões;
- **FLEX:** diz respeito ao display flex-box, de forma que não seja preciso declarar "display: flex" e as demais funcionalidades do flex em todo elementos, basta usar estas classes;
- **FORMATAÇÔES DE TEXTO:** são classes que tem o objetivo de formatar os textos e títulos, quanto a cor, tamanho e posição;
- **CONTAINER BACKGROUNDS:** responsáveis por determinar a imagem de fundo da seção, além de tamanho (heigh) e outras caracteristicas quanto ao background;
- **CONTENT:** como o nome ja diz, tem o objetivo de posicionar os conteúdos que estarão na seção (titulo, texto e botoes) , neste caso será basicamente o padding em relação aos outros elementos;
- **NAV-BAR:** todas as características do <nav> se encontram aqui, como cor, tamanho e todos os elementos que estão dentro da barra de navegação superior;
- **BOTOES:** configura as características dos botoes, como tamanho e cor;
- **FOOTER:** responsável por determinar o tamanho das partes upper/lower do footer, lower é responsável por fazer a linha horizontal que divide as  duas partes;
- **BACK TO TOP:** botão que se encontra no canto direito inferior do site a medida que o mesmo é rolado para baixo;
- **MODAL:** diz respeito ao modal que se abre quando clicado no botão "Conheça a nossa trajetória completa" e "Trajetória da DD", configurações de posição, cor e tudo relacionado ao modal;
- **MEDIA QUERIES:** relacionado a responsividade.

*Obs:* *As categorias são dividas por comentarios utilizando* "==============================================" 

## 💻 Tecnologias utilizadas no desenvolvimento:
- <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" height="30" alt="figma logo"  />
- <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" height="30" alt="html5 logo"/>
- <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" height="30" alt="css3 logo"  />
- <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" height="30" alt="javascript logo"  />


