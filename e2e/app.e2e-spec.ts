import { AngularD3PlaygroundPage } from './app.po';

describe('angular-d3-playground App', () => {
  let page: AngularD3PlaygroundPage;

  beforeEach(() => {
    page = new AngularD3PlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
