import {ChangeEvent, FC, KeyboardEvent} from "react";

interface Input {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}
export const Input: FC<Input> = ({ onChange, onKeyDown, value }) => {
    return (
            <input
                className={'invisible-input'}
                placeholder={'|'}
                type="text"
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={value}
            />
    );
};

