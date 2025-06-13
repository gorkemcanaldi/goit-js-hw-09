const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// 🌟 Global formData nesnesi
let formData = {
  email: '',
  message: '',
};

// 🌟 Başlangıçta localStorage'ı kontrol et ve formu doldur
loadFromStorage();

// 🌟 Form input olayını delegasyonla dinle
form.addEventListener('input', onInput);

// 🌟 Form submit olayını dinle
form.addEventListener('submit', onSubmit);

// Fonksiyon: Input değişince formData'yı güncelle ve kaydet
function onInput(evt) {
  const { name, value } = evt.target;
  formData[name] = value.trim();
  saveToStorage();
}

// Fonksiyon: localStorage'a yaz
function saveToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Fonksiyon: Sayfa açıldığında localStorage'dan oku
function loadFromStorage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    formData = JSON.parse(saved);
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  }
}

// Fonksiyon: Form gönderildiğinde
function onSubmit(evt) {
  evt.preventDefault();

  // Boş alan kontrolü
  if (formData.email === '' || formData.message === '') {
    alert('Lütfen tüm alanları doldurun!');
    return;
  }

  // Konsola yaz
  console.log(formData);

  // Temizle
  formData = { email: '', message: '' };
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}
