
const sky = document.getElementById("sky");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const hint = document.getElementById("hint");

const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");

const musicButton = document.getElementById("musicButton");
const backgroundMusic = document.getElementById("backgroundMusic");

// 1. Membuat bintang di langit malam
for (let i = 0; i < 120; i++) {
    const star = document.createElement("span");

    star.classList.add("star");

    // Posisi bintang secara acak
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    // Ukuran bintang
    const size = Math.random() * 2 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    // Kecepatan kedipan setiap bintang
    star.style.animationDuration =
        (Math.random() * 3 + 1) + "s";

    // Waktu mulai kedipan berbeda-beda
    star.style.animationDelay =
        Math.random() * 3 + "s";

    sky.appendChild(star);
}

// 2. Membuka amplop dan surat
envelope.addEventListener("click", function () {

    // Mencegah surat dibuka berulang kali
    if (envelope.classList.contains("open")) {
        return;
    }

    envelope.classList.add("open");

    envelope.setAttribute("aria-expanded", "true");

    hint.textContent = "a little note, just for you ♡";

    // Tunggu animasi amplop sebelum menampilkan surat
    setTimeout(function () {
        letter.classList.add("show");

        letter.setAttribute("aria-hidden", "false");
        letter.inert = false;

        letter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 500);
});

// 3. Menampilkan pesan kejutan
surpriseButton.addEventListener("click", function () {

    surpriseMessage.classList.add("show");

    surpriseButton.textContent = "a little reminder for you ♡";
    surpriseButton.setAttribute("aria-expanded", "true");

    surpriseButton.disabled = true;

    surpriseMessage.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
});

// 4. Mengontrol musik
musicButton.addEventListener("click", async function () {

    if (backgroundMusic.paused) {

        try {
            await backgroundMusic.play();

            musicButton.textContent = "♫ music: on";
            musicButton.setAttribute("aria-pressed", "true");

        } catch (error) {
            musicButton.textContent = "♫ music.mp3 not found";

            console.log(
                "Tambahkan file musik bernama music.mp3 ke folder project."
            );
        }

    } else {

        backgroundMusic.pause();

        musicButton.textContent = "♫ music: off";
        musicButton.setAttribute("aria-pressed", "false");
    }
});
