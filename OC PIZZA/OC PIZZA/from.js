const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = form.elements['username'].value;
  const password = form.elements['password'].value;

  if (username === '' || password === '') {
    errorMessage.textContent = 'Nom d\'utilisateur et mot de passe sont requis.';
  } else if (username !== 'mon_nom_utilisateur' || password !== 'mon_mot_de_passe') {
    errorMessage.textContent = 'Nom d\'utilisateur ou mot de passe incorrect.';
  } else {
    errorMessage.textContent = '';
    form.submit();
  }
});

const instagramButton = document.querySelector('.instagram');
const twitterButton = document.querySelector('.twitter');
const facebookButton = document.querySelector('.facebook');
const whatsappButton = document.querySelector('.whatsapp');
const deliverooButton = document.querySelector('.deliveroo');

instagramButton.addEventListener('click', () => {
  window.location.href = 'https://www.instagram.com/';
});

twitterButton.addEventListener('click', () => {
  window.location.href = 'https://twitter.com/';
});

facebookButton.addEventListener('click', () => {
  window.location.href = 'https://www.facebook.com/';
});

whatsappButton.addEventListener('click', () => {
  window.location.href = 'https://web.whatsapp.com/';
});

deliverooButton.addEventListener
