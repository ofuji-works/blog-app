import type { FC } from 'react'

import { Fragment, memo, useMemo, useState, useCallback } from 'react'

import { BtnArea, PageBtn, framerVariant } from './Pager.styles'

/**
 * @typedef {object}
 * @property {{[key: string]}[]} items 表示アイテム
 * @property {FC} component component
 */
type Props<T> = {
  items: T[]
  component: FC<T>
}

/**
 * HigherOrderComponent
 * @param {FC<T>} Component
 * @param {T} props
 * @return {FC}
 */
function itemHOC<T>(Component: FC<T>, props: T): FC<T> {
  return function HocComponent() {
    return <Component {...props} />
  }
}

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const Pager: FC<Props<{ [key: string]: any }>> = memo(function Pager({ items, component }) {
  /**
   * 表示ページ
   * @type {number} page
   */
  const [currentPage, setCurrentPage] = useState<number>(1)
  /**
   * 表示数
   * @type {number}
   */
  const rowCount = 10
  /**
   * 最大ページ数
   * @type {number}
   */
  const maxPage = Math.ceil(items.length / rowCount)
  /**
   * 表示アイテムプロパティ
   * @type {{ [key: string]: any }[]}
   */
  const rows = useMemo(() => {
    return items ? items.slice((currentPage - 1) * rowCount, currentPage * rowCount) : []
  }, [items, currentPage])

  const pagingHandler = useCallback(
    (page: number) => {
      setCurrentPage(page)
    },
    [setCurrentPage],
  )

  return (
    <>
      {
        /* item list */
        rows.map((row, index) => {
          const Row = itemHOC(component, row)
          return (
            <Fragment key={`key-${index}`}>
              <Row />
            </Fragment>
          )
        })
      }
      {/* pager */}
      <BtnArea>
        {[...Array(maxPage)].map((_, index) => {
          const page = index + 1
          return (
            <PageBtn
              key={`page-${page}`}
              data-active={currentPage === page ? 'true' : undefined}
              _active={{
                backgroundColor: 'black',
                color: 'white',
                border: 'none',
              }}
              variants={framerVariant}
              whileHover="hover"
              onClick={() => {
                pagingHandler(page)
              }}
            >
              {page}
            </PageBtn>
          )
        })}
      </BtnArea>
    </>
  )
})