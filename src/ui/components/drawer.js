import { Container } from '@mantine/core';

export default function Drawer({type, width}) {
    const className = type === 'left' ? "leftDrawer" : "rightDrawer"
    return (
        <Container className={className}
            px={0}
            w={width}/>
    )
}