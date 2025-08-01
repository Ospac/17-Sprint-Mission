import styled from 'styled-components';

import LikeIcon from '@/assets/icons/ic_heart.svg';
import Tag from '@/components/ui/Tag';
import AuthorInfo from '@/pages/Product/AuthorInfo';

export default function InfoSection() {
  return (
    <Section>
      <TitleGroup>
        <Title>아이패드 미니 팔아요</Title>
        <Price>500,000원</Price>
      </TitleGroup>
      <InfoGroup>
        <InfoLabel>상품 소개</InfoLabel>
        <Description>
          액정에 잔기스랑 주변부 스크래치있습니다만 예민하신분아니면 전혀
          신경쓰이지않을정도입니다. 박스 보관중입니다. 메모용과
          넷플릭스용으로만쓰던거라 뭘 해보질 않아 기능이나 문제점을 못느꼈네요
          잘 안써서 싸게넘깁니다! 택배거래안합니다.
        </Description>
        <InfoLabel>상품 태그</InfoLabel>
        <Tags>
          <Tag>아이패드미니</Tag>
          <Tag>아이패드미니</Tag>
          <Tag>아이패드미니</Tag>
        </Tags>
      </InfoGroup>
      <Bottom>
        <AuthorInfo />
        <LikeButton>
          <LikeIcon />
          <span>123</span>
        </LikeButton>
      </Bottom>
    </Section>
  );
}
const Section = styled.section``;
const TitleGroup = styled.hgroup``;
const Title = styled.h1``;
const Price = styled.h2``;
const InfoGroup = styled.div``;
const InfoLabel = styled.h3``;
const Description = styled.article``;
const Tags = styled.div``;
const LikeButton = styled.button``;
const Bottom = styled.div``;
