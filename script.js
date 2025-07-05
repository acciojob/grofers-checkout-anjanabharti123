const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll('.price');
  let total = 0;

  // Calculate total price
  prices.forEach(price => {
    total += parseFloat(price.textContent);
  });

  // Check if total row already exists
  let totalRow = document.getElementById("totalRow");
  if (!totalRow) {
    totalRow = document.createElement('tr');
    totalRow.id = "totalRow";
    const totalCell = document.createElement('td');
    totalCell.colSpan = 2;
    totalRow.appendChild(totalCell);
    document.querySelector('table').appendChild(totalRow);
  }

  // Update total price in the row
  totalRow.querySelector('td').textContent = `Total Price: Rs ${total}`;
};

getSumBtn.addEventListener("click", getSum);
