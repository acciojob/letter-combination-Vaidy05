function letterCombinations(input_digit) {
  //Complete the function
	let arr = ["0","1","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
	let obj = new Array();
	helper(input_digit,0,arr,"");
	function helper(digit,start,arr,str){
		if(str.length==digit.length)
		{
			obj.push(str);
			return;
		}
		let s = arr[digit.charAt(start)];
		for(let i=0;i<s.length;i++){
			helper(digit,start+1,arr,str+s.charAt(i));
		}
	}
	return obj;
}

module.exports = letterCombinations;
