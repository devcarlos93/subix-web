import {Input} from "@shared/ui/input";
import {Button} from "@shared/ui/button";
import {Link} from "react-router";
import GoogleIcon from "@shared/components/GoogleIcon";
import {type SubmitHandler, useForm} from "react-hook-form";
import {type LoginFormValues, loginSchema} from "@features/auth";
import {zodResolver} from "@hookform/resolvers/zod";
import {Loader2} from "lucide-react";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@shared/ui/form";

const FormLogin = () => {
    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const {handleSubmit, formState: { isSubmitting }} = form;



    const onSubmit: SubmitHandler<LoginFormValues> = async (formValues) => {

        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(formValues);
    }

    const handleGoogleLogin = () => {
        console.log('Login con Google');
    }
    return (
        <section className="relative z-10 -mt-12 flex w-full flex-1 flex-col justify-center rounded-t-[40px] bg-background px-6 py-10 lg:mt-0 lg:w-1/2 lg:flex-none lg:rounded-none lg:px-12 lg:py-0 xl:px-20">
            <div className="mx-auto w-full max-w-md space-y-6">
                {/* Heading */}
                <div className="space-y-2 text-center lg:text-left">
                    <h1 className="text-3xl font-bold text-foreground lg:text-4xl">
                        Bienvenido de vuelta
                    </h1>
                    <p className="text-sm text-muted-foreground lg:text-base">
                        Inicia sesión para continuar en Subix
                    </p>
                </div>

                {/* Form */}
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="space-y-1.5">
                                    <FormLabel className="text-sm font-medium text-foreground">Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="tu@email.com"
                                            autoComplete="email"
                                            className="h-12 rounded-xl"
                                            disabled={isSubmitting}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="space-y-1.5">
                                    <FormLabel className="text-sm font-medium text-foreground">Contraseña</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="••••••••"
                                            autoComplete="current-password"
                                            className="h-12 rounded-xl"
                                            disabled={isSubmitting}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                        <Button type="submit"
                                className="h-12 w-full gap-2 rounded-xl text-base"
                                disabled={isSubmitting}>
                            {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
                            { isSubmitting ? 'Iniciando sesión…' : 'Iniciar sesión' }
                        </Button>
                    </form>
                </Form>

                {/* Separador con "ó" */}
                <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-border" />
                    <span className="text-sm text-muted-foreground">ó</span>
                    <div className="h-px flex-1 bg-border" />
                </div>

                {/* Botón Google */}
                <Button
                    type="button"
                    variant="outline"
                    onClick={handleGoogleLogin}
                    disabled={isSubmitting}
                    className="h-12 w-full gap-3 rounded-xl text-base"
                >
                    <GoogleIcon />
                    Continuar con Google
                </Button>

                {/* Link a registro */}
                <p className="text-center text-sm text-muted-foreground">
                    ¿No tienes cuenta?{' '}
                    <Link
                        to="/register"
                        className="font-semibold text-primary hover:underline"
                    >
                        Regístrate
                    </Link>
                </p>
            </div>
        </section>
    );

}

export default FormLogin