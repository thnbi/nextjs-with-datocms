import { Text } from "../../components/Text/Text";
import { Footer } from "../../components/Footer/Footer";
import styled from "styled-components";

const StyledHomeScreen = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 100vh;
   width: 100vw;
   background-color: #f6f6f6;
`;

export default function HomeScreen() {
	return (
		<>
			<StyledHomeScreen>
				<Text tag="h1">Hello World</Text>

				<Text tag="p">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nulla vitae nisl nec nunc tincidunt lacinia. Nullam euismod,
					nisl a tincidunt lacinia, nisl nisl aliquam nisl, vitae
					aliquam nisl nisl eu nisl.
				</Text>
			</StyledHomeScreen>
			<Footer />
		</>
	);
}
