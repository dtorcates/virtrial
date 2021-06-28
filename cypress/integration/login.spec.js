

describe ('Login Test Cases',function(){

  beforeEach(() => {
    cy.visit('public/#/siteStaff')
  })


  it.only('User Should navigate to the Icom menu  App', () => {
    
    cy.wait(5000)
    cy.get('.icon_menu').should('be.visible').click()
    cy.wait(1000)
    cy.contains('Site staff').click()
    cy.wait(3000)
    
  })
  
  it.only('User Should fill all fields', () => {
    cy.wait(5000)
    cy.get('[data-bind="invisible: vm_showAnonymousField"] > .landing-box__field > #txtloginemail').type(Cypress.env('user'))
    cy.get('#txtloginpassword').type(Cypress.env('password'))
    cy.get('[type="checkbox"]').check()
    cy.wait(3000)
    
  })
  it.only('User Should display Terms and Conditions', () => {
    cy.wait(5000)
    cy.get('.landing-box__footer > [data-bind="click: vm_onTermsClick"]').click()
    cy.wait(3000)
    
  })


  it.only('User Should display Contac Us', () => {
    cy.wait(5000)
    cy.get('.footer-contact-us').click()
    cy.wait(3000)
    
  })

 

it.only('User Should display Languajes', () => {
 cy.wait(5000)
 cy.get('.landing-box__footer > .landing-lang__link').click()
 cy.get('.landing-box__container > .landing-lang > .landing-lang__wrap > .landing-lang__main > .landing-lang__list > :nth-child(3) > .landing-lang__input').click()
 cy.wait(3000)
  
})
  

it.only('User should navigate to Forgot Password and go back', () => {
    cy.wait(10000)
    cy.get('[data-bind="invisible: vm_forgotPasswordLinkHidden, click: vm_onForgotPasswordClick"]')
    cy.contains('Forgot your password?').click()
    cy.wait(5000)
    cy.get('.button__gray-outline').click()
    
})



it.only('User should  not navigate to the Login App', () => {
    
  cy.wait(5000)
  cy.get('[data-bind="invisible: vm_showAnonymousField"] > .landing-box__field > #txtloginemail').type('User@virtrial.com',"{enter}")
  cy.get('#txtloginpassword').type('Pass@1234',"{enter}")
  cy.wait(1000)
  cy.get('#loginButton').click()

  cy.contains('Authentication failed. Check your login information and try again.')
})

it.only('User should navigate to the Login App', () => {
    
    cy.wait(5000)
    cy.get('.icon_menu').should('be.visible').click()
    cy.wait(1000)
    cy.contains('Site staff').click()
    cy.get('[data-bind="invisible: vm_showAnonymousField"] > .landing-box__field > #txtloginemail').type(Cypress.env('user'),"{enter}")
    cy.get('#txtloginpassword').type(Cypress.env('password'),"{enter}")
    cy.wait(1000)
    cy.get('[data-bind="visible: vm_isUsualLogin"] > .landing-box__button').click()
})

})


