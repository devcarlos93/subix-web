import { Outlet } from 'react-router-dom'
import { SidebarInset, SidebarProvider } from '@shared/ui/sidebar'
import { TooltipProvider } from '@shared/ui/tooltip'
import { AppSidebar, SiteHeader } from '@features/dashboard'

const DashboardLayout = () => {
  return (
    <TooltipProvider delayDuration={200}>
      <SidebarProvider
        style={
          {
            '--sidebar-width': 'calc(var(--spacing) * 72)',
            '--header-height': 'calc(var(--spacing) * 12)',
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <Outlet />
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}

export default DashboardLayout
