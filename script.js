//random number
let ulang = true;
let skor = 0;

while(ulang) {
	let angka = Math.floor((Math.random() * 10) + 1);
	console.log(angka);
	let tebak = prompt('tebak angka 1-10\nanda memiliki 3 kesempatan');
	console.log(tebak); 

	let salah = false;
	let benar = 'sudah benar'
	let tebak2 = '';
	let tebak3 = '';

	if(tebak == angka) {
		alert('selamat!\njawaban anda benar di kesempatan pertama.\nangka yang dicari adalah ' + angka);
			tebak2 = benar;
			console.log(tebak2);
			skor++;
		console.log(skor);
	} 

	else if(tebak === null || tebak === '') {
			alert('main dululah\nisi yang bener, jangan dicancel!');
			tebak2 = prompt('tebak angka 1-10\nanda memiliki 2 kesempatan lagi'); 
	} 

	else if(tebak === null || tebak === '') {
			alert('main dululah\nisi yang bener, jangan dicancel!');
			tebak2 = prompt('tebak angka 1-10\nanda memiliki 2 kesempatan lagi'); 
	} 

	else {
		if(tebak > angka) {
			alert('terlalu tinggi!\ncoba lagi dikesempatan kedua.');
			tebak2 = prompt('tebak angka 1-10\nanda memiliki 2 kesempatan lagi');

		} 
		else if(tebak < angka) {
			alert('terlalu rendah!\ncoba lagi dikesempatan kedua.');
			tebak2 = prompt('tebak angka 1-10\nanda memiliki 2 kesempatan lagi');
		} 
		else {
			alert('yang anda masukkan bukan angka.');
			tebak2 = prompt('tebak angka 1-10\nanda memiliki 2 kesempatan lagi');
		}
	}
	console.log(tebak2);
	if(tebak2 == angka) {
		alert('selamat!\njawaban anda benar di kesempatan kedua.\nangka yang dicari adalah ' + angka);
		tebak3 = benar;
		skor++;
	} 

	else if(tebak2 === null || tebak2 === '') {
		alert('main dululah\nisi yang bener, jangan dicancel!');
		tebak3 = prompt('tebak angka 1-10\nkesempatan terakhir');
	} 


	else if(tebak2 == benar) {
		tebak3 = benar;
	} 

	else {
		if(tebak2 > angka) {
			alert('terlalu tinggi!\ncoba lagi dikesempatan ketiga.');
			tebak3 = prompt('tebak angka 1-10\nkesempatan terakhir');
		} else if(tebak2 < angka) {
			alert('terlalu rendah!\ncoba lagi dikesempatan ketiga.');
			tebak3 = prompt('tebak angka 1-10\nkesempatan terakhir');
		} else {
			alert('yang anda masukkan bukan angka.');
			tebak3 = prompt('tebak angka 1-10\nkesempatan terakhir');

		}
	}

	if(tebak3 == angka) {
		alert('selamat!\njawaban anda akhirnya benar di kesempatan ketiga.');
		tebak3 = salah;
		skor++;
		ulang = confirm('skor anda dalam sesi ini : ' + skor + '\n\ncoba lagi?');
	} 

	else if(tebak3 === null || tebak3 === '') {
		alert('payah! ga niat!\nangka yang dicari adalah ' + angka);
		ulang = confirm('skor anda dalam sesi ini : ' + skor + '\n\ncoba lagi?');
	} 

	else if(tebak3 == benar) {
		ulang = confirm('skor anda dalam sesi ini : ' + skor + '\n\ncoba lagi?');
	} 

	else {
		if(tebak3 > angka) {
			alert('payah!\nangka yang dicari adalah ' + angka);
			ulang = confirm('skor anda dalam sesi ini : ' + skor + '\n\ncoba lagi?');
		} else if(tebak3 < angka) {
			alert('payah!\nangka yang dicari adalah ' + angka);
			ulang = confirm('skor anda dalam sesi ini : ' + skor + '\n\ncoba lagi?');
		} else {
			alert('payah!\nyang anda masukkan bukan angka. \nangka yang dicari adalah ' + angka);
			ulang = confirm('skor anda dalam sesi ini : ' + skor + '\n\ncoba lagi?');
		}
	}

}

alert('skor anda : ' + skor + '\n\nterima kasih telah bermain');