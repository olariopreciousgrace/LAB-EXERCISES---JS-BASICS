const priceInput = document.getElementById("priceInput");
        const taxInput = document.getElementById("taxInput");
        const resultElement = document.getElementById("result");

        function calculateTotal() {
            let price = parseFloat(priceInput.value);
            let taxRate = parseFloat(taxInput.value);

            if (!isNaN(price) && !isNaN(taxRate)) {
                let total = price + (price * taxRate / 100);
                
                resultElement.innerHTML = "Total price:" + "<br>" + total.toFixed(2);
            } else {
                alert("Error! Please enter valid numbers.");
            }
        }