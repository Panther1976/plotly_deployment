// Use console to pring hello message

//d3.json("samples.json").then(function(data){
//   console.log("hello");

// Modify the code to the entire data set

d3.json("samples.json").then(function(data){
    console.log(data);
});

//Extract only the wfreq, or the weekly belly button washing frequency, of each person into a new array

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

// sort the wfreq array in descending order

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});

// delete null values from the sorted wfreq array

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});

// print each key-value pair inside an array
// researcher1 = {
//    name: 'Roza',
//    age: 34,
//    hobby: 'Hiking'
//};

//console.log(Object.entries(researcher1));

researcher1 = [['name', 'Roza'], ['age', 34], ['hobby',
'Hiking']];

researcher1.forEach(([first, second]) => console.log(first
    + ": " + second));

// display the metadata of any individual from the dataset

d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});