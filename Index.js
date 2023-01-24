// Form Elements
const crepeForm = document.querySelector('#crepe-form');
const crepeType = document.querySelector('#crepe-type');
const crepeToppings = document.querySelector('#crepe-toppings');
const crepeQuantity = document.querySelector('#crepe-quantity');

// Handle form submit
crepeForm.addEventListener('submit', e => {
  e.preventDefault();
  // Get form values
  const type = crepeType.value;
  const toppings = crepeToppings.value;
  const quantity = crepeQuantity.value;

  // Validate form
  if (type === '' || toppings === '' || quantity === '') {
    alert('Please fill in all fields');
    return;
  }

  // Create order object
  const order = {
    type,
    toppings,
    quantity
  };

  // Save to local storage
  localStorage.setItem('crepeOrder', JSON.stringify(order));

  // Show order summary
  showSummary(order);
});

// Show order summary
function showSummary(order) {
  const summary = document.querySelector('.summary');
  summary.innerHTML = `
    <h2>Order Summary</h2>
    <p>Type: ${order.type}</p>
    <p>Toppings: ${order.toppings}</p>
    <p>Quantity: ${order.quantity}</p>
  `;
}