import styled from 'styled-components';

import BackIcon from '@/assets/icons/ic_back.svg';
import Button from '@/components/ui/Button';
import ItemImg from '@/components/ui/ItemImg';
import CommentSection from '@/pages/Product/CommentSection';
import InfoSection from '@/pages/Product/InfoSection';

export default function Product() {
  return (
    <Container>
      <ImgWrapper>
        <ItemImg imgUrl='https://avatars.githubusercontent.com/u/31947480?v=4' />
      </ImgWrapper>
      <InfoSection />
      <CommentSection />
      <Button as='a' ariaLabel='상품 목록으로 돌아가기'>
        목록으로 돌아가기
        <BackIcon />
      </Button>
    </Container>
  );
}
const Container = styled.main``;
const ImgWrapper = styled.div`
  width: 30.375rem;
`;
