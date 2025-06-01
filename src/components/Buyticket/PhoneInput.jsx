import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function AzePhoneInput() {
  const [value, setValue] = useState('');

  return (
    <form className="w-full">
      <div className="bg-transparent w-full text-white border-b border-white flex items-center gap-2 px-2 py-3">
        <span className="font-semibold text-white whitespace-nowrap">+994</span>

        <div className="flex-1">
          <PhoneInput
            
            country={'az'}
            onlyCountries={['az']}
            disableDropdown
            disableCountryCode={true}
            value={value}
            onChange={setValue}
            placeholder="(51) 511 11 11"
            inputClass="!bg-transparent !text-gray-300 !border-none !outline-none !shadow-none !w-full !p-0 placeholder:text-gray-400 placeholder:font-normal"
            buttonClass="hidden"
            containerClass="!w-full"
            inputProps={{
              required: true,
              name: 'phone',
            }}
          />
        </div>
      </div>
    </form>
  );
}

export default AzePhoneInput;
