import { ICustomWorld } from '../support/custom-world';
import { Given, When, Then } from '@cucumber/cucumber';
//import { expect } from '@playwright/test';

Given('I type the Platzi urll', async function (this: ICustomWorld) {
    const page = this.page!;
    await page.goto('https://platzi.com/')
  });

When('I look for a course', async function (this: ICustomWorld) {
    const page = this.page!;
    await page.locator('#home-public > div > header > nav > div.NewSearch.NewSearch--noLogged > form > div > input').fill('ingles');
    await page.locator('.NewSearch-button > svg:nth-child(1)').click();
    //await page.locator('text=Escuelas ').click();
    await page.locator('div.Tab:nth-child(1) > p:nth-child(1)').click();
  });


Then('the course should be shown in the results', async function (this: ICustomWorld) {
    const page = this.page!;
    page.waitForSelector('#search > div.Search.u-wrapper > div > div > div.u-wrapper > div > div:nth-child(1) > p');
    const num = page.locator('#search > div.Search.u-wrapper > div > div > div.u-wrapper > div > div.Tab.is-active > p > span').innerHTML();
    console.log(`${num}`);
});


