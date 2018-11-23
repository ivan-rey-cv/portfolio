import React from 'react'
import MainLayout from '../layouts/MainLayout'

const NotFoundPage = () => (
  <MainLayout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </MainLayout>
)

export default React.memo(NotFoundPage)
