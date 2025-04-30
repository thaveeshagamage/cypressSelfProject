describe('Login to site', () => {

    it('Navigate to page', () => {
          cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
          cy.wait(5000)
          cy.get("input[placeholder='Username']").type('Admin')
          cy.get("input[placeholder='Password']").type('admin123')
          cy.get("button[type='submit']").click()
          cy.get(':nth-child(1) > .oxd-main-menu-item').click()
          cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click()
          cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
          cy.get('.oxd-select-dropdown > :nth-child(2)').click()
          cy.get('.oxd-autocomplete-text-input > input').click().clear().type('Reb',{delay:200}).select
          cy.wait(2000)
          //select name from the dropdown after typinmg few letters on the name field
          cy.get('.oxd-autocomplete-dropdown').find('>div').contains('Reb').click()
          



    })


  })