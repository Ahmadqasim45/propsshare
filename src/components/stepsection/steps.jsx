import { useState } from "react";
import { Check, MapPin } from "lucide-react";
import workimage from '../../assets/images/steps work card image.png'; // Placeholder for the work image
export default function PropertyInvestmentApp() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="bg-transparent flex justify-center items-center  text-white  py-12">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-4">
        {/* Step 1: Create Account */}
        <div className={`relative flex-1 rounded-xl border ${currentStep === 1 ? 'border-pink-500' : 'border-gray-700'} p-6 flex flex-col`}>
          <div className="absolute top-4 right-4 bg-pink-500 text-white w-8 h-8 flex items-center justify-center rounded-full">
            1
          </div>
          
          <div className="mt-8 mb-4">
            <h2 className="uppercase font-bold mb-4">Create an Account</h2>
            <p className="text-sm text-gray-300 mb-8">
              Just create an account with your Gmail or other social account and dive into the world of real world assets directly on the Ethereum blockchain.
            </p>
          </div>
          
          <div className="mt-auto bg-gray-800 rounded-lg p-4">
            <div className="mb-2">
              <h3 className="font-medium">Sign in</h3>
              <p className="text-xs text-gray-400">Your Web3Auth wallet with one click ⚡</p>
            </div>
            
            <button className="w-full flex items-center justify-center gap-2 bg-gray-900 py-2 rounded-md border border-gray-700 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-gray-400 text-sm">Continue with Google</span>
            </button>
            
            <div className="flex gap-2 justify-center">
              <button className="flex-1 bg-gray-900 py-2 rounded-md border border-gray-700 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                  <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              
              <button className="flex-1 bg-gray-900 py-2 rounded-md border border-gray-700 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                  <path fill="currentColor" d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </button>
              
              <button className="flex-1 bg-gray-900 py-2 rounded-md border border-gray-700 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                </svg>
              </button>
            </div>
            
            <p className="text-xs text-gray-500 mt-3 text-center">
              We do not store any data related to your social logins.
            </p>
            
            <div className="mt-4 flex items-center gap-1">
              <span className="text-sm">Email or Phone</span>
              <span className="text-gray-500 text-xs rounded-full border border-gray-500 w-4 h-4 flex items-center justify-center">?</span>
            </div>
          </div>
          
          <div className="mt-4 text-right">
            <button className="text-pink-500 text-sm" onClick={() => setCurrentStep(2)}>
              View more
            </button>
          </div>
        </div>

        {/* Step 2: Buy Shares */}
        <div className={`relative flex-1 rounded-xl border ${currentStep === 2 ? 'border-teal-400' : 'border-gray-700'} p-6 flex flex-col`}>
          <div className="absolute top-4 right-4 bg-teal-400 text-white w-8 h-8 flex items-center justify-center rounded-full">
            2
          </div>
          
          <div className="mt-8 mb-4">
            <h2 className="uppercase font-bold mb-4">Buy Shares</h2>
            <p className="text-sm text-gray-300">
              Purchase how many property tokens you would like. These are held in a secure SPV.
            </p>
          </div>
          
          <div className="mt-4 relative rounded-lg overflow-hidden">
            <img 
              src={workimage}
              alt="Riverside Villa"
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-4 right-4 bg-gray-900 rounded-full w-6 h-6 flex items-center justify-center opacity-75">
              <span className="text-xs">×</span>
            </div>
            
            <div className="bg-gray-900 p-4">
              <h3 className="font-bold text-lg mb-1">Riverside Villa</h3>
              <div className="flex items-center gap-1 mb-4">
                <MapPin size={16} className="text-pink-500" />
                <span className="text-sm text-gray-300">London, UK</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-gray-400">SHARE PRICE</p>
                  <p className="font-bold text-lg">$ 107</p>
                </div>
                
                <div className="bg-gray-800 rounded-md px-3 py-1">
                  <div className="flex items-center gap-1">
                    <span className="uppercase text-xs text-gray-400">SOLD SHARES</span>
                    <span className="text-xs text-pink-500">MAX 354</span>
                  </div>
                  <div className="w-full bg-gray-700 h-1 rounded-full mt-1">
                    <div className="bg-pink-500 w-2/5 h-1 rounded-full"></div>
                  </div>
                  <div className="text-right text-xs text-pink-500">147</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-auto">
            <button 
              className="w-full bg-pink-500 text-white py-2 rounded-md font-medium"
              onClick={() => setCurrentStep(3)}
            >
              Buy Now
            </button>
          </div>
        </div>

        {/* Step 3: Success */}
        <div className={`relative flex-1 rounded-xl border ${currentStep === 3 ? 'border-blue-500' : 'border-gray-700'} p-6 flex flex-col`}>
          <div className="absolute top-4 right-4 bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded-full">
            3
          </div>
          
          <div className="mt-8 mb-8">
            <h2 className="uppercase font-bold mb-4">Success</h2>
            <p className="text-sm text-gray-300">
              Congratulations! You have made your ever first invest into a real world asset, secured by the leading blockchain Ethereum.
            </p>
          </div>
          
          <div className="flex flex-col items-center justify-center flex-grow">
            <div className="w-24 h-24 rounded-full border-4 border-teal-400 flex items-center justify-center mb-6">
              <Check size={48} className="text-teal-400" />
            </div>
            
            <h3 className="font-bold text-lg mb-2">Investment Successful!</h3>
            <p className="text-sm text-gray-300 text-center mb-8">
              You have successfully invested £5000 in Riverside Apartment.
            </p>
            
            <button className="bg-pink-500 text-white py-3 px-4 rounded-md font-medium">
              View More Properties
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}