/*
Zad. 1 Wypisz do konsoli wartości od 1 do 100, zastępując każdą wartość parzystą słowem "Fiz",
a każdą podzielną przez trzy słowem "Buz" (lub słowem "FizBuz" jeśli jest podzielna zarówno przez 2 jak i przez 3).
Wartości wypisz w pojedynczym wierszu - pojedynczą instrukcją console.log (np. budując string).*/
let resultStr = "";
const startNum = 1;
const endNum = 100;

resultStr = resultStr.concat("", resultStr);

for (let i = startNum + 1; i <= endNum; ++i) {
    const currentResult = dividedBy(i)
    if (currentResult) {
        resultStr = resultStr.concat(' ', currentResult);
    }
}
console.log("---------------------------");
console.log(resultStr);
console.log("---------------------------");

function dividedBy(number) {
    if (number % 2 == 0 && number % 3 != 0) return "Fiz";
    else if (number % 2 != 0 && number % 3 == 0) return "Buz";
    else if (number % 2 == 0 && number % 3 == 0) return "FizBuz";
    return "";
}

/*
Zad. 2 Wczytaj od użytkownika (np. wykorzystując funkcję prompt()) długość promienia koła. Oblicz jego obwód i pole powierzchni.
Wypisz je, zaokrąglając wartość do dwóch miejsc po przecinku (np. korzystając z funkcji alert()). Jeśli podana wartość nie jest liczbą, poinformuj o tym odpowiednik komunikatem.
Możesz też zrobić to np. tak: https://jsbin.com/qabibenono/1/edit?js,output
*/

// const radiusLength = window.prompt("Specify the length of the radius of the circle");

// if (!isNaN(radiusLength)) {
//     const area = Number.parseFloat(Math.PI * radiusLength * radiusLength).toFixed(2);
//     const circumference = Number.parseFloat(2 * Math.PI * radiusLength).toFixed(2);
//     window.alert(`Area: ${area}, and Circumference: ${circumference}`);
// } else {
//     window.alert(`Entered value is not a number!`);
// }

/*
Zad. 3
Do każdego z poniższych podpunktów napisz osobną funkcję. Działanie zademonstruj wywołując je po kolei i wypisując zawartość tablicy po każdej operacji:
Stwórz i wypełniaj tablicę losowymi wartościami z przedziału 1-10, do momentu gdy ich suma nie osiągnie 200.
Znajdź wartość najmniejszą i usuń jej pierwsze wystąpienie.
Znajdź wartość największą i usuń jej ostatnie wystąpienie.
Wypisz do konsoli informację ile razy każda z wartości występuje w tablicy.
Dziesięć pierwszych wartości (o indeksach 0-9) przenieś na koniec (nie zmieniając ich kolejności).
*/
const array = [];

function sumUntil200(array) {
    const max = 10;
    const min = 1;
    let counter = 0;
    let sum = 0;
    while (sum != 200) {
        const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
        if (sum + randomNum <= 200) {
            counter++;
            sum += randomNum;
            array.push(randomNum);
        }
    }
    console.log("---------------------------");
    console.log(array);
    console.log("---------------------------");
}

function findSmallestAndDeleteFirstOccurance(array) {
    const smallest = Math.min(...array);
    const isSmallest = (el) => el == smallest;
    const index = array.findIndex(isSmallest);
    array.splice(index, 1);
    console.log("---------------------------");
    console.log(array)
    console.log("---------------------------");
}

function findLargestAndDeleteLastOccurance(array) {
    const largest = Math.max(...array);
    const isLargest = (el) => el == largest;
    const index = array.findLastIndex(isLargest);
    array.splice(index, 1);
    console.log("---------------------------");
    console.log(array)
    console.log("---------------------------");
}

class UniqueInstance {
    constructor(value) {
        this.value = value;
        this.numberOfInstances = 1;
    }
    increaseNumberOfInstances() {
        this.numberOfInstances++;
    }
}

function numberOfInstances(array) {
    const uniqueInstanceArr = [];

    array.forEach((el1) => {
        const foundInstance = uniqueInstanceArr.find((el2) => el1 == el2.value);

        if (foundInstance) {
            foundInstance.increaseNumberOfInstances();
        } else {
            uniqueInstanceArr.push(new UniqueInstance(el1));
        }
    });

    console.log("---------------------------");
    console.log(uniqueInstanceArr);
    console.log("---------------------------");
}


function moveToTheEnd(array) {
    for (let i = 0; i < 10; ++i) {
        const el = array.shift();
        array.push(el);
    }
    console.log("---------------------------");
    console.log(array);
    console.log("---------------------------");
}

sumUntil200(array);
findSmallestAndDeleteFirstOccurance(array);
findLargestAndDeleteLastOccurance(array);
numberOfInstances(array);
moveToTheEnd(array);

/*
Zad. 4
Zadeklaruj tablicę wypełnioną pięcioma imionami (napisami). Następnie każde imię "zakoduj" zmieniając każdą literę "a" lub "A" na "4", a każdą "e" lub "E" na "3".
Następnie z każdego imienia dłuższego niż 6 znaków wytnij środek, aby zostawić trzy pierwsze i trzy ostatnie litery, a na jego miejsce wstaw trzy kropki "...".
Np. imię "Kazimierz" zmieni się w "K4z...3rz". Efekt wypisz do konsoli.
*/

let firstNamesArr = ["Grzegorz", "Przemysław", "Karolina", "Ewelina", "Dawid"]
const firstNamesArrEncoded = [];
firstNamesArr.forEach((el) => {
    el = el.replace(/a/g, '4').replace(/A/g, '4');
    el = el.replace(/e/g, '3').replace(/E/g, '3');
    firstNamesArrEncoded.push(el);
});
const firstNamesArrEncodedAndModified = [];
const prefixLength = 3;
const postfixLength = 3;
firstNamesArrEncoded.forEach((el) => {
    if (el.length > 6) {
        const charArray = el.split('');
        charArray.splice(prefixLength, el.length - prefixLength - postfixLength, '.', '.', '.');
        el = charArray.join('');
        firstNamesArrEncodedAndModified.push(el);
    }
});
console.log(firstNamesArrEncodedAndModified);

/*
Dany jest string zawierający nazwy towarów oddzielane przecinkami (np. "jajka, mleko, masło, chleb").
Na tej podstawie stwórz cennik - tablicę obiektów.
Każdy obiekt w tej tablicy zawiera dwa pola - nazwę (wydobytą ze stringu) oraz cenę (losową wartość rzeczywistą z dokładnością do dwóch miejsc po przecinku).
Wyświetl ją w konsoli (możesz skorzystać np. z console.table()). Następnie stwórz tablicę zakupów.
Skopiuj do niej wybrane losowo towary (nie więcej niż połowę), do każdego z nich dopisując ilość (losową). W konsoli wyświetl tablicę zakupów oraz całkowitą cenę.
*/
class Product {
    constructor(name, price) {
        this.value = name;
        this.price = price;
    }
}

class ProductToBuy {
    constructor(product, amount) {
        this.product = product;
        this.amount = amount;
    }
}
const minPrice = 1;
const maxPrice = 10;
const products = "jajka, mleko, masło, chleb, cukier, szynka";
const productsNamesArray = products.split(', ');
const productsArr = [];
productsNamesArray.forEach((el) => {
    const price = Number.parseFloat(Math.random() * (maxPrice - minPrice + 1) + minPrice).toFixed(2);
    productsArr.push(new Product(el, price));
})
console.table(productsArr);

const shoppingArr = [];
const numberOfAllProducts = productsArr.length;

const minAmountOfProducts = 1;
const maxAmountOfProducts = Math.floor(numberOfAllProducts / 2);
const howManyProducts = Math.floor(Math.random() * (maxAmountOfProducts - minAmountOfProducts + 1) + minAmountOfProducts);

for (let i = 0; i < howManyProducts; ++i) {
    const productId = Math.floor(Math.random() * (numberOfAllProducts));
    const productAmount = Math.floor(Math.random() * (maxAmountOfProducts - minAmountOfProducts + 1) + minAmountOfProducts);
    shoppingArr.push(new ProductToBuy(productsArr.at(productId), productAmount));
}

let wholePrice = 0;
shoppingArr.forEach((el) => {
    wholePrice += el.amount * el.product.price;
})

console.table(shoppingArr);
console.log(wholePrice);