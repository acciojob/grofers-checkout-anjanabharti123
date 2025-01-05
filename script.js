const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll('.price');
  let total = 0;

  // Sum all the prices
  prices.forEach(price => {
    total += parseFloat(price.textContent); // Convert the text content to a number
  });

  // Create a new row for the total price if it doesn't already exist
  let totalRow = document.querySelector("#totalRow");
  if (!totalRow) {
    totalRow = document.createElement('tr');
    totalRow.id = "totalRow"; // Add an ID for easy reference
    const totalCell = document.createElement('td');
    totalCell.colSpan = 2; // Merge both columns to show the total price across the entire row
    totalRow.appendChild(totalCell);
    document.querySelector('table').appendChild(totalRow);
  }

  // Update the total price in the row
  totalRow.querySelector('td').textContent = `Total Price: Rs ${total}`;
  
};

getSumBtn.addEventListener("click", getSum);

