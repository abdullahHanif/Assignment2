var stdin = process.openStdin();

stdin.addListener("data", function (d) {
	// note:  d is an object, and when converted to a string it will
	// end with a linefeed.  so we (rather crudely) account for that  
	// with toString() and then trim() 
	
	//grading
	//checkGrade(d.toString().trim())

	//letter case
	//checkCaseOfLetter(d.toString())

	//IntCompariosion
	//compareInts(d+10, d)

	//vowel
	//checkVowel(d.toString())

});

function checkGrade(my_grade){
	if (my_grade >= 50 && my_grade < 60) {
		console.log("Grade is C")
	}else if (my_grade >= 50 && my_grade < 60) {
		console.log("Grade is C")
	
	}else if (my_grade >= 60 && my_grade < 70) {
		console.log("Grade is B")
	
	}else if (my_grade >= 70 && my_grade < 80) {
		console.log("Grade is A")
	}else if (my_grade >= 80) {
		console.log("Grade is A+")
	}else {
		console.log("Fail")
	}
}

function checkCaseOfLetter(c) {
	if(c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90){
		console.log('Upper Case')
	}
	else if(c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122){
		console.log('lower Case')
	}else{
		console.log('Unknown')
	}

}

function compareInts(c,d){
	if(c === d){
		console.log('Both are equal')
	}else if( c < d ){
		console.log('D is Greater')
	}else {
		console.log('C is Greater')
	}
}

function checkVowel(v){
	switch(v){
	
		case 'a': console.log('vowel');
		break;
		
		case 'e' : console.log('vowel');
		break;

		case 'i' : console.log('vowel'); 
		break;
	
		case 'o': console.log('vowel');
		break;

		case 'u': console.log('vowel');
		break;
	
		default:
				console.log('not a vowel');
		}
}


