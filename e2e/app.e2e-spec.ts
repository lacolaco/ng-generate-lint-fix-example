import { DoubleQuotesPage } from "./app.po";

describe("double-quotes App", () => {
  let page: DoubleQuotesPage;

  beforeEach(() => {
    page = new DoubleQuotesPage();
  });

  it("should display welcome message", done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual("Welcome to app!!"))
      .then(done, done.fail);
  });
});
