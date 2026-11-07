import React, { useState } from 'react';
import { X, Plus, Trash2, Award, Calculator, Code2, RefreshCw } from 'lucide-react';

interface Course {
  id: string;
  name: string;
  credits: number;
  marks: number;
}

interface GradeCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GradeCalculatorModal: React.FC<GradeCalculatorModalProps> = ({ isOpen, onClose }) => {
  const [courses, setCourses] = useState<Course[]>([
    { id: 'c1', name: 'Python Programming & Problem Solving', credits: 4, marks: 92 },
    { id: 'c2', name: 'Artificial Intelligence Foundations', credits: 4, marks: 88 },
    { id: 'c3', name: 'Discrete Mathematics & Logic', credits: 3, marks: 85 },
    { id: 'c4', name: 'Web Development & Scripting', credits: 3, marks: 90 },
  ]);

  const [newCourseName, setNewCourseName] = useState('');
  const [newCredits, setNewCredits] = useState(3);
  const [newMarks, setNewMarks] = useState(80);
  const [showCode, setShowCode] = useState(false);

  if (!isOpen) return null;

  // Grade point mapping based on standard 10-point B.Tech grading scale
  const getGradePoint = (marks: number): { point: number; letter: string } => {
    if (marks >= 90) return { point: 10, letter: 'O (Outstanding)' };
    if (marks >= 80) return { point: 9, letter: 'A+ (Excellent)' };
    if (marks >= 70) return { point: 8, letter: 'A (Very Good)' };
    if (marks >= 60) return { point: 7, letter: 'B+ (Good)' };
    if (marks >= 50) return { point: 6, letter: 'B (Above Average)' };
    if (marks >= 40) return { point: 5, letter: 'C (Pass)' };
    return { point: 0, letter: 'F (Fail)' };
  };

  const totalCredits = courses.reduce((acc, c) => acc + c.credits, 0);
  const totalWeightedPoints = courses.reduce((acc, c) => acc + getGradePoint(c.marks).point * c.credits, 0);
  const gpa = totalCredits > 0 ? (totalWeightedPoints / totalCredits).toFixed(2) : '0.00';
  const totalMarks = courses.reduce((acc, c) => acc + c.marks, 0);
  const averagePercentage = courses.length > 0 ? (totalMarks / courses.length).toFixed(1) : '0.0';

  const getAcademicTier = (numGpa: number) => {
    if (numGpa >= 8.5) return { title: 'First Class with Distinction', badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200' };
    if (numGpa >= 7.0) return { title: 'First Class', badgeColor: 'bg-sky-50 text-sky-800 border-sky-200' };
    if (numGpa >= 6.0) return { title: 'Second Class', badgeColor: 'bg-amber-50 text-amber-800 border-amber-200' };
    return { title: 'Pass Division', badgeColor: 'bg-slate-100 text-slate-800 border-slate-200' };
  };

  const currentTier = getAcademicTier(parseFloat(gpa));

  const handleAddCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCourseName.trim()) return;
    const newCourse: Course = {
      id: `c-${Date.now()}`,
      name: newCourseName.trim(),
      credits: Number(newCredits) || 3,
      marks: Math.min(100, Math.max(0, Number(newMarks) || 0)),
    };
    setCourses([...courses, newCourse]);
    setNewCourseName('');
    setNewCredits(3);
    setNewMarks(85);
  };

  const handleRemoveCourse = (id: string) => {
    if (courses.length <= 1) return;
    setCourses(courses.filter((c) => c.id !== id));
  };

  const handleUpdateMarks = (id: string, newScore: number) => {
    const clamped = Math.min(100, Math.max(0, newScore));
    setCourses(courses.map((c) => (c.id === id ? { ...c, marks: clamped } : c)));
  };

  const pythonScript = `def calculate_academic_standing(courses):
    """
    courses: list of dicts with 'name', 'credits', 'marks'
    Calculates 10-point GPA and Academic Honor classification.
    """
    total_credits = 0
    weighted_points = 0
    
    for c in courses:
        marks = c["marks"]
        if marks >= 90:
            point = 10
        elif marks >= 80:
            point = 9
        elif marks >= 70:
            point = 8
        elif marks >= 60:
            point = 7
        elif marks >= 50:
            point = 6
        elif marks >= 40:
            point = 5
        else:
            point = 0
            
        credits = c["credits"]
        total_credits += credits
        weighted_points += point * credits
        
    gpa = round(weighted_points / total_credits, 2) if total_credits > 0 else 0.0
    
    tier = (
        "First Class with Distinction" if gpa >= 8.5
        else "First Class" if gpa >= 7.0
        else "Second Class" if gpa >= 6.0
        else "Pass"
    )
    
    return {"GPA": gpa, "TotalCredits": total_credits, "Tier": tier}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-[#F9FAFB]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Student Grade &amp; GPA Calculator</h3>
              <p className="text-xs text-slate-500">Automated Credit Weighting &amp; Academic Tier Logic</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Subheader switch */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {showCode ? 'Python Statistics Algorithm' : 'Interactive Course Ledger & Live Computation'}
            </span>
            <button
              onClick={() => setShowCode(!showCode)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-700 hover:text-sky-800"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>{showCode ? 'Back to Calculator' : 'View Python Engine'}</span>
            </button>
          </div>

          {showCode ? (
            <div className="bg-slate-900 text-slate-100 p-4 rounded-xl overflow-x-auto text-xs font-mono leading-relaxed">
              <pre>{pythonScript}</pre>
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Scorecard Strip */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Calculated GPA</span>
                  <p className="text-2xl font-extrabold font-mono text-slate-900 tabular-nums mt-0.5">{gpa}</p>
                  <span className="text-[10px] text-slate-400">10.0 Scale</span>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Average Marks</span>
                  <p className="text-2xl font-extrabold font-mono text-slate-900 tabular-nums mt-0.5">{averagePercentage}%</p>
                  <span className="text-[10px] text-slate-400">Across {courses.length} Courses</span>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center flex flex-col justify-between">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Academic Tier</span>
                  <span className={`text-xs font-bold px-2 py-1 rounded-md border ${currentTier.badgeColor} truncate`}>
                    {currentTier.title}
                  </span>
                  <span className="text-[10px] text-slate-400">{totalCredits} Total Credits</span>
                </div>
              </div>

              {/* Course list table */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span>Enrolled Courses &amp; Marks Distribution</span>
                  <span className="text-slate-400 text-[11px]">Adjust marks (0-100) below:</span>
                </div>

                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-[#F8FAFC] border-b border-slate-200 text-slate-600 font-semibold">
                      <tr>
                        <th className="py-2.5 px-3">Subject</th>
                        <th className="py-2.5 px-3 w-16 text-center">Credits</th>
                        <th className="py-2.5 px-3 w-28">Score / 100</th>
                        <th className="py-2.5 px-3 w-24">Grade</th>
                        <th className="py-2.5 px-2 w-10 text-center"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {courses.map((course) => {
                        const gradeInfo = getGradePoint(course.marks);
                        return (
                          <tr key={course.id} className="hover:bg-slate-50/50">
                            <td className="py-2 px-3 font-medium text-slate-800">{course.name}</td>
                            <td className="py-2 px-3 text-center font-mono text-slate-600">{course.credits}</td>
                            <td className="py-2 px-3">
                              <input
                                type="number"
                                min="0"
                                max="100"
                                value={course.marks}
                                onChange={(e) => handleUpdateMarks(course.id, Number(e.target.value))}
                                className="w-20 px-2 py-1 text-xs border border-slate-200 rounded-md bg-[#F9FAFB] font-mono text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-slate-400"
                              />
                            </td>
                            <td className="py-2 px-3 font-mono font-semibold text-slate-700">
                              {gradeInfo.letter.split(' ')[0]} ({gradeInfo.point} pts)
                            </td>
                            <td className="py-2 px-2 text-center">
                              <button
                                onClick={() => handleRemoveCourse(course.id)}
                                disabled={courses.length <= 1}
                                className="text-slate-400 hover:text-rose-600 disabled:opacity-30 disabled:hover:text-slate-400 transition-colors p-1"
                                title="Remove Subject"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Add New Course Form */}
              <form onSubmit={handleAddCourse} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <span className="text-xs font-semibold text-slate-700 block">Add Additional Course</span>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                  <input
                    type="text"
                    placeholder="e.g. Computer Networks"
                    value={newCourseName}
                    onChange={(e) => setNewCourseName(e.target.value)}
                    className="sm:col-span-6 px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-slate-400"
                  />
                  <input
                    type="number"
                    min="1"
                    max="6"
                    placeholder="Credits"
                    value={newCredits}
                    onChange={(e) => setNewCredits(Number(e.target.value))}
                    className="sm:col-span-2 px-2 py-1.5 text-xs bg-white border border-slate-200 rounded-lg text-slate-800 font-mono focus:outline-hidden focus:ring-1 focus:ring-slate-400"
                  />
                  <input
                    type="number"
                    min="0"
                    max="100"
                    placeholder="Score"
                    value={newMarks}
                    onChange={(e) => setNewMarks(Number(e.target.value))}
                    className="sm:col-span-2 px-2 py-1.5 text-xs bg-white border border-slate-200 rounded-lg text-slate-800 font-mono focus:outline-hidden focus:ring-1 focus:ring-slate-400"
                  />
                  <button
                    type="submit"
                    className="sm:col-span-2 inline-flex items-center justify-center gap-1 py-1.5 px-3 bg-slate-800 text-white rounded-lg text-xs font-semibold hover:bg-slate-900 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>
                </div>
              </form>

              {/* Reset courses button */}
              <div className="flex justify-end">
                <button
                  onClick={() =>
                    setCourses([
                      { id: 'c1', name: 'Python Programming & Problem Solving', credits: 4, marks: 92 },
                      { id: 'c2', name: 'Artificial Intelligence Foundations', credits: 4, marks: 88 },
                      { id: 'c3', name: 'Discrete Mathematics & Logic', credits: 3, marks: 85 },
                      { id: 'c4', name: 'Web Development & Scripting', credits: 3, marks: 90 },
                    ])
                  }
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Restore Sample Courses</span>
                </button>
              </div>

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-100 bg-[#F9FAFB] flex items-center justify-between text-xs text-slate-500">
          <span>Weighted algorithm complying with university grading frameworks</span>
          <button
            onClick={onClose}
            className="px-4 py-2 font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Close Calculator
          </button>
        </div>

      </div>
    </div>
  );
};
