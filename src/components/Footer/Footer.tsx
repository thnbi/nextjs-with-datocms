import styled from "styled-components";
import { Text } from "../Text/Text";

const StyledFooter = styled.footer`
	background-color: rgb(17, 17, 17);
	color: #f6f6f6;
	padding: 1rem;
	text-align: center;
   position: fixed;
   bottom: 0;
   width: 100%;
`;

export function Footer() {
	return (
		<footer>
			<StyledFooter>
				<Text tag="p">All rights reserved for hanabi</Text>
			</StyledFooter>
		</footer>
	);
}
