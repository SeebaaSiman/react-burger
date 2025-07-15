import styled from "styled-components";

export const HeaderLoginPage = styled.div`
display: flex;
justify-content: center;
align-items: center;
p,svg {
 cursor: pointer;
 color:${(props) => props.theme.details};
 fill:${(props) => props.theme.details};
}
&:hover{
 p{
  text-decoration:underline;
 }
}
`