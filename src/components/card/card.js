'use client'

import { Card, Text, Button, Group, CardSection } from '@mantine/core';
import CardImage from './cardImage.js';
import classes from './styles/card.module.css'; 

export default function StandardCard({image, body}) {
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
            <CardImage src={image.src} alt={image.alt}/>
        </CardSection>

        <Group mb="xs">
            <Text fw={900}>{body.title}</Text>
        </Group>

        <Group mb="lg">
            <Text classNames={{root: classes.bodytext}} 
                size="sm">
                {body.text}
            </Text>
        </Group>

        <Button style={{
            backgroundColor: 'var(--element-background)',
            color: 'var(--element-foreground)'
            }} 
            fw={800}
            fullWidth 
            radius="md">
            {body.buttonText}
        </Button>
    </Card>
    )
}