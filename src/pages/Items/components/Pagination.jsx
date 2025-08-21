import classNames from 'classnames/bind';

import LeftArrowIcon from '@/assets/icons/ic_arrow_left.svg';
import RightArrowIcon from '@/assets/icons/ic_arrow_right.svg';
import styles from '@/pages/Items/styles/Pagination.module.scss';

export default function Pagination({
  itemsTotalCount = 1,
  page,
  setPage,
  pageSize,
}) {
  const cn = classNames.bind(styles);
  const pageLength = 5;
  const isFirstPage = page === 1;
  const pagesTotalCount = Math.ceil(itemsTotalCount / pageSize);
  const pageGroup = Math.ceil(page / pageLength);
  const firstPage = (pageGroup - 1) * pageLength + 1;
  const lastPage = pageGroup * pageLength;

  const countArray = Array.from(
    { length: pagesTotalCount },
    (v, i) => i + 1
  ).slice(firstPage - 1, lastPage);

  const handleClick = (e) => {
    setPage(Number(e.target.value));
  };
  const handleLeftArrowClick = () => {
    setPage((prev) => {
      const next = prev - 1;
      return next >= 1 ? next : 1;
    });
  };
  const handleRightArrowClick = () => {
    setPage((prev) => {
      const next = prev + 1;
      return pagesTotalCount >= next ? next : pagesTotalCount;
    });
  };
  return (
    <div className={cn('container')}>
      <button
        className={cn('counter')}
        onClick={handleLeftArrowClick}
        disabled={isFirstPage}
      >
        <div className={cn('iconWrapper')}>
          <LeftArrowIcon aria-label='이전 페이지 보기 버튼' />
        </div>
      </button>
      {countArray.map((count) => {
        const isSamePage = count === page;
        return (
          <button
            className={cn('counter', {
              counterActive: isSamePage,
            })}
            key={count}
            onClick={handleClick}
            value={count}
            aria-current={isSamePage ? 'page' : undefined}
          >
            {count}
          </button>
        );
      })}
      <button
        className={cn('counter')}
        onClick={handleRightArrowClick}
        disabled={page === pagesTotalCount}
      >
        <div className={cn('iconWrapper')}>
          <RightArrowIcon aria-label='다음 페이지 보기 버튼' />
        </div>
      </button>
    </div>
  );
}
