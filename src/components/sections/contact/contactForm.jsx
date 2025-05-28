'use client';

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { RiMailLine } from '@remixicon/react';
import SlideUp from '@/utlits/animations/slideUp';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();

        const serviceID = 'service_a2fez75';
        const templateID = 'template_vkq9b6j'; // sends to you
        const autoReplyTemplateID = 'template_98zaf8l'; // sends to user
        const publicKey = 'gr2GvKL9lJj_Mky2O';

        const formData = new FormData(form.current);
        const name = formData.get('name');
        const email = formData.get('email');

        try {
            // 1. Send to you
            await emailjs.sendForm(serviceID, templateID, form.current, publicKey);

            // 2. Auto-reply to user
            await emailjs.send(serviceID, autoReplyTemplateID, {
                name,
                email,
            }, publicKey);

            alert('Message sent and auto-reply sent!');
            form.current.reset();
        } catch (err) {
            console.error('EmailJS Error:', err);
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="col-lg-8">
            <SlideUp>
                <div className="contact-form contact-form-area">
                    <form className="contactForm" ref={form} onSubmit={sendEmail}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" name="name" className="form-control" placeholder="Steve Milner" required />
                                    <label htmlFor="name" className="for-icon"><i className="far fa-user"></i></label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="email" className="form-control" placeholder="hello@websitename.com" required />
                                    <label htmlFor="email" className="for-icon"><i className="far fa-envelope"></i></label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea name="message" id="message" className="form-control" rows="4" placeholder="Write Your message" required></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group mb-0">
                                    <button type="submit" className="theme-btn">
                                        Send Me Message <i><RiMailLine size={15} /></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </SlideUp>
        </div>
    );
};

export default ContactForm;
