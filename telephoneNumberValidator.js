/*

Telephone Number Validator

Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. 

The following are examples of valid formats for US numbers (refer to the tests below for other variants):
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. 
Your job is to validate or reject the US phone number based on any combination of the formats provided above. 
The area code is required. If the country code is provided, you must confirm that the country code is 1. 

Return true if the string is a valid US phone number; otherwise return false.

Plan

1. Create a Regex Pattern (in regex101.com) to verify a valid US number format has been added.
2. Add US Number Formats we need to match into regex101 and start trying to match test strings with the Regular Expression.
3. Match the first case to get started, and use that case to help the second with second case, and work your way down.
4. Once you have matched all 6 cases in regex101, copy and paste into regex variable in function.
5. Then using the built in TEST method which will return true or false test the regex against the string being passed into function.
*/

function telephoneCheck(str) {
    let regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm;
    return regex.test(str);
  }
  
  console.log(telephoneCheck("555-555-5555"));