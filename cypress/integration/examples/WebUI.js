
/// <reference types = "Cypress" />

describe('WebTest Suite', function () {
    it('WebTest', function () {


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('input#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('input#checkBoxOption1').uncheck().should('not.be.checked')

        //Selecting Multiple Checkboxes at once
        cy.get('input[type="checkbox"]').check(['option2','option3']).should('be.checked')



    }
)

}
)


