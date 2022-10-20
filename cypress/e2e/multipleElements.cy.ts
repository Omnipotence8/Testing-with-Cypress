describe('Multiple Elements for Register Account', () => {
    beforeEach(() => {
        cy.visit(`?route=account/register`);;
    });
    it('navbar', () => {
        const menuLincText =[
            " Home",
            " Special",
            " Blog",
            " Mega Menu",
            " AddOns",
            " My account"
        ]
        cy.get('#widget-navbar-217834 > .navbar-nav> .nav-item').each((item,index,list) => {
            // console.log(list);
            expect(list).to.have.length(6);
            cy.wrap(item).should("contain.text", menuLincText[index]);
            // expect(Cypress.$(item).text()).to.eq(menuLincText[index]);record identical to the previous one
        })

    })
    })
