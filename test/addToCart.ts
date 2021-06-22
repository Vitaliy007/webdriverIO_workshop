describe('User', function () {
    it('can register', function () {
        browser.url('/')

        const productsContent = $('ul.products')
        productsContent.$('a.link').click()
        $('button[name="add_cart_product"]').click()
        browser.pause(2000)
        $('#cart').click()
        $('input[name="firstname"]').setValue('Test')
        $('input[name="lastname"]').setValue('Test')
        $('input[name="address1"]').setValue('707 main road')
        $('input[name="postcode"]').setValue('79053')
        $('input[name="city"]').setValue('Denver')
        const countrySelect = $('select[name="country_code"]')
        countrySelect.selectByVisibleText('Ukraine')
        const email = `test${new Date().getTime() / 1000}@test.com`
        $('input[name="email"]').setValue(email)
        $('input[name="phone"]').setValue('+380441111111')
        $('button[name="set_addresses"]').click()
        browser.pause(2000)
        $('button[name="confirm_order"]').click()
        browser.pause(2000)
        const alert = $('.title')
        const expectedText = "Your order is successfully completed!" 
        expect(alert).toHaveTextContaining(expectedText)
    })
})