import React from 'react'
import { RiGlobalFill, RiPantoneFill, RiQuillPenLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const ServiceGrid = () => {
    return (
        <section id="services" className="services-area innerpage-single-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <p>Services</p>
                                    <h2>Quality Services</h2>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="row">
                        <Card id={1} icon={<RiGlobalFill size={60} />} title={"Brand Identity Design"} description={"We design strong and memorable brand identities that help your business stand out and connect with customers."} />
                        <Card id={2} icon={<RiQuillPenLine size={60} />} title={"Website Development"} description={"We build fast, modern, and responsive websites that reflect your brand and deliver a seamless user experience."} />
                        <Card id={3} icon={<RiPantoneFill size={60} />} title={"Graphic Designing"} description={"We create stunning and effective visuals for print and digital platforms to elevate your brand presence.              "} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceGrid

const Card = ({ icon, title, description, id }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <SlideUp delay={id}>
                <div className="service-item">
                    {icon}
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </SlideUp>
        </div>
    )
}