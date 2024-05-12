//cypress - Spec
/// <reference types="Cypress" />

describe('First Test Suite', function () {
    it('First Test Case', function () {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input[placeholder="Search for Vegetables and Fruits"]').type('ca')
        cy.wait(2000)
        //Best Locator -  should match exactly four elements on the webpage.
        //cy.get('div.products div.product').should('have.length',4)

        //Using Visible Keyword to find only the elements that are visible.
        //cy.get('div.product:visible').should('have.length', 4)

        //Parent Child Chaining
        //cy.get('.products').find('.product').should('have.length',4)

        //Select Element in the Array List - eq Method
        //cy.get('.products').find('.product').should('have.length',4).eq(2)    

        //Use Contains Text in the bigger tag
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4).eq(2).contains('ADD TO CART').click()

        //Git Enabled

        /*cy.get('.products').find('.product').should('have.length',4).eq(2).contains('ADD TO CART').click()
        cy.screenshot
        cy.get('div.product:visible').should('have.length',4)
        */
 
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const veggieText = $el.find('h4.product-name').text()
            if (veggieText.includes('Cashew')) {
                cy.wrap($el).find('button').click()
            }

        }
        )

    }
    )

}
)
