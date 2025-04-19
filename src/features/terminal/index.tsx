import { Input } from '@/shared/input'
import { Button } from '@/shared/button'
import {ChangeEvent, useState, KeyboardEvent} from "react";
import {commandDefinition} from "./comands";
import {Path} from "@/shared/path";
import {Store, useStore} from "@/entities/store";
import {useNavigate} from "react-router";

export const Terminal = () => {
    const [input, setInput] = useState<string>('')
    const store: Store = useStore()
    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            submitHandler();
        }
    };

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value)
    }
    const navigate = useNavigate();
    const submitHandler = () => {
        commandDefinition(input,store,navigate)
        store.addCommandStory(input)
        setInput('')
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px solid #ccc'
        }}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'start'}}>
                <Path/>
                <Input
                    onChange={inputHandler}
                    onKeyDown={handleKeyPress}  // Добавляем обработчик клавиш
                    value={input}
                />
            </div>

            <Button onClick={submitHandler}>submit</Button>
        </div>
    );
};