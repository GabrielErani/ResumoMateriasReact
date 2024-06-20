export const CardReact = ({children}) => (
    <div className="h-full w-full flex flex-col justify-center items-center p-4 rounded-xl bg-slate-200">
{children}
    </div>
);

export const CardContent = ({children}) => (
    <div className="flex flex-col justify-center items-center flex-col p-2 rounded-lg bg-slate-100">
{children}
    </div>
);

export const CardDescription = ({children}) => (
    <div className="text-center text-2xl m-4 bg-slate-200 w-[80%] rounded-full">
{children}
    </div>
);

    