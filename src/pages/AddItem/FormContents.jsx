import styled from 'styled-components';

import FileSection from '@/pages/AddItem/FileSection';
import { formReducerType } from '@/pages/AddItem/lib/formReducer';
import { getNumberOnly } from '@/pages/AddItem/lib/util';
import TagInput from '@/pages/AddItem/TagInput';

export default function FormContents({ values, dispatch }) {
  const handleTextChange = (e) => {
    let { name, value } = e.target;
    dispatch({
      type: formReducerType.EDIT_FORM_VALUE,
      name,
      value,
    });
  };
  const handlePriceChange = (e) => {
    let { name, value } = e.target;
    const cleanedValue = Number(getNumberOnly(value));
    dispatch({
      type: formReducerType.EDIT_FORM_VALUE,
      name,
      value: cleanedValue,
    });
  };
  const priceValue =
    values.price === 0 ? '' : values.price.toLocaleString('ko-KR');
  return (
    <>
      <Section>
        <Label>상품 이미지</Label>
        <FileSection imgFile={values.imgFile} dispatch={dispatch} />
      </Section>
      <Section>
        <Label htmlFor='상품명'>상품명</Label>
        <Input
          id='상품명'
          name='title'
          placeholder={'상품명을 입력해주세요'}
          value={values.title}
          type='text'
          onChange={handleTextChange}
          required
        />
      </Section>
      <Section>
        <Label htmlFor='상품 소개'>상품 소개</Label>
        <TextArea
          id='상품소개'
          name='description'
          placeholder={'상품 소개를 입력해주세요'}
          value={values.description}
          onChange={handleTextChange}
          required
        />
      </Section>
      <Section>
        <Label htmlFor='판매가격'>판매가격</Label>
        <Input
          id='판매가격'
          name='price'
          placeholder={'판매가격을 입력해주세요'}
          type='text'
          inputMode='numeric'
          value={priceValue}
          onChange={handlePriceChange}
          required
        />
      </Section>
      <TagInput values={values} dispatch={dispatch} />
    </>
  );
}

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 700;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
`;
const Input = styled.input`
  height: 2.625rem;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme }) => theme.colors.gray100};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }
`;
const TextArea = styled.textarea`
  height: 17.625rem;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme }) => theme.colors.gray100};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;
