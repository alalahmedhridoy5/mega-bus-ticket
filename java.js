function handleTicketPrise(ticket, isIncrease) {
    const firstClassInput = document.getElementById(ticket + "-count");
    const firstClassCount = parseInt(firstClassInput.value);
    let firstClassNewCount = 0;
    if (isIncrease == true) {
        firstClassNewCount = firstClassCount + 1;
    }
    if (isIncrease == false && firstClassCount > 0) {
        firstClassNewCount = firstClassCount - 1;
    }
    firstClassInput.value = firstClassNewCount;
    let totalAmount = 0;
    if (ticket == 'first-class') {
        totalAmount = firstClassNewCount * 150;
    }
    if (ticket == 'economy') {
        totalAmount = firstClassNewCount * 100;
    }
    document.getElementById("total-amount").innerText = totalAmount;
    const vatAmount = totalAmount * 0.1;
    document.getElementById("vat-amount").innerText = vatAmount;
    const grandTotal = totalAmount + vatAmount;
    document.getElementById("grand-total").innerText = grandTotal;

};