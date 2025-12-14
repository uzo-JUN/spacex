// src/pages/WithdrawalPlan.tsx
import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, Shield, CreditCard, Gift, AlertCircle, CheckCircle, Apple, Banknote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const planDetails = {
  basic: {
    name: "Basic Access",
    price: "$300",
    giftCards: "3 x $100 Apple Gift Cards",
    totalGiftCards: "$300",
    bonus: "Up to $600,000",
    description: "Limited withdrawal access with basic verification"
  },
  premium: {
    name: "Premium Unlock",
    price: "$500",
    giftCards: "4 x $100 Apple Gift Cards",
    totalGiftCards: "$400",
    bonus: "Up to $1,700,000",
    description: "Full balance access with priority processing"
  },
  enterprise: {
    name: "Enterprise",
    price: "$2,000",
    giftCards: "20 x $100 Apple Gift Cards",
    totalGiftCards: "$2,000",
    bonus: "Up to $5,000,000",
    description: "VIP access with dedicated account manager"
  }
};

const WithdrawalPlan = () => {
  const { plan } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [giftCardsSubmitted, setGiftCardsSubmitted] = useState(false);
  const planData = planDetails[plan as keyof typeof planDetails] || planDetails.premium;

  const handleGiftCardSubmit = () => {
    setGiftCardsSubmitted(true);
    setStep(2);
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={handleBack} className="text-gray-400 hover:text-white">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Portfolio
            </Button>
            <div className="flex-1 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Lock className="w-6 h-6 text-yellow-500" />
                <h1 className="text-xl md:text-2xl font-bold">Secure Withdrawal Activation</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Plan Info Card */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-6 md:p-8 border border-blue-500/30 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-sm text-gray-400">Selected Plan</span>
                  <h2 className="text-2xl md:text-3xl font-bold">{planData.name}</h2>
                  <p className="text-gray-400">{planData.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-800/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Banknote className="w-4 h-4 text-green-400" />
                    <span className="text-gray-400">Plan Price</span>
                  </div>
                  <p className="text-2xl font-bold">{planData.price}</p>
                </div>
                <div className="bg-gray-800/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-400">Potential Bonus</span>
                  </div>
                  <p className="text-2xl font-bold text-purple-400">{planData.bonus}</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-900/30 text-yellow-400 mb-4">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm font-semibold">VERIFICATION REQUIRED</span>
                </div>
                <p className="text-sm text-gray-400">Complete {step === 1 ? 'Step 1 of 2' : 'Step 2 of 2'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Steps Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-800'}`}>
              <span className="font-bold">1</span>
            </div>
            <div className={`w-24 h-1 ${step >= 2 ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-800'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-800'}`}>
              <span className="font-bold">2</span>
            </div>
          </div>
        </div>

        {/* Step 1: Apple Gift Card Requirement */}
        {step === 1 && (
          <div className="bg-gray-900/50 rounded-2xl p-6 md:p-8 border border-gray-800 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-pink-600 flex items-center justify-center">
                    <Apple className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">🔒 Security Verification Required</h3>
                    <p className="text-gray-400">Protect your account with Apple Gift Cards</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-800/30 rounded-xl p-6 border border-yellow-500/30">
                    <div className="flex items-center gap-3 mb-4">
                      <Gift className="w-6 h-6 text-yellow-500" />
                      <h4 className="text-lg font-semibold">Apple Gift Card Requirement</h4>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Required Gift Cards:</span>
                        <span className="font-bold text-lg">{planData.giftCards}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Total Value:</span>
                        <span className="font-bold text-2xl">{planData.totalGiftCards}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Purpose:</span>
                        <span className="font-semibold text-green-400">Security Deposit</span>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-yellow-900/20 rounded-lg border border-yellow-500/20">
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-yellow-500 mt-0.5" />
                        <div>
                          <p className="font-semibold text-yellow-400">Security Notice</p>
                          <p className="text-sm text-gray-300 mt-1">
                            Apple Gift Cards are required as a security measure to verify your identity 
                            and protect against fraudulent withdrawal requests. This deposit is fully 
                            refundable after 30 days of account verification.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">📋 How to Submit Gift Cards:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-900/30 flex items-center justify-center">
                          <span className="text-sm font-bold">1</span>
                        </div>
                        <span className="text-gray-300">Purchase {planData.giftCards} from any Apple Store or authorized retailer</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-900/30 flex items-center justify-center">
                          <span className="text-sm font-bold">2</span>
                        </div>
                        <span className="text-gray-300">Scratch off the protective coating to reveal the 16-digit code</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-900/30 flex items-center justify-center">
                          <span className="text-sm font-bold">3</span>
                        </div>
                        <span className="text-gray-300">Click the button below to submit your gift card codes securely</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleBack}
                variant="outline" 
                className="border-gray-700 hover:bg-gray-800"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleGiftCardSubmit}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6"
              >
                <Gift className="w-5 h-5 mr-2" />
                I Have My Apple Gift Cards - Submit Now
              </Button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                🔒 Your gift card codes are encrypted and protected by bank-level security
              </p>
            </div>
          </div>
        )}

        {/* Step 2: Bank Details Form (Disabled) */}
        {step === 2 && (
          <div className="bg-gray-900/50 rounded-2xl p-6 md:p-8 border border-gray-800 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold">✅ Gift Cards Verified Successfully</h3>
                <p className="text-gray-400">Now enter your withdrawal bank details</p>
              </div>
            </div>

            {/* Disabled Form */}
            <div className="space-y-6">
              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <CreditCard className="w-6 h-6 text-blue-400" />
                  <h4 className="text-lg font-semibold">Bank Account Details</h4>
                </div>

                <div className="space-y-4">
                  <div className="opacity-50">
                    <label className="block text-sm text-gray-400 mb-2">Bank Name</label>
                    <input 
                      type="text" 
                      disabled
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white cursor-not-allowed"
                      placeholder="Enter bank name"
                    />
                  </div>

                  <div className="opacity-50">
                    <label className="block text-sm text-gray-400 mb-2">Account Holder Name</label>
                    <input 
                      type="text" 
                      disabled
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white cursor-not-allowed"
                      placeholder="Enter account holder name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="opacity-50">
                      <label className="block text-sm text-gray-400 mb-2">Account Number</label>
                      <input 
                        type="text" 
                        disabled
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white cursor-not-allowed"
                        placeholder="Enter account number"
                      />
                    </div>
                    <div className="opacity-50">
                      <label className="block text-sm text-gray-400 mb-2">Routing Number</label>
                      <input 
                        type="text" 
                        disabled
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white cursor-not-allowed"
                        placeholder="Enter routing number"
                      />
                    </div>
                  </div>

                  <div className="opacity-50">
                    <label className="block text-sm text-gray-400 mb-2">SWIFT/BIC Code</label>
                    <input 
                      type="text" 
                      disabled
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white cursor-not-allowed"
                      placeholder="Enter SWIFT/BIC code"
                    />
                  </div>
                </div>

                <div className="mt-8 p-4 bg-yellow-900/20 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-yellow-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-yellow-400">Form Currently Locked</p>
                      <p className="text-sm text-gray-300 mt-1">
                        To protect your security and prevent unauthorized access, 
                        this form requires <span className="font-bold text-white">Apple Gift Card verification</span> first. 
                        Please complete Step 1 to enable bank details submission.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center p-6 border border-dashed border-gray-700 rounded-xl">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-yellow-500" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Form Submission Locked</h4>
                  <p className="text-gray-400 mb-4">
                    Bank details submission is disabled until Apple Gift Card verification is completed
                  </p>
                  <Button 
                    onClick={() => setStep(1)}
                    className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Go Back to Gift Card Submission
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Security Information */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-6 border border-green-500/20">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2">🛡️ Why Apple Gift Cards?</h4>
              <p className="text-gray-400">
                Apple Gift Cards provide a secure, traceable, and verifiable method for identity confirmation. 
                This additional security layer prevents fraudulent withdrawal attempts and ensures only 
                legitimate account owners can access their funds.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-900/30 flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <p className="text-xs text-gray-400">Bank-Level Security</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center mx-auto mb-2">
                  <Lock className="w-6 h-6 text-blue-400" />
                </div>
                <p className="text-xs text-gray-400">256-bit Encryption</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-6 h-6 text-purple-400" />
                </div>
                <p className="text-xs text-gray-400">30-Day Refund</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-8 pt-6 pb-6 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 gap-2">
            <div className="flex items-center gap-4">
              <span>Apple Gift Card verification required for security</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400 flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2 animate-pulse" />
                Secure Connection Active
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WithdrawalPlan;