// task2
/* Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, 
и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1. */



function getPrimeNumber(n){

    if(n === 0 || n === 1){
        return alert(n + ' - не простое, не составное число');
    }else if(n > 1000){
        return alert(n + ' - больше 1000, данные неверны');
    }
    else{
        for(let i = 2; i <= n; i++){
            if(n % i === 0 && n !== i){
                return alert( n + ' - составное число');
            }
            else if (i===n){
                return alert(n + ' - простое число');
             }
         }
    }

};
getPrimeNumber(999);

// OR

/* function getPrimeNumber(){
    let n = + prompt('Введите число до 1000');
    if(typeof n === 'number' && !isNaN(n)){
        if(n === 0 || n === 1){
            return alert(n + ' - не простое, не составное число');
        }else if(n > 1000){
            return alert(n + ' - больше 1000, данные неверны');
        }
        else{
            for(let i = 2; i <= n; i++){
                if(n % i === 0 && n !== i){
                    return alert( n + ' - составное число');
                }
                else if (i===n){
                    return alert(n + ' - простое число');
                }
            }
        }
    }
    else{
        return alert( n + ' - не число, введите число');
    }
};
getPrimeNumber(); */

