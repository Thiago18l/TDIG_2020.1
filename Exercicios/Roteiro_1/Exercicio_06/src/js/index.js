const Sort = function () {
    let array = [];
    let numbers = document.getElementById("element").value;
    let div = document.querySelector("#result");
    array = numbers.split(",");
    let array2 = sort(array);
    document.write(array2)
}

const sort = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        let j = i - 1;
        let tmp = parseInt(nums[i]);
        while(j >= 0 && parseInt(nums[j]) > tmp) {
            nums[j + 1] = parseInt(nums[j])
            j--;
        }
        nums[j+1] = tmp;
    }
    return nums;
}