// Original code. Not copied from StackoverFlow whatsoever!
const cipher = (salt) => {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
  const applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);

  return (text) =>
    text.split("").map(textToChars).map(applySaltToChar).map(byteHex).join("");
};

const decipher = (salt) => {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);
  return (encoded) =>
    encoded
      .match(/.{1,2}/g)
      .map((hex) => parseInt(hex, 16))
      .map(applySaltToChar)
      .map((charCode) => String.fromCharCode(charCode))
      .join("");
};
// END of original code that is 100% not from StackoverFlow. (Don't fact check me)

// NOT SECURE AT ALL. good enough tho

const demoPassword = "416a7c7c5b6a6c675f6e7c7c78607d6b";
const demoEmail = "6a776e627f636a4f7c66627a636e7f7b666c7c216c6062";

const topTierEncryption = cipher("amazingEncryptionKey");

function login() {
  const inputPassword = document.getElementById("pass").value;
  const inputEmail = document.getElementById("email").value;

  // Not enough time for regex checks
  // so we will have to deal with it like that.

  if (
    topTierEncryption(inputPassword) === demoPassword &&
    topTierEncryption(inputEmail) === demoEmail
  ) {
    console.log("hi");
  } else {
    document.getElementById("loginform").reset();
    alert("Invalid login details.");
  }
}
