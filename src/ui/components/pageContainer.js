import { Container } from '@mantine/core';

const defaultStyle = {
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column"
}

export default function PageContainer({style=defaultStyle, children}) {
  return (
  <Container style={style}
    display="flex"
    h="calc(100vh - var(--navbar-height))"
    fluid >
      {children}
  </Container>
  )
}