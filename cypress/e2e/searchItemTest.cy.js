import searchItemPages from "../support/pages/searchItemPages";

it('order test', () => {
    searchItemPages.visit();
    searchItemPages.enterTheProductInTheInputField();
    searchItemPages.submitButtonField().click();
    searchItemPages.checkThePageForWordContent();
})