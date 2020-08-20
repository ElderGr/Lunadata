import styled, {css} from 'styled-components';
import Tooltip from '../Tooltip';

export const Container = styled.div`
    margin: 3% 0;
  background: #fff;
  border: solid 1px #e5e5e5;
  border-radius: 2.5px;
  position: relative;
  height: 55px;
  transition: 0.2s ease-in-out;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  label {
    display: flex;
    flex-direction: column;

    position: absolute;
    left: 2%;
    top: 25%;
    color: #6c6c6c;
    transition: 0.2s ease-in-out;

    ${props =>
      (props.isField || props.labelActive) &&
      css`
        font-size: 9pt;
        top: 2px;
        transition: 0.2s ease-in-out;
      `}
  }
  &:focus-within {
    border-color: #505050;

    label {
      font-size: 9pt;
      top: 2px;
      transition: 0.2s ease-in-out;
    }
  }

  > div {
    display: flex;
    justify-content: space-between;
    height: 100%;

    input {
      padding: 10px;
      border: none;
      font-size: 12pt;
      width: 100%;
    }
    
    >div{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 !important;
    }
  }     
`; 

export const Error = styled(Tooltip)`
  height: 100%;
  width: 30px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
