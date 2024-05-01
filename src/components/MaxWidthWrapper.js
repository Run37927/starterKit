import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({ className, children }) => {
    return (
        <div className={cn('mx-auto w-full max-w-screen-lg px-2.5', className)}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper;