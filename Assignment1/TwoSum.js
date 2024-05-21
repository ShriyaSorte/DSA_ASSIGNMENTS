var nums = [4, 12, 18, 2];
var target = 22;

var twoSum = function(nums, target) {
    for(i=0;i<=nums.length-1;i++)
    {
            for(j=i+1;j<=nums.length-1;j++)
            {
                const sum = Number(nums[i])+Number(nums[j]);
                if(sum === target)
                {
                    return [i,j];
                }
            }
              
    }
};

var result = twoSum(nums, target);
console.log(result);