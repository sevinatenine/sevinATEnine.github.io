chrome.action.onClicked.addListener(() => {
  var htmlNode = document.getElementsByTagName("html")[0];
  var nodecontent = htmlNode.innerHTML;
  htmlNode.textContent = "<html>"+nodeContent+"</html>";
  //prints the HTML code of the document
});
