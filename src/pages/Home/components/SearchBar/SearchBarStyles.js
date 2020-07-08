import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 1.5rem;
  width: 100%;
  height: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(223, 227, 235);
  border-image: initial;
  border-radius: 0.5rem;
  padding: 0px 0.5rem;
  width: 50%;

  .search-icon {
    height: 1.5rem;
    width: 1.5rem;
    margin: 0px 0.5rem;
    fill: rgb(152, 161, 178);
  }

  .search-button-wrapper {
    height: 100%;
    min-height: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
    font-size: 100%;
    font-style: normal;
    text-rendering: optimizeLegibility;
    max-height: 32px;

    .search-button {
      max-height: 32px;
      line-height: 0;
      font-size: 0.875rem;
      padding: 0px 0.75rem;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 2.5rem;
      line-height: 2.5rem;
      box-sizing: border-box;
      color: white;
      background-color: ${(props) => (props.searchButtonDisabled ? 'rgb(216, 235, 253)' : 'rgb(12, 108, 242)')};
      cursor: ${(props) => (props.searchButtonDisabled ? 'not-allowed' : 'cursor')};
      color: ${(props) => (props.searchButtonDisabled ? 'rgb(12, 108, 242)' : 'white')};
      opacity: ${(props) => (props.searchButtonDisabled ? '0.5' : '1')};
      font-family: Inter;
      font-size: 1rem;
      font-weight: 600;
      padding: 0px 1rem;
      border-width: initial;
      border-style: none;
      border-color: initial;
      border-image: initial;
      border-radius: 0.255rem;
      transition: all 0.3s ease 0s;
    }
  } 

  .input-wrapper {
    display: flex;
    align-items: flex-start;
    background-color: red;
    width: 100%;

    input {
      display: flex;
      border-width: 0px;
      border-style: initial;
      border-color: initial;
      border-image: initial;
      padding: 0px;
      display: block;
      height: 2.7rem;
      width: 100%;
      box-sizing: border-box;
      font-family: Inter;
      font-size: 1rem;
      color: rgb(53, 63, 82);
      background-color: rgb(255, 255, 255);
      background-image: none;
      outline-width: 0px;
      user-select: text;
      font-family: 'Inter', serif;
      font-weight: 300;
    }
  }
`;
