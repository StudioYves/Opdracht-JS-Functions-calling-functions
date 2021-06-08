//HEY KIDDO EXERCISE

const checkAdult = function(age) {
    console.log("entering adultcheck..")
    if (age >= 18) {
        return true;
    }
    else {return false;
    }
};

const greet = function(age) {
    console.log("entering greet function..");
    if (checkAdult(age)) {
        return "Hello there!";
    }
    else {
        return "Hey kiddo.";
    }
};

console.log(greet(16));
console.log(greet(25));

// //VAT EXERCISE 1

const vatAmount = function(baseprice, vatPercentage) {
    return baseprice * (vatPercentage / 100);
};


const calcPriceInclVat = function(baseprice, vatPercentage){
    const vat =  vatAmount(baseprice, vatPercentage);
    return baseprice + vat;
};

console.log(calcPriceInclVat(100, 9));
console.log(calcPriceInclVat(83, 21));

//VAT EXERCISE 2 

const baseprice = function(priceInclVat, vatPercentage) {
    const rekenVat = (vatPercentage / 100) + 1;
    return priceInclVat / rekenVat;
};

const vat = function(priceInclVat, vatPercentage) {
    return priceInclVat - (priceInclVat / ((vatPercentage / 100) + 1));
};

const calcBasepriceAndVatAmount = function(priceInclVat, vatPercentage) {
    return [baseprice(priceInclVat, vatPercentage), vat(priceInclVat, vatPercentage)];
};

console.log(calcBasepriceAndVatAmount(1210, 21));
console.log(calcBasepriceAndVatAmount(2.18, 9));








