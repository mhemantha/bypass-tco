var links = document.querySelectorAll('a.tco-link');
for(var link of links) {
  var fullUrl = link.attributes.getNamedItem('data-url');
  if (fullUrl) link.href = fullUrl.value;
}
