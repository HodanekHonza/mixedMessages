arr1 = ["you have", "your attack", "saying goes:"];
arr2 = ["been killed", "went wrong", "your mum has best cookies" ];


const gettingBlasted = () => {
    randInt1 = Math.floor(Math.random() * arr1.length)
    console.log(randInt1)
    randInt2 = Math.floor(Math.random() * arr2.length)
    console.log(randInt2)
    stringRand1 = "";
    stringRand2 = "";
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
    }
    stringsTogether = stringRand1 + " " + stringRand2;
    console.log(stringsTogether)

}

gettingBlasted();
