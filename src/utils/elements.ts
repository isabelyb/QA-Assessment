import { Page, Locator } from '@playwright/test';
import { replace } from 'lodash';

/**
 * Go to a an specific url
 * @param {Page} page
 * @param {string} url
 */
export async function navigate(page: Page, url: string) {
  await page.goto(url);
}

/**
 * This function check if a locator is visible and return it
 * @param {Page} page
 * @param {string} locator
 */
export async function lookForElement(page: Page, locator: string) {
  return await page.waitForSelector(locator, { state: 'visible' });
}

export async function clickOn(element: Locator) {
  await element.isVisible();
  await element.click();
}

export const clickElement = async (page: Page, selector: string) => {
  await page.click(selector);
};

/**
 * This function replace the string "{}"" with the param chain
 * @param {string} selector
 * @param {string} chain
 */
export const replaceString = (selector: string, chain: string) => {
  return replace(selector, '{}', chain);
};

/**
 * This function return an element with a certain selector
 * @param {Page} page
 * @param {string} selector
 */
export const getElement = async (page: Page, selector: string) => {
  return page.locator(selector);
};

/**
 * This function this function enters a value into an input field
 * @param {Page} page
 * @param {string} selector
 * @param {string} value
 */
export const type = async (page: Page, selector: string, value: string) => {
  const inputField = await getElement(page, selector);
  await inputField.type(value);
};

/**
 * This function returns an array of elements with the same selector
 * @param {Page} page
 * @param {string} selector
 */
export const getArrayElements = async (page: Page, selector: string) => {
  return await page.$$(selector);
};
