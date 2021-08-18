
function udateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }    
    productInput.value = productNumber;

    // update product total 
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    // update calculate total 
    calculateTotal();
    
} 

function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = productInput.value;
    return productNumber;

}
function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const texAmount = subTotal / 5;
    const totalPrice = subTotal + texAmount;
    // update on the html file 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tex-amount').innerText = texAmount;
    document.getElementById('total-price').innerText = totalPrice;

}



document.getElementById('phone-plus').addEventListener('click', function(){
    udateProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    udateProductNumber('phone', 1219, false);
});
document.getElementById('case-plus').addEventListener('click', function(){
    udateProductNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function(){
    udateProductNumber('case', 59, false);

});

