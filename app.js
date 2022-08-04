arr1 = ["you have", "your attack", "saying goes:"];
arr2 = ["been killed", "went wrong", "your mum has best cookies" ];

randInt1 = Math.floor(Math.random * arr1.length)
randInt2 = Math.floor(Math.random * arr2.length)

switch (randInt1) {
    case 0: 
        string = arr1[0];
        console.log(string);
        break;
    case 1: 
        string = arr1[1];
        console.log(string);
        break;
    case 2: 
        string = arr1[2];
        console.log(string);
        break;
}