//mean
function mean(nums) {
  if (nums.length === 0) return 0
  return (
    nums.reduce((acc, cur) => {
      return acc + cur
    }) / nums.length
  )
}

//median
function median(nums) {
  nums.sort((x, y) => x - y)
  let middleNum = Math.floor(nums.length / 2)
  let median

  if (nums.length % 2 === 0) {
    median = (nums[middleNum] + nums[middleNum - 1]) / 2
  } else {
    median = nums[middleNum]
  }
  return median
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
