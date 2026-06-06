
import {FormLogin, HeroBranding} from "@features/auth";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground lg:flex-row">
      {/* === Hero / Branding === */}
      <HeroBranding></HeroBranding>

      {/* === Form === */}
      <FormLogin></FormLogin>
    </div>
  )
}

export default LoginPage
