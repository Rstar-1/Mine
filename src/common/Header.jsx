import React from "react";

const Header = () => {
  return (
    <div className="mt-8 bg-tertiary">
      <div className="bg-white rounded-5 b-shadow w-full">
        <div className="flex items-center justify-between py-9 px-12">
          <div className="flex items-center gap-8">
            <img
              src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/1.png"
              alt="header-img"
              className="common-img rounded-full flex"
            />
            <div>
              <h2 className="mid-text text-primary">Dashboard</h2>
              <p className="mini-text text-gray">Admin</p>
            </div>
          </div>
          <button className="border-0 cursor-pointer rounded-5 px-14 py-6 bg-danger flex items-center gap-4 text-white">
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="flex"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            <span className="small-text">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
