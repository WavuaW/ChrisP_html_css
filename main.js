console.log("Hello from main.js!");

// You can also write more JavaScript code here
// For example, the following code will log the sum of two numbers:
let x = 5;
let y = 3;
console.log(x + y);

const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Retail", start: 1987, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Auto", start: 1991, end: 2008}
    
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// const retailCompanies = companies.filter(function(company){
//     if (company.category === 'Retail'){
//         return true;
//     }
// });


// const retailCompanies = companies.filter(company => company.category === 'Retail');

// console.log(retailCompanies)

// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990))

// console.log(eightiesCompanies)

const testMap = companies.map(function(company){
    return `${company.name} [ ${company.start} -  ${company.end}]`;
});

console.log(testMap)

const agesSquare = ages.map(age => Math.sqrt(age))

console.log(agesSquare)

// sort

const sortedCompanies = companies.sort(function(c1, c2) {
    if(c1.start > c2.start) {
        return 1;
    } else {
        return -1;
    }
});

console.log(sortedCompanies)

?? this is just a bit of testing