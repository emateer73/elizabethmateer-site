import React, { useState, useEffect } from 'react';
import Button from './Button';
import { RefreshCw, Printer, Save, PlusCircle, Check } from 'lucide-react';

const CATEGORIES = [
    {
        id: 'ability',
        title: 'Ability',
        questions: ['Do I know how to do this?', 'Is there a specific skill or information gap?', 'Am I expecting myself to perform at a level I have not yet learned?'],
        responses: 'Learn, practice, seek guidance, or clarify expectations.'
    },
    {
        id: 'attention',
        title: 'Attention',
        questions: ['Can I initiate and sustain focus on this task?', 'Is the task too vague, too long, or too fragmented?', 'Am I asking myself to do it during a poor attention window?'],
        responses: 'Clarify the first step, shorten the work interval, reduce switching, or move the task to a stronger attention period.'
    },
    {
        id: 'energy',
        title: 'Energy',
        questions: ['Do I have the right kind of cognitive energy for this task?', 'Is the task simple but disproportionately draining?', 'What else is consuming the capacity this task requires?'],
        responses: 'Move, shorten, batch, recover, automate, or delegate.'
    },
    {
        id: 'emotion',
        title: 'Emotion',
        questions: ['What feeling appears when I think about beginning?', 'Is fear, shame, perfectionism, resentment, boredom, uncertainty, or comparison involved?', 'Am I avoiding the task or avoiding the emotion attached to it?'],
        responses: 'Name the emotion, lower the stakes, seek feedback, define “good enough,” or separate the task from self-worth.'
    },
    {
        id: 'environment',
        title: 'Environment',
        questions: ['Does my current environment support the behavior I am asking of myself?', 'What interruptions, tools, people, or sensory conditions are working against me?', 'What condition would make the task easier to enter?'],
        responses: 'Change location, remove interruptions, prepare materials, use accountability, or create a clearer boundary.'
    },
    {
        id: 'system',
        title: 'System',
        questions: ['Is the process itself unnecessarily difficult?', 'Are there too many steps, handoffs, decisions, or tools?', 'Am I repeatedly solving a problem that should have a process?'],
        responses: 'Simplify, document, template, automate, batch, or redesign the workflow.'
    },
    {
        id: 'support',
        title: 'Support',
        questions: ['Should I be doing this alone?', 'Am I avoiding help because I believe needing support means I am incapable?', 'Is this a skill gap, capacity gap, or responsibility that should no longer belong to me?'],
        responses: 'Ask, hire, delegate, collaborate, consult, or remove the responsibility.'
    }
];

const DECISIONS = ['Clarify', 'Learn', 'Protect', 'Move', 'Simplify', 'Automate', 'Delegate', 'Ask for support', 'Stop doing it'];

const emptyData = {
    task: '',
    whyMatters: '',
    expandedCategories: {}, // For accordion UI
    primaryFriction: [],
    notProblem: '',
    nextExperiment: '',
    decision: ''
};

const DiagnoseDiscipline = () => {
    const [data, setData] = useState(emptyData);
    const [summaryGenerated, setSummaryGenerated] = useState(false);

    useEffect(() => {
        const savedData = localStorage.getItem('bwbr_diagnose_data');
        if (savedData) {
            try {
                setData(JSON.parse(savedData));
            } catch {
                console.error("Failed to parse saved diagnose data");
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const updateData = (field, value) => {
        setData(prev => ({ ...prev, [field]: value }));
        
        if (!localStorage.getItem('bwbr_diagnose_started')) {
            console.log("Analytics event: diagnose_worksheet_started");
            localStorage.setItem('bwbr_diagnose_started', 'true');
        }
    };

    const toggleCategory = (id) => {
        updateData('expandedCategories', {
            ...data.expandedCategories,
            [id]: !data.expandedCategories[id]
        });
    };

    const handleFrictionToggle = (id) => {
        let newFriction = [...data.primaryFriction];
        if (newFriction.includes(id)) {
            newFriction = newFriction.filter(item => item !== id);
        } else {
            newFriction.push(id);
        }
        updateData('primaryFriction', newFriction);
    };

    const handleSave = () => {
        localStorage.setItem('bwbr_diagnose_data', JSON.stringify(data));
        console.log("Analytics event: diagnose_worksheet_completed");
    };

    const handleReset = () => {
        if (window.confirm("Are you sure you want to start a new diagnosis?")) {
            setData(emptyData);
            setSummaryGenerated(false);
            localStorage.removeItem('bwbr_diagnose_data');
            localStorage.removeItem('bwbr_diagnose_started');
        }
    };

    const handlePrint = () => {
        console.log("Analytics event: worksheet_print_clicked");
        window.print();
    };

    return (
        <div className="bwbr-tool-container print-friendly diagnose-tool">
            {!summaryGenerated ? (
                <>
                    <div className="diagnose-intro no-print">
                        <div className="form-group">
                            <label className="form-label">Task or responsibility:</label>
                            <p className="form-sublabel">What are you struggling to begin, sustain, or complete?</p>
                            <input 
                                type="text" 
                                className="audit-input"
                                value={data.task}
                                onChange={(e) => updateData('task', e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Why does it matter?</label>
                            <p className="form-sublabel">What would completing or improving this make possible?</p>
                            <input 
                                type="text" 
                                className="audit-input"
                                value={data.whyMatters}
                                onChange={(e) => updateData('whyMatters', e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="friction-categories no-print">
                        <h4 className="section-title-sm">Explore Sources of Friction</h4>
                        {CATEGORIES.map(cat => (
                            <div key={cat.id} className={`category-card ${data.expandedCategories[cat.id] ? 'expanded' : ''}`}>
                                <div className="category-header" onClick={() => toggleCategory(cat.id)}>
                                    <h5>{cat.title}</h5>
                                    <span className="toggle-icon">{data.expandedCategories[cat.id] ? '-' : '+'}</span>
                                </div>
                                {data.expandedCategories[cat.id] && (
                                    <div className="category-body">
                                        <ul className="category-questions">
                                            {cat.questions.map((q, i) => <li key={i}>{q}</li>)}
                                        </ul>
                                        <div className="category-responses">
                                            <strong>Possible responses: </strong>
                                            {cat.responses}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="diagnose-synthesis no-print">
                        <div className="form-group">
                            <label className="form-label">Primary source of friction (select one or more):</label>
                            <div className="checkbox-grid">
                                {CATEGORIES.map(cat => (
                                    <label key={cat.id} className="friction-checkbox">
                                        <input 
                                            type="checkbox"
                                            checked={data.primaryFriction.includes(cat.title)}
                                            onChange={() => handleFrictionToggle(cat.title)}
                                        />
                                        <span>{cat.title}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">What the problem is not:</label>
                            <p className="form-sublabel">e.g., “This is not evidence that I am lazy or incapable.”</p>
                            <input 
                                type="text" 
                                className="audit-input"
                                value={data.notProblem}
                                onChange={(e) => updateData('notProblem', e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Best next experiment:</label>
                            <p className="form-sublabel">What is one small change you can test before demanding more discipline from yourself?</p>
                            <textarea 
                                className="audit-textarea"
                                rows={2}
                                value={data.nextExperiment}
                                onChange={(e) => updateData('nextExperiment', e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Decision option:</label>
                            <div className="decision-grid">
                                {DECISIONS.map(dec => (
                                    <label key={dec} className={`decision-radio ${data.decision === dec ? 'selected' : ''}`}>
                                        <input 
                                            type="radio"
                                            name="decision"
                                            checked={data.decision === dec}
                                            onChange={() => updateData('decision', dec)}
                                        />
                                        <span>{dec}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="tool-actions no-print" style={{ justifyContent: 'center' }}>
                        <Button 
                            onClick={() => {
                                handleSave();
                                setSummaryGenerated(true);
                                window.scrollTo(0, document.body.scrollHeight);
                            }} 
                            variant="primary" 
                            className="btn-tool-action"
                            disabled={!data.task || !data.decision}
                        >
                            Generate Final Summary <Check size={16} style={{marginLeft: '8px'}}/>
                        </Button>
                    </div>
                </>
            ) : (
                <div className="diagnose-summary print-friendly">
                    <h3 className="summary-title text-center">My Diagnostic Summary</h3>
                    
                    <div className="summary-statement">
                        <p><strong>I am struggling to begin, sustain, or complete:</strong></p>
                        <p className="summary-highlight">{data.task}</p>
                    </div>
                    
                    {data.whyMatters && (
                        <div className="summary-statement">
                            <p><strong>This matters because completing it makes possible:</strong></p>
                            <p className="summary-highlight">{data.whyMatters}</p>
                        </div>
                    )}

                    <div className="summary-statement">
                        <p><strong>The primary friction is likely:</strong> {data.primaryFriction.length > 0 ? data.primaryFriction.join(', ') : 'Unspecified'}</p>
                    </div>

                    {data.notProblem && (
                        <div className="summary-statement">
                            <p><strong>Importantly, this problem is not:</strong></p>
                            <p className="summary-highlight">{data.notProblem}</p>
                        </div>
                    )}

                    <div className="summary-statement summary-conclusion">
                        <h4>Before I discipline myself, I will test:</h4>
                        <p className="summary-highlight highlight-large">{data.nextExperiment}</p>
                        <p style={{marginTop: '16px'}}><strong>Decision:</strong> <span className="decision-badge">{data.decision}</span></p>
                    </div>

                    <div className="tool-actions no-print">
                        <Button onClick={handlePrint} variant="outline" className="btn-tool-action">
                            <Printer size={16} /> Print / PDF Summary
                        </Button>
                        <Button onClick={() => setSummaryGenerated(false)} variant="outline" className="btn-tool-action">
                            Edit Inputs
                        </Button>
                        <Button onClick={handleReset} variant="outline" className="btn-tool-action btn-danger">
                            <RefreshCw size={16} /> Begin Another Diagnosis
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DiagnoseDiscipline;
