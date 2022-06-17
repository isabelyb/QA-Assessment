import { ICustomWorld } from '../support/custom-world';
import { Given, When, Then } from '@cucumber/cucumber';
import { searching, blog } from '../data/selectors'

Given('I am on the blog page', async function (this: ICustomWorld) {
    const page = this.page!;
    await page.locator(searching.sandwich).click()
    await page.locator(blog.blogPage).click();
  });


When('I look for {string} post', async function (this: ICustomWorld, post) {
    const page = this.page!;    
    await page.locator(searching.blogSearch).fill(`${post}`);
    await page.locator(searching.blogSearchButton).click();
});


Then('the post should be shown in the results', async function (this: ICustomWorld) {
    const page = this.page!;
    try {
      const visibleResult = await page.locator(blog.resultList).isVisible();
      await (await page.waitForSelector(blog.firstResult)).isVisible();
      if (visibleResult) {
        await page.locator(blog.filter).click();
        await page.locator(blog.filtered, { hasText: 'Más votados' }).click();
        const htmlTitle = await page.locator(blog.htmlTitle).innerHTML();
        const likes = await page.locator(blog.likes).innerText();
        let title = htmlTitle.slice(htmlTitle.indexOf('>') + 1,htmlTitle.indexOf('</h3>'));
        console.log('* Most voted post:',title,'-',likes,'likes');
      }
    } catch (error) {
      throw new Error(`\n>>>Post is not found<<<\n\n${error}`);
    }
});

