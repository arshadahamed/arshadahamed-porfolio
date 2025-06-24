import Image from 'next/image'
import React from 'react'

const umar = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>Desktop Application</p>
                        <h1>Library Management System - LMS</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <Image width={1095} height={1072} sizes='100vw' style={{width:"100%", height:"auto"}} src={"/images/projects/LMS/lms-1.jpg"} alt="image" />
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
                                <h3>Tech4Lab - India</h3>
                            </div>
                            <div className="single-info">
                                <p>Services</p>
                                <h3>Desktop Application - LMS</h3>
                            </div>
                            <div className="single-info">
                                <p>Project</p>
                                <h3>Re-Design</h3>
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
                            <p><strong>The Library Management System</strong> is a powerful Windows Forms (WinForms) desktop application developed to simplify and automate everyday library operations. Designed with a focus on functionality and efficiency, this system enables streamlined management of book inventories, member records, and the full cycle of book borrowing and returns.</p>

                            <p>Built using <strong>C#</strong> and the <strong>.NET Framework</strong>, the application follows a layered architecture comprising <strong>Business Logic (BL)</strong>, <strong>Data Access Layer (DAL)</strong>, and <strong>Models</strong>. This structure ensures clean code organization, maintainability, and scalability for future enhancements. Backed by a <strong>SQL Server</strong> database, the system guarantees reliable data handling and secure transactions.</p>

                            <p>The platform includes a wide range of practical features such as secure user authentication, book and member management, issue/return tracking, overdue and fine monitoring, and automated reporting. With its intuitive and user-friendly WinForms interface, the system offers a smooth experience for librarians and administrators alike.</p>

                            <h3>Key Features</h3>
                            <ul>
                            <li>User authentication (Login & Logout)</li>
                            <li>Manage books (Add, Edit, Delete, Search)</li>
                            <li>Manage members (Students & Teachers)</li>
                            <li>Issue and return books</li>
                            <li>Track overdue books and fines</li>
                            <li>Generate reports</li>
                            <li>Intuitive UI/UX for easy navigation</li>
                            </ul>

                            <h3>Technologies Used</h3>
                            <ul>
                            <li><strong>Programming Language:</strong> C#</li>
                            <li><strong>Framework:</strong> .NET (WinForms)</li>
                            <li><strong>Database:</strong> SQL Server</li>
                            <li><strong>Architecture:</strong> Business Logic (BL), Data Access Layer (DAL), Models</li>
                            <li><strong>Authentication:</strong> Identity-based authentication with JWT</li>
                            </ul>

                        </div>
                    </div>
                    {/* <!-- / END SINGLE RIGHT DESIGN AREA --> */}
                </div>
                {/* <!-- START SINGLE PAGE GALLERY DESIGN AREA --> */}
                <div className="row pt-30">
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/LMS/lms-2.jpg"} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-6s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/LMS/lms-3.jpg"} alt="gallery" />
                        </div>
                    </div>                
                </div>
                {/* <!--  / END SINGLE PAGE GALLERY DESIGN AREA --> */}
            </div>
        </div>
    )
}

export default umar