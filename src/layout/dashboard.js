import React from 'react'
import BackgroundImage from '../layout/dashboardComponent/bg'
import Qualities from '../layout/dashboardComponent/motivation'
import Notice from '../layout/dashboardComponent/text'
import ImageGrid from '../layout/dashboardComponent/imageGrid'
import ImageGrid2 from '../layout/dashboardComponent/imgRow'
import RecentCourses from '../layout/dashboardComponent/recentCourses'
import Qualities2 from '../layout/dashboardComponent/motivation2'
import Pricing from '../layout/dashboardComponent/pricing'
import Instructor from '../layout/dashboardComponent/instructor'
import Socials from '../layout/dashboardComponent/socials'
import Footer from '../layout/dashboardComponent/footer'

function dashboard() {
    return (
        <div style={{backgroundColor: '#151515',}}>
            <BackgroundImage />
            <Qualities />
            <Notice />
            <ImageGrid />
            <ImageGrid2 />
            <RecentCourses />
            <Qualities2 />
            <Pricing />
            <Instructor />
            <Socials />
            <Footer />
        </div>
    )
}

export default dashboard
