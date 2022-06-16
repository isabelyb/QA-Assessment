import { ICustomWorld } from '../support/custom-world';
import { Given, When, Then } from '@cucumber/cucumber';

Given('I type the Platzi url', async function (this: ICustomWorld) {
    const page = this.page!;
    await page.goto('https://platzi.com/')
  });

When('I am on the landing page', async function (this: ICustomWorld) {
    const page = this.page!;
    await page.locator('#home-public > div > header > nav > div.Logo > div > a > div > figure.LogoHeader-name > img').click()
  });


Then('the Search field should be shown', async function (this: ICustomWorld) {
    const page = this.page!;
    await page.waitForSelector('#home-public > div > header > nav > div.NewSearch.NewSearch--noLogged > form > div > input');
  },
);