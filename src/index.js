module.exports = function toReadable(number) {

    let ones = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }

    let tens = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    }

    let prefixes = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }

    let finalNumText = convertNum(number);

    function convertNum(number) {
        let numText = "";

        let absNum = number;

        numText += threeNumbers(absNum);

        return numText;
    }

    function threeNumbers(number) {
        let currentText = "";

        if (number == 0) {
            return "zero";
        }

        if (number < 100) {
            currentText += twoOrLessNumbers(number);
            return currentText;
        }

        currentText += ones[number.toString().charAt(0)];
        currentText += " hundred ";

        number.toString().substr(1) !== "00" ?
            currentText += twoOrLessNumbers(parseInt(number.toString().substr(1)))
            : currentText = currentText.trim();

        return currentText;
    }

    function twoOrLessNumbers(number) {
        var currentText = "";

        if (number < 10) {
            return ones[number];
        }

        if (number in tens) {
            currentText += tens[number];
        } else {
            currentText += prefixes[number.toString().charAt(0)];

            if (number.toString().charAt(1) !== "0") {
                currentText += " " + ones[number.toString().charAt(1)];
            }
        }

        return currentText;
    }

    return finalNumText;
}