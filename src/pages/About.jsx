import React from 'react';
import ProfilePic from '../assets/profile.jpg';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="container">
                <div className="about-content-wrapper">
                    <div className="about-image-column">
                        <img src={ProfilePic} alt="Elizabeth Mateer, Ph.D." className="about-headshot" />
                        <div className="as-seen-section">
                            <h4>Selected Media & Publications</h4>
                            <ul className="as-seen-list">
                                <li>Psychology Today</li>
                                <li>Applied Neuropsychology: Adult</li>
                                <li>Neuro Rehab Times</li>
                            </ul>
                        </div>
                    </div>

                    <div className="about-text-column">
                        <h1 className="page-title">About Elizabeth Mateer, Ph.D.</h1>

                        <p className="bio-paragraph">
                            Elizabeth Mateer, Ph.D. works at the intersection of neuropsychology and creativity, exploring how attention, identity, and lived experience shape who we become.
                        </p>

                        <p className="bio-paragraph">
                            Across both her clinical work and creative writing, she is interested in how individuals construct meaning—through art, work, and the stories they tell about their lives. Her work examines the neuropsychological foundations of attention, resilience, and self-authorship, with particular focus on how people navigate change and build coherent identities over time.
                        </p>

                        <p className="bio-paragraph">
                            Dr. Mateer conducts neuropsychological evaluations across diverse medical and psychiatric populations and is currently completing advanced clinical training affiliated with Harvard Medical School. Her research focuses on attention and traumatic brain injury, with an emphasis on translating complex scientific findings into insights relevant to everyday life. She is especially interested in how cognitive processes influence creativity, decision-making, and long-term growth.
                        </p>

                        <p className="bio-paragraph">
                            In addition to her scientific work, she is the author of two poetry collections, <em>Searching for Home</em> (2024) and <em>A New Type of Breakfast</em> (2026). Across both her research and creative writing, Dr. Mateer returns to a central question: how do individuals build meaning in the face of uncertainty? Her work bridges rigorous neuroscience with lived experience, illuminating how attention, resilience, and intentional self-authorship shape the ongoing architecture of becoming.
                        </p>

                        <p className="bio-paragraph">
                            In addition to her writing and clinical work, Dr. Mateer is the founder of <a href="https://www.psychdraft.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>PsychDraft</a>, an AI-assisted platform designed to improve clinical documentation in neuropsychology. The venture reflects her broader interest in systems design, cognitive workflow, and the future of professional practice.
                        </p>

                        <div className="credentials-section">
                            <div className="credential-block">
                                <h4>Current Role</h4>
                                <p>
                                    <strong>Clinical Fellow in Psychology</strong><br />
                                    Harvard Medical School<br />
                                    Beth Israel Deaconess Medical Center & Massachusetts Mental Health Center
                                </p>
                            </div>

                            <div className="credential-block">
                                <h4>Education & Training</h4>
                                <ul className="credential-list">
                                    <li><strong>Ph.D., Clinical Psychology</strong> (APA-accredited), Seattle Pacific University</li>
                                    <li><strong>M.A., Counseling for Mental Health and Wellness</strong>, New York University</li>
                                    <li><strong>B.A., English Literature (Creative Writing)</strong>, Hunter College</li>
                                </ul>
                            </div>

                            <div className="credential-block">
                                <h4>Doctoral Internship</h4>
                                <p><strong>Penn Medicine Lancaster General Health Physicians Neuropsychology</strong> (APA-accredited)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
