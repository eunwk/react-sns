import styled from "@emotion/styled";

const Styles = styled.div``;

export const PostGroupStyles = styled.section`
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
    & a {
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #333333;
      & .img-container {
        height: 180px;
        overflow: hidden;
        & img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.5s;
        }
      }
      &:hover {
        & .img-container img {
          transform: scale(1.05);
        }
      }
      & .card-body {
        display: flex;
        flex-direction: column;
        & .extra-info {
          margin-top: auto;
          font-size: 14px;
        }
      }
      & .card-text {
        line-height: 1.3;
        max-height: 5.2em;
        white-space: normal;
        display: block;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 15px;
        -webkit-box-orient: vertical;
        /* autoprefixer: off */
      }
    }
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
