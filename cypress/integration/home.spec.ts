describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('successfully loads', () => {
    // タグ検索
    cy.get('#search-tag-links').should('exist')
  })

  it('カテゴリーを選択 > タグ一覧を表示する', () => {
    cy.get('#category-filters')
      .findByRole('button', { name: /^react$/i })
      .should('exist')
    cy.get('#category-filters')
      .findByRole('button', { name: /^react$/i })
      .click()

    cy.get('#tag-links').contains('React')
  })
})
