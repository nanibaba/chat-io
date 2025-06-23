import { Container } from '@mantine/core';

export default function CenteredPageContainer({ isChatActive = false, children }) {
  const containerProps = {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    },
    h: "calc(100vh - var(--navbar-height))", 
    fluid: true 
  }
  if (isChatActive) {
    containerProps.pos = "relative"; 
  }
  return (
  <Container {...containerProps}>
      {children}
  </Container>
  )
}