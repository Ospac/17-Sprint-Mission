import styled from 'styled-components';

import LoadingDots from '@/assets/icons/ic_loading_dots.svg';

export default function Loading() {
  return (
    <Wrapper>
      <LoadingDots />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  width: 7.5rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
