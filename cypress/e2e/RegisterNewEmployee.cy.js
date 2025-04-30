describe('Login to site', () => {

    it('Navigate to page', () => {
          cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
          cy.wait(5000)
          cy.get("input[placeholder='Username']").type('Admin')
          cy.get("input[placeholder='Password']").type('admin123')
          cy.get("button[type='submit']").click()
          cy.get(':nth-child(2) > .oxd-main-menu-item').click()
          cy.get('.orangehrm-header-container > .oxd-button').click()
          cy.wait(1000)
          cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Samith')
          cy.get('.--name-grouped-field > :nth-child(2) > :nth-child(2) > .oxd-input').type('Thanuja')
          cy.get('.--name-grouped-field > :nth-child(3) > :nth-child(2) > .oxd-input').type('Gamage')
          cy.wait(1000)
          cy.get('.oxd-switch-input').click()
          cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('gamage.thanuja')
          cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('abc@123')
          cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('abc@123')
          cy.wait(1000)
          cy.get('.oxd-button--secondary').click()



    })


  })