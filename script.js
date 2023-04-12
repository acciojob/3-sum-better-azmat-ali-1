function threeSum(arr, target) {
// write your code here
	let i=0;
	let ans=0;
	while(i<arr.length){
	let j=i+2;
	while(i+1<arr.length&&j<arr.length){
		let total = arr[i]+arr[i+1]+arr[j];
		if(total-target<sum && target<total){
			sum=total;
		}
		if(total+target<sum && target>total){
			sum=total;
		}
		j++;
	}
		i++;
	}
  return sum;
}

module.exports = threeSum;
