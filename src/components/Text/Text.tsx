import React from "react";
import styled from "styled-components";

const StyledText = styled.span`
   @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

   font-family: 'Rubik', sans-serif;
`;

export function Text({ tag, children, ...props }){
   return (
      <StyledText as={tag} {...props}>
         {children}
      </StyledText>
   );
}
