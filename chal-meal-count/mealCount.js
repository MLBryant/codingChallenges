


// You can test your function with these arrays, just uncomment to use

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
  meal: 'vegetarian' },
{ firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
  meal: 'standard' },
{ firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
  meal: 'vegan' },
{ firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
  meal: 'vegetarian' },
];


var list2 = [
{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
  meal: 'vegetarian' },
{ firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
  meal: 'standard' },
{ firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
  meal: 'vegan' },
{ firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
  meal: 'standard' },
{ firstName: 'Noel', lastName: 'O.', country: 'Albania', continent: 'Europe', age: 23, language: 'Python', 
  meal: 'gluten-intolerant' },
{ firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript', 
  meal: 'standard' },
{ firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby', 
  meal: 'gluten-intolerant' },
{ firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
  meal: 'diabetic' },
{ firstName: 'Nareh', lastName: 'Q.', country: 'Armenia', continent: 'Europe', age: 30, language: 'Clojure', 
  meal: 'standard' },
{ firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript', 
  meal: 'standard' },
];

const mealCount = arr => {
    mealObj = {}

    arr.forEach(element => {
        if (mealObj[element.meal] > 0) {
            mealObj[element.meal] += 1
        } else {
            mealObj[element.meal] = 1
        }
    });
    return mealObj
}

console.log(mealCount(list1));