import React from 'react';
import ProfilePic from '../assets/profile.jpg';
import useDocumentTitle from '../hooks/useDocumentTitle';
import './About.css';
import './Research.css';

const About = () => {
    useDocumentTitle('About — Elizabeth Mateer, Ph.D.');

    return (
        <div className="about-page">
            <div className="container">
                <div className="about-content-wrapper">
                    <div className="about-image-column">
                        <img src={ProfilePic} alt="Elizabeth Mateer, Ph.D." className="about-headshot" />
                        <div className="as-seen-section">
                            <h4>Selected Media &amp; Publications</h4>
                            <ul className="as-seen-list">
                                <li>Psychology Today</li>
                                <li>Applied Neuropsychology: Adult</li>
                                <li>Neuro Rehab Times</li>
                            </ul>
                        </div>
                    </div>

                    <div className="about-text-column">
                        <h1 className="page-title">About Elizabeth Mateer</h1>

                        <p className="bio-paragraph">
                            I work at the intersection of neuropsychology and creativity, studying how attention, identity, and lived experience shape who we become.
                        </p>

                        <p className="bio-paragraph">
                            Across my clinical work and my writing, I'm interested in one thing: how people construct meaning — through art, through work, and through the stories they tell about their own lives. My research looks at the neuropsychological foundations of attention, resilience, and self-authorship, and at how we navigate change and rebuild a coherent sense of self over time.
                        </p>

                        <p className="bio-paragraph">
                            Clinically, I conduct neuropsychological evaluations across diverse medical and psychiatric populations, and I'm currently completing advanced training as a Clinical Fellow in Psychology affiliated with Harvard Medical School. My research focuses on attention and traumatic brain injury, with an emphasis on translating complex findings into something that's actually useful in everyday life — and on how cognition shapes creativity, decision-making, and long-term growth.
                        </p>

                        <p className="bio-paragraph">
                            I'm also a poet. I've written two collections, <em>Searching for Home</em> (2024) and <em>A New Type of Breakfast</em> (2026) — the same questions about identity and belonging that drive my research, worked out on the page.
                        </p>

                        <p className="bio-paragraph">
                            And I'm the founder of <a href="https://www.psychdraft.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>PsychDraft</a>, an AI-assisted platform for clinical documentation in neuropsychology — my interest in systems design and cognitive workflow applied to the future of the profession.
                        </p>

                        <div className="credentials-section">
                            <div className="credential-block">
                                <h4>Current Role</h4>
                                <p>
                                    <strong>Clinical Fellow in Psychology</strong><br />
                                    Harvard Medical School<br />
                                    Beth Israel Deaconess Medical Center &amp; Massachusetts Mental Health Center
                                </p>
                            </div>

                            <div className="credential-block">
                                <h4>Education &amp; Training</h4>
                                <ul className="credential-list">
                                    <li><strong>Ph.D., Clinical Psychology</strong> (APA-accredited), Seattle Pacific University</li>
                                    <li><strong>M.S., Psychological Science</strong>, Seattle Pacific University</li>
                                    <li><strong>M.A., Counseling for Mental Health and Wellness</strong>, New York University</li>
                                    <li><strong>B.A., English Literature (Creative Writing)</strong>, Hunter College</li>
                                </ul>
                            </div>

                            <div className="credential-block">
                                <h4>Doctoral Internship</h4>
                                <p><strong>Penn Medicine Lancaster General Health Physicians Neuropsychology</strong> (APA-accredited)</p>
                            </div>
                        </div>

                        {/* Research & Selected Publications (folded in from the former Research page) */}
                        <div className="about-research">
                            <h2 className="section-heading">Research &amp; Selected Publications</h2>

                            <p className="research-philosophy-quote">
                                "My work examines how cognitive systems shape identity, agency, and recovery. I'm particularly interested in attention as a structural mechanism — how it organizes experience, influences meaning-making, and determines how we reconstruct ourselves after neurological disruption."
                            </p>

                            <h4 className="research-subheading">Key Topics</h4>
                            <ul className="topics-list">
                                <li>Attention and executive functioning networks</li>
                                <li>Traumatic Brain Injury (TBI) and recovery trajectories</li>
                                <li>Cognitive rehabilitation strategies</li>
                                <li>Brain–behavior relationships in creative cognition</li>
                            </ul>

                            <h4 className="research-subheading">Selected Publications</h4>
                            <div className="publications-list">
                                <div className="pub-item">
                                    <span className="pub-year">2026</span>
                                    <p className="pub-citation">
                                        Lagunas, M.-A., Jin, J., Widman, C., Thurlkill, L., &amp; <strong>Mateer, E. M.</strong> "The moderating role of familism on stressful life events, PTSD symptoms, and centralized pain symptoms among Latinx adults with chronic pain." <em>Journal of Latinx Psychology</em>, 14(1), 17–33.
                                        <a href="https://doi.org/10.1037/lat0000287" target="_blank" rel="noopener noreferrer" className="doi-link">DOI</a>
                                    </p>
                                </div>
                                <div className="pub-item">
                                    <span className="pub-year">2025</span>
                                    <p className="pub-citation">
                                        <strong>Mateer, E. M.</strong>, Erickson, T. M., Jin, J., Glisky, M., &amp; Asgarian, A. "Factor analysis of neuropsychological attention measures with mild traumatic brain injury patients." <em>Applied Neuropsychology: Adult</em>, 1–14.
                                        <a href="https://doi.org/10.1080/23279095.2025.2566749" target="_blank" rel="noopener noreferrer" className="doi-link">DOI</a>
                                    </p>
                                </div>
                                <div className="pub-item">
                                    <span className="pub-year">2025</span>
                                    <p className="pub-citation">
                                        Fossum, J. L., Lagunas, M.-A., Ichimura, E., Widman, C., <strong>Mateer, E.</strong>, Tohmon, K., &amp; Jin, J. "Cultural Validity of the Mental Help Seeking Attitudes Scale Among Three Racially Minoritized Groups With Chronic Pain in the United States." <em>Assessment</em>, 0(0).
                                        <a href="https://doi.org/10.1177/10731911251394290" target="_blank" rel="noopener noreferrer" className="doi-link">DOI</a>
                                    </p>
                                </div>
                                <div className="pub-item">
                                    <span className="pub-year">2024</span>
                                    <p className="pub-citation">
                                        <strong>Mateer, E. M.</strong>, Jin, J., Taone, T., Duffield, C., &amp; Foster, M. "Does self-compassion buffer against stigma among Asian Americans?" <em>Stigma and Health</em>, 9(4), 553–562.
                                        <a href="https://doi.org/10.1037/sah0000455" target="_blank" rel="noopener noreferrer" className="doi-link">DOI</a>
                                    </p>
                                </div>
                                <div className="pub-item">
                                    <span className="pub-year">2024</span>
                                    <p className="pub-citation">
                                        Jin, J., Lagunas, M.-A., Foster, M., <strong>Mateer, E.</strong>, Ichimura, E., Duffield, C., &amp; Taone, T. "Deliberate practice in anti-racist psychology." <em>Training and Education in Professional Psychology</em>, 18(3), 248–255.
                                        <a href="https://doi.org/10.1037/tep0000447" target="_blank" rel="noopener noreferrer" className="doi-link">DOI</a>
                                    </p>
                                </div>
                                <div className="pub-item">
                                    <span className="pub-year">2023</span>
                                    <p className="pub-citation">
                                        Duffield, C., <strong>Mateer, E. M.</strong>, Foster, M., Jin, J., Fung, W., &amp; Fung, J. "God Perfectionism as a Mediator of Intrinsic Religiosity and Life Satisfaction: A Christian Sample of Young Adults." <em>Journal of Psychology and Theology</em>, 52(1), 115-127.
                                        <a href="https://doi.org/10.1177/00916471231215293" target="_blank" rel="noopener noreferrer" className="doi-link">DOI</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
