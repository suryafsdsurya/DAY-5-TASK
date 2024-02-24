//example resume

var json = [{ name: "Surya", mail: "suryau816@gmail.com" }];

//--------------------------------------------------------------------------------------------

//for loop
for (var i = 0; i < json.length; i++) {
  var obj = json[i];

  console.log(obj.name);
  console.log(obj.mail);
}
//-----------------------------------------------------------------------------------------------

//for Each
json.forEach(function (obj) {
  console.log(obj.msg);
});

//------------------------------------------------------------------------------------------------

//for In
for (var key in json) {
  if (json.hasOwnProperty(key)) {
    console.log(json[key].name);
  }
}

//----------------------------------------------------------------------------------------------

//for Of
let text = "";
for (let x of json[key].name) {
  text += x;
}
console.log(text);

//---------------------------------------------------------------------------------------------
