import React from 'react';
import Marquee from "react-fast-marquee";

const PartnersMarquee = () => {
    const partnerLogos = Array.from({ length: 15 }, (_, i) => `/images/client-logos/partner${i + 1}.png`);

    return (
        <div className="about-content-part-bottom">
            <h2>Tech Stack Expertise</h2>
            <div className="company-list">
                <div className="scroller">
                    <div className="scroller__inner">
                        <Marquee pauseOnHover speed={50} gradient={false}>
                            {partnerLogos.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`Partner ${index + 1}`}
                                    style={{
                                        height: 30,         // 👈 smaller height
                                        maxWidth: 100,      // 👈 optional: restrict max width
                                        objectFit: 'contain',
                                        marginRight: 10
                                    }}
                                />
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnersMarquee;
