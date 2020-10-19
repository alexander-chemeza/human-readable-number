module.exports = function toReadable(number) {
    let digit = {
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
    };

    let firstDigit = {
        0: 'ten',
        1: 'eleven',
        2: 'twelve',
        3: 'thirteen',
        4: 'fourteen',
        5: 'fifteen',
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen'
    };

    let doubleDigit = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    };

    let threeDigit = {
        1: 'one hundred',
        2: 'two hundred',
        3: 'three hundred',
        4: 'four hundred',
        5: 'five hundred',
        6: 'six hundred',
        7: 'seven hundred',
        8: 'eight hundred',
        9: 'nine hundred'
    }

    let workingNum = Array.from(number.toString().split(''));
    let result = null;
    // 0...9
    if (workingNum.length < 2) {
        result = digit[Number(workingNum[0])];
    } else if (workingNum.length == 2 && Number(workingNum[0]) == 1) { // 10...19
        result = firstDigit[Number(workingNum[1])];
    } else if (workingNum.length == 2 && Number(workingNum[0]) != 1) { // 20...99
        if(Number(workingNum[1]) != 0) {
            result = doubleDigit[Number(workingNum[0])] + ' ' + digit[Number(workingNum[1])];
        } else {
            result = doubleDigit[Number(workingNum[0])];
        }
    } else if(workingNum.length == 3) {
        if(Number(workingNum[1]) == 0 && Number(workingNum[2]) == 0) { // 100...200..300
            result = threeDigit[Number(workingNum[0])];
        } else if(Number(workingNum[2]) != 0 && Number(workingNum[1]) == 0) { // 101 102 103
            result = threeDigit[Number(workingNum[0])] + ' ' + digit[Number(workingNum[2])];
        } else if (Number(workingNum[2]) == 0 && Number(workingNum[1]) == 1) { // 110 210
            result = threeDigit[Number(workingNum[0])] + ' ' + firstDigit[0];
        } else if(Number(workingNum[1]) == 1 && Number(workingNum[2]) > 0) { // 111 112
            result = threeDigit[Number(workingNum[0])] + ' ' + firstDigit[Number(workingNum[2])];
        } else if (Number(workingNum[2]) == 0 && Number(workingNum[1]) > 1) { // 120 130 140
            result = threeDigit[Number(workingNum[0])] + ' ' + doubleDigit[Number(workingNum[1])];
        } else {
            result = threeDigit[Number(workingNum[0])] + ' ' + doubleDigit[Number(workingNum[1])] + ' ' + digit[Number(workingNum[2])];
        }
    }
    return result;
}


