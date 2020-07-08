import styled from 'styled-components';

export default styled.div`
  width: 100%;

  .row {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr 2fr 2.5fr;
    grid-template-columns: minmax(0, 1fr) minmax(0, 3fr) minmax(0, 2fr) minmax(0, 2.5fr);
    grid-gap: 1em;
    padding: 0.75rem 0px;
    border-bottom: 1px solid rgb(240, 242, 247);
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgb(240, 242, 247);

    .column {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      /* border: 2px solid black; */

      .column-title {
        font-family: "Inter";
        color: rgb(103, 113, 133);
        font-weight: 500;
        font-size: 12px;
        text-transform: none;
        font-style: normal;
      }

      

      .column-value {
        color: rgb(53, 63, 82);
        font-family: "Inter";
        font-weight: 500;
        font-size: 14px;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
        overflow: hidden;

        .hash-link {
          color: rgb(12, 108, 242);
        }
      }
    }
  }
`;
