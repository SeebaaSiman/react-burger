import styled from "styled-components";
import { fadeOut, fadeIn } from "./animations"


export const SettingsContainer = styled.div`
  height: 100dvh;
  background: #F5F5F5;
  box-shadow: 0 2px 16px #000;
  display: flex;
`;

export const NavSettings = styled.nav`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
   background: #00350f;
`;

export const NavItemSettings = styled.button`
  padding: 18px 12px;
  background: none;
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
  color: ${({ active }) => (active ? "#F5F5F5" : "#416445")};
  border-bottom: 3px solid ${({ active }) => (active ? "#F5F5F5" : "transparent")};
  cursor: pointer;
  transition: color 0.2s, border-bottom 0.2s;
  outline: none;
  &:hover {
    color: #416445;
    background: #F5F5F5;
  }
`;

export const ContentAreaSettings = styled.div`
  height: 100dvh;
  position: relative;
  overflow-y: auto;
`;

export const AnimatedSectionSettings = styled.div`
  animation: ${({ $animating, $direction }) => ($animating ? ($direction === "out" ? fadeOut : fadeIn) : "none")} 0.35s
    cubic-bezier(0.4, 0, 0.2, 1);
`;

export const SectionContentSettings = styled.div`
  padding: 32px 24px 0 24px;
  font-size: 1.1rem;
  color: #9ca677;
`;

export const AppsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin : 24px 0;
`;

export const AppCard = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background: ${({ $connected }) => ($connected ? "#e8f5e9" : "#F5F5F5")};
  border: 1.5px solid ${({ $connected }) => ($connected ? "#00350f" : "#ddd")};
  border-radius: 12px;
  padding: 16px 20px;
  transition: background 0.2s, border 0.2s;
`;

export const Icon = styled.div`
  font-size: 2rem;
  margin-right: 18px;
`;

export const AppInfo = styled.div`
  flex: 1;
`;

export const AppName = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
`;

export const AppDesc = styled.div`
  font-size: 0.98rem;
  color: #666;
`;

export const ActionBtn = styled.button`
margin:4px;
  background: ${({ $connected }) => ($connected ? "#00350f" : "#e8f5e9")};
  color: ${({ $connected }) => ($connected ? "#F5F5F5" : "#416445")};
  border: 1.5px solid #00350f;
  border-radius: 6px;
  padding: 8px 18px;
  font-weight: 600;
  cursor: pointer;
      box-shadow: ${(props) => props.theme.cardShadow};

  transition: background 0.2s, color 0.2s;
  &:hover {
    background: ${({ $connected }) => ($connected ? "#F5F5F5" : "#416445")};
  color: ${({ $connected }) => ($connected ? "#00350f" : "#F5F5F5")};
  }
`;

export const NotifList = styled.ul`
  margin-top: 24px;
  padding: 0;
  list-style: none;
  max-width: 400px;
`;

export const NotifItem = styled.li`
  margin-bottom: 18px;
  label {
    font-size: 17px;
 position: relative;
 display: inline-block;
 width: 53px;
 height: 25px;
   }
    input[type="checkbox"] {
     opacity: 1;
 width: 0;
 height: 0;
     }
    span{
       position: absolute;
 cursor: pointer;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0px;
 background: #F5F5F5;
 transition: .4s;
 border-radius: 30px;
 border: 1px solid #e8f5e9;
 box-shadow:${(props) => props.theme.cardShadow};
    }
    span:before {
 position: absolute;
 content: "";
 height: 1.1em;
 width: 1.1em;
 border-radius: 16px;
 left: 1.2px;
 top: 1px;
 bottom: 0;
 background-color: ${(props) => props.theme.white};
  box-shadow:${(props) => props.theme.cardShadow};
 transition: .4s;
}
input:checked + span {
 background-color:${(props) => props.theme.secondaryButtons};
 border: 1px solid transparent;
 }
input:checked + span:before {
 transform: translateX(1.5em);
}
`;
export const FormLR = styled.form`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 350px;
    color: #9ca677;

  label {
    font-size: 1.05rem;
    display: flex;
    flex-direction: column;
    gap: 6px;
      color: #9ca677;

  }
  select {
    padding: 8px 12px;
    border-radius: 6px;
    border: 1.5px solid #ddd;
    font-size: 1rem;
    background: #F5F5F5;
    margin-top: 4px;
    color: #00350f;
  }
  input{
      padding: 8px 12px;
  border-radius: 6px;
  border: 1.5px solid #ddd;
  font-size: 1rem;
  background: #F5F5F5;
  margin-top: 4px;
  &:disabled {
    background: #eee;
      color: #9ca677;
   }
  }
`;

export const SummaryLR = styled.div`
  margin-top: 28px;
  font-size: 1.05rem;
  color: #00350f;
`;
export const BtnRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
  button{
      background:  #00350f  ;
  color: #F5F5F5 ;
   border-radius: 6px;
  padding: 8px 18px;
  font-weight: 600;
        box-shadow: ${(props) => props.theme.cardShadow};

  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background:  #416445 ;
  }
  &.btn-settings-general-cancel{
    color: red;
    background-color: #F5F5F5;
    border: 1.5px solid red;
    &:hover{
      background-color: red;
      color: #F5F5F5;
    }
  }
  }
`;
