import {Page } from '@playwright/test'
import { HomePage } from "./HomePage"
import { RegistrationPage } from './RegistrationPage'
import { LoginPage } from './LoginPage'

export class POManager
{
      private page:Page
      private homepage:HomePage
      private registerpage:RegistrationPage
      private loginpage:LoginPage
      
      constructor(page:Page)
      {
         this.page=page
         this.homepage=new HomePage(this.page)
         this.registerpage=new RegistrationPage(this.page)
         this.loginpage=new LoginPage(this.page)
      }

      getHomePage():HomePage
      {
         return this.homepage
      }

      getRegistrationPage():RegistrationPage
      {
         return this.registerpage
      }

      getLoginPage():LoginPage{
         return this.loginpage
      }
}