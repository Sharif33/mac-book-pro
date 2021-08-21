
function extraCostZero(zero) {
    const costZero = document.getElementById(zero);
    const priceZero = costZero.innerText;
    costZero.innerText = parseInt('0');
    return priceZero;
};

function extraCost180(oneEighty) {
    const costOneEighty = document.getElementById(oneEighty);
    const priceOneEighty = costOneEighty.innerText;
    costOneEighty.innerText = parseInt('180');
    return priceOneEighty;
};


// memory buttons 

document.getElementById('8gb-memory-btn').addEventListener('click', function () {
    extraCostZero('extra-memory');
    // const memory = document.getElementById('extra-memory');
    // memory.innerText = parseInt('0'); 
    updateTotal();
});
document.getElementById('16gb-memory-btn').addEventListener('click', function () {
    extraCost180('extra-memory');
    // const memory = document.getElementById('extra-memory'); memory.innerText = parseInt('180'); 
    updateTotal();
});

// storage buttons

document.getElementById('256gb-storage-btn').addEventListener('click', function () {
    // const storage = document.getElementById('extra-storage'); storage.innerText = parseInt('0');
    extraCostZero('extra-storage');
    updateTotal();
});
document.getElementById('512gb-storage-btn').addEventListener('click', function () {
    const storage = document.getElementById('extra-storage'); storage.innerText = parseInt('100'); updateTotal();
});
document.getElementById('1tb-storage-btn').addEventListener('click', function () {
    extraCost180('extra-storage')
    // const storage = document.getElementById('extra-storage'); storage.innerText = parseInt('180'); 
    updateTotal();
});

//shipping buttons

document.getElementById('free-delivery-btn').addEventListener('click', function () {
    // const delivery = document.getElementById('delivery-charge'); delivery.innerText = parseInt('0'); 
    extraCostZero('delivery-charge');
    updateTotal();
});
document.getElementById('charge-delivery-btn').addEventListener('click', function () {
    const delivery = document.getElementById('delivery-charge');
    delivery.innerText = parseInt('20');
    updateTotal();
});

//update total
function updateTotal() {
    const memoryCharge = document.getElementById('extra-memory').innerText;
    const storageCharge = document.getElementById('extra-storage').innerText;
    const deliveryCharge = document.getElementById('delivery-charge').innerText;
    const basePrice = document.getElementById('base-price').innerText;
    const total = parseInt(memoryCharge) + parseInt(storageCharge) + parseInt(deliveryCharge) + parseInt(basePrice);
    document.getElementById('total-price').innerText = total;
    document.getElementById('promo-total').innerText = total;
};


// promo code Use and 20% discount  

document.getElementById('promo-btn').addEventListener('click', function () {
    const discount = document.getElementById('promo-total');
    const promoDiscount = discount.innerText;
    const promoInput = document.getElementById('promo-input');
    if (promoInput.value == 'stevekaku') {
        discount.innerText = promoDiscount - ((promoDiscount * 20) / 100);
        promoInput.value = '';
    }
});

