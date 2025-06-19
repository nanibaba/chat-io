import { Container } from '@mantine/core';

export default function CenteredPageContainer({ children }) {
    return (
      <Container style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
        h={1000} 
        fluid>
            {children}
      </Container>
      )
}