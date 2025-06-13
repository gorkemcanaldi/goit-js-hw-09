const form = document.getElementById('contact-form');

form.addEventListener('submit', event => {
  event.preventDefault(); // Sayfanın yenilenmesini engelle

  const formData = new FormData(form);
  const data = {};

  formData.forEach((value, key) => {
    data[key] = value.trim();
  });

  // Basit doğrulama (zorunlu alanlar kontrolü)
  if (!data.name || !data.email || !data.message) {
    alert('Lütfen tüm alanları doldurun.');
    return;
  }

  // Email formatı basit kontrol
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(data.email)) {
    alert('Geçerli bir e-posta girin.');
    return;
  }

  // Form verisini konsola yazdır (burada API çağrısı yapılabilir)
  console.log('Form verisi:', data);

  alert('Mesajınız gönderildi!');

  form.reset(); // Formu temizle
});
