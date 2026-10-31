import { POManager } from "../pageobject/POManager";
import {customtest as test } from '../fixture/testfixture'

test('login',async ({page,testdataForregistration})=>
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