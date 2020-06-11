const token = '450fcac68dafa0';
async function getIpInfo() {
  const response = await fetch(`https://ipinfo.io/json?token=${token}`);
  const json = await response.json();
  return json;
}

export { getIpInfo, token };
