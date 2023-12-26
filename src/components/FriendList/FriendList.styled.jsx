import styled from '@emotion/styled';

export const List = styled.div`
  padding: 30px;
  width: 350px;
  display: flex;
  flex-direction: column;
  margin: 0 auto 0;
  padding: 30px;
  align-items: center;
  justify-content: center;
`;
export const Item = styled.li`
  display: flex;
  width: 100%;
  padding: 5px 15px;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.statusType ? 'green' : 'red')};
`;
export const Avatar = styled.img`
  width: 80px;
  margin-left: 15px;
  border-radius: 10%;
  background-color: #e6dfdf;
`;
export const Name = styled.p`
  font-size: 24px;
  line-height: 1.62;
  font-weight: bold;
  margin-left: 15px;
`;
