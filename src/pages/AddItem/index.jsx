import { useState } from 'react';
import styled from 'styled-components';

import Button from '@/components/ui/Button';
import InputSection from '@/pages/AddItem/InputSection';
import { device } from '@/styles/media';

const INITIAL_VALUES = {
  imgFile: null,
  title: '',
  description: '',
  price: 0,
  tags: [],
};
export default function AddItem() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const hasEveryInput =
    values.title &&
    values.description &&
    values.price > 0 &&
    values.tags.length > 0;
  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Head>
            <Title>상품 등록하기</Title>
            <Button ariaLabel={'상품 등록하기'} disabled={!hasEveryInput}>
              등록
            </Button>
          </Head>
          <InputSection values={values} setValues={setValues} />
        </Form>
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
    padding: ${({ theme }) => theme.spacing['2xl']} 0;
    max-width: 1200px;
  }
`;
const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xl};
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
