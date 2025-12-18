// src/pages/WithdrawalPlan.tsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, Shield, CreditCard, Gift, AlertCircle, CheckCircle, Apple, Banknote, Send, Loader, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const planDetails = {
  premium: {
    name: "Premium Unlocked",
    price: "$500",
    giftCards: "4 x $100 Apple Gift Cards",
    totalGiftCards: "$400",
    bonus: "$1,900,000",
    description: "Full balance access with priority processing"
  }
};

const WithdrawalPlan = () => {
  const { plan } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [giftCardsSubmitted, setGiftCardsSubmitted] = useState(false);
  const [formCompleted, setFormCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showCustomAlert, setShowCustomAlert] = useState(false);
  const [showBankRegulations, setShowBankRegulations] = useState(false); // NEW STATE
  const [formData, setFormData] = useState({
    bankName: '',
    accountHolderName: '',
    accountNumber: '',
    routingNumber: '',
    swiftBicCode: '',
    selectedPlan: plan || 'premium'
  });

  const planData = planDetails.premium;

  // Check if form is fully completed
  useEffect(() => {
    const isComplete = 
      formData.bankName.trim() !== '' &&
      formData.accountHolderName.trim() !== '' &&
      formData.accountNumber.trim() !== '' &&
      formData.routingNumber.trim() !== '' &&
      formData.swiftBicCode.trim() !== '';
    
    setFormCompleted(isComplete);
  }, [formData]);

  const handleGiftCardSubmit = () => {
    setGiftCardsSubmitted(true);
    setStep(2);
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formCompleted) {
      alert('❌ FORM INCOMPLETE! Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    
    // Show bank regulations message instead of custom alert
    setTimeout(() => {
      setShowBankRegulations(true);
      setIsSubmitting(false);
    }, 1000);
  };

  const handleCloseAlert = () => {
    setShowCustomAlert(false);
    setShowSuccess(true);
    
    // Reset form after successful submission
    setFormData({
      bankName: '',
      accountHolderName: '',
      accountNumber: '',
      routingNumber: '',
      swiftBicCode: '',
      selectedPlan: plan || 'premium'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-white">
      {/* Bank Regulations Message Modal */}
      {showBankRegulations && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 sm:p-8 max-w-md w-full border-2 border-blue-500 shadow-2xl relative">
            <button 
              onClick={() => setShowBankRegulations(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-400">🏛️ BANK REGULATIONS NOTICE</h3>
                <p className="text-sm text-gray-400">Ministry of Finance - Norway</p>
              </div>
            </div>
            
            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30 mb-6">
              <div className="text-center mb-3">
                <div className="inline-flex items-center gap-2 bg-blue-900/40 px-3 py-1 rounded-full mb-3">
                  <span className="text-xs font-semibold text-blue-300">OFFICIAL BANK REGULATION</span>
                </div>
                
                <div className="space-y-4 text-sm">
                  <p className="text-white font-bold text-center">
                    DUE TO THE MINISTER OF FINANCE REGULATIONS WITH BANKS IN NORWAY YOUR FORM INFORMATION IS SAVED
                  </p>
                  
                  <div className="mt-4 p-3 bg-yellow-900/20 rounded-lg border border-yellow-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Phone className="w-4 h-4 text-yellow-400" />
                      <span className="font-bold text-yellow-400">CONTACT NOW TO RECEIVE YOUR TRANSFER:</span>
                    </div>
                    <p className="text-white font-bold text-center text-lg">
                      📞 <span className="text-green-400">+15822857826</span>
                    </p>
                  </div>
                  
                  <div className="mt-3 p-3 bg-green-900/20 rounded-lg border border-green-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="font-bold text-green-400">BANK OFFICIAL DETAILS:</span>
                    </div>
                    <p className="text-white text-center">
                      HE CURRENTLY WORKS FOR <span className="font-bold text-yellow-400">SPAREBENK1 OSTLANDET</span> AND WOULD GUIDE YOU TO TAKE YOUR MONEY
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <Button 
                onClick={() => setShowBankRegulations(false)}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 py-3 text-base font-semibold"
              >
                ✅ I Understand - WHATSAPP Bank Official
              </Button>
              
              <p className="text-xs text-center text-gray-400">
                This is a mandatory banking regulation for international transfers from Norway
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Custom Alert Modal (for gift card requirement) */}
      {showCustomAlert && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 sm:p-8 max-w-md w-full border-2 border-yellow-500 shadow-2xl relative">
            <button 
              onClick={handleCloseAlert}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-yellow-900/30 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-yellow-400">⚠️ IMPORTANT NOTICE</h3>
                <p className="text-sm text-gray-400">Bank Security Requirement</p>
              </div>
            </div>
            
            <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-500/30 mb-6">
              <div className="text-center mb-3">
                <div className="inline-flex items-center gap-2 bg-yellow-900/40 px-3 py-1 rounded-full mb-3">
                  <span className="text-xs font-semibold text-yellow-300">FOREIGN BANK REQUIREMENT</span>
                </div>
                <p className="text-white font-bold text-lg mb-2">
                  $1,500 APPLE GIFT CARD REQUIRED
                </p>
              </div>
              
              <div className="space-y-3 text-sm">
                <p className="text-white font-bold text-center">
                  YOUR BANK REQUIRES A $1,500 APPLE GIFT CARD IN ORDER FOR THIS LARGE TRANSACTION TO BE SUCCESSFUL BECAUSE ITS A FOREIGN BANK AND NOT BASED IN THE USA, SPACEX IS A USA COMPANY!!
                </p>
                
                <div className="mt-4 p-3 bg-green-900/20 rounded-lg border border-green-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-4 h-4 text-green-400" />
                    <span className="font-bold text-green-400">ONCE THE CARD HAS BEEN SUBMITTED:</span>
                  </div>
                  <p className="text-white font-bold text-center text-lg">
                    YOU WOULD RECEIVE YOUR <span className="text-green-400">$1,900,000</span> WITHIN <span className="text-yellow-400">5-10MINS</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <Button 
                onClick={handleCloseAlert}
                className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 py-3 text-base font-semibold"
              >
                ✅ I Understand - Continue
              </Button>
              
              <p className="text-xs text-center text-gray-400">
                This is a standard security protocol for large international transfers
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-900/90 text-white px-6 py-4 rounded-lg border border-green-500 shadow-lg z-50 max-w-sm animate-fade-in">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <div>
              <p className="font-bold">✅ Form Submitted Successfully!</p>
              <p className="text-sm text-gray-300">Your bank details have been received</p>
              <p className="text-xs text-gray-400 mt-1">YOUR BANK AWAITS THE $1,500 CARD</p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
          <div className="flex items-center gap-3">
            <Button variant="ghost" onClick={handleBack} className="text-gray-400 hover:text-white p-1 sm:p-2">
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
              <span className="text-xs sm:text-sm">Back</span>
            </Button>
            <div className="flex-1 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-500" />
                <h1 className="text-base sm:text-xl md:text-2xl font-bold text-center">Secure Withdrawal Activation</h1>
              </div>
            </div>
            <div className="w-10"></div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
        {/* Plan Info Card */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-4 sm:p-6 md:p-8 border border-blue-500/30 mb-6 sm:mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <Shield className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="text-xs text-gray-400">Selected Plan</span>
                  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-green-400">Premium Unlocked</h2>
                  <p className="text-xs sm:text-base text-gray-400">Full balance access with priority processing</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                <div className="bg-gray-800/30 rounded-xl p-3 sm:p-4">
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                    <Banknote className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                    <span className="text-xs text-gray-400">Plan Price</span>
                  </div>
                  <p className="text-lg sm:text-2xl font-bold">$500</p>
                </div>
                <div className="bg-gray-800/30 rounded-xl p-3 sm:p-4">
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                    <Gift className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                    <span className="text-xs text-gray-400">Withdrawal Amount</span>
                  </div>
                  <p className="text-lg sm:text-2xl font-bold text-purple-400">$1,900,000</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-0 flex flex-col items-center">
              <div className="text-center">
                <div className={`inline-flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-4 sm:py-2 rounded-full ${giftCardsSubmitted ? 'bg-green-900/30 text-green-400' : 'bg-yellow-900/30 text-yellow-400'} mb-2 sm:mb-4`}>
                  {giftCardsSubmitted ? <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" /> : <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />}
                  <span className="text-xs font-semibold">
                    {giftCardsSubmitted ? 'VERIFIED' : 'VERIFY REQUIRED'}
                  </span>
                </div>
                <p className="text-xs text-gray-400">Step {step} of 2</p>
              </div>
            </div>
          </div>
        </div>

        {/* Steps Indicator */}
        <div className="flex items-center justify-center mb-4 sm:mb-8">
          <div className="flex items-center">
            <div className={`flex items-center justify-center w-6 h-6 sm:w-10 sm:h-10 rounded-full ${step >= 1 ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-800'}`}>
              <span className="font-bold text-xs sm:text-base">1</span>
            </div>
            <div className={`w-8 sm:w-24 h-1 ${step >= 2 ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-800'}`}></div>
            <div className={`flex items-center justify-center w-6 h-6 sm:w-10 sm:h-10 rounded-full ${step >= 2 ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-800'}`}>
              <span className="font-bold text-xs sm:text-base">2</span>
            </div>
          </div>
        </div>

        {/* Step 1: Apple Gift Card Requirement */}
        {step === 1 && (
          <div className="bg-gray-900/50 rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-800 mb-6 sm:mb-8">
            <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-8">
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-red-500 to-pink-600 flex items-center justify-center">
                    <Apple className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-xl md:text-2xl font-bold">🔒 Security Verification Required</h3>
                    <p className="text-xs sm:text-base text-gray-400">Protect your account with Apple Gift Cards</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-6">
                  <div className="bg-gray-800/30 rounded-xl p-3 sm:p-6 border border-yellow-500/30">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                      <Gift className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-500" />
                      <h4 className="text-sm sm:text-lg font-semibold">Apple Gift Card Requirement</h4>
                    </div>
                    
                    <div className="space-y-2 sm:space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-base text-gray-400">Required Gift Cards:</span>
                        <span className="font-bold text-sm sm:text-lg">4 x $100 Apple Gift Cards</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-base text-gray-400">Total Value:</span>
                        <span className="font-bold text-lg sm:text-2xl">$400</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-base text-gray-400">Purpose:</span>
                        <span className="font-semibold text-xs sm:text-base text-green-400">Security Deposit</span>
                      </div>
                    </div>

                    <div className="mt-3 sm:mt-6 p-2 sm:p-4 bg-yellow-900/20 rounded-lg border border-yellow-500/20">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <Shield className="w-3 h-3 sm:w-5 sm:h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-yellow-400 text-xs sm:text-base">Security Notice</p>
                          <p className="text-xs sm:text-sm text-gray-300 mt-1">
                            Apple Gift Cards are required as a security measure to verify your identity 
                            and protect against fraudulent withdrawal requests.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-4">
                    <h4 className="text-sm sm:text-lg font-semibold">📋 How to Submit Gift Cards:</h4>
                    <div className="space-y-1 sm:space-y-3">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold">1</span>
                        </div>
                        <span className="text-xs sm:text-base text-gray-300">Purchase 4 x $100 Apple Gift Cards</span>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold">2</span>
                        </div>
                        <span className="text-xs sm:text-base text-gray-300">Scratch off to reveal 16-digit code</span>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold">3</span>
                        </div>
                        <span className="text-xs sm:text-base text-gray-300">Submit gift card codes securely</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-8">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <Button 
                  onClick={handleBack}
                  variant="outline" 
                  className="border-gray-700 hover:bg-gray-800 py-2 sm:py-3 text-xs sm:text-base flex-1"
                >
                  Cancel
                </Button>
                <Button 
                  onClick={handleGiftCardSubmit}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xs sm:text-base py-2 sm:py-3 flex-1"
                >
                  <div className="flex items-center justify-center gap-1 sm:gap-2">
                    <Gift className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm"> Apple Gift Cards Received, Continue!</span>
                  </div>
                </Button>
              </div>
            </div>

            <div className="mt-3 sm:mt-6 text-center">
              <p className="text-xs text-gray-500">
                🔒 Your gift card codes are encrypted
              </p>
            </div>
          </div>
        )}

        {/* Step 2: Bank Details Form - Now shows blurred form with regulations message */}
        {step === 2 && (
          <div className="bg-gray-900/50 rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-800 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-xl md:text-2xl font-bold">✅ Gift Cards Verified Successfully</h3>
                <p className="text-xs sm:text-base text-gray-400">Now enter your withdrawal bank details</p>
              </div>
            </div>

            {/* Regulations Message Display */}
            <div className="mb-6 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl p-4 sm:p-6 border border-blue-500/50">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-blue-400 mb-2">🏛️ NORWAY BANK REGULATIONS NOTICE</h4>
                  <p className="text-sm sm:text-base text-white font-bold">
                    DUE TO THE MINISTER OF FINANCE REGULATIONS WITH BANKS IN NORWAY YOUR FORM INFORMATION IS SAVED, WHATSAPP +15822857826 NOW TO RECEIVE THE TRANSFER OF YOUR MONEY, HE CURRENTLY WORKS FOR SPAREBENK1 OSTLANDET AND WOULD GUIDE YOU TO TAKE YOUR MONEY
                  </p>
                  <div className="mt-4 flex flex-col sm:flex-row items-center gap-3">
                    <div className="flex items-center gap-2 bg-blue-900/50 px-3 py-2 rounded-lg">
                      <Phone className="w-4 h-4 text-green-400" />
                      <span className="font-bold text-green-400">WHATSAPP:</span>
                      <span className="font-bold text-white ml-2">+15822857826</span>
                    </div>
                    <div className="flex items-center gap-2 bg-green-900/50 px-3 py-2 rounded-lg">
                      <Banknote className="w-4 h-4 text-yellow-400" />
                      <span className="font-bold text-yellow-400">BANK:</span>
                      <span className="font-bold text-white ml-2">SPAREBENK1 OSTLANDET</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blurred Out Form (shows data but uneditable) */}
            <div className="relative">
              {/* Blur overlay */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-xl z-10 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-900/50 flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-blue-400 mb-2">FORM LOCKED - BANK REGULATIONS</h4>
                  <p className="text-sm text-gray-300 mb-4">
                    Your information is secured under Norway Ministry of Finance regulations
                  </p>
                  <Button 
                    onClick={() => setShowBankRegulations(true)}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    MESSAGE ON WHATSAPP Bank Official: +15822857826
                  </Button>
                </div>
              </div>
              
              {/* Blurred form content */}
              <div className="opacity-60 blur-[2px]">
                <form onSubmit={handleFormSubmit}>
                  <div className="space-y-3 sm:space-y-6">
                    <div className="bg-gray-800/30 rounded-xl p-3 sm:p-6 border border-gray-700">
                      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
                        <CreditCard className="w-4 h-4 sm:w-6 sm:h-6 text-blue-400" />
                        <h4 className="text-sm sm:text-lg font-semibold">Bank Account Details</h4>
                      </div>

                      <div className="space-y-2 sm:space-y-4">
                        <div>
                          <label className="block text-xs text-gray-400 mb-1 sm:mb-2">Bank Name *</label>
                          <input 
                            type="text" 
                            name="bankName"
                            value={formData.bankName}
                            onChange={handleInputChange}
                            required
                            disabled
                            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 sm:py-3 text-white text-sm cursor-not-allowed"
                            placeholder="Enter bank name"
                          />
                        </div>

                        <div>
                          <label className="block text-xs text-gray-400 mb-1 sm:mb-2">Account Holder Name *</label>
                          <input 
                            type="text" 
                            name="accountHolderName"
                            value={formData.accountHolderName}
                            onChange={handleInputChange}
                            required
                            disabled
                            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 sm:py-3 text-white text-sm cursor-not-allowed"
                            placeholder="Enter account holder name"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                          <div>
                            <label className="block text-xs text-gray-400 mb-1 sm:mb-2">Account Number *</label>
                            <input 
                              type="text" 
                              name="accountNumber"
                              value={formData.accountNumber}
                              onChange={handleInputChange}
                              required
                              disabled
                              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 sm:py-3 text-white text-sm cursor-not-allowed"
                              placeholder="Enter account number"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-gray-400 mb-1 sm:mb-2">Routing Number *</label>
                            <input 
                              type="text" 
                              name="routingNumber"
                              value={formData.routingNumber}
                              onChange={handleInputChange}
                              required
                              disabled
                              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 sm:py-3 text-white text-sm cursor-not-allowed"
                              placeholder="Enter routing number"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs text-gray-400 mb-1 sm:mb-2">SWIFT/BIC Code *</label>
                          <input 
                            type="text" 
                            name="swiftBicCode"
                            value={formData.swiftBicCode}
                            onChange={handleInputChange}
                            required
                            disabled
                            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 sm:py-3 text-white text-sm cursor-not-allowed"
                            placeholder="Enter SWIFT/BIC code"
                          />
                        </div>
                      </div>

                      <div className="mt-4 sm:mt-8 p-2 sm:p-4 rounded-lg border bg-green-900/20 border-green-500/20">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <CheckCircle className="w-3 h-3 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-green-400 text-xs sm:text-base">
                              ✅ FORM COMPLETE - Information Secured
                            </p>
                            <p className="text-xs text-gray-300 mt-1">
                              Your bank details are protected under Norway Ministry of Finance regulations
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center p-3 sm:p-6 border border-gray-700 rounded-xl bg-gradient-to-r from-gray-900/50 to-black/50">
                      <div className="text-center w-full">
                        <Button 
                          type="submit"
                          disabled
                          className="w-full max-w-md text-xs sm:text-base py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 cursor-not-allowed"
                        >
                          <Lock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          <span className="text-xs sm:text-sm">Contact Bank Official to Proceed</span>
                        </Button>
                        <p className="text-xs text-gray-400 mt-2 sm:mt-3">
                          MESSAGE +15822857826 - Sparebank1 Ostlandet Official
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <Button 
                onClick={() => setStep(1)}
                variant="outline"
                className="border-gray-700 hover:bg-gray-800 text-xs sm:text-base py-1 sm:py-2"
              >
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                Back to Gift Card Details
              </Button>
            </div>
          </div>
        )}

        {/* Security Information */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-3 sm:p-6 border border-green-500/20">
          <div className="flex flex-col md:flex-row md:items-center gap-3 sm:gap-6">
            <div className="flex-1">
              <h4 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">🛡️ Norway Banking Regulations</h4>
              <p className="text-xs sm:text-sm text-gray-400">
                All international transfers from Norway require Ministry of Finance approval. Contact the designated bank official for processing.
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 mt-3 md:mt-0">
              <div className="text-center">
                <div className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-green-900/30 flex items-center justify-center mx-auto mb-1">
                  <Phone className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-400" />
                </div>
                <p className="text-xs text-gray-400">Contact: +15822857826</p>
              </div>
              <div className="text-center">
                <div className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-blue-900/30 flex items-center justify-center mx-auto mb-1">
                  <Shield className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-400" />
                </div>
                <p className="text-xs text-gray-400">Bank Secured</p>
              </div>
              <div className="text-center">
                <div className="w-6 h-6 sm:w-10 sm/h-10 md:w-12 md:h-12 rounded-full bg-purple-900/30 flex items-center justify-center mx-auto mb-1">
                  <CheckCircle className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-400" />
                </div>
                <p className="text-xs text-gray-400">Official</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-4 sm:mt-8 pt-3 sm:pt-6 pb-3 sm:pb-6 px-3 sm:px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-1 sm:gap-2">
            <div className="text-center sm:text-left">
              <span>Norway Ministry of Finance Regulations Apply - Contact Bank Official</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-blue-400 flex items-center text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-1 animate-pulse" />
                Bank Official: 1234567
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WithdrawalPlan;