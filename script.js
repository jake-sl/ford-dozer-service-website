// ── Scroll-triggered fade-in ──────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── Form handler ─────────────────────────────────────
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-submit');
  const orig = btn.textContent;
  btn.textContent = 'Message Sent ✓';
  btn.style.background = '#2a9d5c';
  btn.style.borderColor = '#2a9d5c';
  btn.style.color = '#fff';
  setTimeout(() => {
    btn.textContent = orig;
    btn.style.background = '';
    btn.style.borderColor = '';
    btn.style.color = '';
    e.target.reset();
  }, 3500);
}

// ── Hamburger menu ────────────────────────────────────
function toggleMobileNav() {
  const nav = document.getElementById('mobileNav');
  const btn = document.getElementById('hamburgerBtn');
  nav.classList.toggle('open');
  btn.classList.toggle('open');
}

function closeMobileNav() {
  document.getElementById('mobileNav').classList.remove('open');
  document.getElementById('hamburgerBtn').classList.remove('open');
}
