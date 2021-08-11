class Hair_Care_Po {

    addSpecificProductToCart(product_name) {
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text().includes(product_name)) {
                cy.get('.productcart').eq(index).click();
                cy.get('.oneprice').eq(index).then(function (price) {
                    const itemPrice = price.text()
                    cy.log("Price of selected item is equal to:" + " " + itemPrice)
                })
            }

        })
    };

}
export default Hair_Care_Po;