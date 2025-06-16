
import { Container, ThemeIcon } from '@mantine/core';
import Link from 'next/link';
import { IconHome2 } from '@tabler/icons-react';

export default function NavigtionLink() {
    return (
    <Container mx="initial" 
        w="fit-content">
        <Link href="/">
            <ThemeIcon variant="outline" radius="md" size="xl">
                <IconHome2 style={{ width: '70%', height: '70%' }} stroke={1.75}/>
            </ThemeIcon>
        </Link>
    </Container>
    )
}