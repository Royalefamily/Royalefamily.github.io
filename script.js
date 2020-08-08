function send(){
let nama = document.getElementById("nama").value;
let alamat = document.getElementById("alamat").value;
let produk1 = document.getElementById("produk1").value;
let produk2 = document.getElementById("produk2").value;
let url = `https://api.whatsapp.com/send?phone=6285743824012&text=Saya%20${nama}%0AAlamat:%20${alamat}%0AIngin%20memesan%20barang:%0AProduk%201:%20${produk1}%20pcs%0AProduk%202:%20${produk2}%20pcs`;
window.open(url);
}
const kirim = () => {
	let isi = document.getElementById('isiPesan').value;
	let tipe =document.getElementById('validation').value;
	let alert;

	if (tipe == 'saran') {
		tipe = 'Aku punya saran untuk Royale Store nih!';
		alert = 'Terimakasih untuk sarannya\nKami akan terus belajar hingga naik kelas!';
	}else{
		tipe = 'Aku punya pertanyaan untuk Royale Store nih!';
		alert = 'Kami akan segera menjawab pertanyaan kamu \nDitunggu saja ya!';
	}
	confirm(alert);
	let url = `https://api.whatsapp.com/send?phone=6285743824012&text=${tipe}%0A===============%0A%0A${isi}`;
	
	window.open(url);

}