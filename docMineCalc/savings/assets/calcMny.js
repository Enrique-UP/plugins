let grandTotal = 0;
let firstTwoTotal = 0;

function parseAmountString(str) {
    if (!str) return 0;
    return str
        .split('+')
        .map(part => parseInt(part.replace(/,/g, '').trim()))
        .filter(n => !isNaN(n))
        .reduce((sum, val) => sum + val, 0);
}

function formatHowText(text) {
    return text
        .split('+')
        .map(part => {
            let num = parseInt(part.replace(/,/g, '').trim());
            return !isNaN(num) ? num.toLocaleString("en-IN") : part.trim();
        })
        .join(' + ');
}

const tables = document.querySelectorAll(".table");

tables.forEach((table, index) => {
    let tableTotal = 0;

    table.querySelectorAll("tbody tr").forEach(row => {
        const howTd = row.children[2];
        const amountTd = row.children[3];

        if (howTd.textContent.trim()) {
            howTd.textContent = formatHowText(howTd.textContent);
        }

        let amountText = amountTd.textContent.trim();
        let amount = parseInt(amountText.replace(/,/g, ''));

        if (!amountText || isNaN(amount)) {
            amount = parseAmountString(howTd.textContent);
            amountTd.textContent = amount.toLocaleString("en-IN");
        } else {
            amountTd.textContent = amount.toLocaleString("en-IN");
        }

        tableTotal += amount;
    });

    const totalCell = table.querySelector("tfoot td:last-child");
    if (totalCell) {
        totalCell.textContent = tableTotal.toLocaleString("en-IN");
        grandTotal += tableTotal;
        if (index < 2) {
            firstTwoTotal += tableTotal;
        }
    }
});

// Set total of first two tables
const totalOfFirstTwo = document.querySelector(".total tfoot td:last-child");
if (totalOfFirstTwo) {
    totalOfFirstTwo.textContent = firstTwoTotal.toLocaleString("en-IN");
}

// Set grand total
const grandTotalCell = document.querySelector(".totalTable tfoot td:last-child");
if (grandTotalCell) {
    grandTotalCell.textContent = grandTotal.toLocaleString("en-IN");
}
