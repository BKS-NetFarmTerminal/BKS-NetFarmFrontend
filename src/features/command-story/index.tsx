import {useStore} from "@/entities/store";
import {ReactNode, useEffect, useRef} from "react";

export const CommandStory = () => {
    const {commandStory} = useStore();
    return (
        <ScrollContainer>
            историия команд
            {commandStory.map((item) => (
                <p>{item}</p>
            ))}
        </ScrollContainer>
    );
};

const ScrollContainer = ({ children }: { children: ReactNode }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Автоматическая прокрутка вниз при изменении контента
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [children]); // Зависимость от children - срабатывает при изменении контента

    return (
        <div className="scroll-container" ref={containerRef}>
            {children}
        </div>
    );
};