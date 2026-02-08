// Mengambil elemen ikon menu dan daftar navigasi
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

// Menambahkan fungsi klik pada ikon menu
menuIcon.onclick = () => {
    // Menambah atau menghapus class 'active' pada nav-links
    navLinks.classList.toggle('active');
};

// Opsional: Menutup menu secara otomatis saat salah satu link diklik
const allNavLinks = document.querySelectorAll('.nav-links li a');

allNavLinks.forEach(link => {
    link.onclick = () => {
        navLinks.classList.remove('active');
    };
});