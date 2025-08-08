import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { getProducts } from '@/apis/Items';
import Loading from '@/components/ui/Loading';
import useDebouncedResizeEffect from '@/hooks/useDebouncedResizeEffect';
import { useQuery } from '@/hooks/useFetch';
import { ORDER_BY } from '@/pages/Items/constants';
import ItemBox from '@/pages/Items/ItemBox';
import { getBestItemsLimitByScreenSize } from '@/pages/Items/utils';
import { device } from '@/styles/media';

const _BEST_ITEMS_DEFAULT_VALUES = {
  page: 1,
  pageSize: 5,
  orderBy: ORDER_BY.FAVORITE,
  keyword: '',
};
export default function BestItemsSection() {
  const [pageSize, setPageSize] = useState(getBestItemsLimitByScreenSize());
  const {
    loading,
    error,
    data: items,
  } = useQuery({
    queryFn: () => getProducts({ ..._BEST_ITEMS_DEFAULT_VALUES, pageSize }),
    deps: [pageSize],
  });
  useDebouncedResizeEffect(() => {
    setPageSize(getBestItemsLimitByScreenSize());
  });

  if (error) return <div>error</div>;
  if (!items || loading) return <Loading />;
  return (
    <Section>
      <Title>베스트 상품</Title>
      <Items>
        {items?.list.map((item) => (
          <Link to={`${item.id}`} key={item.id}>
            <ItemBox
              title={item.name}
              price={item.price}
              like={item.favoriteCount}
              imgUrl={item.images[0]}
              imgAlt={item.name}
            />
          </Link>
        ))}
      </Items>
    </Section>
  );
}
const Section = styled.section`
  width: 100%;
`;
const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 700;
`;

const Items = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  @media ${device.TABLET} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.DESKTOP} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
