function parseIndianNumber(str) {
    if (!str || str === '-') return 0;
    return parseInt(str.replace(/,/g, ''), 10);
}

function formatIndianNumber(num) {
    return num.toLocaleString('en-IN');
}

function evaluateExpression(expression) {
    try {
    const sanitized = expression.replace(/,/g, '');
    return Function(`return (${sanitized})`)();
    } catch {
    return 0;
    }
}


const tbody = document.getElementById('tableBody');
let previousAchieved = parseIndianNumber(bal);

data.forEach((row, index) => {
    const incrementVal = parseIndianNumber(row.increment);

    // Only add "+" if increment is not empty
    if (index === 0) {
    row.how = row.increment
        ? `${bal} + ${row.increment}`
        : `${bal}`;
    } else {
    row.how = row.increment
        ? `${formatIndianNumber(previousAchieved)} + ${row.increment}`
        : `${formatIndianNumber(previousAchieved)}`;
    }

    row.total = evaluateExpression(row.how);
    const totalValue = row.total || 0;

    const targetSpendValue = evaluateExpression(row.targetSpend || '0');
    const actualSpendValue = evaluateExpression(row.actualSpend || '0');

    let targetSpendDisplay = '-';
    if (row.targetSpend) {
    const sanitizedTarget = row.targetSpend.replace(/\s+/g, '');
    const containsOperator = /[+\-*/]/.test(sanitizedTarget);
    if (containsOperator) {
        const formattedValue = formatIndianNumber(targetSpendValue);
        targetSpendDisplay = `${row.targetSpend} = ${formattedValue}`;
    } else {
        targetSpendDisplay = row.targetSpend;
    }
    }

    let actualSpendDisplay = '-';
    if (row.actualSpend) {
    const sanitizedActual = row.actualSpend.replace(/\s+/g, '');
    const containsOperator = /[+\-*/]/.test(sanitizedActual);
    if (containsOperator) {
        const formattedValue = formatIndianNumber(actualSpendValue);
        actualSpendDisplay = `${row.actualSpend} = ${formattedValue}`;
    } else {
        actualSpendDisplay = row.actualSpend;
    }
    }

    const targetValue = totalValue - targetSpendValue;
    const achievedValue = totalValue - actualSpendValue;

    row.target = isNaN(targetValue) ? '-' : formatIndianNumber(targetValue);
    row.achieved = isNaN(achievedValue) ? '-' : formatIndianNumber(achievedValue);

    previousAchieved = achievedValue;

    const tr = document.createElement('tr');
    const cells = [
    row.date,
    row.how,
    isNaN(totalValue) ? '-' : formatIndianNumber(totalValue),
    targetSpendDisplay,
    row.target,
    actualSpendDisplay,
    row.achieved
    ];

    cells.forEach(cell => {
    const td = document.createElement('td');
    td.textContent = cell;
    tr.appendChild(td);
    });

    tbody.appendChild(tr);
});