import {FormRegister, HeroBranding} from "@features/auth";

const RegisterPage = () => {
    return (
        <div className="flex min-h-screen w-full flex-col bg-background text-foreground lg:flex-row">
            {/* === Hero / Branding === */}
            <HeroBranding></HeroBranding>

            {/* === Form === */}
            <FormRegister></FormRegister>



        </div>
    );
}
export default RegisterPage;