
function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(isIncreasing == false && productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    calculateTotal();
}
function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = productInput.value;
    return productNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone')  * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const texAmount = subTotal / 3;
    const totalPrice = subTotal + texAmount;
    
    // update on html file 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tex-amount').innerText = texAmount;
    document.getElementById('total-price').innerText = totalPrice;
}



document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true);
    
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone',1219, false);
});
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false);
});