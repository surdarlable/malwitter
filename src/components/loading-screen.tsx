import { styled } from "styled-components"

const Wrapper = styled.div`
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
`;

const Text = styled.span`
    color: white;
    font-size: 18px;
`;

export default function LoadingScreen() {
    return (
        <Wrapper>
            <Text>Loading...</Text>
        </Wrapper>
    )
}