function genNumberMega(amountNumbers = 6) {

    const numberMegaArr = [];

    while (numberMegaArr.length <= amountNumbers) {

        let newNumber = genNumberRandom();

        numberMegaArr.push(newNumber);

        if (!numberMegaArr.find(number => number === newNumber)) {
            numberMegaArr.pop();

        }

    }

    return numberMegaArr.sort((a, b) => a - b);
}

const genNumberRandom = () => Math.floor(Math.random() * 60 + 1);
