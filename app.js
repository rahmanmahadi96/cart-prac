function quantity (product, price, isAdd){
    const nike = document.getElementById(product +'-input');
    let nikeQyuan = nike.value;
    if(isAdd == true){
        nikeQyuan = parseInt(nike.value) + 1;
    }
    else if(nikeQyuan > 0){
        nikeQyuan = parseInt(nike.value) - 1;
    }
    nike.value = nikeQyuan;

    const nikeTotal = document.getElementById(product +'-total');
    nikeTotal.innerText = nike.value * price;

    calculate();
    
}

function getInput(product){
    const inputField = document.getElementById(product +'-input');
    const inputNumber = inputField.value;
    return inputNumber;
}

function calculate(){
    const nikeAmount = getInput('nike') * 300;
    const proAmount = getInput('pro') * 200;
    const maxAmount = getInput('max') * 400;
    const totalAmount = nikeAmount + proAmount + maxAmount;

    document.getElementById('total').innerText = totalAmount;
}

document.getElementById('nike-plus').addEventListener('click', function(){
    quantity('nike', 300, true);

})

document.getElementById('nike-minus').addEventListener('click', function(){
    quantity('nike',300, false);
})

document.getElementById('pro-plus').addEventListener('click', function(){
    quantity('pro',200, true);
})

document.getElementById('pro-minus').addEventListener('click', function(){
    quantity('pro',200, false);
})
document.getElementById('max-plus').addEventListener('click', function(){
    quantity('max',400, true);
})

document.getElementById('max-minus').addEventListener('click', function(){
    quantity('max',400, false);
})