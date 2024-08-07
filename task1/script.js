window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#007BFF';
      navbar.querySelectorAll('a').forEach(a => a.style.color = '#fff');
  } else {
      navbar.style.backgroundColor = 'transparent';
      navbar.querySelectorAll('a').forEach(a => a.style.color = '#333');
  }
});
