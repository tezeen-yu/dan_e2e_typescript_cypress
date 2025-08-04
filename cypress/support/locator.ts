// cypress/support/locator.ts
export const locator = (testId: string) => {
  return cy.get(`[data-testid="${testId}"]`);
};

// export const locator_ = (testId: string) => cy.get(`[data-testid="${testId}"]`);