describe('User', function () {
    it('can register', function () {
        browser.url('/create_account')
        const registrationForm = $('#create-account')

        registrationForm.$('input[name="firstname"]').setValue('Test')
        registrationForm.$('input[name="lastname"]').setValue('Test')
        registrationForm.$('input[name="address1"]').setValue('707 main road')
        registrationForm.$('input[name="postcode"]').setValue('79053')
        registrationForm.$('input[name="city"]').setValue('Denver')
        const countrySelect = registrationForm.$('select[name="country_code"]')
        countrySelect.selectByVisibleText('Ukraine')

        const email = `test${new Date().getTime() / 1000}@test.com`

        registrationForm.$('input[name="email"]').setValue(email)
        registrationForm.$('input[name="phone"]').setValue('+380441111111')
        registrationForm.$('input[name="password"]').setValue(email)
        registrationForm.$('input[name="confirmed_password"]').setValue(email)

        registrationForm.$('button[type="submit"]').click()
           
        browser.pause(5000)

        const alert = $('#notices .success')
        const expectedText = "Your customer account has been created" 
        expect(alert).toHaveTextContaining(expectedText)
    })
})