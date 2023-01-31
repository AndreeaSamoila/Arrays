const products = [
    {
      id: 67,
      name: 'Firestrata',
      price: 26,
      brewery: 'Hop Hooligans',
    },
    {
      id: 212,
      name: 'Punch the Clock',
      price: 21,
      brewery: 'Bereta',
    },
    {
      id: 111,
      name: 'The Guardian',
      price: 21,
      brewery: 'Noah',
    },
    {
      id: 345,
      name: 'Pudge',
      price: 30,
      brewery: 'Hop Hooligans',
    },
  ];
  
  /* Folosind metode care nu modifica array-ul, rezolvați următoarele probleme:
1. Sa se afiseze produsul cu numele “The Guardian” */

// function isTheGuardian(products) {
//     return products.name === "The Guardian"
// }
// const productGardian = products.find(isTheGuardian)
// console.log(productGardian);

//cu callback function 

const productGardian = products.find(product => product.name === "The Guardian")
console.log(productGardian);

/* 2. Folosind filter, returnati un array care contine doar produsele de la “Hop Hooligans” */

// function isHooligans (products) {
//     return products.brewery === "Hop Hooligans"
// }
// const HooligansProducts = products.filter(isHooligans)
// console.log(HooligansProducts);

//cu callback function 

const HooligansProducts = products.filter(product => product.brewery === "Hop Hooligans")
console.log(HooligansProducts);

/* 3. Folosind filter, returnati un array care sa nu contina produsul cu id-ul 111*/

const No111Products = products.filter(product => product.id !== 111)
console.log(No111Products);

/*4.  Calculati suma prețurilor din array */

const sum = products.reduce((accumulator, product) => accumulator + product.price, 0) ;
console.log("Suma preturilor din array este: ", sum);

/* 5.  Fara sa modificati array-ul initial, returnati un array nou, 
in care fiecare element va avea o proprietate nouă numita “isFavorite”, cu valoarea false. 
TIP: map + Object.assign/spread syntax */

const productWithFavorite = products.map(product => ({ ...product, isFavorite:false}));
console.log(productWithFavorite);

/* Probleme extra:
1. Calculati suma fiecărui element pozitiv dintr-un array.
 Dacă nu exista nici un număr pozitiv sau array-ul este gol, suma va fi 0. TIP: Filter + reduce */

 const input = [1, -4, 12, 0, -3, 29, -150];
 const nrPozitive = input.filter(number => number > 0)
 console.log(nrPozitive);
const sumaNrPozitive = nrPozitive.reduce((accumulator, number) => accumulator + number, 0);
console.log("Suma elementelor pozitive: ", sumaNrPozitive);

/* 2. Fie următoarea lista de studenți 
Folosind map,filter si reduce, calculati media tuturor notelor pentru fiecare student,
 apoi filtrati studenții care au media mai mare de 90*/

const students = [
  {name: 'Ionut', scores: [90, 85, 92]},
  {name: 'Gigel', scores: [75, 80, 85]},
  {name: 'Marius', scores: [90, 95, 85]},
  {name: 'David', scores: [100, 100, 100]},
];
const MediaStudentilor = students.map(student => {
    const SumaNotelor = student.scores.reduce((accumulator, score) => accumulator + score, 0);
    console.log(SumaNotelor);
    return {
        name: student.name,
        media: SumaNotelor/student.scores.length
    }
})
const StudentiicuMediaPeste90 = MediaStudentilor.filter( student => student.media > 90);
console.log("Studentii care au media peste 90: ", StudentiicuMediaPeste90)

/* 3. Implementati funcția myFilter folosind reduce de la array. 
Funcția ar trebui sa se comporte ca și metoda filter de la array.*/

// Exemplu array de test:

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
const pare = arr.filter(isPar);
    
    function isPar(nr) {
       return nr % 2 === 0 
    }

console.log("Array-ul cu valori pare filtrate cu functia filter deja implementata este: ", pare);

function myFilterWithFor(arr,cb) {
    const newArray = [];
    for(let i=0; i<arr.length; i++) {
        if(cb(arr[i])) {
            newArray.push(arr[i])
        }
    }
    return newArray;
}
console.log("Array-ul cu valori pare filtrate cu functia myFilterWithFor este: ", myFilterWithFor(arr, isPar));


function myFilter(array,cb) {
    return array.reduce(( rezultat, elementCurent) => {
        if(cb(elementCurent)) {
            rezultat.push(elementCurent);
        }
        return rezultat;
    }, []);
}

console.log("Array-ul cu valori pare filtrate cu functia myFilter este: ", myFilter(arr,isPar));

/* 4. Implementati funcția myMap folosind reduce de la array.
 Funcția ar trebui sa se comporte ca și metoda map de la array.  */

function increment(nr) {
    return nr+1;
}
const arrayIncrementat = arr.map(increment)
console.log("Array-ul incrementat cu functia map deja implementata este: ", arrayIncrementat);

function myMapWithFor(arr,cb) {
    const newArray = [];
    for( let i=0; i<arr.length; i++) {
            newArray.push(cb(arr[i]));
    }
    return newArray;
}
console.log("Array-ul incrementat cu functia myMapWithFor este: ", myMapWithFor(arr, increment));


function myMap(arr,cb) {
    return arr.reduce(( rezultat, elementCurent) => {
        rezultat.push(cb(elementCurent));
        return rezultat;
    }, []);
}

console.log("Array-ul incrementat cu functia myMap este: ", myMap(arr, increment));

