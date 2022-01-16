const { mean, median, mode } = require('./calc')

describe('finding mean', () => {
  it('should find the mean of an even set of numbers', () => {
    expect(mean([1, 3, 5, -6])).toEqual(0.75)
  })
  it('should find the mean of an odd set of numbers', () => {
    expect(mean([1, 3, 5])).toEqual(3)
  })
  it('should find the mean of an empty array', () => {
    expect(mean([])).toEqual(0)
  })
})

describe('finding median', () => {
  it('should find the median of an even set of numbers', () => {
    expect(median([1, 3, 5, -6])).toEqual(2)
  })
  it('should find the median of an odd set of numbers', () => {
    expect(median([1, 3, 5])).toEqual(3)
  })
})

describe('finding mode', () => {
  it('should find the mode', () => {
    expect(mode([1, 1, 1, 1, 4, 3, 2, 3, 4])).toEqual(1)
  })
})
