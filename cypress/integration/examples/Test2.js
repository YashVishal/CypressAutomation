//cypress - Spec
/// <reference types="Cypress" />

describe('Second Test Suite', function () {
    it('Second Test Case', function () {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input[placeholder="Search for Vegetables and Fruits"]').type('ca')
        cy.wait(2000)

        cy.get('.products').as('productLocator')

        //Each Loop - Kind of acts as a for loop 
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const veggieText = $el.find('h4.product-name').text()
            if (veggieText.includes('Cashew')) {
                cy.wrap($el).find('button').click()
                console.log(veggieText)
            }

        }
        )

        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()


    }
    )

}
)
