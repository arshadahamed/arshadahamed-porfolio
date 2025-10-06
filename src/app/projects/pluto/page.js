import Image from 'next/image'
import React from 'react'

const Pluto = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>Web Application</p>
                        <h1>Pluto Consultancy - UK</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <Image 
                    width={1095} 
                    height={1072} 
                    sizes="100vw" 
                    style={{ width: "100%", height: "auto" }} 
                    src="/images/projects/Pluto/pluto-1.jpg" 
                    alt="Pluto Consultancy" 
                />
            </div>
            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>Year</p>
                                <h3>2025</h3>
                            </div>
                            <div className="single-info">
                                <p>Client</p>
                                <h3>Pluto Consultancy - UK</h3>
                            </div>
                            <div className="single-info">
                                <p>Services</p>
                                <h3>Web Application - Accounting Portfolio</h3>
                            </div>
                            <div className="single-info">
                                <p>Project</p>
                                <h3>Creative Design</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <h2>Description</h2>
                            <p>
                                <strong>Pluto Consultancy</strong> is an accounting and consulting 
                                company based in Harrow, London, UK. We specialize in delivering 
                                professional accounting, bookkeeping, tax advisory, and business consulting 
                                solutions tailored for startups, SMEs, and growing enterprises.
                            </p>

                            <p>
                                Our mission is to simplify financial management for businesses by providing 
                                transparent, reliable, and technology-driven services. We help organizations 
                                stay compliant, optimize their operations, and focus on growth while we handle 
                                the numbers.
                            </p>

                            <h3>Key Services</h3>
                            <ul>
                                <li>Bookkeeping & Financial Reporting</li>
                                <li>Corporate & Personal Tax Advisory</li>
                                <li>Payroll Management</li>
                                <li>VAT Registration & Compliance</li>
                                <li>Business Setup & Consultancy</li>
                                <li>Audit & Assurance Services</li>
                            </ul>

                            <h3>Why Choose Us?</h3>
                            <ul>
                                <li>Experienced accountants and consultants</li>
                                <li>Technology-driven financial solutions</li>
                                <li>Personalized service for every client</li>
                                <li>Transparent and reliable reporting</li>
                                <li>Located conveniently in Harrow, London</li>
                            </ul>

                            <h3>Technologies & Tools</h3>
                            <ul>
                                <li><strong>Accounting Software:</strong> QuickBooks, Xero, Sage</li>
                                <li><strong>Tax Compliance Tools:</strong> HMRC-approved systems</li>
                                <li><strong>Data Management:</strong> Secure cloud-based storage</li>
                                <li><strong>Reporting:</strong> Automated financial dashboards & reports</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Gallery Section */}
                <div className="row pt-30">
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <Image 
                                width={633} 
                                height={679} 
                                sizes="100%" 
                                style={{ width: "100%", height: "auto" }} 
                                src="/images/projects/Pluto/pluto-2.jpg" 
                                alt="Pluto Consultancy Screenshot 1" 
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-6s">
                            <Image 
                                width={633} 
                                height={679} 
                                sizes="100%" 
                                style={{ width: "100%", height: "auto" }} 
                                src="/images/projects/Pluto/pluto-3.jpg" 
                                alt="Pluto Consultancy Screenshot 2" 
                            />
                        </div>
                    </div>                
                </div>
            </div>
        </div>
    )
}

export default Pluto
