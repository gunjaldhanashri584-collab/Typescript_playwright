// import { test, expect } from '@playwright/test'
import { POManager } from '../pageobject/POManager'
import testdata from '../utils/data.json'
import {customtest as test } from '../fixture/testfixture'

test.describe.parallel('registration and login ',()=>
{

testdata.forEach((data)=>
{
    test(`@sanityregister ${data.username}`,async({page})=>
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

test('@smokelogin',async ({page,testdataForregistration})=>
{
      const pomanager=new POManager(page)
      const homepage=pomanager.getHomePage()
      await homepage.goTo()

      const loginpage=pomanager.getLoginPage()
      await loginpage.loginToApplication(
          testdataForregistration.username,
          testdataForregistration.password
      )
})

})