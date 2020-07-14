import { AppBlogPage } from './app.po';

describe('app-blog App', function() {
  let page: AppBlogPage;

  beforeEach(() => {
    page = new AppBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
