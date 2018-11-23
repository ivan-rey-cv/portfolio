import React, { lazy, Suspense } from 'react'

import MainLayout from '../layouts/MainLayout'
import Loading from '../components/Loading'

const AppHeader = lazy(e => import('../components/AppHeader'))
const FrontTitle = lazy(e => import('../components/front-title/FrontTitle'))
const ProjectsSection = lazy(e =>
  import('../components/projects/ProjectsSection')
)
const About = lazy(e => import('../components/about/About'))

function IndexPage() {
  return (
    <MainLayout>
      <Suspense fallback={<Loading />}>
        <AppHeader />
        <FrontTitle />
        <ProjectsSection />
        <About />
      </Suspense>
    </MainLayout>
  )
}

export default React.memo(IndexPage)
