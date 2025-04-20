import {CSSProperties, FC} from "react";

interface ItemProps {
    url: string;     // Ссылка на изображение
    title: string;   // Текст под изображением
    size?: number;   // Опциональный размер (по умолчанию 100px)
}

export const Item: FC<ItemProps> = ({ url, title, size = 100 }) => {
    return (
        <div className="item-container" style={{ '--size': `${size}px` } as CSSProperties}>
            <div
                className="avatar"
                style={{ backgroundImage: `url(${url})` }}
                role="img"
                aria-label={title}
            />
            <p className="title">{title}</p>
        </div>
    );
};