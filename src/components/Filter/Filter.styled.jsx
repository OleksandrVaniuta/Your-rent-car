import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  gap: 0 18px;
  padding-top: 50px;
  width: 950px;
`;

export const Select = styled.div`
  position: relative;
  width: 224px;
  width: ${props => (props.price === 'price' ? '125px' : '224px')};
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) => theme.fontSizes[3]};
  color: ${({ theme }) => theme.colors.grey};
`;

export const SelectHeader = styled.div`
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
`;

export const SelectCurrent = styled.div`
  font-size: 18px;
  line-height: 24px;
  padding: 8px;
`;

export const SelectIcon = styled.div`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  height: 40px;
  margin-left: auto;
  text-align: center;
  width: 40px;
`;

export const SelectBody = styled.ul`
  display: block;
  position: absolute;
  border: 1px solid #cccccc;
  border-top: 0;
  background-color: ${({ theme }) => theme.colors.mainWhite};
  height: 300px;
  overflow: hidden;
  overflow-y: auto;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;

  left: 0;

  right: 0;
  top: 100%;
  z-index: 1000000;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.mainWhite};
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.grey};
    border-radius: 3px;
  }
`;

export const SelectItem = styled.li`
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.mainWhite};
  color: ${({ theme }) => theme.colors.grey};

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const SelectInput = styled.input`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  line-height: ${({ theme }) => theme.fontSizes[4]};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  padding: 14px 60px 14px 14px;
  border: none;
  outline: none;
  margin-top: 8px;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 3px;
  right: 2px;
  transition: transform 0.5s ease-in-out;
  transform: ${props => props.active && 'rotate(180deg)'};
`;

export const MileageLabeltWrapper = styled.label`
  width: 320px;
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) => theme.fontSizes[3]};
  color: ${({ theme }) => theme.colors.grey};
`;

export const MileageInputWrapper = styled.div`
  display: flex;
  width: 100;
`;

export const MileageInput = styled.input`
  width: 160px;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  line-height: ${({ theme }) => theme.fontSizes[4]};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  padding: 14px 60px 14px 14px;
  border: none;
  outline: none;
  margin-top: 8px;
  &:last-child {
    border-left: 1px solid ${({ theme }) => theme.colors.grey};
  }
`;

export const FilterSubmitBtn = styled.button`
  display: block;
  width: 136px;
  height: 48px;
  border-radius: 12px;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) => theme.fontSizes[4]};
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.mainWhite};
  font-weight: 600;
  transition: background-color 0.5s ease-in-out;
  margin-top: auto;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.darkBlue};
  }
`;

export const ResetFormBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: 5px;
  right: 5px;
  color: ${({ theme }) => theme.colors.red};
  margin-top: auto;
`;
