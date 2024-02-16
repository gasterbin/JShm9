function findExpression(target, current = 1, expression = '1') {
    if (current === target) {
        return expression;
    }
    
    if (current > target) {
        return null;
    }
    
    const mulExpression = findExpression(target, current * 3, `(${expression} * 3)`);
    const addExpression = findExpression(target, current + 5, `(${expression} + 5)`);

    return mulExpression !== null ? mulExpression : addExpression;

}

const targetNumber = 13;
const resultExpression = findExpression(targetNumber);

if (resultExpression === null) {
    console.log(`Для числа ${targetNumber} невозможно получить выражение`);
} else {
    console.log(`Для числа ${targetNumber} выражение: ${resultExpression}`);
}


