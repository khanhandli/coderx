//npm - node package manger 

var readlineSync = require('readline-sync');

// var userName = readlineSync.question('Ten may la gi: ');

// console.log('Hello ' + userName + '!') ;
// 
// var languages = [];

// var language = readlineSync.question('Ngon ngu cua may la gi: ')

// languages.push(language);

// console.log(languages)

do{
	console.log('1. nhap name?');
	console.log('2. hien thi?');
	console.log('3. thoat?');
	var chon = readlineSync.question('may chon so may?');
	switch (parseInt(chon)) {
		case 1:
			var name = readlineSync.question('Ten may la gi? \n');
			console.log('  ')
			break;
			case 2:
			console.log(name);
			break;
			case 3:
			console.log('Bye?');
			break;
		default:
			console.log('Chon sai');
			break;
	}
} while (chon < 3);