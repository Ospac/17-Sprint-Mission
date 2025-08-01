import styled from 'styled-components';

import AllItemsSection from '@/pages/Items/AllItemsSection';
import BestItemsSection from '@/pages/Items/BestItemsSection';
import { device } from '@/styles/media';

export default function Items() {
  return (
    <>
      <Container>
        <BestItemsSection />
        <AllItemsSection />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing['2xl']};
  padding: ${({ theme }) => `${theme.spacing['2xl']} ${theme.spacing.xl}`};
  @media ${device.TABLET} {
    width: 100%;
  }
  @media ${device.DESKTOP} {
    margin-left: auto;
    margin-right: auto;
    padding: ${({ theme }) => `${theme.spacing['2xl']} 0`};
    max-width: 1200px;
  }
`;
