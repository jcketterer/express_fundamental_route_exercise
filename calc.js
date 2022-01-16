//mean
function mean(nums) {
  return nums.reduce((x, y) => x + y) / nums.length
}

//median
function median(nums) {
  let middle = Math.floor(nums.length / 2)

  nums = [...nums].sort((x, y) => x - y)

  return nums.length % 2 !== 0
    ? nums[middle]
    : (nums[middle - 1] + nums[middle]) / 2
}

//frequency counter function

function frequencyCounter(nums) {
  return nums.reduce(function (acc, next) {
    acc[next] = (acc[next] || 0) + 1
    return acc
  }, {})
}

//mode
/**
 * Find the most common element in the array
 * @param {Array} arr any array
 */
function mode(nums) {
  let freq = frequencyCounter(nums)

  let count = 0
  let highestFreq

  for (let key in freq) {
    if (freq[key] > count) {
      highestFreq = key
      count = freq[key]
    }
  }
  return +highestFreq
}

function stringToNumConvert(numAsString) {
  let result = []

  for (let i = 0; i < numAsString.length; i++) {
    let stringToNum = Number(numAsString[i])

    if (Number.isNaN(stringToNum)) {
      return new Error(
        `The value '${numAsString[i]}' at index ${i} is not a valid number`,
      )
    }
    result.push(stringToNum)
  }
  return result
}

module.exports = {
  stringToNumConvert,
  mean,
  median,
  mode,
  frequencyCounter,
}
