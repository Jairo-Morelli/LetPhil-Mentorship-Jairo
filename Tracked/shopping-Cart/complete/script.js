let cart = [];

function renderCart() {
  const list = document.getElementById("cart-list");
  const totalPriceEl = document.getElementById("total-price");
  list.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => removeProduct(index);

    li.appendChild(removeBtn);
    list.appendChild(li);

    total += item.price;
  });

  totalPriceEl.textContent = total;
}

function addProduct() {
  const nameInput = document.getElementById("product-name");
  const priceInput = document.getElementById("product-price");

  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value);

  if (name && !isNaN(price) && price > 0) {
    cart.push({ name, price });
    nameInput.value = "";
    priceInput.value = "";
    renderCart();
  }
}

function removeProduct(index) {
  cart.splice(index, 1);
  renderCart();
}

renderCart();
