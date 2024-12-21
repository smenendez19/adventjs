function findInAgenda(agenda, phone) {
  const kidsMatched = agenda.split("\n").filter((x) => x.includes(phone));
  if (kidsMatched.length !== 1) return null;
  let name = kidsMatched[0].match(/<[A-Za-z ]+>/)[0];
  let num = kidsMatched[0].match(/\+\d+-\d+-\d+-\d+/)[0];
  const address = kidsMatched[0].replace(name, "").replace(num, "").trim();
  name = name.replace("<", "").replace(">", "").trim();
  num = num.replace("+", "");
  return {
    name: name,
    address: address,
  };
}

module.exports = findInAgenda;
