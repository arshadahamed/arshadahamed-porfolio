import Image from 'next/image'
import React from 'react'

const techfusions = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>Logo Design</p>
                        <h1>TechFusionslab</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <Image width={1095} height={1072} sizes='100vw' style={{width:"100%", height:"auto"}} src={"/images/projects/TechFusionsLab/techfusionslogo.jpg"} alt="image" />
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
                                <h3>TechFusionslab</h3>
                            </div>
                            <div className="single-info">
                                <p>Services</p>
                                <h3>Brand Design</h3>
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
                            <p>We had the opportunity to design a complete branding package for TechFusionLab, an innovative IT solutions company. The goal was to create a modern, professional, and tech-forward brand identity that resonates with their mission and target audience.</p>
                            <p>💼 What I Delivered</p>
                            <ul>
                                <li>Custom Logo Design – A sleek and memorable logo that reflects innovation and reliability.</li>
                                <li>Full Brand Identity – Including color palette, typography, and usage guidelines to ensure brand consistency across platforms.</li>
                                <li>Business Collateral – Designed elegant business cards and letterheads to support a strong corporate presence.</li>
                                <li>Marketing Materials – Created promotional flyers and digital banners for online and offline marketing.</li>
                                <li>Logo Animation – Produced a dynamic logo intro video ideal for presentations and tech promotions.</li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- / END SINGLE RIGHT DESIGN AREA --> */}
                </div>
                {/* <!-- START SINGLE PAGE GALLERY DESIGN AREA --> */}
                <div className="row pt-30">
                    {/* <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-2s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/TechFusionsLab/techfusionslogo.jpg"} alt="gallery" />
                        </div>
                    </div> */}
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/TechFusionsLab/techfusions-1.jpg"} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-6s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/TechFusionsLab/techfusions-2.jpg"} alt="gallery" />
                        </div>
                    </div>
                    {/* <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/single-project4.jpg"} alt="gallery" />
                        </div>
                    </div> */}
                </div>
                {/* <!--  / END SINGLE PAGE GALLERY DESIGN AREA --> */}
            </div>
        </div>
    )
}

export default techfusions