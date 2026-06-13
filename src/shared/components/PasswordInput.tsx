import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@shared/ui/input";
import { cn } from "@shared/lib/utils";

type PasswordInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">;

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
    ({ className, disabled, ...props }, ref) => {
        const [show, setShow] = useState(false);

        return (
            <div className="relative">
                <Input
                    ref={ref}
                    type={show ? "text" : "password"}
                    disabled={disabled}
                    className={cn("pr-10", className)}
                    {...props}
                />
                <button
                    type="button"
                    onClick={() => setShow((v) => !v)}
                    disabled={disabled}
                    aria-label={show ? "Ocultar contraseña" : "Mostrar contraseña"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground disabled:opacity-50"
                >
                    {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
            </div>
        );
    }
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
