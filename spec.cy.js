describe('Test culture.web', () => {
  // it('Ojekterfassung', function () {
  //   // LOGIN with test user
  //   cy.visit('https://collections.kimnet.ch/Home');
  //   cy.get('#loginLink').click();
  //   cy.get('#Datenbank').select('KIMCHTEST');
  //   cy.get('#Username').type('STEST');
  //   cy.get('#Password').type('X4U7sCy4jFs*{enter}');

  //   // wait to see if test user is already logged in (will happen after multiple logins and no logouts)
  //   cy.wait(10000)
  //   // check if warning pop up appears
  //   if (cy.get('[id="culturePopupMessage"]')) {
  //     // confirm, that you want to stay logged in as STEST
  //     cy.get('#button1').click();
  //   }
  //   // start with the registration of a new object
  //   cy.contains('Objekterfassung').click()

  //   // choose  type of object
  //   cy.contains('Ethnologie').click()
  //   // enter the objects description
  //   cy.get('.form-control.alert.alert-warning.col-12.col-lg-12.col-md-12.col-sm-12.masterdata_field').type('Testcypress')
  //   cy.get('#pbSave').click()
  //   cy.contains('TEST-')
  //   cy.get('.fa.fa-arrow-left').click()
  //   cy.contains('Weitere Aktionen')
  // });

  it('Personenerfassung', function () {
    // LOGIN with test user
    cy.visit('https://collections.kimnet.ch/Home');
    cy.get('#loginLink').click();
    cy.get('#Datenbank').select('KIMCHTEST');
    cy.get('#Username').type('STEST');
    cy.get('#Password').type('X4U7sCy4jFs*{enter}');

    // wait to see if test user is already logged in (will happen after multiple logins and no logouts)
    cy.wait(10000)
    // check if warning pop up appears
    if (cy.get('[id="culturePopupMessage"]')) {
      // confirm, that you want to stay logged in as STEST
      cy.get('#button1').click();
    }
    // start with the registration of a new object
    cy.contains('Objekterfassung').click()

    // choose  type of object
    cy.contains('Person').click()
    // enter  object description
    cy.get('form-control.alert.alert-warning.col-12.col-lg-12.col-md-12.col-sm-12.masterdata_field').type('Testcypress')


    cy.get('#pbSave').click()
    cy.contains('TEST-')
    cy.get('.fa.fa-arrow-left').click()
    cy.contains('Weitere Aktionen')
    // open drop down list containing LOGOUT
    cy.get('[id="sessionTimer"]').click()
    // LOGOUT
    cy.contains(' Logout').click()
    // check if logout was successfull
    cy.contains('Anmelden')
  });

  id_k10352_1008k_s0s_m1045m_o706537o
})