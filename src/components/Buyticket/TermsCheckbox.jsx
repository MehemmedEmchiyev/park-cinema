import React, { useState } from 'react';

function TransparentCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <label className="flex items-center text-start w-full space-x-2 py-10 text-white">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className="appearance-none  w-5 h-5 border-2 border-white rounded-sm bg-transparent checked:bg-white checked:border-white focus:outline-none focus:ring-0"
      />
      <span className='text-[17px] cursor-pointer'>Mən <span className='underline'>Qaydaları və Şərtləri </span>oxudum və razıyam</span>
    </label>
  );
}

export default TransparentCheckbox;
