//task1
/* Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, 
то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
Сделать задание с использованием функции.
*/

const arr = [0,null,2,'hi',4,NaN,6,7,9,11];

function getCountOfEvenAndOdd(arr) { 
    let oddCount = 0;
    let evenCount = 0;
    let zeroCount = 0;
    let unknownCount = 0;
for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'number'&& !isNaN(arr[i])){
        if(arr[i] === 0){
            zeroCount++
        }
        else if((arr[i] % 2) === 0){
            evenCount++
        }else if((arr[i] % 2) !== 0){
            oddCount++
        }
    }else{
        unknownCount++
    }
    }
    console.log(evenCount  + " - количество четных чисел")
    console.log(oddCount  + " - количество нечетных чисел")
    console.log(zeroCount + " - количество 0 в массиве")
    console.log(unknownCount + " - количество неопределенных значений")
};

getCountOfEvenAndOdd(arr);

