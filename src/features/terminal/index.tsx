import { Input } from '@/shared/input'
import { Button } from '@/shared/button'
import { ChangeEvent, useState, KeyboardEvent } from "react";
import {commandDefinition} from "./comands";

export const Terminal = () => {
    const [input, setInput] = useState<string>('')

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            submitHandler();
        }
    };

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value)
    }

    const submitHandler = () => {
        commandDefinition(input)
        setInput('')
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px solid #ccc'
        }}>
            <Input
                onChange={inputHandler}
                onKeyDown={handleKeyPress}  // Добавляем обработчик клавиш
                value={input}
            />
            <Button onClick={submitHandler}>submit</Button>
        </div>
    );
};