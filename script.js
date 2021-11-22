const input = document.getElementById("input");
const copyInfo = document.getElementById("copyInfo");

input.value = "";
input.focus();

const dealabsTracking = "?utm_source=twitch&utm_medium=referral&utm_campaign=nowtech&utm_content=blackfriday";

const copy = () => {
  let fullURL = input.value + dealabsTracking;
  copyTextToClipboard(fullURL);
  copyInfo.innerHTML = fullURL;
  //window.open("https://www.youtube.com/c/Nowtech/community");
}

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}
