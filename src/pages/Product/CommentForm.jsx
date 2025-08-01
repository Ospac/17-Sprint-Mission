import styled from 'styled-components';

import Button from '@/components/ui/Button';

export default function CommentForm() {
  return (
    <Form>
      <Title>문의하기</Title>
      <CommentInput placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.' />
      <Button>등록</Button>
    </Form>
  );
}
const Form = styled.form``;
const Title = styled.h3``;
const CommentInput = styled.input``;
