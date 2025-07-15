// Smooth scroll behavior
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Toggle project details
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});

// Contact form validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email.includes('@') || !message) {
    e.preventDefault();
    alert('Please fill out all fields with a valid email.');
  }
});
