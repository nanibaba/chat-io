import { Container } from '@mantine/core';

const defaultStyle = {
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column"
}

export default function InnerPageContainer({style=defaultStyle, children}) {
  return (
  <Container style={style}
    display="flex"
    h="calc(100vh - var(--navbar-height))"
    px={0}
    fluid >
      {children}
  </Container>
  )
}