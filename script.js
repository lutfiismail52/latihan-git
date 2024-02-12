// Fungsi untuk menghasilkan bilangan acak antara 1 dan 100
function generateRandomNumber() {
	return Math.floor(Math.random() * 100) + 1;
}

// Menggunakan fungsi untuk menghasilkan bilangan acak
const randomNumber = generateRandomNumber();
console.log("Bilangan acak antara 1 dan 100:", randomNumber);
