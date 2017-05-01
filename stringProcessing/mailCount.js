// parses a string of email data
// input: string of data
// output: the number of email messsages found in the string, the date range of the email messages
// email message delimiter '##||##'
// email section delimiter '#/#'
// five parts: sender, subject, date,, recipient, body :: in this sequence

function mailCount(emailData) {
  var emailsArray = emailData.split('##||##');
  var numOfEmails = emailsArray.length;
  var datesArr = emailsArray.map(function (email) {
    return new Date(email.split('#/#')[2]);
  });


  datesArr = datesArr.sort(function (a, b) {
    if (a.getTime() < b.getTime()) {
      return -1;
    }else if (a.getTime() > b.getTime()) {
      return 1;
    }else {
      return 0;
    }

  });

  console.log('Count of email is ' + numOfEmails);
  console.log('Date Range: ' + datesArr[0] + ' - ' + datesArr[datesArr.length - 1]);

}

mailCount(emailData);

// console.output
// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016