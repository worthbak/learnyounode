// Desired date format = "2013-07-06 17:42"
function getCurrentFormattedDate() {
  var date = new Date();

  var year = String(date.getFullYear());
  var month = String(date.getMonth() + 1); // zero indexed
  var day = String(date.getDate());

  var hours = String(date.getHours());
  var minutes = String(date.getMinutes());

  month = padDateDigit(month);
  day = padDateDigit(day);

  var formattedDate = year + "-" + month + "-" + day + " " + hours +":" + minutes
  return formattedDate
};

function padDateDigit(digit) {
  digit = String(digit);

  if (digit.length >= 2 || digit.length <= 0) {
    return digit;
  } else if (digit.length == 1) {
    return "0" + digit;
  };
}

// console.log(getCurrentFormattedDate());

module.exports.getCurrentFormattedDate = getCurrentFormattedDate;
