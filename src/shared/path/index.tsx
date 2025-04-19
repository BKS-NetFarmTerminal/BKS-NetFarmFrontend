import {useStore} from "@/entities/store";

export const Path = () => {
    const { fullPath } = useStore()
    return (
        <div>
            {fullPath().map(path => <span>{path} /</span>)}
        </div>
    );
};
