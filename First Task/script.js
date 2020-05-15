
let money = prompt ('Ваш бюджет на месяц?', ''),
    time = prompt ('Введите дату в формате YYYY-MM-DD', '');
let appData = {
    budget: money,
    expenses : {},
    optionalExpences : {},
    income : [],
    timeData : time,
    savings : false
};    


for (let index = 0; index < 2; index++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = prompt("Во сколько обойдется?", '');
    
    appData.expenses[a] = b;
}

alert(appData.budget/30);