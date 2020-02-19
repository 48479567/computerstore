import { Page, PageIcon } from '../../../app/shared/models';

export const pages: Page[] = [
  new Page('Category', 'category'),
  new Page('Product', 'product'),
  new Page('Sale', 'sale'),
  new Page('Purchase', 'purchase'),
  new Page('Result', 'result'),
];

export const pagesIcon: PageIcon[] = [
  new PageIcon('Category', 'category', 'category'),
  new PageIcon('Product', 'product', 'devices'),
  new PageIcon('Sale', 'sale', 'money'),
  new PageIcon('Purchase', 'purchase', 'shop'),
  new PageIcon('Result', 'result', 'insert_chart'),
  new PageIcon('Test', 'test', 'all_inbox')
];
