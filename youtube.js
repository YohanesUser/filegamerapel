document.addEventListener("DOMContentLoaded", function() {
    simulateProcess();
});

function simulateProcess() {
    // Simulasi proses selama 2 hari (dalam hitungan detik untuk tujuan demonstrasi)
    let processDuration = 2 * 24 * 60 * 60; // 2 hari dalam detik

    // Animasi progress bar sesuai dengan durasi proses
    let progressBar = document.getElementById('progress-bar').querySelector('div');
    progressBar.style.animationDuration = processDuration + 's';

    // Atur waktu untuk menghilangkan layar loading dan menampilkan konten
    setTimeout(function() {
        hideLoadingScreen();
    }, processDuration * 1000); // Konversi ke milidetik
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.querySelector('.content');

    // Sembunyikan layar loading
    loadingScreen.style.display = 'none';
    // Tampilkan konten halaman
    content.style.display = 'block';
}
