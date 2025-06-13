const form = document.getElementById('contact-form');
const STORAGE_KEY = 'feedback-form-state';
let formData = {};

// Başlatma: localStorage'dan veri çek ve forma yaz
document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    // Formu doldur
    if (formData.name) form.elements.name.value = formData.name;
    if (formData.email) form.elements.email.value = formData.email;
    if (formData.message) form.elements.message.value = formData.message;
  }
});

// input ve textarea değiştikçe localStorage'a kaydet
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Submit olunca
form.addEventListener('submit', event => {
  event.preventDefault();

  const { name, email, message } = form.elements;

  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    alert('Lütfen tüm alanları doldurun.');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    alert('Geçerli bir e-posta girin.');
    return;
  }

  // Konsola yaz ve başarı mesajı göster
  console.log('Form verisi:', {
    name: name.value.trim(),
    email: email.value.trim(),
    message: message.value.trim(),
  });

  alert('Mesajınız gönderildi!');

  // Formu ve localStorage'u temizle
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
});
