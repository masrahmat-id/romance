document.addEventListener('DOMContentLoaded', () => {
    const envelopeContainer = document.getElementById('envelopeContainer');
    const envelope = document.getElementById('envelope');
    const backgroundMusic = document.getElementById('background-music'); // Jika Anda ingin musik mulai di sini

    envelopeContainer.addEventListener('click', () => {
        envelope.classList.add('open'); // Tambahkan kelas 'open' untuk memicu animasi CSS

        // Tunggu sebentar agar animasi amplop terlihat sebelum redirect
        setTimeout(() => {
            window.location.href = './main.html'; // Arahkan ke halaman utama situs romantis Anda
        }, 1200); // Sesuaikan waktu (dalam milidetik) agar sesuai dengan durasi animasi CSS
    });
});
