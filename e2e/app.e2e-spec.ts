import { SpvaPage } from './app.po';

describe('spva App', () => {
  let page: SpvaPage;

  beforeEach(() => {
    page = new SpvaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
