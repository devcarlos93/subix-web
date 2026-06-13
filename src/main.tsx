import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { appRoutes } from '@app/routes'
import './index.css'
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "@shared/lib/query-client";
import {Toaster} from "sonner";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={appRoutes} />
            <Toaster theme="dark" position='top-right' richColors closeButton/>
        </QueryClientProvider>
    </StrictMode>

)
