import { Container } from '@mantine/core';

export default function CenteredPageContainer({ children, justifyContent = "center"}) {
    return (
      <Container style={{
        display: "flex",
        alignItems: "center",
        justifyContent,
        flexDirection: "column"
      }}
        h="calc(100vh - var(--navbar-height))" 
        fluid>
            {children}
      </Container>
      )
}