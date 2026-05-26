import React, { useState, useEffect, useRef } from 'react';
import Button from '../components/Button';
import { ExternalLink, Check, ChevronRight, ChevronLeft, RefreshCw, BookOpen } from 'lucide-react';
import './FoundersMind.css';

// Profiles data structure
const PROFILES_DATA = [
    {
        id: 'visionary',
        title: 'Visionary / High-Openness Founder',
        questions: [
            'I see possibilities before they are obvious to other people.',
            'I am energized by novelty, experimentation, and new ideas.',
            'I often generate more ideas than I can realistically execute.',
            'I enjoy exploring uncertain or unproven directions.',
            'I can become restless when work becomes repetitive or overly procedural.'
        ],
        edge: 'You see possibilities early, generate ideas quickly, and thrive on novelty, experimentation, and complexity.',
        friction: 'You may overextend, chase too many ideas, or struggle with follow-through once work becomes repetitive.',
        design: 'Create an idea parking lot, use prioritization rituals, and choose fewer active bets at a time.'
    },
    {
        id: 'accomplisher',
        title: 'High-Drive / Accomplisher Founder',
        questions: [
            'I can push through barriers that would make many people stop.',
            'I feel most energized when I am making visible progress.',
            'I hold myself to a very high standard.',
            'I often feel responsible for keeping momentum alive.',
            'I can struggle to rest when there is still more to do.'
        ],
        edge: 'You bring ambition, persistence, intensity, and a high tolerance for effort.',
        friction: 'You may tie self-worth too closely to output, delay recovery, or feel guilty when you are not moving.',
        design: 'Schedule recovery before collapse, define success beyond productivity, and build rhythms that protect energy.'
    },
    {
        id: 'fighter',
        title: 'Fast-Action / Fighter Founder',
        questions: [
            'I am comfortable acting before I have all the information.',
            'I would rather test something quickly than over-plan it.',
            'I can make decisions in ambiguous or high-pressure situations.',
            'I get frustrated when processes feel too slow or cautious.',
            'I sometimes move so quickly that structure has to catch up later.'
        ],
        edge: 'You move under uncertainty, take action quickly, and avoid getting trapped in endless planning.',
        friction: 'You may underestimate consequences, create operational chaos, or move faster than your systems can support.',
        design: 'Add decision checkpoints, use risk-calibrating advisors, and create simple guardrails before sprinting.'
    },
    {
        id: 'charismatic',
        title: 'Relational / Charismatic Founder',
        questions: [
            'I am good at getting people excited about an idea.',
            'I often think best through conversation.',
            'I can translate a vision in a way that makes others want to join.',
            'I am comfortable being visible or representing a project publicly.',
            'External feedback can strongly affect my energy or confidence.'
        ],
        edge: 'You build belief, recruit people into a vision, and create momentum through communication and connection.',
        friction: 'You may over-index on external feedback, overpromise, or let the last conversation steer the strategy.',
        design: 'Create post-meeting synthesis time, define decision rules in advance, and protect space for independent thinking.'
    },
    {
        id: 'systems',
        title: 'Operator / Systems Founder',
        questions: [
            'I naturally notice what needs to be organized or made more efficient.',
            'I like turning ideas into repeatable processes.',
            'I feel calmer when there is a clear system or structure.',
            'I am often the person who makes sure things actually get done.',
            'Too much ambiguity or constant pivoting can feel draining.'
        ],
        edge: 'You create structure, build repeatable systems, and turn ideas into execution.',
        friction: 'You may become drained by ambiguity, over-function for others, or struggle when the company needs rapid reinvention.',
        design: 'Protect planning time, clarify ownership, and pair systems thinking with regular strategic flexibility.'
    },
    {
        id: 'engineer',
        title: 'Expert / Engineer Founder',
        questions: [
            'I enjoy understanding complex systems deeply.',
            'I am drawn to technical, analytical, or intellectually demanding problems.',
            'I prefer decisions to be grounded in evidence, logic, or clear reasoning.',
            'I can become deeply absorbed in solving a hard problem.',
            'I sometimes struggle to simplify or communicate complex ideas quickly.'
        ],
        edge: 'You bring depth, analytical rigor, and the ability to solve complex problems.',
        friction: 'You may get stuck in complexity, over-explain, or delay communicating before the idea feels fully refined.',
        design: 'Practice simplified storytelling, define “good enough to share,” and partner with people who translate complexity into momentum.'
    }
];

const LIKERT_OPTIONS = [
    { value: 1, label: 'Strongly disagree' },
    { value: 2, label: 'Disagree' },
    { value: 3, label: 'Neutral' },
    { value: 4, label: 'Agree' },
    { value: 5, label: 'Strongly agree' }
];

const STEP_SUBTITLES = [
    "Ideas, novelty, and possibility",
    "Drive, effort, and momentum",
    "Action, uncertainty, and speed",
    "Communication, belief, and connection",
    "Systems, structure, and follow-through",
    "Depth, complexity, and analysis"
];

const FoundersMind = () => {
    // SEO & Page Title
    useEffect(() => {
        document.title = "The Founder’s Mind | Elizabeth Mateer, PhD";
        
        let metaDesc = document.querySelector('meta[name="description"]');
        let createdMeta = false;
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
            createdMeta = true;
        }
        const prevDesc = metaDesc.getAttribute('content');
        metaDesc.setAttribute('content', 'Resources, founder profile reflection tool, and research from The Founder’s Mind, a Boston Tech Week breakfast on the psychology of building.');

        return () => {
            if (createdMeta) {
                metaDesc.remove();
            } else if (prevDesc) {
                metaDesc.setAttribute('content', prevDesc);
            }
        };
    }, []);

    // Interactive Quiz State
    const [currentStep, setCurrentStep] = useState(0); // 0 to 5 steps
    const [answers, setAnswers] = useState({}); // { 'profileId_qIndex': 1-5 }
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [results, setResults] = useState({ dominant: null, secondary: null, allScores: [] });
    const quizRef = useRef(null);

    // Track total items answered
    const totalQuestions = 30;
    const answeredCount = Object.keys(answers).length;
    const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

    // Check if the current step's questions are all answered
    const currentProfile = PROFILES_DATA[currentStep];
    const isStepComplete = currentProfile.questions.every((_, index) => 
        answers[`${currentProfile.id}_${index}`] !== undefined
    );

    // Handle Likert response
    const handleRatingSelect = (profileId, qIndex, rating) => {
        setAnswers(prev => ({
            ...prev,
            [`${profileId}_${qIndex}`]: rating
        }));
    };

    // Pagination controls
    const nextStep = () => {
        if (currentStep < 5) {
            setCurrentStep(prev => prev + 1);
            if (quizRef.current) {
                quizRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
            if (quizRef.current) {
                quizRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    // Calculate results
    const handleSubmitQuiz = () => {
        const calculatedScores = PROFILES_DATA.map(profile => {
            let score = 0;
            profile.questions.forEach((_, index) => {
                score += answers[`${profile.id}_${index}`] || 0;
            });
            return {
                id: profile.id,
                title: profile.title,
                score,
                edge: profile.edge,
                friction: profile.friction,
                design: profile.design
            };
        });

        // Sort desc to find dominant (1st) and secondary (2nd)
        const sortedScores = [...calculatedScores].sort((a, b) => b.score - a.score);
        
        setResults({
            dominant: sortedScores[0],
            secondary: sortedScores[1],
            allScores: calculatedScores // Maintain stable order for charts
        });
        setQuizSubmitted(true);
        
        if (quizRef.current) {
            quizRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Reset reflection tool
    const handleRetakeQuiz = () => {
        setAnswers({});
        setCurrentStep(0);
        setQuizSubmitted(false);
        setResults({ dominant: null, secondary: null, allScores: [] });
        
        if (quizRef.current) {
            quizRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Smooth scroll to sections
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="founders-mind-page">
            {/* 1. Hero Section */}
            <header className="fm-hero">
                <div className="container">
                    <p className="fm-hero-meta">Boston Tech Week • May 2026</p>
                    <h1 className="fm-hero-title">The Founder’s Mind</h1>
                    <p className="fm-hero-subtitle">Resources from Boston Tech Week</p>
                    
                    <p className="fm-hero-intro">
                        Building a company is not only an execution problem. It is a cognitive and psychological demand on attention, working memory, decision-making, identity, and emotional regulation.
                        <br /><br />
                        This page includes the reflection tools, frameworks, and research referenced during <em>The Founder’s Mind: A Founder Breakfast on the Psychology of Building</em>, curated by <strong>Elizabeth Mateer, PhD</strong> — Founder, PsychDraft.
                    </p>

                    <div className="fm-hero-ctas">
                        <Button 
                            onClick={() => scrollToSection('reflection-tool')} 
                            variant="primary" 
                            className="btn-fm-nav"
                        >
                            Take the Founder Profile Reflection
                        </Button>
                        <Button 
                            onClick={() => scrollToSection('pace-framework')} 
                            variant="outline" 
                            className="btn-fm-nav"
                        >
                            View the P.A.C.E. Framework
                        </Button>
                        <Button 
                            onClick={() => scrollToSection('research-referenced')} 
                            variant="outline" 
                            className="btn-fm-nav"
                        >
                            Explore the Research
                        </Button>
                    </div>
                    <p style={{ marginTop: '24px', fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--color-text-secondary)' }}>
                        Bookmark this page or keep the QR code handy — these tools are designed to be revisited after the event.
                    </p>
                </div>
            </header>

            {/* 2. Cognitive Profile Reflection Tool */}
            <section id="reflection-tool" className="fm-section" ref={quizRef}>
                <div className="container">
                    <div className="fm-section-header">
                        <h2 className="fm-section-title">Discover Your Founder Archetype</h2>
                        <p className="fm-section-intro">A reflective tool to help you understand the cognitive and personality patterns that shape how you build.</p>
                    </div>

                    <div className="fm-disclaimer-card">
                        <div>
                            <strong>Disclaimer:</strong> This is not a clinical measure or validated personality assessment. It is a reflective tool inspired by research on founder personality patterns.
                        </div>
                        <div style={{ marginTop: '8px', fontSize: '0.85rem', opacity: 0.85 }}>
                            Your responses are not stored; results are calculated in your browser.
                        </div>
                    </div>

                    {!quizSubmitted ? (
                        <div className="quiz-container">
                            {/* Quiz Progress Bar */}
                            <div className="quiz-progress-wrapper">
                                <div className="quiz-progress-header">
                                    <span>Reflection Progress</span>
                                    <span>{progressPercent}% complete / {answeredCount} of {totalQuestions} answered</span>
                                </div>
                                <div className="quiz-progress-bar">
                                    <div 
                                        className="quiz-progress-fill" 
                                        style={{ width: `${progressPercent}%` }}
                                    ></div>
                                </div>
                            </div>

                            {/* Active Step / Section */}
                            <div className="quiz-step-card">
                                <div className="quiz-step-header" style={{ marginBottom: '24px' }}>
                                    <h3 className="quiz-step-title" style={{ marginBottom: '8px', borderBottom: 'none', paddingBottom: 0 }}>
                                        Reflection Section {currentStep + 1} of 6
                                    </h3>
                                    <p className="quiz-step-subtitle" style={{ fontStyle: 'italic', color: 'var(--color-text-secondary)', fontSize: '1.05rem', fontWeight: '500' }}>
                                        {STEP_SUBTITLES[currentStep]}
                                    </p>
                                    <div style={{ height: '1px', backgroundColor: 'var(--color-border)', width: '100%', marginTop: '16px' }}></div>
                                </div>
                                
                                <div className="quiz-questions-list">
                                    {currentProfile.questions.map((questionText, qIndex) => {
                                        const questionId = `${currentProfile.id}_${qIndex}`;
                                        const currentVal = answers[questionId];

                                        return (
                                            <div key={qIndex} className="quiz-question-item">
                                                <p className="quiz-question-text">{questionText}</p>
                                                
                                                <div className="likert-scale">
                                                    {LIKERT_OPTIONS.map((opt) => (
                                                        <label key={opt.value} className="likert-option">
                                                            <input 
                                                                type="radio" 
                                                                name={questionId}
                                                                value={opt.value}
                                                                checked={currentVal === opt.value}
                                                                onChange={() => handleRatingSelect(currentProfile.id, qIndex, opt.value)}
                                                                className="likert-radio"
                                                            />
                                                            <div className="likert-circle">
                                                                {opt.value}
                                                            </div>
                                                            <span className="likert-option-label">
                                                                {opt.value === 1 ? 'Disagree' : opt.value === 5 ? 'Agree' : ''}
                                                            </span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Step Controls */}
                                <div className="quiz-controls">
                                    <Button 
                                        onClick={prevStep} 
                                        variant="outline" 
                                        className={`btn-fm-prev ${currentStep === 0 ? 'sr-only' : ''}`}
                                        disabled={currentStep === 0}
                                    >
                                        <ChevronLeft size={16} style={{ marginRight: '6px' }} /> Previous Section
                                    </Button>

                                    {currentStep < 5 ? (
                                        <Button 
                                            onClick={nextStep} 
                                            variant="primary" 
                                            disabled={!isStepComplete}
                                            className="btn-fm-next"
                                        >
                                            Next Section <ChevronRight size={16} style={{ marginLeft: '6px' }} />
                                        </Button>
                                    ) : (
                                        <Button 
                                            onClick={handleSubmitQuiz} 
                                            variant="primary" 
                                            disabled={!isStepComplete}
                                            className="btn-fm-submit"
                                        >
                                            View Reflection Results <Check size={16} style={{ marginLeft: '6px' }} />
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* Results Dashboard Dashboard */
                        <div className="results-dashboard">
                            <div className="results-heading">
                                <h3>Your Founder Mind Configuration</h3>
                                <p>Your highest patterns are not labels. Think of them as clues about where you create leverage — and where your strengths may need structure.</p>
                            </div>

                            <div className="results-config-note" style={{ marginBottom: '32px' }}>
                                <strong>Reflection Note:</strong> Most founders are not just one type. Your founder mind is usually a configuration. Pay attention to your top two patterns — especially where one creates energy and the other creates friction. If your top scores are close, that may reflect a blended founder profile rather than a single dominant pattern.
                            </div>

                            <div className="results-primary-deck">
                                {/* Dominant Profile Card */}
                                <div className="result-profile-card dominant">
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                                        <span className="profile-badge dominant-badge" style={{
                                            alignSelf: 'flex-start',
                                            fontSize: '0.75rem',
                                            fontWeight: '700',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.08em',
                                            padding: '4px 10px',
                                            borderRadius: '20px',
                                            backgroundColor: 'rgba(199, 125, 99, 0.1)',
                                            color: 'var(--color-accent-terracotta)'
                                        }}>
                                            Primary Pattern
                                        </span>
                                        <h4 className="result-profile-title" style={{ fontSize: '1.45rem', margin: 0, padding: 0 }}>
                                            {results.dominant.title}
                                        </h4>
                                    </div>
                                    
                                    <div className="profile-detail-block">
                                        <h4>Your Edge</h4>
                                        <p>{results.dominant.edge}</p>
                                    </div>
                                    <div className="profile-detail-block">
                                        <h4>Potential Friction</h4>
                                        <p>{results.dominant.friction}</p>
                                    </div>
                                    <div className="profile-detail-block">
                                        <h4>Design Around It</h4>
                                        <p>{results.dominant.design}</p>
                                    </div>
                                </div>

                                {/* Secondary Profile Card */}
                                <div className="result-profile-card secondary">
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                                        <span className="profile-badge secondary-badge" style={{
                                            alignSelf: 'flex-start',
                                            fontSize: '0.75rem',
                                            fontWeight: '700',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.08em',
                                            padding: '4px 10px',
                                            borderRadius: '20px',
                                            backgroundColor: 'rgba(141, 163, 153, 0.1)',
                                            color: 'var(--color-accent-sage)'
                                        }}>
                                            Secondary Pattern
                                        </span>
                                        <h4 className="result-profile-title" style={{ fontSize: '1.45rem', margin: 0, padding: 0 }}>
                                            {results.secondary.title}
                                        </h4>
                                    </div>
                                    
                                    <div className="profile-detail-block">
                                        <h4>Your Edge</h4>
                                        <p>{results.secondary.edge}</p>
                                    </div>
                                    <div className="profile-detail-block">
                                        <h4>Potential Friction</h4>
                                        <p>{results.secondary.friction}</p>
                                    </div>
                                    <div className="profile-detail-block">
                                        <h4>Design Around It</h4>
                                        <p>{results.secondary.design}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Scoring Chart */}
                            <div className="results-chart-container">
                                <h4 className="results-chart-title">Complete Cognitive Configuration Profile</h4>
                                <div className="results-bars">
                                    {results.allScores.map((profile) => {
                                        const scorePct = (profile.score / 25) * 100;
                                        const isDom = profile.id === results.dominant.id;
                                        const isSec = profile.id === results.secondary.id;
                                        
                                        return (
                                            <div 
                                                key={profile.id} 
                                                className={`chart-bar-item ${isDom ? 'dominant-profile' : isSec ? 'secondary-profile' : ''}`}
                                            >
                                                <div className="bar-label">{profile.title.split(' / ')[0] + ' Pattern'}</div>
                                                <div className="bar-track-wrapper">
                                                    <div className="bar-track">
                                                        <div 
                                                            className="bar-fill"
                                                            style={{ width: `${scorePct}%` }}
                                                        ></div>
                                                    </div>
                                                    <span className="bar-score">{profile.score}/25</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="results-footer">
                                <Button onClick={handleRetakeQuiz} variant="outline" className="btn-retake">
                                    <RefreshCw size={14} style={{ marginRight: '6px' }} /> Retake Reflection Quiz
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* 3. P.A.C.E. Framework Section */}
            <section id="pace-framework" className="fm-section">
                <div className="container">
                    <div className="fm-section-header">
                        <h2 className="fm-section-title">The P.A.C.E. Framework</h2>
                        <p className="fm-section-intro">
                            The goal is not to become a different kind of person. The goal is to stop using a one-size-fits-all system for a brain that was never built for one-size-fits-all work.
                        </p>
                    </div>

                    <div className="pace-grid">
                        {/* P Card */}
                        <div className="pace-card">
                            <span className="pace-letter">P</span>
                            <h3 className="pace-title">Protect Attention</h3>
                            <p className="pace-text">
                                Your attention is your highest-leverage resource. Protect it like equity.
                            </p>
                            <div className="pace-reflection">
                                <p className="pace-reflection-label">Attentional Question</p>
                                <p className="pace-question">Where is my best attention going?</p>
                            </div>
                        </div>

                        {/* A Card */}
                        <div className="pace-card">
                            <span className="pace-letter">A</span>
                            <h3 className="pace-title">Align With Cognitive Strengths</h3>
                            <p className="pace-text">
                                Your traits are design requirements.
                            </p>
                            <div className="pace-reflection">
                                <p className="pace-reflection-label">Attentional Question</p>
                                <p className="pace-question">What kind of system does my brain actually need?</p>
                            </div>
                        </div>

                        {/* C Card */}
                        <div className="pace-card">
                            <span className="pace-letter">C</span>
                            <h3 className="pace-title">Complement Through People</h3>
                            <p className="pace-text">
                                The company needs more than one kind of mind.
                            </p>
                            <div className="pace-reflection">
                                <p className="pace-reflection-label">Attentional Question</p>
                                <p className="pace-question">What am I still holding that someone else should help carry?</p>
                            </div>
                        </div>

                        {/* E Card */}
                        <div className="pace-card">
                            <span className="pace-letter">E</span>
                            <h3 className="pace-title">Expand Identity Beyond the Company</h3>
                            <p className="pace-text">
                                Build an identity big enough to survive the uncertainty of building.
                            </p>
                            <div className="pace-reflection">
                                <p className="pace-reflection-label">Attentional Question</p>
                                <p className="pace-question">Who am I when nothing is being measured?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Founder Attention Audit Section */}
            <section id="attention-audit" className="fm-section">
                <div className="container">
                    <div className="fm-section-header">
                        <h2 className="fm-section-title">Founder Attention Audit</h2>
                        <p className="fm-section-intro">
                            If your attention feels fragmented, don’t only ask, “How can I be more disciplined?” Ask whether your environment is designed for clear thinking.
                        </p>
                    </div>

                    <div className="attention-audit-card">
                        <div className="audit-checklist">
                            {[
                                "What am I constantly switching in and out of?",
                                "What am I trying to hold in my head that needs to be externalized?",
                                "What decisions am I making that someone else could make?",
                                "What work actually requires my highest-quality thinking?",
                                "Where am I confusing motion with progress?",
                                "What open loops are consuming background bandwidth?",
                                "What am I avoiding because it requires sustained mental effort?"
                            ].map((question, idx) => (
                                <div key={idx} className="audit-item">
                                    <div className="audit-icon-wrapper">
                                        <Check size={14} />
                                    </div>
                                    <span className="audit-item-text">{question}</span>
                                </div>
                            ))}
                        </div>

                        <div className="audit-closing">
                            <p className="audit-quote">
                                “Your calendar is not just a schedule. It is an attentional architecture.”
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Research Referenced Section */}
            <section id="research-referenced" className="fm-section">
                <div className="container">
                    <div className="fm-section-header">
                        <h2 className="fm-section-title">Selected Research Referenced</h2>
                        <p className="fm-section-intro">
                            This talk draws from research on founder personality, cognitive ability, ADHD traits and entrepreneurship, attention, working memory, cognitive load, achievement, motivation, and identity.
                        </p>
                    </div>

                    <div className="research-grid">
                        {/* Theme 1 */}
                        <div className="research-theme-card">
                            <div className="research-theme-header">
                                <h3 className="research-theme-title">Founder Personality and Entrepreneurship</h3>
                            </div>
                            <div className="research-item">
                                <p className="research-citation">
                                    McCarthy, P. X., Gong, X., Braesemann, F., Stephany, F., Rizoiu, M.-A., & Kern, M. L. (2023). The impact of founder personalities on startup success. <em>Scientific Reports</em>, 13, 17200.
                                </p>
                                <a 
                                    href="https://doi.org/10.1038/s41598-023-41980-y" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="research-link"
                                >
                                    View Article Source <ExternalLink size={12} style={{ marginLeft: '4px' }} />
                                </a>
                                <p className="research-summary">
                                    Founder personalities differ meaningfully from the general population. The paper identified multiple founder clusters rather than one universal founder type, including Fighters, Operators, Accomplishers, Leaders, Engineers, and Developers.
                                </p>
                                <div className="research-note" style={{ marginTop: '8px', display: 'block' }}>
                                    Note: The reflection quiz on this page is inspired by themes from this literature, but it is not a reproduction of any validated measure.
                                </div>
                            </div>
                        </div>

                        {/* Theme 2 */}
                        <div className="research-theme-card">
                            <div className="research-theme-header">
                                <h3 className="research-theme-title">Cognitive Ability, Personality, and Entrepreneurial Outcomes</h3>
                            </div>
                            <div className="research-item">
                                <p className="research-citation">
                                    Bergner, S. (2020). Being Smart Is Not Enough: Personality Traits and Vocational Interests Incrementally Predict Intention, Status and Success of Leaders and Entrepreneurs Beyond Cognitive Ability. <em>Frontiers in Psychology</em>, 11, 204.
                                </p>
                                <a 
                                    href="https://doi.org/10.3389/fpsyg.2020.00204" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="research-link"
                                >
                                    View Article Source <ExternalLink size={12} style={{ marginLeft: '4px' }} />
                                </a>
                                <p className="research-summary">
                                    Cognitive ability matters, but it does not fully explain who becomes an entrepreneur or who performs well. Personality traits and vocational interests help shape how intelligence is deployed.
                                </p>
                            </div>
                        </div>

                        {/* Theme 3 */}
                        <div className="research-theme-card">
                            <div className="research-theme-header">
                                <h3 className="research-theme-title">ADHD Traits, Action Bias, and Entrepreneurship</h3>
                            </div>
                            <div className="research-item">
                                <p className="research-citation">
                                    Hatak, I., Chang, M., Harms, R., & Wiklund, J. (2021). ADHD symptoms, entrepreneurial passion, and entrepreneurial performance. <em>Small Business Economics</em>, 57(4), 1693–1713.
                                </p>
                                <a 
                                    href="https://doi.org/10.1007/s11187-020-00397-x" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="research-link"
                                >
                                    View Article Source <ExternalLink size={12} style={{ marginLeft: '4px' }} />
                                </a>
                                <p className="research-summary">
                                    ADHD-like traits may support entrepreneurial behavior and action under uncertainty, but they do not guarantee outcomes. Traits such as urgency, novelty-seeking, and hyperfocus can be useful in some entrepreneurial contexts while creating friction in others.
                                </p>
                            </div>
                        </div>

                        {/* Theme 4 */}
                        <div className="research-theme-card">
                            <div className="research-theme-header">
                                <h3 className="research-theme-title">Achievement, Identity, and Motivation</h3>
                            </div>
                            <div className="research-item" style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px dashed var(--color-border)' }}>
                                <p className="research-citation">
                                    Ryan, R. M., & Deci, E. L. (2000). Self-Determination Theory and the Facilitation of Intrinsic Motivation, Social Development, and Well-Being.
                                </p>
                                <p className="research-summary">
                                    This framework explores how ambition can be meaningful while still needing a life structure that supports autonomy, competence, and connection. It details why the pursuit of goals can feel more organizing than the arrival, emphasizing the core human needs (autonomy, competence, and relatedness) that protect energy and identity from burnout.
                                </p>
                            </div>
                            <div className="research-item">
                                <span className="pt-badge">Psychology Today Column</span>
                                <p className="research-citation" style={{ marginTop: '8px' }}>
                                    Mateer, E. (2026). Why Traits That Help Founders Succeed Also Burn Them Out. <em>Psychology Today</em>.
                                </p>
                                <a 
                                    href="https://www.psychologytoday.com/us/blog/the-architecture-of-identity/202605/why-traits-that-help-founders-succeed-also-burn-them-out" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="research-link"
                                >
                                    Read Article Column <ExternalLink size={12} style={{ marginLeft: '4px' }} />
                                </a>
                                <p className="research-summary">
                                    Explores how high-drive founder personality traits can tie self-worth tightly to operational metrics, why the constant pursuit of milestones can mask indicators of exhaustion, and how founders can design structured rest and identity boundaries to prevent severe burnout.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Continue the Conversation Section */}
            <section className="fm-cta-section">
                <div className="fm-cta-card">
                    <h2 className="fm-cta-title">Continue the Conversation</h2>
                    <p className="fm-cta-body">
                        I’m continuing to develop work at the intersection of founder cognition, identity, attention, and performance. If this conversation resonated, I’d love to stay connected.
                    </p>

                    <div className="fm-cta-buttons">
                        {/* Note: Update the LinkedIn URL in task list if desired */}
                        <Button 
                            href="https://www.linkedin.com/in/elizabeth-mateer-phd-39b8a5192/" 
                            variant="primary" 
                            className="btn-fm-cta"
                        >
                            Connect on LinkedIn <ExternalLink size={16} />
                        </Button>
                        <Button 
                            href="https://psychdraft.com" 
                            variant="secondary" 
                            className="btn-fm-cta"
                        >
                            Learn About PsychDraft <ExternalLink size={16} />
                        </Button>
                        <Button 
                            href="https://www.psychologytoday.com/us/blog/the-architecture-of-identity" 
                            variant="outline" 
                            className="btn-fm-cta"
                        >
                            Read Psychology Today <BookOpen size={16} />
                        </Button>
                        <Button 
                            to="/contact" 
                            variant="outline" 
                            className="btn-fm-cta"
                        >
                            Speaking & Consulting Inquiries
                        </Button>
                    </div>

                    <div className="fm-pdf-offer">
                        <h4 className="fm-pdf-title">Want the Founder’s Mind Framework as a PDF?</h4>
                        <p className="fm-pdf-text">Request a premium reference copy of the cognitive profiles, P.A.C.E. architecture, and attention audit guidelines.</p>
                        
                        <div className="fm-pdf-form">
                            <Button 
                                href="mailto:elizabethmateerphd@gmail.com?subject=Request%20Founder%27s%20Mind%20Framework%20PDF&body=Hi%20Dr.%20Mateer%2C%0A%0AI%20attended%20The%20Founder%27s%20Mind%20breakfast%20at%20Boston%20Tech%20Week%20and%20would%20love%20to%20receive%20the%20framework%20as%20a%20PDF%20resource.%0A%0AThank%20you%21" 
                                variant="primary" 
                                className="btn-fm-pdf"
                            >
                                Request the PDF via Email
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FoundersMind;
