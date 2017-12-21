import { MinhaspaPage } from './app.po';

describe('minhaspa App', function() {
  let page: MinhaspaPage;

  beforeEach(() => {
    page = new MinhaspaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
