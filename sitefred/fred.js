window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.scrollY > 0) {
      nav.classList.add('fixed-menu');
    } else {
      nav.classList.remove('fixed-menu');
    }
  });

  // Função para verificar se o usuário está logado
function isLoggedIn() {
  return localStorage.getItem("loggedIn") === "true";
}

// Função para verificar as credenciais do usuário
function checkCredentials(username, password) {
  // Verificar se as credenciais correspondem a um usuário válido
  // Aqui você pode adicionar sua lógica de verificação de login
  return username === "admin" && password === "senha";
}