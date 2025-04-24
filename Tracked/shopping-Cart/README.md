## **Lesson Title:** Manipulating an Array and Rerendering it in HTML (Shopping Cart Example)

**Objective:**

- Modify an array (add, remove, update items).
- Dynamically update and rerender the DOM.

**Prerequisites:**

- Basic JavaScript, arrays, and functions.
- Familiarity with DOM manipulation.

---

## **Lesson Outline**

### **1. Setting Up the HTML Structure** (5 minutes)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Shopping Cart</title>
  </head>
  <body>
    <h1>Shopping Cart</h1>

    <div>
      <input type="text" id="product-name" placeholder="Enter product name" />
      <input type="number" id="product-price" placeholder="Enter price" />
      <button onclick="addProduct()">Add to Cart</button>
    </div>

    <ul id="cart-list"></ul>

    <h2>Total: $<span id="total-price">0</span></h2>

    <script src="script.js"></script>
  </body>
</html>
```

### **Explanation:**

- `<ul>` displays the cart items.
- Two `<input>` fields for product name and price.
- A "Total" section dynamically updates based on the cart.

---

### **2. Initializing the Cart and Rendering it** (10 minutes)

```js
let cart = []; // array starts out empty

function renderCart() {
  const list = document.getElementById("cart-list");
  const totalPriceEl = document.getElementById("total-price");
  list.innerHTML = "";

  let total = 0;

  [
   0 { name: "shirt", price: 100 },
   1 { name: "shorts", price: 130 },
  ];



  function cartForEachHandler(item, index, originalArr) {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => removeProduct(index);

    li.appendChild(removeBtn);
    list.appendChild(li);

    total += item.price;
  }

  cart.forEach((item, index) => {

  });

  totalPriceEl.textContent = total;
}

window.onload = renderCart();
```

### **Explanation:**

- `cart` holds the products.
- `renderCart()` clears and updates the cart list.
- Also calculates and displays the total price.

---

### **3. Adding Products to the Cart** (5 minutes)

```js
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
```

### **Explanation:**

- Reads the product name and price.
- Adds a product object to `cart`.
- Clears the input fields and rerenders.

---

### **4. Removing a Product from the Cart** (5 minutes)

```js
function removeProduct(index) {
  cart.splice(index, 1);
  renderCart();
}
```

### **Explanation:**

- Removes a product at the given index.
- Calls `renderCart()` to update the list and total price.

---

### **5. Updating a Product's Price (Bonus Feature)** (10 minutes)

```js
function updateProduct(index) {
  const newPrice = parseFloat(prompt("Enter new price:", cart[index].price));
  if (!isNaN(newPrice) && newPrice > 0) {
    cart[index].price = newPrice;
    renderCart();
  }
}
```

**Modification to `renderCart()`**

```js
const editBtn = document.createElement("button");
editBtn.textContent = "Edit Price";
editBtn.onclick = () => updateProduct(index);
li.appendChild(editBtn);
```

### **Explanation:**

- Users can change a product’s price via a prompt.

---

## **Conclusion & Exercises**

### **Student Tasks:**

1. Add quantity support (e.g., `{ name: "Apple", price: 2, quantity: 3 }`).
2. Prevent duplicate products from being added.
3. Add a "Clear Cart" button to reset everything.
4. add total cost ui at bottom of list
   This example applies **real-world shopping cart logic**, making it more engaging.
