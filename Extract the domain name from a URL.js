function domainName(url) {
  let domain = url.replace(/^(https?:\/\/)?(www\.)?/, '');
  domain = domain.split('/')[0];
  domain = domain.split('.')[0];
  return domain;
}

console.log(domainName('http://google.com'));
