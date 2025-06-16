'use client'

import { Card, Text, Button, Group, CardSection, Image } from '@mantine/core';
import classes from './styles/card.module.css'; 

export default function StandardCard() {
    return (
    <Card classNames={{
            root: classes.root + ' ' + classes.borderedCard
        }} 
        style={{
            backgroundColor: 'var(--background-secondary)',
            color: 'var(--foreground)'
        }} 
        maw="40%" 
        w={284}
        h="fit-content" 
        withBorder
        shadow="md"
        radius="md" >
        
        <CardSection mb="md">
            <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png"
                height={160}
                alt="Japan"
            />
        </CardSection>

        <Group mb="lg">
            <Text fw={900}>Card Title</Text>
        </Group>

        <Group mb="lg">
            <Text size="sm">Card Text</Text>
        </Group>

        <Button style={{
            backgroundColor: 'var(--element-background)',
            color: 'var(--element-foreground)'
            }} 
            fw={800}
            fullWidth 
            radius="md">
            Button Text
        </Button>
    </Card>
    )
}