// Dapatkan elemen tombol dan footer
let scrollToTopBtn = document.getElementById("scrollToTopBtn");
let footer = document.getElementById("footer");

// Tambahkan event listener untuk menampilkan tombol saat pengguna scroll ke bawah
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }

    // Dapatkan posisi footer
    let footerTop = footer.getBoundingClientRect().top + window.scrollY;
    let windowHeight = window.innerHeight;
    let buttonHeight = scrollToTopBtn.offsetHeight;

    // Periksa apakah tombol akan bertabrakan dengan footer
    if (window.scrollY + windowHeight >= footerTop) {
        scrollToTopBtn.style.bottom = (windowHeight - (footerTop - window.scrollY) + 20) + "px";
    } else {
        scrollToTopBtn.style.bottom = "20px";
    }
}

// Fungsi untuk scroll ke atas dengan transisi halus
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Menambahkan perilaku transisi halus
    });
}
