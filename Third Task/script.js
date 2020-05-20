let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpences: {},
    income: [],
    timeData: time,
    savings: false
};

function chooseExpenses() {
    for (let index = 0; index < 2; index++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');

        if ((typeof (a)) === 'string' && (typeof (a) != null) && (typeof (b) != null) && a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {

        }

    }
}

function detectDayyBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    return appData.moneyPerDay;
}

chooseExpenses();
detectDayyBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
    
    }
}

function chooseOptionalExpences() {
    for (let index = 0; index < 3; index++) {
        let a = prompt('Статья необязательных расходов?'),
            
        
    }
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?")

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome):
    }
}

checkSavings();