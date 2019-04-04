var moment = require('moment');

// var date = moment();
// console.log(date.format('dddd, MMMM Do YYYY, h:mm:ss a'))

var someTimestamp = moment().valueOf();
console.log(someTimestamp)

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'))