import { Container } from '@mantine/core';

export default function OuterPageContainer({children}) {
    return (
        <Container display="flex" 
            px={0}
            fluid >
            {children}
        </Container>
    )
}