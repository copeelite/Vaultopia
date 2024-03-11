

import PageWrapper from "../page-wrapper"
import AdminSidebarNav from "../header/admin/AdminSidebarNav"

export const RootForAdmin: Component = ({ children }) => {
  return (
    <>
      <div className="flex">
        <div className="flex-none">
          <AdminSidebarNav />
        </div>

        {/* Main content area */}
        <main className="flex-1 overflow-auto">
          {/* PageWrapper wraps around children to provide consistent padding or margin if needed */}
          <PageWrapper>
            {children}
          </PageWrapper>
        </main>
      </div>
    </>
  )
}