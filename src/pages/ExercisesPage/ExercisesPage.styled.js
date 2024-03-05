import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    max-width: 335px;
  }

  @media screen and (min-width: 768px) {
    max-width: 704px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1249px;
  }
`;

export const Headed = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  color: ${(props) => props.theme.colors.white};
  margin: 0;
`;

export const ContainerNav = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-top: 72px;
    padding-bottom: 64px;
  }
`;
