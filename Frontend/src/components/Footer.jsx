import React from "react";
import { Scale } from "lucide-react"; 
function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">

      
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">


          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scale className="text-[#1f3352]" />
              <h2 className="text-xl font-semibold text-[#1f3352]">
                Legalio
              </h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Connecting Patna's citizens with trusted legal professionals.
              Justice simplified.
            </p>
          </div>

        
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#1f3352]">
              Practice Areas
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#1f3352] cursor-pointer">Civil Law</li>
              <li className="hover:text-[#1f3352] cursor-pointer">Criminal Defense</li>
              <li className="hover:text-[#1f3352] cursor-pointer">Family Law</li>
              <li className="hover:text-[#1f3352] cursor-pointer">Corporate Law</li>
            </ul>
          </div>

     
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#1f3352]">
              For Lawyers
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#1f3352] cursor-pointer">Join Directory</li>
              <li className="hover:text-[#1f3352] cursor-pointer">Success Stories</li>
              <li className="hover:text-[#1f3352] cursor-pointer">Resource Center</li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#1f3352]">
              Contact
            </h3>
            <p className="text-sm mb-2">support@legalio.in</p>
            <p className="text-sm">Patna High Court Area, Bihar</p>
          </div>

        </div>


        <div className="border-t border-gray-300 mt-12 pt-6 text-center text-sm text-gray-500">
          © 2026 Legalio. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
