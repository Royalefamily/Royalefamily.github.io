function send(){
let nama = document.getElementById("nama").value;
let alamat = document.getElementById("alamat").value;
	if (nama == '' || alamat == '') {
		alert('Silahkan Masukan nama dan alamat anda');
	}else{
		let produk1 = document.getElementById("produk1").value;
		let produk2 = document.getElementById("produk2").value;
		let produk3 = document.getElementById("produk3").value;
		let produk4 = document.getElementById("produk4").value;
		let produk5 = document.getElementById("produk5").value;
		let produk6 = document.getElementById("produk6").value;
		let produk7 = document.getElementById("produk7").value;
		let produk8 = document.getElementById("produk8").value;
		let batas = produk1*6 + produk2*3 + produk3*1 + produk4*1 + produk5*1 + produk6*1 + produk7*2 + produk8*25;
		 if ( batas >= 25 ){

		 	 let url = 	`https://api.whatsapp.com/send?phone=6285743824012&text=
		 	 			Saya%20${nama}%0A
		 	 			Alamat:%20${alamat}%0A
		 	 			Ingin%20memesan%20barang:%0A
		 	 			Double%20Strip:%20${produk1}%20pcs%0A
		 	 			One%20Strip:%20${produk2}%20pcs%0A
		 	 			Instagram%20Pic:%20${produk3}%20pcs%0A
		 	 			Reguler%20Size:%20${produk4}%20pcs%0A
		 	 			Square%20Instax:%20${produk5}%20pcs%0A
		 	 			Wide%20Size:%20${produk6}%20pcs%0A
		 	 			Potret%20Pic:%20${produk7}%20pcs%0A
		 	 			Mini%20poster:%20${produk8}%20pcs%0A
		 	 			`;

		 	 window.open(url);
		 }else{
		 	alert('Mohon maaf pesanan anda masih di bawah batas minimum\nAyo tambah lagi pesananmu!')
		 }

	}
}
const kirim = () => {
	let isi = document.getElementById('isiPesan').value;
	let tipe =document.getElementById('validation').value;
	let info;
	if ( isi == '') {
		alert('Tolong masukan pesan anda\nBiar kami mengerti apa yang kamu inginkan\nJangan main code-codean ya!');
	}else{
		if (tipe == '') {
			alert('Masukan tipe yang pesan yang akan kamu kirim ya\nAgar kami mudah dalam memberi tanggapan\nTerimakasih!!');
		}else if (tipe == 'saran') {
			tipe = 'Aku punya saran untuk Royale Store nih!';
			info = 'Terimakasih untuk sarannya\nKami akan terus belajar hingga naik kelas!';
			confirm(info);
			let url = `https://api.whatsapp.com/send?phone=6285743824012&text=${tipe}%0A==============================%0A%0A${isi}`;
			window.open(url);
		}else{
			tipe = 'Aku punya pertanyaan untuk Royale Store nih!';
			info = 'Kami akan segera menjawab pertanyaan kamu \nDitunggu saja ya!';
			confirm(info);
			let url = `https://api.whatsapp.com/send?phone=6285743824012&text=${tipe}%0A==============================%0A%0A${isi}`;
			window.open(url);
		}
	}
}