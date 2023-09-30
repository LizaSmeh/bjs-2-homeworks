class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate,
			this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}
	set state(namberPages) {
		if (namberPages < 0) {
			this._state = 0;
		} else if (namberPages > 100) {
			this._state = 100;
		} else {
			this._state = namberPages;
		}
	}
	get state() {
		return this._state;
	}
}
class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}
class Book extends PrintEditionItem {
	constructor(author, type, releaseDate, pagesCount) {
		super(type, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}
class NovelBook extends Book {
	constructor(author, releaseDate, pagesCount) {
		super(author, releaseDate, pagesCount);
		this.type = "novel";
	}
}
class FantasticBook extends Book {
	constructor(author, releaseDate, pagesCount) {
		super(author, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}
class DetectiveBook extends Book {
	constructor(author, releaseDate, pagesCount) {
		super(author, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}
	addBook(book) {
		if (book.state > 30) {
			return this.books.push(book);
		}
	}
	findBookBy(type, value) {
		let searchBook = this.books.find(book => book[type] === value);
		if (typeof searchBook === 'object') {
			return searchBook;
		} else {
			return null;
		}
	}
	giveBookByName(bookName) {
		let requestedBook = this.books.find(book => book.name === bookName);
		if (typeof requestedBook === 'object') {
			let index = this.books.indexOf(requestedBook);
			this.books.splice(index, 1);
			return requestedBook;
		} else {
			return null;

		}
	}
}

class Student {
	constructor(name) {
		this.name = name;
		this.ratingLog = {};
	}
	addMark(marks, nameSubject) {
		if (this.ratingLog.hasOwnProperty(nameSubject) !== true) {
			this.ratingLog[nameSubject] = [];
		}
		if ((typeof marks === 'number') && (marks >= 1) && (marks <= 5)) {
			this.ratingLog[nameSubject].push(marks);
		}
	}
	getAverageBySubject(nameSubject) {
		if (this.ratingLog.hasOwnProperty(nameSubject) === true) {
			return 0;
		}
		const averageScore = this.ratingLog[nameSubject].reduse((acc, marks, index, arr) => {
			acc += marks;
			if (index === arr.length - 1) {
				return acc / arr.length;
			}
			return acc;
		}, 0);
		return averageScore;
	}
	getAverage() {
		if (Object.keys(this.ratingLog).length === 0) {
			return 0;
		}
		let allSubject = Object.keys(this.ratingLog);
		for (let subject of allSubject) {
			allSubject[allSubject.indexOf(subject)] = this.getAverageBySubject(subject);
		}
		const gradePointAverage = allSubject.reduce((acc, marks, index, arr) => {
			acc += marks;
			if (index === arr.length - 1) {
				return acc / arr.length;
			}
			return acc;
		}, 0);
		return gradePointAverage;
	}
}