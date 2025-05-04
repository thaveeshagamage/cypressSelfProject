describe('Login to site', () => {

    it('Navigate to page', () => {
          cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
          cy.wait(5000)
          cy.get("input[placeholder='Username']").type('Admin')
          cy.get("input[placeholder='Password']").type('admin123')
          cy.get("button[type='submit']").click()
          cy.get(':nth-child(2) > .oxd-main-menu-item').click()
          
          // Function to find and delete a specific employee
        const employeeName = 'Sania'; // Replace with the name of the employee to delete

        function findAndDeleteEmployee() {
            cy.get("[class='oxd-table-body']").each(($row) => {
                if ($row.text().includes(employeeName)) {
                    // Click the delete button for the specific row
                    cy.wrap($row).within(() => {
                        cy.get("[class='oxd-icon bi-trash']").first().click(); // Replace with the actual delete button selector
                    });
                    cy.get("[class='oxd-sheet oxd-sheet--rounded oxd-sheet--white oxd-dialog-sheet oxd-dialog-sheet--shadow oxd-dialog-sheet--gutters orangehrm-dialog-popup']")
                        .contains(' Yes, Delete ')
                        .click(); // Confirm deletion
                    return false; // Exit the loop
                }
            }).then(($rows) => {
                  // If the employee is not found, go to the next page
                  if (!$rows.text().includes(employeeName)) {
                      cy.get("[class='oxd-icon bi-chevron-right']").then(($nextButton) => { // Replace with the actual next button selector
                          if (!$nextButton.is(':disabled')) {
                              cy.wrap($nextButton).click();
                              findAndDeleteEmployee(); // Recursively call the function
                          } else {
                              throw new Error('Employee not found');
                          }
                    });
                }
            });
        }

        findAndDeleteEmployee();



    })


  })