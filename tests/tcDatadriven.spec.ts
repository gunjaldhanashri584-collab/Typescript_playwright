import { test, expect } from '@playwright/test'
import { POManager } from '../pageobject/POManager'
import testdata from '../utils/data.json'

testdata.forEach((data)=>
{
    test(`register ${data.username}`,async({page})=>
    {
    const pomanger=new POManager(page)
    const homepage=pomanger.getHomePage()
    await homepage.goTo()
    await homepage.clickOnRegisterLink()

    const registerpage=pomanger.getRegistrationPage()
    await registerpage.registerUser(
      data.firstname,
      data.lastname,
      data.address,
      data.state,
      data.city,
      data.zipcode,
      data.phonenumber,
      data.ssn,
      data.username,
      data.password,
      data.confirmpassword
    )

    await registerpage.clickOnRegisterButton()

    // await expect(page.getByText('Your account was created successfully. You are now logged in.', { exact: true }))
    // .toHaveText('Your account was created successfully. You are now logged in.')
    await page.waitForTimeout(4000)
    })
})