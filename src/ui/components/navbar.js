import { Container } from '@mantine/core';
import NavigtionLink from './navlink.js';

export default function NavBar() {
    return (
    <Container fluid 
        h="var(--navbar-height)"
        bg="var(--mantine-color-blue-9)"
        pos="fixed"
        top={0}
        left={0}
        right={0} 
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center"
        }}>
          <NavigtionLink isIconLink={true} iconName="IconHome2"/>
    </Container> 
    )
}