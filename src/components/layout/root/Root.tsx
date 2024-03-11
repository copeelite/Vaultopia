

import Navbar from "../header/Navbar"
import SidebarNav from "../header/SidebarNav"
import PageWrapper from "../page-wrapper"
export const Root: Component = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="flex-none">
          <SidebarNav />
        </div>

        {/* Main content area */}
        <main className="flex-1 overflow-auto">
          {/* PageWrapper wraps around children to provide consistent padding or margin if needed */}
          <PageWrapper>
            <main>
            {children}
            </main>
          </PageWrapper>
        </main>
      </div>
    </>
  )
}