//withdraw
const withdrawalInput = document.getElementById('withdrawal-input');
const submitBtn = document.getElementById('submit-btn');
const statusMessage = document.getElementById('status-message');
const rectable = document.getElementById('rect-trans-table').getElementsByTagName('tbody')[0];
const pendingAmountElement = document.querySelector('#with-right li:nth-child(2) h3:last-child');
const withdrawableAmountElement = document.querySelector('#with-right li:nth-child(3) h3:last-child');
let pendingAmount = parseFloat(pendingAmountElement.textContent.replace(/,/g, ''));
let withdrawableAmount = parseFloat(withdrawableAmountElement.textContent.replace(/,/g, ''));
const maxWithdrawal = withdrawableAmount.toFixed(2);

submitBtn.addEventListener('click', () => {
  const amount = parseFloat(withdrawalInput.value);

  if (isNaN(amount) || amount <= 0 || amount > maxWithdrawal) {
    alert(`Invalid withdrawal amount. Please enter a valid amount (up to ₹${maxWithdrawal}).`);
    return;
  }

  withdrawalInput.style.display = 'none';
  submitBtn.style.display = 'none';
  statusMessage.style.display = 'block';
  statusMessage.innerHTML = `Your withdrawal is under process. Amount: <span id="amount">₹ ${amount.toFixed(2)}</spna>`;

  const currentDate = new Date().toISOString().split('T')[0];
  const status = 'PENDING'; // You can update this based on the withdrawal status

  const newRow = rectable.insertRow(1); // Insert at the second position (index 1)
  const dateCell = newRow.insertCell(0);
  const statusCell = newRow.insertCell(1);
  const amountCell = newRow.insertCell(2);

  dateCell.textContent = currentDate;
  statusCell.className = status.toLowerCase();
  statusCell.textContent = status;
  amountCell.textContent = amount.toLocaleString('en-IN', { maximumFractionDigits: 2 });

  // Update withdrawable and pending balances
  withdrawableAmount -= amount;
  pendingAmount += amount;

  withdrawableAmountElement.textContent = withdrawableAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 });
  pendingAmountElement.textContent = pendingAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 });
});



//toggle
const subHeading = document.getElementById('sub-heading');
const table = document.getElementById('rect-trans-table');
const showIcon = document.getElementById('showicon');

subHeading.addEventListener('click', () => {
    table.classList.toggle('hidden');
    showIcon.classList.toggle('flipped');
});


