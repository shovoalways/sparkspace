    document.querySelectorAll('#home_products a.add_to_cart_button').forEach(button => {
        
    const newDiv = document.createElement('div');
    newDiv.className = "custom-div"; 

    const summaryWrap = button.closest('.astra-shop-summary-wrap');
    
    if (summaryWrap) {
        summaryWrap.parentNode.insertBefore(newDiv, summaryWrap.nextSibling);

        newDiv.appendChild(button);
    }
});