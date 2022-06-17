import { ICustomWorld } from '../support/custom-world';
import { Given, When, Then } from '@cucumber/cucumber';
import { searching } from '../data/selectors'


Given('I am on the search field', async function (this: ICustomWorld) {
    const page = this.page!;
    await page.locator(searching.search).click();
  });


When('I look for {string} topic', async function (this: ICustomWorld, Topic) {
    const page = this.page!;
    await page.locator(searching.search).fill(`${Topic}`);
    await page.locator(searching.searchButton).click();
  });


Then('the topic should be shown in the results', async function (this: ICustomWorld) {
    const page = this.page!;   
    try {
      await (await page.waitForSelector(searching.searchTabs)).isVisible();
      for (let index = 1; index < 4; index++) {
        const visibleTab = await page.locator(`.Tab:nth-child(${[index]})`).isVisible();     
        if (visibleTab) {
          const result = await page.locator(`.Tab:nth-child(${[index]})`).innerText();
          const pages = Math.ceil(parseInt(await page.locator(`.Tab:nth-child(${[index]}) > p:nth-child(1) > span:nth-child(1)`).innerText())/12);
          console.log(result, 'results | ', pages ,' pages');
        }
      }
    } catch (error) {
      throw new Error(`\n>>>Topic is not in the results<<<\n\n${error}`);
    }
});