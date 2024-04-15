import { useEffect, useState } from 'react'
import {
  PaginationButton,
  PaginationContainer,
  PaginationItem,
  PaginationItens,
} from './styles/pagination'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

interface IPropsPagination {
  totalData: number
  limitPerPage: number
  showedItems?: number
  changeOffset: (offset: number) => void
}

const Pagination = ({
  totalData,
  limitPerPage,
  showedItems = 3,
  changeOffset,
}: IPropsPagination) => {
  const [page, setPage] = useState<number>(1)
  const [itemsSequence, setItemsSequence] = useState<number>(1)
  const [lastShowedItem, setLastShowedItem] = useState<number>(showedItems)
  const totalItems = Number.isInteger(totalData / limitPerPage)
    ? totalData / limitPerPage
    : Math.ceil(totalData / limitPerPage)

  const prevPage = () => {
    if (page > 1) {
      handlepage(-1)

      if (page <= itemsSequence) {
        handleChangeSequenceAndLastShowedItem(-1)
      }
    }
  }

  const nextPage = () => {
    if (page < totalItems) {
      handlepage(1)

      if (page >= lastShowedItem && page + 1 !== totalItems) {
        handleChangeSequenceAndLastShowedItem(1)
      }
    }
  }

  const handlepage = (n: number) => {
    setPage((prev) => prev + n)
  }

  const handleChangeSequenceAndLastShowedItem = (n: number) => {
    setItemsSequence((prev) => prev + n)
    setLastShowedItem((prev) => prev + n)
  }

  const handleSelectItem = (index: number) => {
    setPage(index)

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
    changeOffset(page - 1)
  }, [page, changeOffset])

  return (
    <PaginationContainer>
      <PaginationButton onClick={prevPage} disabled={page === 1 ? true : false}>
        <FaAngleLeft />
      </PaginationButton>
      <PaginationItens>
        {itemsSequence > 1 && (
          <>
            <PaginationItem
              isactualpage={page === 1 ? 'true' : 'false'}
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
              isactualpage={page === index + itemsSequence ? 'true' : 'false'}
              onClick={() => handleSelectItem(index + itemsSequence)}
            >
              {index + itemsSequence}
            </PaginationItem>
          )
        })}
        {totalItems > showedItems && (
          <>
            {page + 1 < totalItems && <span>...</span>}
            <PaginationItem
              isactualpage={page === totalItems ? 'true' : 'false'}
              onClick={() => handleSelectItem(totalItems)}
            >
              {totalItems}
            </PaginationItem>
          </>
        )}
      </PaginationItens>
      <PaginationButton
        onClick={nextPage}
        disabled={page === totalItems ? true : false}
      >
        <FaAngleRight />
      </PaginationButton>
    </PaginationContainer>
  )
}

export default Pagination
