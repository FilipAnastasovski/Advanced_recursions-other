

let moneti = [25, 10, 5, 2, 1];


function kolkuMoneti(number) {

    if (number === 0) return;

    for (let i = 0; i < moneti.length; i++) {
        if (number >= moneti[i]) {
            console.log(moneti[i]);
            kolkuMoneti(number - moneti[i]);
            break;
        }
    }
}

kolkuMoneti(46);

/////////////

let initialArray = [NaN, 0, 15, false, -22, '', undefined, 47, null, 0];
let initialArray1 = [1, NaN, 2, [3, NaN, 5, [1, 2]]];

function cleanUpArray(someArray) {
    let pom = [];

    if (Array.isArray(someArray)) {

        for (const value of someArray) {

            if (Array.isArray(value)) {
                pom.push(cleanUpArray(value));
            }

            else {

                if (value) { pom.push(value); }
                else {
                    if (value === 0 || value === false) { pom.push(value); }
                    else  continue; 
                }
            }
        }

        return pom;
    }
    else  return "enter valid array"; 
}

console.log(cleanUpArray(initialArray));
console.log(cleanUpArray(initialArray1));

///////////

const familyTree = [{
    name: "Oliver",
    lastname: "Stones",
    childrens: [
        {
            name: "Viktor",
            lastname: "Stones",
            childrens: []
        },
        {
            name: "Suzan",
            lastname: "Sloun",
            childrens: [
                {
                    name: "Oliver jr",
                    lastname: "Sloun",
                    childrens: [
                        {
                            name: "Alexandar",
                            lastname: "Sloun",
                            childrens: [
                                {
                                    name: "Suzie",
                                    lastname: "Sloun",
                                    childrens: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Alex",
                    lastname: "Sloun",
                    childrens: [
                        {
                            name: "Gabriel",
                            lastname: "Sloun",
                            childrens: [
                                {
                                    name: "Gabriela",
                                    lastname: "Sloun",
                                    childrens: []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}];
document.write(`Write ex: descendant("Suzan",familyTree)`);

function descendant(ime,node) {
    node.forEach(element => {
        if(ime === element.name){
            let elm = element;
            return console.log(printName(elm));
        }else{
            return descendant(ime,element.childrens);
        }
    });
}

let array = [];

function printName(obj){
    obj.childrens.forEach(element => {
        array.push(element.name);
        return printName(element);
    })
    return arr;
}
