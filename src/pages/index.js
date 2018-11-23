import React from 'react'

import MainLayout from '../layouts/MainLayout'
import AppHeader from '../components/AppHeader'
import FrontTitle from '../components/front-title/FrontTitle'
import ProjectsSection from '../components/projects/ProjectsSection'
import About from '../components/about/About'

const IndexPage = () => (
  <MainLayout>
    <AppHeader />
    <FrontTitle />
    <ProjectsSection />
    <About />
  </MainLayout>
)

export default IndexPage
