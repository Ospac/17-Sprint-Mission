import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import PlusIconSvg from '@/assets/icons/ic_plus.svg';
import ClearIcon from '@/assets/icons/ic_X.svg';
import ItemImg from '@/components/ui/ItemImg';
import { device } from '@/styles/media';

export default function FileSection({ imgFile, onChange }) {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(false);

  const handleClick = () => {
    if (imgFile) {
      setError(true);
      return;
    }
    if (!inputRef.current) return;
    inputRef.current.click();
  };
  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      onChange(e.target.name, file);
    }
  };
  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;
    inputNode.value = '';
    onChange(inputNode.name, null);
    setError(false);
  };
  useEffect(() => {
    if (!imgFile) return;
    const objectURL = URL.createObjectURL(imgFile);
    setPreview(objectURL);
    return () => {
      URL.revokeObjectURL(objectURL);
      setPreview(null);
    };
  }, [imgFile, setPreview]);

  return (
    <>
      <Container>
        <FileInputWrapper onClick={handleClick}>
          <PlusIcon />
          <Label htmlFor='imgFile'>이미지 등록</Label>
          <Input
            id='imgFile'
            name='imgFile'
            type='file'
            accept='image/*'
            onChange={handleChange}
            multiple={false}
            ref={inputRef}
          />
        </FileInputWrapper>
        {preview && (
          <PreviewWrapper>
            <ItemImg imgUrl={preview} />
            <ClearButton onClick={handleClearClick}>
              <ClearIcon />
            </ClearButton>
          </PreviewWrapper>
        )}
      </Container>
      {error && (
        <ErrorMessage>*이미지 등록은 최대 1개까지 가능합니다.</ErrorMessage>
      )}
    </>
  );
}
const FileInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  width: 168px;
  height: auto;
  aspect-ratio: 1;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray50};
  }
  @media ${device.TABLET} {
    width: 100%;
  }
`;
const Input = styled.input`
  display: none;
`;
const Label = styled.label`
  color: ${({ theme }) => theme.colors.gray400};
`;
const PreviewWrapper = styled.div`
  position: relative;
  width: 10.5rem;

  @media ${device.TABLET} {
    width: 100%;
  }
`;
const PlusIcon = styled(PlusIconSvg)`
  width: 3rem;
  height: 3rem;
`;
const ClearButton = styled.button`
  background: none;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.sm};
`;
const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.errorRed};
`;
