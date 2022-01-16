const express = require('express')
const ExpressError = require('./expressErrors')
const { mean, median, mode, stringToNumConvert } = require('./calc')

const app = express()

app.get('/mean', function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError(
      'You must pass a query key of nums with list of numbers separated by commas',
      400,
    )
  }
  let numAsStrings = req.query.nums.split(',')
  let nums = stringToNumConvert(numAsStrings)
  if (nums instanceof Error) {
    throw new ExpressError(nums.message)
  }
  let result = {
    operations: 'mean',
    result: mean(nums),
  }
  return res.send(result)
})

app.get('/median', function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError(
      'You must pass a query key of nums with list of numbers separated by commas',
      400,
    )
  }
  let numAsStrings = req.query.nums.split(',')
  let nums = stringToNumConvert(numAsStrings)
  if (nums instanceof Error) {
    throw new ExpressError(nums.message)
  }
  let result = {
    operation: 'median',
    result: median(nums),
  }
  return res.send(result)
})

app.get('/mode', function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError(
      'You must pass a query key of nums with list of numbers separated by commas',
      400,
    )
  }
  let numAsStrings = req.query.nums.split(',')
  let nums = stringToNumConvert(numAsStrings)
  if (nums instanceof Error) {
    throw new ExpressError(nums.message)
  }
  let result = {
    operation: 'mode',
    result: mode(nums),
  }
  return res.send(result)
})

app.use((req, res, next) => {
  const err = new ExpressError('Page Not Found', 404)
  return next(err)
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  return res.json({
    error: err,
    message: err.msg,
  })
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
