// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add(
    'reqMotorDroolsResid',
    (method, url, body, headers = {}) => {

        headers = {
            'Content-Type': 'application/json',
            'accept': 'application/json',
            'x-api-key': 'V9xkI0HvoQ3jOZxrTnKdU2fG9m3QWcVp5AFAUxmH',
            ...headers
        }

        cy.api({
            method,
            url,
            body,
            headers,
            failOnstatusCode: true
        });
    });

Cypress.Commands.add(
    'reqApiHubResidencial',
    (method, url, body, headers = {}) => {
        headers = {
            'Content-Type': 'application/json',
            'accept': 'application/json',
            'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmluY2lwYWwiOiJVc2VyQ29udGV4dCIsIm5hbWVpZCI6IjQ2MjQiLCJ1bmlxdWVfbmFtZSI6IjQ2MjQiLCJDaGFubmVsSWQiOiIyIiwicm9sZSI6Ik11bHRpQ2FsY3VsbyIsIm5iZiI6MTc0ODM4OTYxNCwiZXhwIjoxNzQ4NDE4NDE0LCJpYXQiOjE3NDgzODk2MTR9.bcOAkcL8Tj40rJcl4CGPvmAKWjVt3SD_MO_yImLEC7I',
            ...headers
        }

        cy.api({
            method,
            url,
            body,
            headers,
            failOnstatusCode: true
        });
    });

Cypress.Commands.add(
    'reqAuthToken',
    (method, url, body, headers = {}) => {

        headers = {
            'Content-Type': 'application/json',
            'accept': 'application/json',
            ...headers
        }

        cy.api({
            method,
            url,
            body,
            headers,
            failOnstatusCode: true
        });
    });


