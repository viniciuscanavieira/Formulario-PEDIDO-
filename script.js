<script>
        function toggleDeliveryDetails() {
            const deliveryDetails = document.getElementById("delivery-details");
            const pickupDetails = document.getElementById("pickup-details");
            const howToReceiveSelect = document.getElementById("how-to-receive");
            
            if (howToReceiveSelect.value === "delivery") {
                deliveryDetails.style.display = "block";
                pickupDetails.style.display = "none";
            } else if (howToReceiveSelect.value === "pickup") {
                deliveryDetails.style.display = "none";
                pickupDetails.style.display = "block";
            }
        }

        function togglePaymentDetails() {
            const pixDetails = document.getElementById("pix-details");
            const moneyDetails = document.getElementById("money-details");
            const paymentMethodSelect = document.getElementById("modo-pagar");
            
            if (paymentMethodSelect.value === "pix") {
                pixDetails.style.display = "block";
                moneyDetails.style.display = "none";
            } else if (paymentMethodSelect.value === "dinheiro") {
                pixDetails.style.display = "none";
                moneyDetails.style.display = "block";
            }
        }

        function calculateTotal() {
            const productSelect = document.getElementById("product");
            const deliveryMethodSelect = document.getElementById("how-to-receive");
            const bairroSelect = document.getElementById("bairro");
            
            const productPrice = productSelect.value === "agua" ? 7 : 0; // Água custa 7 reais
            const deliveryPrice = deliveryMethodSelect.value === "delivery" ? getDeliveryPrice(bairroSelect.value) : 0;
            
            const total = productPrice + deliveryPrice;
            
            // Atualiza o valor total na interface
            const totalAmountInput = document.getElementById("total-amount");
            totalAmountInput.value = total.toFixed(2);
        }

        function getDeliveryPrice(bairro) {
            switch (bairro) {
                case "bairro1":
                    return 5; // Valor fixo para o Bairro 1
                case "bairro2":
                    return 8; // Valor fixo para o Bairro 2
                case "bairro3":
                    return 10; // Valor fixo para o Bairro 3
                default:
                    return 0; // Valor padrão se nenhum bairro selecionado
            }
        }
    </script>