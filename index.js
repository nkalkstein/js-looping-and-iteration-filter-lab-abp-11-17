function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list, letter) {
  let lengthOfName = letter.length
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === letter;
  });
}

function matchName(drivers, string) {
  for (const name of drivers) {
    return name === string;
  }
}
}
