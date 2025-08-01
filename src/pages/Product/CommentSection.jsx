import styled from 'styled-components';

import ThreeDotIcon from '@/assets/icons/ic_kebab.svg';
import AuthorInfo from '@/pages/Product/AuthorInfo';
import CommentForm from '@/pages/Product/CommentForm';

export default function CommentSection() {
  return (
    <>
      <CommentForm />
      <Section>
        {Array(3)
          .fill()
          .map(() => (
            <>
              <CommentWrapper>
                <Comment>혹시 사용기간이 어떻게 되실까요?</Comment>
                <MenuButton>
                  <ThreeDotIcon />
                </MenuButton>
              </CommentWrapper>
              <AuthorInfo />
            </>
          ))}
      </Section>
    </>
  );
}
const Section = styled.section``;
const Comment = styled.div``;
const CommentWrapper = styled.div``;
const MenuButton = styled.button``;
