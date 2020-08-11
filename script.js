function kapital(str)
{  return str.replace (/\w\S*/g, 
      function(txt)
      {  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); } );
}
function send(){
let nama = document.getElementById("nama").value;
let alamat = document.getElementById("alamat").value;
let kelurahan = document.getElementById("kelurahan").value;
let kecamatan = document.getElementById("kecamatan").value;
let kota = document.getElementById("kota").value;
let provinsi = document.getElementById("provinsi").value;
let admin = document.getElementById("cAdmin").value;
let noHp;
let produk =[];
let namaP = ['Double Strip','One Strip','Instagram Pic','Reguler Size','Square Instax','Wide Size','Potret Pic','Mini Poster'];			 	 			
	if (nama == '' || alamat == '' || kelurahan == ''|| kecamatan == ''|| kota == ''|| provinsi == '' ) {
		alert('Silahkan Masukan nama dan alamat lengkap anda');
	}else{
		if(admin==''){
			alert('Pilih admin sesukamu')
		}else{
			produk[0] = document.getElementById("produk1").value;
			produk[1] = document.getElementById("produk2").value;
			produk[2] = document.getElementById("produk3").value;
			produk[3] = document.getElementById("produk4").value;
			produk[4] = document.getElementById("produk5").value;
			produk[5] = document.getElementById("produk6").value;
			produk[6] = document.getElementById("produk7").value;
			produk[7] = document.getElementById("produk8").value;
			batas = produk[0]*6 + produk[1]*3 + produk[2]*1 + produk[3]*1 + produk[4]*1 + produk[5]*1 + produk[6]*2 + produk[7]*20;
			 if ( batas >= 25 ){
			 	if(admin == 1){
			 		noHp = 6283821418918;
			 	}else if(admin==2){
			 		noHp = 6288238877871
			 	}else{
					noHp = 6285743824012
			 	}
				let url = 	` https://api.whatsapp.com/send?phone=${noHp}&text=Saya%20${kapital(nama)}%0AAlamat:%20${kapital(alamat)},%20${kapital(kelurahan)},%20${kapital(kecamatan)},%20${kapital(kota)},%20${kapital(provinsi)}.%0AIngin%20memesan%20barang:%0A`;
			 	 for (var i = 0; i < produk.length ; i++) {
			 	 	if(produk[i] >= 1 ){
			 	 		url += `${namaP[i]}:%20*${produk[i]}*%20pcs%0A`;
			 	 	}
			 	 }
			 	 window.open(url);
			 }else{
			 	alert(`Mohon maaf pesanan anda masih di bawah batas minimum (25 foto) \npesanan kamu baru ${batas}\nAyo tambah lagi pesananmu!`)
			 }
		}
	}
}
const kirim = () => {
	let isi = document.getElementById('isiPesan').value;
	let tipe =document.getElementById('validation').value;
	let info;
	let admin = document.getElementById("cAdmin").value;
	let noHp;
	if(admin == 1){
		noHp = 6283821418918;
	}else if(admin==2){
		noHp = 6288238877871;
	}else{
		noHp = 6285743824012;
	}
	if ( isi == '') {
		alert('Tolong masukan pesan anda\nBiar kami mengerti apa yang kamu inginkan\nJangan main code-codean ya!');
	}else{
		if (tipe == '') {
			alert('Masukan tipe yang pesan yang akan kamu kirim ya\nAgar kami mudah dalam memberi tanggapan\nTerimakasih!!');
		}else if (tipe == 'saran') {
			if(admin==''){
				alert('Pilih admin sesukamu')
			}else{
				tipe = 'Aku punya saran untuk Royale Store nih!';
				info = 'Terimakasih untuk sarannya\nKami akan terus belajar hingga naik kelas!';
				confirm(info);
				let url = `https://api.whatsapp.com/send?phone=${noHp}&text=${tipe}%0A==============================%0A%0A${isi}`;
				window.open(url);
			}
		}else{
			if(admin==''){
				alert('Pilih admin sesukamu')
			}else{
				tipe = 'Aku punya pertanyaan untuk Royale Store nih!';
				info = 'Kami akan segera menjawab pertanyaan kamu \nDitunggu saja ya!';
				confirm(info);
				let url = `https://api.whatsapp.com/send?phone=${noHp}&text=${tipe}%0A==============================%0A%0A${isi}`;
				window.open(url);
			}
		}
	}
}