// 3 arrays that i will use to create custom message to terminal
arr1 = ["you should:", "you shall:", "saying goes:", "the best thing is:", "you can expect:"];
arr2 = ["'trust no one'", "be alone", "your mum has best cookies", "be your best friend","work till your old"];
arr3 = ["keep calm", "good luck", "bad luck", "misfortune", "good flight"]

//function that first gets randomn numbers and then pics string depending on that number. 
// after it prints the result to console
const mixedMessage = () => {
    randInt1 = Math.floor(Math.random() * arr1.length)
    //console.log(randInt1)
    randInt2 = Math.floor(Math.random() * arr2.length)
    //console.log(randInt2)
    randInt3 = Math.floor(Math.random() * arr3.length)
    stringRand1 = "";
    stringRand2 = "";
    stringRand3 = "";
    switch (randInt1) {
        case 0: 
            stringRand1 = arr1[0];
            break;
        case 1: 
            stringRand1 = arr1[1];
            break;
        case 2: 
            stringRand1 = arr1[2];
            break;
        case 3:
            stringRand1 = arr1[3];
            break; 
        case 4:
            stringRand1 = arr1[4];
            break; 
    }
    switch (randInt2) {
        case 0: 
            stringRand2 = arr2[0];
            break;
        case 1: 
            stringRand2 = arr2[1];
            break;
        case 2: 
            stringRand2 = arr2[2];
            break;
        case 3:
            stringRand2 = arr2[3];
            break; 
        case 4:
            stringRand2 = arr2[4];
            break; 
    }
    switch (randInt3) {
        case 0: 
            stringRand3 = arr3[0];
            break;
        case 1: 
            stringRand3 = arr3[1];
            break;
        case 2: 
            stringRand3 = arr3[2];
            break;
        case 3:
            stringRand3 = arr3[3];
            break; 
        case 4:
            stringRand3 = arr3[4];
            break; 
    }
    stringsTogether = stringRand1 + " " + stringRand2 + " and " + stringRand3 + ".";
    console.log(stringsTogether)
}

mixedMessage();
