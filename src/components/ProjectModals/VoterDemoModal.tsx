import React, { useState } from 'react';
import { X, CheckCircle, AlertTriangle, ArrowRight, RefreshCw, Code2 } from 'lucide-react';

interface VoterDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VoterDemoModal: React.FC<VoterDemoModalProps> = ({ isOpen, onClose }) => {
  const [age, setAge] = useState<number>(19);
  const [isCitizen, setIsCitizen] = useState<boolean>(true);
  const [hasVoterId, setHasVoterId] = useState<boolean>(true);
  const [region, setRegion] = useState<string>('Telangana');
  const [showCode, setShowCode] = useState<boolean>(false);

  if (!isOpen) return null;

  const isEligibleByAge = age >= 18;
  const isFullyEligible = isEligibleByAge && isCitizen;

  const samplePythonCode = `def check_voter_eligibility(age: int, is_citizen: bool, has_voter_id: bool, state: str):
    """
    Evaluates voter eligibility based on statutory criteria.
    Minimum age threshold: 18 years.
    """
    if not is_citizen:
        return {
            "status": "Ineligible",
            "reason": "Voter must be a recognized citizen of the country."
        }
    
    if age < 18:
        years_left = 18 - age
        return {
            "status": "Underage",
            "reason": f"Under legal voting age. Eligible in {years_left} year(s)."
        }
    
    if not has_voter_id:
        return {
            "status": "Eligible (Registration Required)",
            "reason": f"Eligible by age in {state}, but must file Form 6 for Voter ID registration."
        }
        
    return {
        "status": "Fully Eligible",
        "reason": f"Ready to cast vote in upcoming local, state, and parliamentary elections in {state}."
    }`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-[#F9FAFB]">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Voter Eligibility Calculator</h3>
            <p className="text-xs text-slate-500">Interactive Logic Simulation &amp; Decision Tree</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Toggle between GUI Runner and Code View */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {showCode ? 'Python Logic Walkthrough' : 'Interactive Parameter Tester'}
            </span>
            <button
              onClick={() => setShowCode(!showCode)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-700 hover:text-sky-800"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>{showCode ? 'Back to Interactive Tester' : 'View Python Logic'}</span>
            </button>
          </div>

          {showCode ? (
            <div className="bg-slate-900 text-slate-100 p-4 rounded-xl overflow-x-auto text-xs font-mono leading-relaxed">
              <pre>{samplePythonCode}</pre>
            </div>
          ) : (
            <div className="space-y-5">
              
              {/* Form Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Age Slider & Input */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <label className="font-semibold text-slate-700">Citizen Age</label>
                    <span className="font-mono text-slate-900 font-bold">{age} years</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="90"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full accent-slate-800"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>10 yrs</span>
                    <span className="text-sky-700 font-medium">18 yrs (Legal Limit)</span>
                    <span>90 yrs</span>
                  </div>
                </div>

                {/* State / Region selector */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700">Jurisdiction / State</label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-[#F9FAFB] border border-slate-200 rounded-lg p-2 text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-slate-400"
                  >
                    <option value="Telangana">Telangana</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                  </select>
                </div>

                {/* Citizenship Check */}
                <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-800">Citizenship</p>
                    <p className="text-[11px] text-slate-500">Holds legal nationality</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={isCitizen}
                    onChange={(e) => setIsCitizen(e.target.checked)}
                    className="w-4 h-4 accent-slate-800 rounded"
                  />
                </div>

                {/* Voter Card Check */}
                <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-800">Electoral ID Issued</p>
                    <p className="text-[11px] text-slate-500">Possesses Voter ID card</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={hasVoterId}
                    onChange={(e) => setHasVoterId(e.target.checked)}
                    className="w-4 h-4 accent-slate-800 rounded"
                  />
                </div>

              </div>

              {/* Evaluation Outcome Box */}
              <div
                className={`p-4 rounded-xl border transition-all ${
                  !isCitizen
                    ? 'bg-rose-50/80 border-rose-200 text-rose-900'
                    : !isEligibleByAge
                    ? 'bg-amber-50/80 border-amber-200 text-amber-900'
                    : !hasVoterId
                    ? 'bg-sky-50/80 border-sky-200 text-sky-900'
                    : 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
                }`}
              >
                <div className="flex items-start gap-3">
                  {!isCitizen || !isEligibleByAge ? (
                    <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                  ) : (
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1">
                    <p className="text-sm font-bold">
                      {!isCitizen
                        ? 'Status: Ineligible (Nationality Requirement)'
                        : !isEligibleByAge
                        ? `Status: Underage (Requires 18+)`
                        : !hasVoterId
                        ? 'Status: Eligible by Age — Registration Pending'
                        : 'Status: Fully Verified & Eligible to Vote'}
                    </p>
                    <p className="text-xs leading-relaxed opacity-90">
                      {!isCitizen
                        ? 'Only recognized citizens of the nation possess voting franchise under constitutional provisions.'
                        : !isEligibleByAge
                        ? `Applicant is currently ${age} years old. Must wait ${18 - age} more year(s) to apply for voter enrollment in ${region}.`
                        : !hasVoterId
                        ? `Meets the legal age of ${age} in ${region}. You can now submit Form 6 online at the National Voters' Service Portal (NVSP) to obtain your Electoral Photo Identity Card (EPIC).`
                        : `Applicant is ${age} years old, holds active citizenship and valid ID registration in ${region}. Authorized to vote in general, assembly, and municipal elections.`}
                    </p>
                  </div>
                </div>
              </div>

              {/* Reset to defaults */}
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    setAge(19);
                    setIsCitizen(true);
                    setHasVoterId(true);
                    setRegion('Telangana');
                  }}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset parameters</span>
                </button>
              </div>

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-100 bg-[#F9FAFB] flex items-center justify-between text-xs text-slate-500">
          <span>Engineered with Python logic structures</span>
          <button
            onClick={onClose}
            className="px-4 py-2 font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Close Simulation
          </button>
        </div>

      </div>
    </div>
  );
};
