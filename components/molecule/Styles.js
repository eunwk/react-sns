import styled from "@emotion/styled";

const Styles = styled.div`
  & {
    margin-bottom: 50px;
  }
`;

export const MessageBoxStyles = styled.section`
  padding: 100px 10px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  font-size: 16px;

  & h1 {
    font-size: 24px;
    margin-bottom: 15px;
  }

  & .msg-img {
    color: #a7a7a7;
    font-size: 80px;
    margin: 0 auto 60px;
  }

  & .btn-area {
    margin-top: 40px;
    & .btn {
      min-width: 120px;
    }
  }
`;

export default Styles;
