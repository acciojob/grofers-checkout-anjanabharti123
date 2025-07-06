const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll('.price');
  let total = 0;

  prices.forEach(price => {
    total += parseFloat(price.textContent);
  });

  let totalRow = document.getElementById("totalRow");
  if (!totalRow) {
    totalRow = document.createElement('tr');
    totalRow.id = "totalRow";
    const totalCell = document.createElement('td');
    totalCell.colSpan = 2;
    totalCell.id = "ans"; // <- This is what Cypress test is looking for
    totalRow.appendChild(totalCell);
    document.querySelector('table').appendChild(totalRow);
  }

  // Set only number (no text) as per test expectation
  document.getElementById("ans").textContent = total;
};

getSumBtn.addEventListener("click", getSum);
