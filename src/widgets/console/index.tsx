import { Terminal } from '@/features/terminal'
import {CommandStory} from "@/features/command-story";

export const Console = () => {
    return (
        <div style={{height: '50vh',  display: 'flex', flexDirection: "column", justifyContent: 'space-between'}}>
            <CommandStory/>
            <Terminal/>
        </div>
    );
};
