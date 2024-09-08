/**
 * Problem-4: Function t ekta object input hisebe nibe & 3 ta property thakbe
 * {name: "kolimuddin", birthYear: 1999, siteName: "google" }
 *
 * password structure
 * 1. Website Name - First Later should be capital
 * 2. Username - start with "#kolimuddin"
 * 3. birthYear - start with "@1999"
 *
 * ***Input*****
 * 1. {name: "kolimuddin", birthYear: 1999, siteName: "google" }
 * 2. {name: "rahat", birthYear: 2002, siteName: "Facebook" }
 * 3. {name: "toky", birthYear: 200, siteName: "Facebook" }
 *
 * ***output***
 * 1. Gooogle#kolimudding@1999
 * 2. Facebook#rahat@2002
 * 3. invalid
 */

function password(obj) {
  //first Later
  let capitalSiteName = obj.siteName.toUpperCase[0] + obj.siteName.slice(1);

  //declare the password structure
  let passwordStructure = obj.siteName + "#" + obj.name + "@" + obj.birthYear;
  return passwordStructure;
}

console.log(
  password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })
);
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
