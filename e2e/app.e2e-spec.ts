import { BooksalePage } from './app.po';

describe('booksale App', () => {
  let page: BooksalePage;

  beforeEach(() => {
    page = new BooksalePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
