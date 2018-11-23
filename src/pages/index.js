import React, { lazy, Suspense } from 'react'

import MainLayout from '../layouts/MainLayout'
// import AppHeader from '../components/AppHeader'
// import FrontTitle from '../components/front-title/FrontTitle'
// import ProjectsSection from '../components/projects/ProjectsSection'
// import About from '../components/about/About'

const IndexPage = () => {
  const AppHeader = lazy(e => import('../components/AppHeader'))
  const FrontTitle = lazy(e => import('../components/front-title/FrontTitle'))
  const ProjectsSection = lazy(e =>
    import('../components/projects/ProjectsSection')
  )
  const About = lazy(e => import('../components/about/About'))

  const Fallback = <div>Loading...</div>

  return (
    <MainLayout>
      <Suspense fallback={Fallback}>
        <AppHeader />
      </Suspense>

      <Suspense fallback={Fallback}>
        <FrontTitle />
      </Suspense>

      <Suspense fallback={Fallback}>
        <ProjectsSection />
      </Suspense>

      <Suspense fallback={Fallback}>
        <About />
      </Suspense>
    </MainLayout>
  )
}

export default React.memo(IndexPage)
