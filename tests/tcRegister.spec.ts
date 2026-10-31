/*import { test, expect } from '@playwright/test'
import { HomePage } from '../pageobject/HomePage'
import { RegistrationPage } from '../pageobject/RegistrationPage'

test('tcregister', async ({ page }) => {
    const homepage = new HomePage(page)
    await homepage.goTo()
    await homepage.clickOnRegisterLink()

    const registerpage = new RegistrationPage(page)
    await registerpage.registerUser(
        'jhon', 'peter', 'delhi', 'newdelhi', 'Delhi',
        '110011', '97655443322', '1112222', 'ts13', 'asdf', 'asdf'
    )

    await registerpage.clickOnRegisterButton()

    await expect(page.getByText('Your account was created successfully. You are now logged in.', { exact: true }))
    .toHaveText('Your account was created successfully. You are now logged in.')
    await page.waitForTimeout(4000)
}) */


import { test, expect } from '@playwright/test'
import { POManager } from '../pageobject/POManager'

test('tcregister', async ({ page }) => {

     const pomanger=new POManager(page)
     const homepage=pomanger.getHomePage()
    await homepage.goTo()
    await homepage.clickOnRegisterLink()

    const registerpage=pomanger.getRegistrationPage()
    await registerpage.registerUser(
        'jhon', 'peter', 'delhi', 'newdelhi', 'Delhi',
        '110011', '97655443322', '1112222', 'ts12', 'asdf', 'asdf'
    )

    await registerpage.clickOnRegisterButton()

    await expect(page.getByText('Your account was created successfully. You are now logged in.', { exact: true }))
    .toHaveText('Your account was created successfully. You are now logged in.')
    await page.waitForTimeout(4000)
})