import { Gallery } from "./gallery.react";

const MOCK_IMAGES: string[] = [
    'https://picsum.photos/800/600?random=1',
    'https://picsum.photos/800/600?random=2',
    'https://picsum.photos/800/600?random=3',
    'https://picsum.photos/800/600?random=4',
    'https://picsum.photos/800/600?random=5',
    'https://picsum.photos/800/600?random=6',
    'https://picsum.photos/800/600?random=7',
    'https://picsum.photos/800/600?random=8',
    'https://picsum.photos/800/600?random=9',
];

export const GalleryExample = () => {
    return <Gallery images={MOCK_IMAGES} />;
};
