'use client'

import { Card, CardSection, Group, Text } from '@mantine/core';
import CardImage from './cardImage.js';
import CardButton from './cardButton.js';
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
        <CardButton text={body.buttonText} href={body.buttonHref}/>
    </Card>
    )
}