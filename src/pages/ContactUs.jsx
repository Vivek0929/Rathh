import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="contact-page-container">
            <Navbar />

            <section className="contact-hero">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto">
                        Have questions about your next adventure? Our team is here to help you plan the perfect journey.
                    </p>
                </div>
            </section>

            <div className="contact-card-wrapper ">
                <div className="contact-glass-card md:mt-10">
                    {/* Contact Info Panel */}
                    <div className="contact-info-panel ">
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

                            <div className="info-item">
                                <div className="info-icon-box">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </div>
                                <div className="info-text">
                                    <h4>Phone</h4>
                                    <p>+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon-box">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                <div className="info-text">
                                    <h4>Email</h4>
                                    <p>support@rathh.com</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon-box">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <div className="info-text">
                                    <h4>Location</h4>
                                    <p>123 Travel Street, Adventure City, IN</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links flex gap-4 mt-8">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                                <span className="sr-only">Facebook</span>
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.14H7v4.21h2.5V23.5h5V11.67h3.5l.77-4.21z" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                                <span className="sr-only">Instagram</span>
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85c.15-3.23 1.66-4.77 4.92-4.92 1.27-.06 1.64-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 2.69.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.36-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 6.16 6.16A6.16 6.16 0 0 0 12 5.84zm0 10.16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.4-10.84a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Form Panel */}
                    <div className="contact-form-panel">
                        <h3 className="contact-form-title">Send a Message</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="contact-input-group">
                                    <label className="contact-input-label">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="contact-input"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="contact-input-group">
                                    <label className="contact-input-label">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="contact-input"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="contact-input-group">
                                <label className="contact-input-label">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="contact-input"
                                    placeholder="How can we help?"
                                    required
                                />
                            </div>

                            <div className="contact-input-group">
                                <label className="contact-input-label">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="contact-input"
                                    placeholder="Write your message here..."
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="contact-submit-btn">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ContactUs;
