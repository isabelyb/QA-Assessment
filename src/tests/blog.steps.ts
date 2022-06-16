import { ICustomWorld } from '../support/custom-world';
import { Given, When, Then } from '@cucumber/cucumber';
//import { expect } from '@playwright/test';

Given('I type the Platzi page', async function (this: ICustomWorld) {
    const page = this.page!;
    await page.goto('https://platzi.com/')
  });

When('I look for a post', async function (this: ICustomWorld) {
    const page = this.page!;
    await page.locator('.fa-bars > path:nth-child(1)').click()
    await page.locator('li.Menu-list-item:nth-child(2) > a:nth-child(1) > div:nth-child(1)').click();
    await page.locator('.form-control').fill('desarrollo');
    await page.locator('.Search-icon > input:nth-child(1)').click();
    await page.locator('.Filters-selected').click();
    await page.locator('.Filters-single' , { hasText: 'Más votados' }).click();
});


Then('the post should be shown in the results', async function (this: ICustomWorld) {
    const page = this.page!;
    page.waitForSelector('.Contribution-link >> nth=0');

    //href=" "
    //class="Star-number"

});