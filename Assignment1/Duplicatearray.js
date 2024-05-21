var removeDuplicates = function(nums)
    {
        if (nums.length === 0) return 0;
        nums.sort((a, b) => a - b);
        let k=1;
        for(i=0;i<nums.length-1;i++)
        {
            if(nums [i] !== nums[i+1])
            {
                nums [k] = nums [i+1];
                k++;
            }
        }
        return k;
    };

var nums = [2,5,3,2,4,5];
var k = removeDuplicates(nums);
console.log("New length:", k); 
console.log("New array:", nums.slice(0, k)); 
