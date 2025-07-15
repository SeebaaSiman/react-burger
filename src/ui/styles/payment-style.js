import styled from "styled-components";
export const PaymentHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: ${(props) => props.theme.bgApp};
   border-bottom: 1px solid ${(props) => props.theme.primaryText};
   box-shadow: ${(props) => props.theme.cardShadow};
  margin-bottom: 12px;
`;

export const PaymentPage = styled.section`
  height: 100dvh;
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.bgApp};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 8px;
  overflow-y: auto;
  overflow-x: hidden;
`;
export const PaymentSection = styled.div`
  max-width: 900px;
  border-radius: 18px 18px 8px 8px;
  background-color: ${(props) => props.theme.secondaryText};
 color:#F5F5F5;
  width: 85%;
  box-shadow: ${(props) => props.theme.cardShadow};
border: 1px solid #F5F5F5;
  & > div {
    padding: 16px 22px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
`;
export const PaymentSectionTitle = styled.span`
  display: flex;
  border-bottom: 1px dashed #F5F5F5;
  width: 100%;
  padding: 12px 16px 6px 16px;
  margin-bottom:6px;
`;
export const PaymentSectionItems = styled.div`
  max-width: 900px;
  border-radius: 18px 18px 8px 8px;
    background-color: ${(props) => props.theme.secondaryText};
 color:#F5F5F5;
  width: 85%;
  padding: 22px 6px 12px 0px;
  border: none;
  box-shadow: ${(props) => props.theme.cardShadow};
`;
export const PaymentFooterPrice = styled.div`
  max-width: 900px;
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
     border-radius: 8px 8px 18px 18px;
  box-shadow: ${(props) => props.theme.cardShadow};
  border: none;

  padding: 12px 16px;
   background-color: ${(props) => props.theme.secondaryText};
  p {
    font-size: 1.3rem;
    font-weight: bold;
    color: ${(props) => props.theme.primaryButtons};
  }
  span {
    font-size: 1.3rem;
    color: ${(props) => props.theme.primaryButtons};
  }
`;
export const PaymentBtnContainer = styled.div`
  max-width: 900px;
  padding: 6px;
  margin : 22px 0;
  display:flex;
  justify-content: center;
  align-items:center;
  gap:5rem;
  button, a {
    padding:12px 20px;
    border-radius: 12px;
 color:#F5F5F5;
 background-color: ${(props) => props.theme.primaryText};
  box-shadow: ${(props) => props.theme.cardShadow};
  }
  button:active, a:active{
    scale:0.98;
  }
`;
