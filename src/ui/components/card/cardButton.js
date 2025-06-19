import Link from 'next/link';
import { Button } from '@mantine/core'; 

export default function CardButton({text, href}) {
    const buttonProps =  {
        style: {
            backgroundColor: 'var(--element-background)',
            color: 'var(--element-foreground)'
        },
        fw: 800, 
        fullWidth: true, 
        radius: "md"
    }
    if (href) {
        buttonProps.component = Link; 
        buttonProps.href = href; 
    }
    return (
        <Button {...buttonProps}>
            {text}
        </Button>
    )
}