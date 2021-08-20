
// memory buttons 

document.getElementById('8gb-memory-btn').addEventListener('click', function () {
    const memory = document.getElementById('extra-memory');
    memory.innerText = parseInt('0'); updateTotal();
});
document.getElementById('16gb-memory-btn').addEventListener('click', function () {
    const memory = document.getElementById('extra-memory'); memory.innerText = parseInt('180'); updateTotal();
});

// storage buttons

document.getElementById('256gb-storage-btn').addEventListener('click', function () {
    const storage = document.getElementById('extra-storage'); storage.innerText = parseInt('0'); updateTotal();
});
document.getElementById('512gb-storage-btn').addEventListener('click', function () {
    const storage = document.getElementById('extra-storage'); storage.innerText = parseInt('100'); updateTotal();
});
document.getElementById('1tb-storage-btn').addEventListener('click', function () {
    const storage = document.getElementById('extra-storage'); storage.innerText = parseInt('180'); updateTotal();
});

//shipping buttons

document.getElementById('free-delivery-btn').addEventListener('click', function () {
    const delivery = document.getElementById('delivery-charge'); delivery.innerText = parseInt('0'); updateTotal();
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


//promocode Use

document.getElementById('promo-input').addEventListener('keyup', function (event) {
    const promoBtn = document.getElementById('promo-btn');
    if (event.target.value == 'stevekaku') {
        promoBtn.removeAttribute('disabled');
    }
    else {
        promoBtn.setAttribute('disabled', true);
    }
});

