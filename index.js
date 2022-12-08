const fs = require("fs");

const data = fs.readFileSync("eyal.json").toString();
let users = JSON.parse(data);
console.log(data);

function createUser(user_id, user_name, user_address) {
  // java script object

  users[user_id] = {
    user_name,
    user_address,
  };
  //JSOn=javaScript object notation
  console.log(users); //print
  function deleteUser(user_id) {
    delete users[user_id];
  }
}
createUser(156, "bob", "california");
createUser(254, "robert", "texas");
delete 156; //Delete Bob
function deleteUser(user_id) {
  delete users[user_id];
}
function readUser(id) {
  return users[id];
  let val = users[id];
  if (val) {
    return val;
  } else {
    Console.log("User not found ");
    return {};
  }
}

function updateUser(id, newAttributes) {
  let oldAttributes = readUser(id);
  users[id] = {
    ...oldAttributes,
    ...newAttributes,
  };
}

//at the end of the program save the change to the file
fs.writeFileSync("eyal.json", JSON.stringify(users));
