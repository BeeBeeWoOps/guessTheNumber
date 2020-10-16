 "use strict";
function randoNumber(){
   return Math.floor(Math.random() * 100);
}

function guessNumber (a,c){   
    --c;
     function rec () {
        let b = prompt('Угадай число от 1 до 100');
        if(b === null){
            alert('Игра окончена');
        }else if(c <= 0){
            let rez = confirm('Попытки закончились, хотите сыграть еще?');
            if(rez === true){
               return guessNumber(a,10);
            } 
        }else if(+b > a) {
            alert('Загаданное число меньше, осталось попыток: ' + c);
            
            return guessNumber(a,c);
        }else if(+b < a) {
            alert('Загаданное число больше, осталось попыток: ' + c);
            
           return guessNumber(a, c);
         }else if(isNaN(b)) {
            alert('Введите число! ');
            return guessNumber(a,c);
        }
        else if(+b === a){           
           let rez = confirm('Поздравляем, Вы угадали!! Хотели бы сыграть еще?');
           if(rez === true){
               guessNumber(randoNumber(),10);
           }
        }
    }
    console.dir(rec);
    return rec();
}

const gues = guessNumber(randoNumber(),10);
