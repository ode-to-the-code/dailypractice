


//  input - two strings 
//  output - boolean, true or false 

// how can i use a dictionary for this?
//  could make a dictionary 
let tag = "tag"
let gat = "gat"

const anagramOrNot = (string1, string2) => {
    let dict1 = {};
    let dict2 = {};

    let lowString1 = string1.toLowerCase();
    let lowString2 = string2.toLowerCase();

    if (lowString1.length !== lowString2.length) {
        return false;
    }


    for (var i = 0; i < lowString1.length; i++) {
        if (lowString1.charAt(i) in dict1) {
            dict1[lowString1.charAt(i)] += 1;
        } else {
            dict1[lowString1.charAt(i)] = 1;

        }
    }

    for (var i = 0; i < lowString2.length; i++) {
        if (lowString2.charAt(i) in dict2) {
            dict2[lowString2.charAt(i)] += 1;
        } else {
            dict2[lowString2.charAt(i)] = 1;

        }
    }


// ["c","t", "a"]
    const dict1keys = Object.keys(dict1);
    // const dict2keys = Object.keys(dict2);

    for (let key of dict1keys) {
        if (dict1[key] !== dict2[key]) {
            return false;
        }
    }

    // maybe i can iterate over both of them and fill up the 
    //  dictionary. then compare the two?

    return true;
}


let string1List = ["github", "cat", "soup"];
let string2List = ["act", "tac", "horse"];
let expectedOutputList = [false, true, false ];

for (var i = 0; i < string1List.length; i++) {
   let result = anagramOrNot(string1List[i], string2List[i]);
   console.log("testing strings: " + string1List[i] + " " + string2List[i]);
   console.log(result == expectedOutputList[i]);
}







