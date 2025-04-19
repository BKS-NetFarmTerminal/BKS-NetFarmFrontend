import { Input } from '@/shared/input'
import { Button } from '@/shared/button'

export const Terminal = () => {
    return (
        <div>
            <Input/>
            <Button onClick={()=> console.log('ff')}>submit</Button>
        </div>
    );
};