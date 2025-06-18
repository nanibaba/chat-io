
import { Container, ThemeIcon, Text} from '@mantine/core';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

export default function NavigtionLink({isIconLink = false, iconName, href='/', navText}) {
    // Dynamically import icon only if needed
    const IconComponent = useMemo(() => {
        if (isIconLink && iconName) {
            return dynamic(() =>
                import('@tabler/icons-react').then((mod) => mod[iconName])
            );
        }
        return null;
    }, [iconName, isIconLink]);
    return (
    <Container mx="initial" 
        w="fit-content">
        <Link href={href}>
        {isIconLink && IconComponent ? (
            <ThemeIcon variant="outline" radius="md" size="xl">
                <IconComponent style={{ width: '70%', height: '70%' }} stroke={1.75}/>
            </ThemeIcon>
            ): (
                <Text>{navText}</Text>
            )}
        </Link>
    </Container>
    )
}