import bgApps from "@shared/images/fondo-Colum-Left.png";
import Logo from "@shared/components/Logo";

export  const HeroBranding = () => {
    return (
        <aside className="relative flex min-h-[35vh] w-full overflow-hidden lg:min-h-0 lg:w-1/2">
            {/* Capa 1: imagen de fondo */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bgApps})` }}
            />

            {/* Capa 2: gradiente */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,#7B7CFF_0%,var(--primary)_45%,#3B3CCC_100%)] opacity-85" />

            {/* Capa 3: tinte sutil */}
            <div className="absolute inset-0 bg-primary/20" />

            {/* Contenido */}
            <div className="relative z-10 flex w-full flex-col items-center justify-center gap-3 px-8 py-10 text-center text-primary-foreground lg:gap-4 lg:py-0">
                <Logo
                    imgClassName="h-25 w-25 lg:h-50 lg:w-50"
                    textClassName="text-2xl lg:text-4xl text-primary-foreground"
                />
                <p className="text-lg font-bold lg:text-3xl lg:mt-5">
                    Tus suscripciones bajo control
                </p>
            </div>
        </aside>
    );
}

export default HeroBranding