import { DatepickerDemoPage } from './app.po';

describe('datepicker-demo App', () => {
  let page: DatepickerDemoPage;

  beforeEach(() => {
    page = new DatepickerDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
