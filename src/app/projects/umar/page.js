import Image from 'next/image'
import React from 'react'

const umar = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>Website Design</p>
                        <h1>Umar-Hassan.com - Portfolio</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <Image width={1095} height={1072} sizes='100vw' style={{width:"100%", height:"auto"}} src={"/images/projects/Umar/umar-1.jpg"} alt="image" />
            </div>
            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        {/* <!-- START SINGLE LEFT DESIGN AREA --> */}
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>Year</p>
                                <h3>2025</h3>
                            </div>
                            <div className="single-info">
                                <p>Client</p>
                                <h3>Umar Hassan</h3>
                            </div>
                            <div className="single-info">
                                <p>Services</p>
                                <h3>Web Design - Portfolio</h3>
                            </div>
                            <div className="single-info">
                                <p>Project</p>
                                <h3>Creative</h3>
                            </div>
                        </div>
                        {/* <!-- / END SINGLE LEFT DESIGN AREA --> */}
                    </div>
                    {/* <!-- START SINGLE RIGHT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <h2>
                                Description
                            </h2>
                            <p>Umar-Hassan.com is the official digital presence of a cutting-edge marketing agency based in Sri Lanka, founded and managed by Umar Hassan. The website showcases the agency’s expertise in delivering creative marketing solutions for businesses looking to elevate their brand and digital footprint.</p>

                            <p>Designed and developed using modern front-end technologies including HTML, Tailwind CSS, and JavaScript, the website offers a clean, responsive, and high-performance user experience across all devices. From strategic brand storytelling to digital campaign management, every element on the site reflects the agency’s focus on creativity, innovation, and measurable results.</p>

                            <p>Umar-Hassan.com serves as both a portfolio and service hub — highlighting successful client projects, marketing packages, and essential contact points for potential collaborations. Whether you're a startup or a growing business, this platform provides a professional gateway to transform your ideas into impactful marketing outcomes.</p>

                        </div>
                    </div>
                    {/* <!-- / END SINGLE RIGHT DESIGN AREA --> */}
                </div>
                {/* <!-- START SINGLE PAGE GALLERY DESIGN AREA --> */}
                <div className="row pt-30">
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/Umar/umar-2.jpg"} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-6s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/Umar/umar-3.jpg"} alt="gallery" />
                        </div>
                    </div>                
                </div>
                {/* <!--  / END SINGLE PAGE GALLERY DESIGN AREA --> */}
            </div>
        </div>
    )
}

export default umar