function firstNonRepeatedChar(str) {
 // Write your code here
	let arrstring[]=...str;
	for(let i in arrstring){
		if(arrstring[i]!==arrstring[i+1]){
			return arrstring[i];
		}
		else{
			return null;
		}
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
