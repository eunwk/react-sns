import styled from "@emotion/styled";

const Styles = styled.section`
  & .tit-area {
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    h1 {
      font-size: 24px;
    }
  }
  & .list-area {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    margin-bottom: 80px;
  }

  @media all and (max-width: 1024px) {
    & .list-area {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media all and (max-width: 768px) {
    & .list-area {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media all and (max-width: 576px) {
    & .list-area {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 30px 15px;

      & .card-img-top {
        height: 150px;
        object-fit: cover;
      }
    }
  }
`;

export default Styles;
