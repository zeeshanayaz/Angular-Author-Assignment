import { AngularAuthorPage } from './app.po';

describe('angular-author App', () => {
  let page: AngularAuthorPage;

  beforeEach(() => {
    page = new AngularAuthorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
