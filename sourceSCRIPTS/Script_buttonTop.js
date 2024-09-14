let button = document.getElementById("myBttn");

window.onscroll = function() {scrollFunction()};

// Isso faz a pessoa só ver o botão quando ela tiver 20 pixels abaixo
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// Quando o usuario clicar no botão, ele volta para o topo da pagina
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}