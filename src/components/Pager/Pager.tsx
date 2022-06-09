import type { FC } from 'react'

import { Fragment, memo, useMemo, useState, useCallback } from 'react'

import { BtnArea, PageBtn, PageBtnSP, framerVariant, ListWrapper } from './Pager.styles'

import { useBreakPoints } from '@/hooks'

const genericMemo: <T>(component: T) => T = memo

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
function itemHOC<T>(Component: FC<T>, props: T): FC {
  return () => {
    return <Component {...props} />
  }
}

function PagerComponent<T>({ items, component }: Props<T>) {
  const { isTablet } = useBreakPoints()
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
      {/* item list */}
      <ListWrapper>
        {rows.map((row, index) => {
          const Row = itemHOC<typeof row>(component, row)
          return (
            <Fragment key={`key-${index}`}>
              <Row />
            </Fragment>
          )
        })}
      </ListWrapper>
      {/* pager */}
      <BtnArea>
        <>
          <PageBtnSP
            variants={framerVariant}
            whileTap={isTablet && currentPage !== 1 ? 'tap' : undefined}
            disabled={currentPage === 1}
            aria-disabled={currentPage === 1 ? 'true' : undefined}
            _disabled={{
              opacity: 0.5,
            }}
            onClick={() => {
              pagingHandler(currentPage - 1)
            }}
          >
            Prev
          </PageBtnSP>
          <PageBtnSP
            variants={framerVariant}
            whileTap={isTablet && currentPage !== maxPage ? 'tap' : undefined}
            disabled={currentPage === maxPage}
            aria-disabled={currentPage === maxPage ? 'true' : undefined}
            _disabled={{
              opacity: 0.5,
            }}
            onClick={() => {
              pagingHandler(currentPage + 1)
            }}
          >
            Next
          </PageBtnSP>
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
        </>
      </BtnArea>
    </>
  )
}

export const Pager = genericMemo(PagerComponent)
