import React from 'react';
import './Research.css';

const Research = () => {
    return (
        <div className="research-page">
            <div className="container">
                <h1 className="page-title text-center">Research</h1>

                <div className="research-content-wrapper">
                    <section className="research-section overview">
                        <h2 className="section-heading">Overview</h2>
                        <p>
                            Dr. Mateer's research focuses on the intersection of cognitive functioning, brain injury, and the lived experience of recovery. She is particularly interested in how attention mechanisms recover after traumatic brain injury and how these cognitive processes influence an individual's sense of identity and agency.
                        </p>
                    </section>

                    <section className="research-section topics">
                        <h2 className="section-heading">Key Topics</h2>
                        <ul className="topics-list">
                            <li>Attention and executive functioning networks</li>
                            <li>Traumatic Brain Injury (TBI) and recovery trajectories</li>
                            <li>Cognitive rehabilitation strategies</li>
                            <li>Brain–behavior relationships in creative cognition</li>
                        </ul>
                    </section>

                    <section className="research-section publications">
                        <h2 className="section-heading">Selected Publications</h2>
                        <div className="publications-list">
                            <div className="pub-item">
                                <span className="pub-year">2026</span>
                                <p className="pub-citation">
                                    Lagunas, M.-A., Jin, J., Widman, C., Thurlkill, L., & <strong>Mateer, E. M.</strong> "The moderating role of familism on stressful life events, PTSD symptoms, and centralized pain symptoms among Latinx adults with chronic pain." <em>Journal of Latinx Psychology</em>, 14(1), 17–33. <a href="https://doi.org/10.1037/lat0000287" target="_blank" rel="noopener noreferrer">https://doi.org/10.1037/lat0000287</a>
                                </p>
                            </div>
                            <div className="pub-item">
                                <span className="pub-year">2025</span>
                                <p className="pub-citation">
                                    <strong>Mateer, E. M.</strong>, Erickson, T. M., Jin, J., Glisky, M., & Asgarian, A. "Factor analysis of neuropsychological attention measures with mild traumatic brain injury patients." <em>Applied Neuropsychology: Adult</em>, 1–14. <a href="https://doi.org/10.1080/23279095.2025.2566749" target="_blank" rel="noopener noreferrer">https://doi.org/10.1080/23279095.2025.2566749</a>
                                </p>
                            </div>
                            <div className="pub-item">
                                <span className="pub-year">2025</span>
                                <p className="pub-citation">
                                    Fossum, J. L., Lagunas, M.-A., Ichimura, E., Widman, C., <strong>Mateer, E.</strong>, Tohmon, K., & Jin, J. "Cultural Validity of the Mental Help Seeking Attitudes Scale Among Three Racially Minoritized Groups With Chronic Pain in the United States." <em>Assessment</em>, 0(0). <a href="https://doi.org/10.1177/10731911251394290" target="_blank" rel="noopener noreferrer">https://doi.org/10.1177/10731911251394290</a>
                                </p>
                            </div>
                            <div className="pub-item">
                                <span className="pub-year">2024</span>
                                <p className="pub-citation">
                                    <strong>Mateer, E. M.</strong>, Jin, J., Taone, T., Duffield, C., & Foster, M. "Does self-compassion buffer against stigma among Asian Americans?" <em>Stigma and Health</em>, 9(4), 553–562. <a href="https://doi.org/10.1037/sah0000455" target="_blank" rel="noopener noreferrer">https://doi.org/10.1037/sah0000455</a>
                                </p>
                            </div>
                            <div className="pub-item">
                                <span className="pub-year">2024</span>
                                <p className="pub-citation">
                                    Jin, J., Lagunas, M.-A., Foster, M., <strong>Mateer, E.</strong>, Ichimura, E., Duffield, C., & Taone, T. "Deliberate practice in anti-racist psychology." <em>Training and Education in Professional Psychology</em>, 18(3), 248–255. <a href="https://doi.org/10.1037/tep0000447" target="_blank" rel="noopener noreferrer">https://doi.org/10.1037/tep0000447</a>
                                </p>
                            </div>
                            <div className="pub-item">
                                <span className="pub-year">2023</span>
                                <p className="pub-citation">
                                    Duffield, C., <strong>Mateer, E. M.</strong>, Foster, M., Jin, J., Fung, W., & Fung, J. "God Perfectionism as a Mediator of Intrinsic Religiosity and Life Satisfaction: A Christian Sample of Young Adults." <em>Journal of Psychology and Theology</em>, 52(1), 115-127. <a href="https://doi.org/10.1177/00916471231215293" target="_blank" rel="noopener noreferrer">https://doi.org/10.1177/00916471231215293</a>
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Research;
