

/// <reference types = "Cypress" />

describe('WebTest Suite', function () {
    it('WebTest', function () {


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        //Checkbox
        cy.get('input#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('input#checkBoxOption1').uncheck().should('not.be.checked')

        //Selecting Multiple Checkboxes at once
        cy.get('input[type="checkbox"]').check(['option2','option3']).should('be.checked')

        //Static Dropdown - Select method takes in value or Text visible on Ui attribute 
        cy.get('select#dropdown-class-example').select('option2').should('have.value','option2')


    }
)

}
)


