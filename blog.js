// إخفاء الـ Loader بعد تحميل الصفحة
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.classList.add('hidden');
});
