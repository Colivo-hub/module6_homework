// Task3
/* Написать функцию, которая принимает число как аргумент и возвращает функцию, 
которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат. */

function getSum(a){
    return function(b){
        return a + b;
    };
}

const getResult = getSum(10)(12);

console.log(getResult);