import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@shared/ui/form";
import {type SubmitHandler, useForm} from "react-hook-form";
import {type RegisterFormValues, registerSchema} from "@features/auth";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@shared/ui/input";
import {Button} from "@shared/ui/button";
import {Loader2} from "lucide-react";
import GoogleIcon from "@shared/components/GoogleIcon";
import {Link} from "react-router";

const FormRegister = ()=> {
    const form = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        defaultValues:{
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    });

    const {handleSubmit, formState:{ isSubmitting } } = form;

    const onSubmit: SubmitHandler<RegisterFormValues> = async (formValues) => {

        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(formValues);
    }

    const handleGoogleRegister = () => {
        console.log('Registro con Google');
    }


    return (
        <section className="relative z-10 -mt-12 flex w-full flex-1 flex-col justify-center rounded-t-[40px] bg-background px-6 py-10 lg:mt-0 lg:w-1/2 lg:flex-none lg:rounded-none lg:px-12 lg:py-0 xl:px-20">
            <div className="mx-auto w-full max-w-md space-y-6">
            {/*Heading*/}
            <div className="space-y-2 text-center lg:text-left">
                <h1 className="text-3xl font-bold text-foreground lg:text-4xl">
                    Crear cuenta
                </h1>
                <p className="text-sm text-muted-foreground lg:text-base">
                    Crea tu cuenta para continuar en Subix
                </p>
            </div>

            {/*form*/}
            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="space-y-1.5">
                                <FormLabel className="text-sm font-medium text-foreground">Nombre completo</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        placeholder="Nombre y apellido"
                                        autoComplete="name"
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
                                        autoComplete="new-password"
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
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem className="space-y-1.5">
                                <FormLabel className="text-sm font-medium text-foreground">Confirmar contraseña</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="••••••••"
                                        autoComplete="new-password"
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
                        { isSubmitting ? 'Creando cuenta…' : 'Crear cuenta' }
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
                onClick={handleGoogleRegister}
                disabled={isSubmitting}
                className="h-12 w-full gap-3 rounded-xl text-base"
            >
                <GoogleIcon />
                Registrarse con Google
            </Button>

            {/* Link a login */}
            <p className="text-center text-sm text-muted-foreground">
                ¿Ya tienes cuenta?{' '}
                <Link to="/login"
                      className="font-semibold text-primary hover:underline">
                    Inicia sesión
                </Link>
            </p>

            </div>

        </section>

    )
}

export default FormRegister