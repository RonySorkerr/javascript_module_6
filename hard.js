let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for(prop in myObject){
    // console.log(prop);
    // console.log(myObject[prop]);
}

const keys = Object.keys(myObject);
console.log(keys);

for(const key of keys){
    console.log(key, ':', myObject[key], '|', 'type: ', typeof(key));
}