import styled from 'styled-components';

export default styled.div`
  width: 80%;

  .page-title {
    font-family: Inter;
    font-weight: 700;
    font-size: 1.5rem;
    text-transform: none;
    color: rgb(53, 63, 82);
    opacity: 1;
    margin: 16px 0;
  }

  .transaction-row {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgb(240, 242, 247);
    padding: 30px 0;

    .hash {
      overflow: hidden;
      width: 40%;
      text-overflow: ellipsis;
      margin-bottom: 16px;
    }

    .arrow {
      width: 21px;
      height: 21px;
      margin: 0 40px;
    }

    .nested-transaction-row {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .addresses-wrapper {
      display: flex;
      flex-direction: column;
    }
  }

  .row {
    display: grid;
    grid-template-columns: 1.6fr 4fr;
    grid-gap: 1em;
    padding: 0.75rem 0px;
    border-bottom: 1px solid rgb(240, 242, 247);

     .column {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-family: Inter;
      font-size: 14px;
    }

    .column-title {
      color: rgb(103, 113, 133);
    }

    .column-value {
      color: rgb(53, 63, 82);
    }
  }
`;
