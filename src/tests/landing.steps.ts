import { ICustomWorld } from '../support/custom-world';
import { urlMap } from '../pom';
import { navigate } from '../utils/elements';
import { Given } from '@cucumber/cucumber';

Given('I am on the Landing Page', async function (this: ICustomWorld) {
    const page = this.page!;
    const platzi = urlMap.get('platzi');
    await navigate(page, platzi);
  });
