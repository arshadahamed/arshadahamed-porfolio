import React from 'react'
import { RiBookLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const Resume = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                        {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>Experience</h2>
                                <div className="experience-list">
                                    <Card year={'2024 - Present'} title={'WEB DEVELOPER (PHP/.NET)'} institution={'Tech Fusions Lab'} />
                                    <Card year={'2019 - Present'} title={'FREELANCER WEB DEVELOPER'} institution={'VueJS , Angular , TailwindCSS'} />
                                    <Card year={'2019 - Present'} title={'FREELANCER GRAPHIC DESIGNER'} institution={'Adobe Photoshop , Adobe Illustrator , Adobe After Effects'} />
                                    <Card year={'2014 - 2017'} title={'TECHNICAL SUPPORT SPECIALIST'} institution={'HelloTel Lanka (Private) Limited'} />
                                    
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->
                        <!-- START EDUCATION RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="experience-list">
                                <div className="single-resume">
                                    <h2>Education</h2>
                                    <Card year={'2023 - 2024'} title={'Bachelor Degree of Computer Science'} institution={'2nd Upper Division at University Of StaffordShire, UK.'} />
                                    <Card year={'2019 - 2023'} title={'HND In Artificial Intelligence'} institution={'Pearson, UK.'} />
                                    <Card year={'2016 - 2017'} title={'Agriculture Sales Technician Programme'} institution={'Department Of Agriculture, Sri Lanka.'} />
                                    <Card year={'2014 - 2015'} title={'DIPLOMA IN CAD AND BS'} institution={'Pearson, UK.'} />
                                    <Card year={'2011 - 2013'} title={'GCE Advanced Level'} institution={'Galgamuwa Central College - Commerce Stream'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EDUCATION RESUME DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume


const Card = ({ year, title, institution }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <RiBookLine />
                </div>
                <div className="content">
                    <span className="years">{year}</span>
                    <h4>{title}</h4>
                    <span className="company"> {institution} </span>
                </div>
            </div>
        </SlideUp>
    )
}