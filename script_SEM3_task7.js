let age=parseInt(prompt("Введите свой возраст: "));

switch (age){
    case 18:
        alert(`Если Вам 18 и больше, Вы совершеннолетний, все можно!`);
        break;
        case 30:
            alert(`Завтра на работу, ложись спать!`);
        break;
        case 10:
            alert(`Иди учи уроки!`);
        break;
    default:
        alert(`Я не знаю что тебе делать)-:`);

        break;
}