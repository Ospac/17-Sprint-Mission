import styled from 'styled-components';

import Tag from '@/components/ui/Tag';
import { formReducerType } from '@/pages/AddItem/lib/formReducer';

export default function TagInput({ values, dispatch }) {
  const addTag = (tagToAdd) => {
    const hasSameTag = values.tags.includes(tagToAdd);
    if (hasSameTag) return;
    dispatch({
      type: formReducerType.ADD_TAG,
      tagToAdd,
    });
  };
  const removeTag = (tagToRemove) => {
    dispatch({
      type: formReducerType.REMOVE_TAG,
      tagToRemove,
    });
  };
  const handleTagEnter = (e) => {
    const inputText = e.target.value;
    if (e.nativeEvent.isComposing) return; // 한글 조합 중이면 무시
    if (e.key === 'Enter' && inputText) {
      addTag(inputText);
      e.target.value = '';
      e.preventDefault(); // 입력 후 focus 이동 방지
    }
  };

  return (
    <Section>
      <Label htmlFor='태그'>태그</Label>
      <Input
        id='태그'
        placeholder={'태그를 입력해주세요'}
        type='text'
        onKeyDown={handleTagEnter}
      />
      <Tags>
        {values.tags.map((tag) => (
          <Tag
            key={`${crypto.randomUUID()}-${tag}`}
            canDelete={true}
            onDeleteClick={() => removeTag(tag)}
          >
            {tag}
          </Tag>
        ))}
      </Tags>
    </Section>
  );
}
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
`;
const Tags = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;
const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 700;
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
