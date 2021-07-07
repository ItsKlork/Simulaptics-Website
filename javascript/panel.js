// Deffo original code. Not copied from StackoverFlow whatsoever!
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

// NOT SECURE AT ALL. Well, at least it's not sitting there in plain text!

const demoPassword = "416a7c7c5b6a6c675f6e7c7c78607d6b";
const demoEmail = "6a776e627f636a4f7c66627a636e7f7b666c7c216c6062";

const topTierEncryption = cipher("amazingEncryptionKey");

function login() {
  const inputPassword = document.getElementById("pass").value;
  const inputEmail = document.getElementById("email").value;

  // Not enough time for regex checks
  // so, deal with it.

  // KITTY! yay :D
  if (inputEmail === "cat") {
    window.open("https://genrandom.com/cats/");
    document.getElementById("loginform").reset();
  } else if (
    topTierEncryption(inputPassword) === demoPassword &&
    topTierEncryption(inputEmail) === demoEmail
  ) {
    // Correct password? Epic.
    window.open("panel.html", "_self");
  } else {
    document.getElementById("loginform").reset();
    alert("Invalid login details.");
  }
}

// Some more original code that is 100% not copied from SO.
// Also, it's kind of sad how much time it took me to realize
// that I forgot to import the jQuery script...
function autoPlayYouTubeModal() {
  var triggerOpen = $("body").find("[data-tagVideo]");
  triggerOpen.click(function () {
    var theModal = $(this).data("bs-target"),
      videoSRC = $(this).attr("data-tagVideo"),
      videoSRCauto = videoSRC + "?autoplay=1";
    $(theModal + " iframe").attr("src", videoSRCauto);
    $(theModal + " button.btn-close").click(function () {
      $(theModal + " iframe").attr("src", videoSRC);
    });
  });
}

// Thank you UDACITY.COM, very cool!
function generateRandomDecimalInRangeFormatted(min, max, places) {
  let value = Math.random() * (max - min + 1) + min;
  return Number.parseFloat(value).toFixed(places);
}
