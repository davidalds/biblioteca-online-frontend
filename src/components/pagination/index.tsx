import { useEffect, useState } from 'react'
import {
  PaginationButton,
  PaginationContainer,
  PaginationItem,
  PaginationItens,
} from './styles/pagination'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

interface IPropsPagination {
  total: number
  limit: number
  showedItems?: number
  changeOffset: (offset: number) => void
  offset: number
}

const Pagination = ({
  total,
  limit,
  showedItems = 3,
  changeOffset,
  offset,
}: IPropsPagination) => {
  const [pageCount, setPageCount] = useState<number>(offset)
  const [itemsSequence, setItemsSequence] = useState<number>(1)
  const [lastShowedItem, setLastShowedItem] = useState<number>(showedItems)
  const totalItems = Number.isInteger(total / limit)
    ? total / limit
    : Math.ceil(total / limit)

  const prevPageCount = () => {
    if (pageCount > 1) {
      handlePageCount(-1)

      if (pageCount <= itemsSequence) {
        handleChangeSequenceAndLastItem(-1)
      }
    }
  }

  const nextPageCount = () => {
    if (pageCount < totalItems) {
      handlePageCount(1)

      if (pageCount >= lastShowedItem && pageCount + 1 !== totalItems) {
        handleChangeSequenceAndLastItem(1)
      }
    }
  }

  const handlePageCount = (n: number) => {
    setPageCount((prev) => prev + n)
  }

  const handleChangeSequenceAndLastItem = (n: number) => {
    setItemsSequence((prev) => prev + n)
    setLastShowedItem((prev) => prev + n)
  }

  const handleSelectItem = (index: number) => {
    setPageCount(index)

    setItemsSequence((prev) =>
      index === 1
        ? 1
        : index === totalItems && totalItems > showedItems
          ? totalItems - showedItems
          : prev
    )
    setLastShowedItem((prev) =>
      index === 1 ? showedItems : index === totalItems ? totalItems - 1 : prev
    )
  }

  useEffect(() => {
    changeOffset(pageCount - 1)
  }, [pageCount, changeOffset, limit])

  return (
    <PaginationContainer>
      <PaginationButton onClick={prevPageCount}>
        <FaAngleLeft />
      </PaginationButton>
      <PaginationItens>
        {itemsSequence > 1 && (
          <>
            <PaginationItem
              isactualpage={pageCount === 1 ? 'true' : 'false'}
              onClick={() => handleSelectItem(1)}
            >
              {1}
            </PaginationItem>
            <span>...</span>
          </>
        )}
        {Array.from({
          length: totalItems > showedItems ? showedItems : totalItems,
        }).map((_, index) => {
          return (
            <PaginationItem
              key={index}
              isactualpage={
                pageCount === index + itemsSequence ? 'true' : 'false'
              }
              onClick={() => handleSelectItem(index + itemsSequence)}
            >
              {index + itemsSequence}
            </PaginationItem>
          )
        })}
        {totalItems > showedItems && (
          <>
            {pageCount + 1 < totalItems && <span>...</span>}
            <PaginationItem
              isactualpage={pageCount === totalItems ? 'true' : 'false'}
              onClick={() => handleSelectItem(totalItems)}
            >
              {totalItems}
            </PaginationItem>
          </>
        )}
      </PaginationItens>
      <PaginationButton onClick={nextPageCount}>
        <FaAngleRight />
      </PaginationButton>
    </PaginationContainer>
  )
}

export default Pagination
