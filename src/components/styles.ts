import styled from 'styled-components';


export const TableStyled = styled.div`
    overflow-x: scroll;
    overflow-y: hidden;
    height: 200px;
    white-space:nowrap;
  th {
    font-size: 15px;
    font-weight: bold;
  }

  td {
    font-size: 12px;
  }

  form {
    display: flex;
    flex-direction: column;
      div {
        flex-direction: row;
      }
  }
  `