import failingPage from "../support/pages/failingPage";
it('order test', () => {
    failingPage.visit()
    failingPage.getButtonCatalog().click();
    failingPage.selectСategoryNotebookAndComputers().click();
    failingPage.selectCategoryNotebook().click();
    failingPage.selectProcessorFilter().click();
    failingPage.expectTheNumberOfGoods();
})