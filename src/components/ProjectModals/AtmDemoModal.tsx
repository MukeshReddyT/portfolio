import React, { useState } from 'react';
import { X, CreditCard, DollarSign, ArrowDownRight, ArrowUpRight, ShieldCheck, RefreshCw, Code2, Lock } from 'lucide-react';

interface AtmDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TransactionRecord {
  id: string;
  type: 'Deposit' | 'Withdrawal' | 'Initial';
  amount: number;
  balanceAfter: number;
  time: string;
}

export const AtmDemoModal: React.FC<AtmDemoModalProps> = ({ isOpen, onClose }) => {
  const [pin, setPin] = useState<string>('');
  const [actualPin, setActualPin] = useState<string>('1234');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [balance, setBalance] = useState<number>(1500);
  const [pinError, setPinError] = useState<string>('');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [actionMessage, setActionMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [showCode, setShowCode] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'banking' | 'statement' | 'pin'>('banking');
  const [newPin, setNewPin] = useState<string>('');

  const [transactions, setTransactions] = useState<TransactionRecord[]>([
    {
      id: 'tx-0',
      type: 'Initial',
      amount: 1500,
      balanceAfter: 1500,
      time: 'Session Start',
    },
  ]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === actualPin) {
      setIsAuthenticated(true);
      setPinError('');
      setActionMessage(null);
    } else {
      setPinError(`Incorrect PIN. (Hint: default test PIN is ${actualPin})`);
    }
  };

  const handleWithdrawal = (amt: number) => {
    if (amt <= 0) {
      setActionMessage({ text: 'Please enter a valid amount greater than $0', type: 'error' });
      return;
    }
    if (amt > balance) {
      setActionMessage({ text: `Insufficient funds. Current balance is $${balance.toLocaleString()}`, type: 'error' });
      return;
    }

    const newBalance = balance - amt;
    setBalance(newBalance);
    const newTx: TransactionRecord = {
      id: `tx-${Date.now()}`,
      type: 'Withdrawal',
      amount: amt,
      balanceAfter: newBalance,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    };
    setTransactions([newTx, ...transactions]);
    setActionMessage({ text: `Successfully withdrew $${amt.toLocaleString()}`, type: 'success' });
    setCustomAmount('');
  };

  const handleDeposit = () => {
    const amt = Number(customAmount);
    if (amt <= 0 || isNaN(amt)) {
      setActionMessage({ text: 'Please enter a valid deposit amount', type: 'error' });
      return;
    }

    const newBalance = balance + amt;
    setBalance(newBalance);
    const newTx: TransactionRecord = {
      id: `tx-${Date.now()}`,
      type: 'Deposit',
      amount: amt,
      balanceAfter: newBalance,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    };
    setTransactions([newTx, ...transactions]);
    setActionMessage({ text: `Successfully deposited $${amt.toLocaleString()}`, type: 'success' });
    setCustomAmount('');
  };

  const handleChangePin = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPin.length !== 4 || !/^\d+$/.test(newPin)) {
      setActionMessage({ text: 'PIN must be exactly 4 numeric digits', type: 'error' });
      return;
    }
    setActualPin(newPin);
    setNewPin('');
    setActionMessage({ text: `PIN successfully updated to ${newPin}`, type: 'success' });
    setActiveTab('banking');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPin('');
    setPinError('');
    setActionMessage(null);
  };

  const pythonOOPCode = `class BankAccount:
    """
    Simulates core banking operations with balance integrity.
    """
    def __init__(self, account_holder: str, initial_balance: float = 1500.0, pin: str = "1234"):
        self.account_holder = account_holder
        self.__balance = initial_balance
        self.__pin = pin
        self.statement = [("INITIAL", initial_balance, initial_balance)]

    def authenticate(self, entered_pin: str) -> bool:
        return self.__pin == entered_pin

    def check_balance(self) -> float:
        return self.__balance

    def deposit(self, amount: float) -> bool:
        if amount > 0:
            self.__balance += amount
            self.statement.append(("DEPOSIT", amount, self.__balance))
            return True
        return False

    def withdraw(self, amount: float) -> bool:
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            self.statement.append(("WITHDRAWAL", amount, self.__balance))
            return True
        return False

    def update_pin(self, old_pin: str, new_pin: str) -> bool:
        if self.authenticate(old_pin) and len(new_pin) == 4 and new_pin.isdigit():
            self.__pin = new_pin
            return True
        return False`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-[#F9FAFB]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-800 text-white flex items-center justify-center">
              <CreditCard className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">ATM Management System</h3>
              <p className="text-xs text-slate-500">Python OOP Simulation &amp; State Guard</p>
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
              {showCode ? 'Python OOP Class Definition' : isAuthenticated ? 'Active Banking Terminal' : 'Security Authentication'}
            </span>
            <button
              onClick={() => setShowCode(!showCode)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-700 hover:text-sky-800"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>{showCode ? 'Return to Simulator' : 'Inspect Python Code'}</span>
            </button>
          </div>

          {showCode ? (
            <div className="bg-slate-900 text-slate-100 p-4 rounded-xl overflow-x-auto text-xs font-mono leading-relaxed">
              <pre>{pythonOOPCode}</pre>
            </div>
          ) : !isAuthenticated ? (
            /* PIN Login Screen */
            <div className="max-w-md mx-auto py-6 space-y-5">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-center">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center mx-auto text-slate-700">
                  <Lock className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-800 text-base">Welcome to Apex Automated Teller</h4>
                <p className="text-xs text-slate-500">
                  Card recognized: <span className="font-mono text-slate-700 font-medium">•••• •••• •••• 4092</span>
                </p>
                <div className="text-xs bg-white px-3 py-1.5 rounded-md border border-slate-200 text-slate-600 inline-block font-mono">
                  Default test PIN: <strong className="text-slate-900">{actualPin}</strong>
                </div>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700">Enter 4-Digit Security PIN</label>
                  <input
                    type="password"
                    maxLength={4}
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="••••"
                    className="w-full text-center tracking-widest text-xl font-mono py-2.5 bg-[#F9FAFB] border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-slate-400"
                    autoFocus
                  />
                  {pinError && <p className="text-xs text-rose-600 text-center font-medium">{pinError}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors shadow-xs"
                >
                  Verify PIN &amp; Proceed
                </button>
              </form>
            </div>
          ) : (
            /* Authenticated Banking Interface */
            <div className="space-y-5">
              
              {/* Account Balance Widget */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-xl p-5 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-300 font-medium tracking-wide uppercase">Primary Savings Account</span>
                  <p className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums mt-1">
                    ${balance.toLocaleString()}
                    <span className="text-xs text-slate-400 font-normal ml-1">.00 USD</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400">Cardholder</span>
                  <p className="text-sm font-semibold text-white">T. Mukesh Reddy</p>
                  <span className="text-[11px] text-emerald-400 flex items-center justify-end gap-1 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Encrypted Session
                  </span>
                </div>
              </div>

              {/* Action feedback alert */}
              {actionMessage && (
                <div
                  className={`p-3 rounded-lg text-xs font-medium flex items-center justify-between ${
                    actionMessage.type === 'success'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-rose-50 text-rose-800 border border-rose-200'
                  }`}
                >
                  <span>{actionMessage.text}</span>
                  <button onClick={() => setActionMessage(null)} className="text-slate-400 hover:text-slate-700">
                    ✕
                  </button>
                </div>
              )}

              {/* Tab Navigation */}
              <div className="flex border-b border-slate-200 text-xs font-semibold gap-4">
                <button
                  onClick={() => {
                    setActiveTab('banking');
                    setActionMessage(null);
                  }}
                  className={`pb-2 transition-colors border-b-2 ${
                    activeTab === 'banking'
                      ? 'border-slate-900 text-slate-900'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Transactions &amp; Fast Cash
                </button>
                <button
                  onClick={() => {
                    setActiveTab('statement');
                    setActionMessage(null);
                  }}
                  className={`pb-2 transition-colors border-b-2 ${
                    activeTab === 'statement'
                      ? 'border-slate-900 text-slate-900'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Mini-Statement ({transactions.length})
                </button>
                <button
                  onClick={() => {
                    setActiveTab('pin');
                    setActionMessage(null);
                  }}
                  className={`pb-2 transition-colors border-b-2 ${
                    activeTab === 'pin'
                      ? 'border-slate-900 text-slate-900'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Change PIN
                </button>
              </div>

              {/* Tab: Fast Cash & Operations */}
              {activeTab === 'banking' && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-slate-700">Fast Cash Withdrawal</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[20, 50, 100, 200].map((amt) => (
                        <button
                          key={amt}
                          onClick={() => handleWithdrawal(amt)}
                          className="py-2.5 px-3 bg-[#F8FAFC] border border-slate-200/90 hover:bg-slate-100 rounded-lg text-xs font-mono font-bold text-slate-800 transition-colors"
                        >
                          ${amt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Deposit / Withdrawal */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <label className="block text-xs font-semibold text-slate-700">
                      Custom Amount (USD)
                    </label>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <DollarSign className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="number"
                          placeholder="e.g. 150"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="w-full pl-8 pr-3 py-2 text-xs sm:text-sm bg-[#F9FAFB] border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-slate-400 font-mono"
                        />
                      </div>
                      <button
                        onClick={() => handleWithdrawal(Number(customAmount))}
                        className="px-3.5 py-2 bg-slate-800 text-white rounded-lg text-xs font-semibold hover:bg-slate-900 transition-colors shrink-0"
                      >
                        Withdraw
                      </button>
                      <button
                        onClick={handleDeposit}
                        className="px-3.5 py-2 bg-emerald-700 text-white rounded-lg text-xs font-semibold hover:bg-emerald-800 transition-colors shrink-0"
                      >
                        Deposit
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Mini-Statement */}
              {activeTab === 'statement' && (
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-slate-700">Audit Ledger &amp; Transaction History</p>
                  <div className="border border-slate-200 rounded-xl overflow-hidden max-h-56 overflow-y-auto">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-[#F8FAFC] border-b border-slate-200 text-slate-600 font-semibold">
                        <tr>
                          <th className="py-2 px-3">Time</th>
                          <th className="py-2 px-3">Type</th>
                          <th className="py-2 px-3 text-right">Amount</th>
                          <th className="py-2 px-3 text-right">Balance</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-mono">
                        {transactions.map((tx) => (
                          <tr key={tx.id} className="hover:bg-slate-50/50">
                            <td className="py-2 px-3 text-slate-500 font-sans">{tx.time}</td>
                            <td className="py-2 px-3">
                              <span
                                className={`inline-flex items-center gap-1 font-sans font-medium ${
                                  tx.type === 'Withdrawal'
                                    ? 'text-rose-700'
                                    : tx.type === 'Deposit'
                                    ? 'text-emerald-700'
                                    : 'text-slate-600'
                                }`}
                              >
                                {tx.type === 'Withdrawal' && <ArrowDownRight className="w-3 h-3" />}
                                {tx.type === 'Deposit' && <ArrowUpRight className="w-3 h-3" />}
                                {tx.type}
                              </span>
                            </td>
                            <td className="py-2 px-3 text-right tabular-nums">
                              {tx.type === 'Withdrawal' ? '-' : '+'}${tx.amount.toLocaleString()}
                            </td>
                            <td className="py-2 px-3 text-right font-bold text-slate-800 tabular-nums">
                              ${tx.balanceAfter.toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Tab: Change PIN */}
              {activeTab === 'pin' && (
                <form onSubmit={handleChangePin} className="space-y-3 max-w-sm">
                  <p className="text-xs text-slate-600">Enter a new 4-digit numeric code to update your card credentials:</p>
                  <input
                    type="password"
                    maxLength={4}
                    placeholder="New 4-digit PIN"
                    value={newPin}
                    onChange={(e) => setNewPin(e.target.value)}
                    className="w-full text-center tracking-widest text-lg font-mono py-2 bg-[#F9FAFB] border border-slate-200 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-slate-400"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-slate-800 text-white rounded-lg text-xs font-semibold hover:bg-slate-900 transition-colors"
                  >
                    Save New PIN
                  </button>
                </form>
              )}

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-100 bg-[#F9FAFB] flex items-center justify-between text-xs text-slate-500">
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="text-xs font-semibold text-rose-700 hover:text-rose-800"
            >
              Eject Card / End Session
            </button>
          ) : (
            <span>Card status: In Reader</span>
          )}
          <button
            onClick={onClose}
            className="px-4 py-2 font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Close Terminal
          </button>
        </div>

      </div>
    </div>
  );
};
