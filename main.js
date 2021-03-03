const companies = [
	{name: "Company One", category: "Finance", start: 1981, end: 2003},
	{name: "Company Two", category: "Retail", start: 1991, end: 2008},
	{name: "Company Three", category: "Auto", start: 1961, end: 2017},
	{name: "Company Four", category: "Retail", start: 1983, end: 2001},
	{name: "Company Five", category: "Technology", start: 1994, end: 2019},
	{name: "Company Six", category: "Finance", start: 1999, end: 2001},
	{name: "Company Seven", category: "Auto", start: 1956, end: 2018},
	{name: "Company Eight", category: "Technology", start: 1947, end: 2015},
	{name: "Company Nine", category: "Retail", start: 1972, end: 2009},
];

const ages = [33, 19, 20, 16, 25, 62, 32, 76, 43, 83, 34, 64, 46, 75, 18];


// forEach
companies.forEach((company) => {
	console.log(company.name);
});

// filter old method
let canDrink0 = [];
for(let i = 0; i < ages.length; i++) {
	if(ages[i] >= 21) {
		canDrink0.push(ages[i]);
	}
} 

// filter
const canDrink1 = ages.filter(function(age) {
	if(age >= 21) {
		return true;
	}
});
console.log(canDrink1);

// es6
const canDrink2 = ages.filter(age => age >= 21);
console.log(canDrink2);

// filter retail companies
const retailCompanies = companies.filter(function(company) {
	if(company.category === 'Retail') {
		return true;
	}
});
console.log(retailCompanies);

// filter retail companies ES6 (get all companies in "Retail" category)
const retailCompanies1 = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies1);

// get 80s companies
const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990);
console.log(eightiesCompanies);

// get companies that lasted at least 10 years
const lastedTenYears = companies.filter(company => (company.end - company.start > 9));
console.log(lastedTenYears);

// map
// Create array of company names
const companyNames = companies.map(function(company) {
	return company.name;
});
console.log(companyNames);

const companyNamesWithDates = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(companyNamesWithDates);

const agesSqure = ages.map(age => Math.sqrt(age));
console.log(agesSqure);

const agesTimesTwo = ages.map(age => age * 2);
console.log(agesSqure);

const ageMap = ages
	.map(age => Math.sqrt(age))
		.map(age => age * 2);
console.log(ageMap);

// sort
// sort companies by start year
const sortedCompanies = companies.sort((company1, company2) => {
	if(company1.start > company2.start) {
		return 1;
	}
	else {
		return -1;
	}
});
console.log(sortedCompanies);

// short version
const sortedCompanies1 = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies1);

// sort ages
const sortAges = ages.sort((a, b) => a - b);
const sortAges1 = ages.sort((a, b) => b - a);
console.log(sortAges);

// reduce old
// get total ages (sum all ages)
let ageSum = 0;
for(let i = 0; i < ages.length; i++) {
	ageSum += ages[i];
}
console.log(ageSum);

// reduce ES6
// get total ages (sum all ages)
const ageSum0 = ages.reduce((total, age) => {
	return total + age;
}, 0);
console.log(ageSum0);

// shortes version get total ages (sum all ages)
const ageSum1 = ages.reduce((total, age) => total + age, 0);
console.log(ageSum1);

// get total companies years
const totalYears = companies.reduce((total, company) => {
	return total + (company.end - company.start);
}, 0);
console.log(totalYears);

//shortes get total companies years
const totalYears0 = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears0);

// combine methods
const combined = ages
	.map(age => age * 2)
		.filter(age => age >= 40)
			.sort((a, b) => a - b)
				.reduce((a, b) => a + b, 0);
console.log(combined);



