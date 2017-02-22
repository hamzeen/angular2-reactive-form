import { RollupCliPage } from './app.po';

describe('rollup-cli App', function() {
  let page: RollupCliPage;

  beforeEach(() => {
    page = new RollupCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
