function updateQuantityLabel() {
    const quantityInput = document.getElementById('quantity');
    const quantityLabel = document.getElementById('quantityLabel');
    quantityLabel.textContent = quantityInput.value; 
}

document.getElementById('quantity').addEventListener('input', updateQuantityLabel);

function validateForm(event) {
    event.preventDefault(); 

    const tagline = document.getElementById("tagline").value;
    const colorOption = document.getElementById("coloroption").value;
    const size = document.querySelector('input[name="size"]:checked');
    const quantity = document.getElementById("quantity").value;
    const deliveryDate = document.getElementById("deliveryDate").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const comments = document.getElementById("comments").value;

    if (tagline.length > 30) {
        alert("Tagline must be less than 30 characters.");
        return;
    }

    if (!size) {
        alert("Please select a T-shirt size.");
        return;
    }

    if (quantity < 1 || quantity > 100) {
        alert("Quantity must be between 1 and 100.");
        return;
    }

    if (!deliveryDate) {
        alert("Please select a delivery date.");
        return;
    }

    const selectedDate = new Date(deliveryDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    if (selectedDate < today) {
        alert("Delivery date cannot be in the past. Please select a future date.");
        return;
    }

    if (name.length < 3 || name.length > 50) {
        alert("Recipient's name must be between 3 and 50 characters.");
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (address.length < 10 || address.length > 200) {
        alert("Address must be between 10 and 200 characters.");
        return;
    }

    const phonePattern = /^[789]\d{9}$/; // Starts with 7, 8, or 9 and followed by 9 digits
    if (!phonePattern.test(phone)) {
        alert("Phone number must be 10 digits and start with 7, 8, or 9.");
        return;
    }

    if (comments.length > 100) {
        alert("Comments must be less than 100 characters.");
        return;
    }

    processOrder(tagline, colorOption, size.value, quantity, deliveryDate, name, email, address, phone, comments);
    
}

function processOrder(tagline, color, size, quantity, deliveryDate, name, email, address, phone, comments) {

    const receiptContent = `
        <div class="receipt-container">
            <h2>Order Receipt</h2>
            <hr class="date-line">
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>

            <div class="receipt-details">
                <p><strong>Tagline:</strong> ${tagline}</p>
                <p><strong>Color:</strong> ${color}</p>
                <p><strong>Size:</strong> ${size}</p>
                <p><strong>Quantity:</strong> ${quantity}</p>
                <p><strong>Delivery Date:</strong> ${deliveryDate}</p>
                <p><strong>Recipient's Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Address:</strong> ${address}</p>
                <p><strong>Phone Number:</strong> ${phone}</p>
                <p><strong>Comments:</strong> ${comments}</p>
            </div>

            <p class="thank-you">Thank you for your order!</p>
        </div>
    `;

    const receiptWindow = window.open("", "_blank");
    receiptWindow.document.write(`
        <html>
            <head>
                <title>Receipt</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        padding: 20px;
                        background-color: #f4f4f4;
                        display: flex;
                        justify-content: center;
                    }
                    .receipt-container {
                        background-color: white;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        max-width: 600px;
                        width: 100%;
                    }
                    h2 {
                        color: #2a6f97;
                        text-align: center;
                        margin-bottom: 10px;
                    }           
                    .date-line {
                        border: 0;
                        border-top: 2px solid #ccc;
                        margin: 10px 0 20px;
                    }
                    p {
                        font-size: 14px;
                        margin-bottom: 8px;
                    }
                    .receipt-details {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 10px;
                    }
                    .receipt-details p {
                        margin: 5px 0;
                    }
                    .thank-you {
                        text-align: center;
                        margin-top: 20px;
                        font-size: 16px;
                        color: #2a6f97;
                    }
                </style>
            </head>
            <body>
                ${receiptContent}
            </body>
        </html>
    `);
    receiptWindow.document.close();
}

document.querySelector('form').addEventListener('submit', validateForm);
