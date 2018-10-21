function removeProperty(obj, prop) {
  console.log(obj);
  if (obj[prop]) {
    delete obj[prop];
    console.log(obj);
    return true;
  }
  return false;
}

removeProperty({ hello: "wolrd", foo: "bar" }, "hello");

var myObject = {
  ircEvent: "PRIVMSG",
  method: "newURI",
  regex: "^http://.*"
};
delete myObject.regex;

console.log(myObject);
