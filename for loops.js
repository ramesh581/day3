let object=[
    {"person":"John","age":30,"company":"Google"},
    {"person":"Mohn","age":37,"company":"Flipkart"},
    {"person":"Kohn","age":38,"company":"Amazon"},
    {"person":"Sohan","age":40,"company":"Myntra"},
    {"person":"Jenny","age":70,"company":"Apple"},
];


for(var i=0; i<object.length; i++) {
    console.log(object[i].person);
    console.log(object[i].age);
    console.log(object[i].company);
};

for (let x in object) {
    console.log(`
    Name : ${object[x].person}
    Age : ${object[x].age}
    Company : ${object[x].company}`);
};

for (let x of object) {

    console.log(`
    Name : ${x.person}
    Age : ${x.age}
    Company : ${x.company}`);
    
}

object.forEach( x=>
    console.log(`
    Name : ${x.person},
    Age : ${x.age},
    Company : ${x.company}`));