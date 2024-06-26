

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

        //Dynamic Dropdown - Selecting 1 option from the Dropdown List 
        cy.get('input#autocomplete').type('Ind')
        cy.get('ul#ui-id-1 div').each(($el, index, $list) => {
            if ($el.text().trim() === 'India') {
              cy.wrap($el).click()
            }
          })

          cy.get('input#autocomplete').should('have.value','India')

        //Handle Invisble Elements & Assertions
          cy.get('input#displayed-text').should('be.visible')
          cy.get('input#hide-textbox').click()
          cy.get('input#displayed-text').should('not.be.visible')
          cy.get('input#show-textbox').click()
          cy.get('input#displayed-text').should('be.visible')


        //Radio Buttons
        cy.get('input[value="radio1"]').click().should('be.checked')
        //Clicking all the Options of Radio Buttons
        /*cy.get('input[name="radioButton"]').each(($el, index, $list) => {
             cy.wrap($el).click()
            
          })
          */
    }
)

}
)


