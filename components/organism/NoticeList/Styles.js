import styled from "@emotion/styled";

const Styles = styled.section`
  margin-bottom: 40px;
  & .tit-area {
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    h1 {
      font-size: 24px;
    }
  }
  & .thumb-img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
  }

  & .swiper-slide {
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.1);
    padding: 10px;
    border-radius: 5px;
    width: 400px;
    max-width: 70%;
    transition: 0.2s background;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    @media all and (max-width: 1024px) {
      width: 300px;
    }

    & > a {
      display: flex;
      justify-content: space-between;
      .txts {
        width: calc(100% - 120px);
      }
      & .notice-tit {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
`;

export default Styles;
