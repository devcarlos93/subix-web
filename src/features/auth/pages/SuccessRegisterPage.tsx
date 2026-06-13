import { HeroBranding, SuccessRegister } from "@features/auth";

export const SuccessRegisterPage = () => {
    return (
        <div className="flex min-h-screen w-full flex-col bg-background text-foreground lg:flex-row">
            <HeroBranding />
            <SuccessRegister />
        </div>
    );
};

export default SuccessRegisterPage;