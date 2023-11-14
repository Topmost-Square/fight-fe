import styled from 'styled-components';
import NextLink from 'next/link';


const HeaderWrapper = styled.nav`
    background: grey;
    width: 100vw;
    height: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 3vw;

    div {
        margin-left: 2vw;
        display: flex;
        gap: 3vw;

        a {
            text-decoration: none;
            color: white;
            height: 5vh;
            width: 10vw;
            display: flex;
            align-items: center;
            justify-content: center; 

            &:hover {
                background: black;
            }
        }
    }

    
    
`

const StyledLink = styled(NextLink)`
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <div>
                <NextLink href='login'>Login</NextLink>
                <NextLink href='register'>Register</NextLink>
                <NextLink href='game'>Game</NextLink>
            </div>
        </HeaderWrapper>
    )
}