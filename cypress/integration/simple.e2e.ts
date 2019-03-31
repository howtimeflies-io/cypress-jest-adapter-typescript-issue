describe('My First Test', function() {
    it('Does not do much!', function() {
        cy.wrap({})
        // expect(true).to.equal(true)
        expect(true).toEqual(true)
        expect(function() {throw 'error'}).toThrow()
        expect(function() {throw new TypeError()}).toThrow(TypeError)
        expect(function() {}).toThrow()
    })
    //
    // it('should open the home page', () => {
    //     cy.visit('localhost:3000')
    // })
})
