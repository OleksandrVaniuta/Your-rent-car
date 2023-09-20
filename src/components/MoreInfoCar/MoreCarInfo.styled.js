import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;

  & img {
    width: 100%;
    border-radius: 14px;
  }
`;

export const MainInfoWrapper = styled.div`
  margin-top: 14px;
  text-align: left;
`;

export const Itemtitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes[3]};
  line-height: ${({ theme }) => theme.fontSizes[5]};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  text-align: left;

  & span {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const Descr = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height: ${({ theme }) => theme.fontSizes[3]};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grey};
  text-align: left;

  &:first-of-type {
    padding-top: 8px;
  }
`;

export const MainDescr = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) => theme.fontSizes[4]};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
  text-align: left;
  padding-top: 14px;
`;

export const ExtraInfo = styled.div`
  margin-top: 24px;
`;

export const ExtraInfoTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) => theme.fontSizes[4]};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  text-align: left;
`;

export const ConditionsWrapper = styled.div`
  display: flex;
  gap: 36px;
  margin-top: 15px;
  padding-left: 14px;
`;

export const Conditions = styled.b`
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height: ${({ theme }) => theme.fontSizes[3]};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};

  & span {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const ContactUsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 24px;
`;

export const ContactUs = styled.a`
  dispay: inline;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) => theme.fontSizes[4]};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.mainWhite};
  padding: 12px 50px 12px 50px;
  background-color: ${({ theme }) => theme.colors.blue};
  transition: background-color 0.5s ease-in-out;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.darkBlue};
  }
  border-radius: 12px;
`;
