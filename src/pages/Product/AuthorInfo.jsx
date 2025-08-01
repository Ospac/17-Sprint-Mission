import styled from 'styled-components';

export default function AuthorInfo() {
  return (
    <AuthorWrapper>
      <ProfileImg></ProfileImg>
      <div>
        <Nickname>총명한 판다</Nickname>
        <UpdateAt>2024. 01. 02</UpdateAt>
      </div>
    </AuthorWrapper>
  );
}

const AuthorWrapper = styled.div``;
const ProfileImg = styled.img``;
const UpdateAt = styled.span``;
const Nickname = styled.span``;
