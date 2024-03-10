import styled from 'styled-components';

const Box = styled.div`
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.white};
  font-size: 24px;
  font-weight: 700;
  position: absolute;
  z-index: 2;
`;

export const VideoTutorialBox = styled(Box)`
  background-color: rgba(48, 48, 48, 1);

  width: 146px;
  height: 66px;

  top: 560px;
  left: 121px;

  @media screen and (min-width: 768px) {
    width: 206px;
    height: 96px;
    top: 714px;
    left: 331px;
  }

  @media screen and (min-width: 1200px) {
    width: 206px;
    height: 96px;
    top: 384px;
    left: 770px;
  }
`;

export const CaloriesBox = styled(Box)`
  background-color: rgba(239, 137, 100, 1);

  width: 119px;
  height: 76px;

  top: 696px;
  left: 236px;

  @media screen and (min-width: 768px) {
    width: 180px;
    height: 110px;
    top: 866px;
    left: 556px;
  }
  @media screen and (min-width: 1200px) {
    width: 180px;
    height: 110px;
    top: 519px;
    left: 1228px;
  }
`;
