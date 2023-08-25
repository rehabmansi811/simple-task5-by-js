function validatePhoneNumber(phoneNumber) {
  // Check if the phone number is 8 digits long.
  if (phoneNumber.length !== 8) {
    return false;
  }

  // Check if the phone number only contains digits.
  for (let i = 0; i < phoneNumber.length; i++) {
    if (!isNaN(phoneNumber[i])) {
      return true;
    }
  }

  return false;
}

function validateMobileNumber(mobileNumber) {
  // Check if the mobile number is 11 digits long and starts with 010, 011, or 015.
  if (mobileNumber.length !== 11 ||
      mobileNumber.substring(0, 3) !== "010" &&
      mobileNumber.substring(0, 3) !== "011" &&
      mobileNumber.substring(0, 3) !== "015") {
    return false;
  }

  // Check if the mobile number only contains digits.
  for (let i = 0; i < mobileNumber.length; i++) {
    if (!isNaN(mobileNumber[i])) {
      return true;
    }
  }

  return false;
}

function validateEmail(email) {
  // Check if the email address is in the format of "username@domain.com".
  if (email.indexOf("@") === -1 || email.indexOf(".com") === -1) {
    return false;
  }

  return true;
}

function getColor(color) {
  switch (color) {
  case "red":
    return "red";
  case "green":
    return "green";
  case "blue":
    return "blue";
  default:
    return "black";
  }
}

function main() {
  // Get the user's name.
  const name = prompt("Enter your name:");

  // Get the user's phone number.
  const phoneNumber = prompt("Enter your phone number should be 8 number:");

  // Validate the user's phone number.
  if (!validatePhoneNumber(phoneNumber)) {
    alert("Invalid phone number.");
    return;
  }

  // Get the user's mobile number.
  const mobileNumber = prompt("Enter your mobile number should be 11 number:");

  // Validate the user's mobile number.
  if (!validateMobileNumber(mobileNumber)) {
    alert("Invalid mobile number.");
    return;
  }

  // Get the user's email address.
  const email = prompt("Enter your email address:");

  // Validate the user's email address.
  if (!validateEmail(email)) {
    alert("Invalid email address.");
    return;
  }

  // Get the user's choice of color.
  const color = prompt("Choose a color (red, green, or blue):");

  // Set the color of the welcome message.
  const welcomeMessageColor = getColor(color);

  // Display the welcome message.
  /*alert(`
    Welcome, ${name}!

    Today's date is ${new Date().toDateString()}.

    Your phone number is ${phoneNumber}.

    Your mobile number is ${mobileNumber}.

    Your email address is ${email}.
  `, welcomeMessageColor);*/
  document.write("<p>Welcome" +name+"</p>");
  document.write("<p>Today's date i" +new Date().toDateString()+"</p>");
  document.write(" <p>Your phone number is " +phoneNumber+"</p>");
  document.write("<p> Your mobile number is " +mobileNumber+"</p>");
  document.write("<p>Your email address is" +email+"</p>");


}

main();