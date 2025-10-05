import React from 'react'

const Header = () => {
  return (
    <div className="px-14 h-head b-shadow bg-white flex items-center">
      <div className="flex items-center justify-between w-full">
        <h2 className="title-text text-gray">Dashboard</h2>
        <p className="para-text text-gray">Logout</p>
      </div>
    </div>
  );
}

export default Header
