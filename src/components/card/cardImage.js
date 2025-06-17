import { Image } from '@mantine/core';

export default function CardImage({src, alt}) {
    return <Image src={src} height={160} alt={alt} />
}