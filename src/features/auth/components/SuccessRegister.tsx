import { Link } from "react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@shared/ui/button";
import confeti from "@shared/assets/confeti.svg";
import happyIcon from "@shared/assets/happy-icon.svg";

export const SuccessRegister = () => {
    return (
        <section className="relative z-10 -mt-12 flex w-full flex-1 flex-col justify-center overflow-hidden rounded-t-[40px] bg-background px-6 py-12 lg:mt-0 lg:w-1/2 lg:flex-none lg:rounded-none lg:px-12 lg:py-16 xl:px-20">
            {/* Confetti decorativo de fondo */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-contain bg-top bg-no-repeat opacity-70 lg:h-96"
                style={{ backgroundImage: `url(${confeti})` }}
            />

            {/* Glow ambient bajo el contenido */}
            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/3 z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
            />

            {/* Contenido */}
            <div className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center text-center">
                {/* Icono con halo */}
                <div className="relative mb-7 animate-in fade-in zoom-in-75 duration-700">
                    <div
                        aria-hidden
                        className="absolute inset-0 -z-10 scale-125 rounded-full bg-primary/20 blur-2xl"
                    />
                    <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-linear-to-br from-primary/10 to-primary/0 p-3 ring-1 ring-primary/10 lg:h-40 lg:w-40">
                        <img
                            src={happyIcon}
                            alt=""
                            aria-hidden
                            className="h-full w-full drop-shadow-[0_8px_24px_rgba(91,92,255,0.35)]"
                        />
                        {/* Sparkles decorativos */}
                        <Sparkles
                            aria-hidden
                            className="absolute -right-1 -top-1 h-5 w-5 text-primary lg:-right-2 lg:-top-2 lg:h-6 lg:w-6"
                        />
                        <Sparkles
                            aria-hidden
                            className="absolute -bottom-1 -left-2 h-4 w-4 text-primary/70 lg:-bottom-2 lg:-left-3 lg:h-5 lg:w-5"
                        />
                    </div>
                </div>

                {/* Titular */}
                <h1
                    className="text-balance text-3xl font-bold leading-tight text-foreground lg:text-4xl animate-in fade-in slide-in-from-bottom-3 duration-700"
                    style={{ animationDelay: "200ms", animationFillMode: "backwards" }}
                >
                    ¡Felicitaciones!
                </h1>

                {/* Subtítulo */}
                <p
                    className="mt-3 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground lg:text-base animate-in fade-in slide-in-from-bottom-3 duration-700"
                    style={{ animationDelay: "280ms", animationFillMode: "backwards" }}
                >
                    Tu cuenta ha sido creada con éxito. Ya puedes iniciar sesión y empezar
                    a tomar el control de tus finanzas.
                </p>

                {/* CTA principal */}
                <Button
                    asChild
                    className="group mt-8 h-12 w-full rounded-xl text-base shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 animate-in fade-in slide-in-from-bottom-3 duration-700"
                    style={{ animationDelay: "360ms", animationFillMode: "backwards" }}
                >
                    <Link to="/login">
                        Ingresar a mi cuenta
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                </Button>

                {/* Nota secundaria */}
                <p
                    className="mt-5 text-xs text-muted-foreground animate-in fade-in duration-700"
                    style={{ animationDelay: "460ms", animationFillMode: "backwards" }}
                >
                    Te enviaremos un correo de bienvenida en unos minutos.
                </p>
            </div>
        </section>
    );
};