import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  width: 0;
  height: 100%;
  transition: 0.5s ease;
  z-index: 0;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.imageOverlay};
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: none;
  width: 30%;
  margin: 0 20px 0 0;
  height: min-content;
  z-index: -1;
  img {
    border-radius: 10px;
  }
  @media screen and (min-width: 600px) {
    display: block;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 150px;
  margin-bottom: 40px;
  padding: 0;
  list-style: none;
  z-index: 0;
  :hover ${Overlay} {
    width: 100%;
  }
`;

export const MetaData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  line-height: 1.2;
  z-index: 0;
  @media screen and (min-width: 600px) {
    width: 70%;
  }
`;

export const DetailsWrapper = styled.ul`
  position: absolute;
  bottom: 0;
  top: 50%;
  left: 50%;
  margin: auto;
  padding: 0;
  list-style: none;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  white-space: nowrap;
  z-index: 0;
  font-size: 1rem;
  ul {
    display: flex;
    width: 100%;
    margin: auto;
    padding: 0;
    list-style: none;
    align-items: center;
    text-align: center;
    li {
      margin: 0px 0px 0px 10px;
    }
  }
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  z-index: 0;
  ul {
    padding: 0;
    list-style: none;
    display: flex;
    li {
      width: 300px;
      margin: 0px 0px 0px 10px;
    }
  }
`;
