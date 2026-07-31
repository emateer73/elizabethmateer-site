import React, { useState, useEffect } from 'react';
import Button from './Button';
import { RefreshCw, Printer, Save, ChevronDown, ChevronUp } from 'lucide-react';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const PERIODS = ['Morning', 'Midday', 'Afternoon', 'Evening'];

const emptyData = {};
DAYS.forEach(day => {
    emptyData[day] = {};
    PERIODS.forEach(period => {
        emptyData[day][period] = { attention: '', energy: '', task: '', notes: '' };
    });
});

const AttentionEnergyAudit = () => {
    const [data, setData] = useState(emptyData);
    const [reflection, setReflection] = useState({
        strongestOverlap: '',
        whatDoing: '',
        fragmented: '',
        energyConsumers: '',
        energyNoFocus: '',
        focusNoEnergy: '',
        actionTasks: '',
        redesignBlock: ''
    });
    const [activeDay, setActiveDay] = useState('Monday');
    const [isReflectionActive, setIsReflectionActive] = useState(false);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const savedData = localStorage.getItem('bwbr_audit_data');
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData);
                if (parsed.data) setData(parsed.data);
                if (parsed.reflection) setReflection(parsed.reflection);
            } catch {
                console.error("Failed to parse saved audit data");
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (day, period, field, value) => {
        setData(prev => ({
            ...prev,
            [day]: {
                ...prev[day],
                [period]: {
                    ...prev[day][period],
                    [field]: value
                }
            }
        }));
        
        // Track start event once
        if (!localStorage.getItem('bwbr_audit_started')) {
            console.log("Analytics event: attention_energy_audit_started");
            localStorage.setItem('bwbr_audit_started', 'true');
        }
        setSaved(false);
    };

    const handleReflectionChange = (field, value) => {
        setReflection(prev => ({ ...prev, [field]: value }));
        setSaved(false);
    };

    const handleSave = () => {
        localStorage.setItem('bwbr_audit_data', JSON.stringify({ data, reflection }));
        setSaved(true);
        console.log("Analytics event: attention_energy_audit_completed");
        setTimeout(() => setSaved(false), 3000);
    };

    const handleReset = () => {
        if (window.confirm("Are you sure you want to clear all audit data?")) {
            setData(emptyData);
            setReflection({
                strongestOverlap: '', whatDoing: '', fragmented: '', 
                energyConsumers: '', energyNoFocus: '', focusNoEnergy: '', 
                actionTasks: '', redesignBlock: ''
            });
            localStorage.removeItem('bwbr_audit_data');
            localStorage.removeItem('bwbr_audit_started');
        }
    };

    const handlePrint = () => {
        console.log("Analytics event: worksheet_print_clicked");
        window.print();
    };

    // Calculate Summary
    let maxAttention = -1, maxEnergy = -1, maxOverlap = -1;
    let minScore = 999;
    let bestAttentionPeriods = [];
    let bestEnergyPeriods = [];
    let bestOverlapPeriods = [];
    let lowestPeriods = [];

    DAYS.forEach(day => {
        PERIODS.forEach(period => {
            const entry = data[day][period];
            const att = parseInt(entry.attention);
            const eng = parseInt(entry.energy);
            
            if (!isNaN(att) && att > maxAttention) {
                maxAttention = att;
                bestAttentionPeriods = [`${day} ${period}`];
            } else if (!isNaN(att) && att === maxAttention) {
                bestAttentionPeriods.push(`${day} ${period}`);
            }

            if (!isNaN(eng) && eng > maxEnergy) {
                maxEnergy = eng;
                bestEnergyPeriods = [`${day} ${period}`];
            } else if (!isNaN(eng) && eng === maxEnergy) {
                bestEnergyPeriods.push(`${day} ${period}`);
            }

            if (!isNaN(att) && !isNaN(eng)) {
                const overlap = att + eng;
                if (overlap > maxOverlap) {
                    maxOverlap = overlap;
                    bestOverlapPeriods = [`${day} ${period}`];
                } else if (overlap === maxOverlap) {
                    bestOverlapPeriods.push(`${day} ${period}`);
                }

                if (overlap < minScore) {
                    minScore = overlap;
                    lowestPeriods = [`${day} ${period}`];
                } else if (overlap === minScore) {
                    lowestPeriods.push(`${day} ${period}`);
                }
            }
        });
    });

    return (
        <div className="bwbr-tool-container print-friendly">
            <div className="bwbr-tool-header no-print">
                <div className="day-tabs">
                    {DAYS.map(day => (
                        <button 
                            key={day}
                            onClick={() => setActiveDay(day)}
                            className={`day-tab ${activeDay === day ? 'active' : ''}`}
                        >
                            {day.slice(0, 3)}
                        </button>
                    ))}
                </div>
            </div>

            <div className="audit-grid-container">
                <h3 className="print-only">{activeDay}</h3>
                <div className="audit-grid">
                    {PERIODS.map(period => (
                        <div key={period} className="audit-period-card">
                            <h4 className="period-title">{period}</h4>
                            <div className="rating-row">
                                <label>
                                    <span>Attention (1-5)</span>
                                    <select 
                                        value={data[activeDay][period].attention} 
                                        onChange={(e) => handleChange(activeDay, period, 'attention', e.target.value)}
                                        className="rating-select"
                                    >
                                        <option value="">-</option>
                                        {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                                    </select>
                                </label>
                                <label>
                                    <span>Energy (1-5)</span>
                                    <select 
                                        value={data[activeDay][period].energy} 
                                        onChange={(e) => handleChange(activeDay, period, 'energy', e.target.value)}
                                        className="rating-select"
                                    >
                                        <option value="">-</option>
                                        {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                                    </select>
                                </label>
                            </div>
                            <div className="text-inputs">
                                <input 
                                    type="text" 
                                    placeholder="Primary task/activity..."
                                    value={data[activeDay][period].task}
                                    onChange={(e) => handleChange(activeDay, period, 'task', e.target.value)}
                                    className="audit-input"
                                />
                                <input 
                                    type="text" 
                                    placeholder="Notes (optional)..."
                                    value={data[activeDay][period].notes}
                                    onChange={(e) => handleChange(activeDay, period, 'notes', e.target.value)}
                                    className="audit-input"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <p className="rating-legend no-print">1 = Very Low | 3 = Moderate | 5 = Very High</p>
            </div>

            <div className="summary-section">
                <h3 className="summary-title">Your Week at a Glance</h3>
                <p className="summary-intro">Based on the ratings you entered, you may want to consider these patterns:</p>
                <div className="summary-grid">
                    <div className="summary-card">
                        <h5>Highest Attention Periods</h5>
                        <p>{maxAttention > -1 ? bestAttentionPeriods.slice(0, 3).join(', ') + (bestAttentionPeriods.length > 3 ? '...' : '') : 'Not enough data'}</p>
                    </div>
                    <div className="summary-card">
                        <h5>Highest Energy Periods</h5>
                        <p>{maxEnergy > -1 ? bestEnergyPeriods.slice(0, 3).join(', ') + (bestEnergyPeriods.length > 3 ? '...' : '') : 'Not enough data'}</p>
                    </div>
                    <div className="summary-card">
                        <h5>Strongest Overlap</h5>
                        <p>{maxOverlap > -1 ? bestOverlapPeriods.slice(0, 3).join(', ') + (bestOverlapPeriods.length > 3 ? '...' : '') : 'Not enough data'}</p>
                    </div>
                    <div className="summary-card">
                        <h5>Lowest Rated Periods</h5>
                        <p>{minScore < 999 ? lowestPeriods.slice(0, 3).join(', ') + (lowestPeriods.length > 3 ? '...' : '') : 'Not enough data'}</p>
                    </div>
                </div>
            </div>

            <div className="reflection-section no-break">
                <div 
                    className="reflection-header no-print" 
                    onClick={() => setIsReflectionActive(!isReflectionActive)}
                    style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: isReflectionActive ? '16px' : '0' }}
                >
                    <h3 className="summary-title" style={{ margin: 0 }}>Start Reflection</h3>
                    {isReflectionActive ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                
                <h3 className="summary-title print-only">Reflection</h3>

                {isReflectionActive && (
                    <div className={`reflection-content ${!isReflectionActive ? 'print-only-hidden' : ''}`}>
                        {[
                            { id: 'strongestOverlap', label: 'When was your strongest overlap of attention and energy?' },
                            { id: 'whatDoing', label: 'What were you doing during those periods?' },
                            { id: 'fragmented', label: 'What repeatedly fragmented your attention?' },
                            { id: 'energyConsumers', label: 'Which responsibilities consumed more energy than their importance justified?' },
                            { id: 'energyNoFocus', label: 'When did you have energy but struggle to focus?' },
                            { id: 'focusNoEnergy', label: 'When did you have focus but limited energy?' },
                            { id: 'actionTasks', label: 'Which tasks should be protected, moved, batched, delegated, automated, or stopped?' },
                            { id: 'redesignBlock', label: 'What is one block of your week you could redesign?' }
                        ].map(q => (
                            <div key={q.id} className="reflection-group">
                                <label>{q.label}</label>
                                <textarea 
                                    value={reflection[q.id]}
                                    onChange={(e) => handleReflectionChange(q.id, e.target.value)}
                                    rows={2}
                                    className="audit-textarea"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="tool-actions no-print">
                <Button onClick={handleSave} variant="primary" className="btn-tool-action">
                    {saved ? 'Saved Locally!' : 'Save Progress'}
                </Button>
                <Button onClick={handlePrint} variant="outline" className="btn-tool-action">
                    Print / PDF
                </Button>
                <Button onClick={handleReset} variant="outline" className="btn-tool-action btn-danger">
                    Reset Audit
                </Button>
            </div>
            <p className="privacy-note no-print">Your entries are saved only in your local browser storage.</p>
        </div>
    );
};

export default AttentionEnergyAudit;
