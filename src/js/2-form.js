const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

// 1. Sayfa yüklendiğinde localStorage'dan varsa doldur
populateForm();

// 2. Input delegasyonu ile form alanları değiştiğinde localStorage'a kaydet
form.addEventListener('input', event => {
  // Sadece input ve textarea'ya bak
  if (event.target.name === 'email' || event.target.name === 'message') {
    saveToStorage();
  }
});

// 3. Form submit olunca kontrol et, konsola yaz, formu ve storage'u temizle
form.addEventListener('submit', event => {
  event.preventDefault();

  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (email === '' || message === '') {
    alert('Lütfen email ve mesaj alanlarını doldurun.');
    return;
  }

  // Konsola yaz
  console.log({ email, message });

  // Temizle
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});

// Yardımcı fonksiyonlar

function saveToStorage() {
  const data = {
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    try {
      const parsed = JSON.parse(savedData);
      form.email.value = parsed.email || '';
      form.message.value = parsed.message || '';
    } catch {
      // Bozuk veri varsa temizle
      localStorage.removeItem(STORAGE_KEY);
    }
  }
}
