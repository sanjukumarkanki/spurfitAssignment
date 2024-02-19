import React from "react";

const Footer = () => {
  return (
    <footer className="mt-4 border-gray-300  py-12 px-12 border-t">
      <p className="text-xl font-bold text-violet-700 flex justify-center">
        <img width={60} height={60} alt="" src="https://github.com/Stutimaha/Ahead-App-Redesign/blob/main/public/ahead-logo.png?raw=true" />
      </p>
      <p className="mb-5 text-xl font-bold text-violet-700 text-center">ahead</p>
      <div className="flex gap-8 items-center justify-center mt-5 font-semibold">
        <div className="flex items-center space-x-2">
          <div className="bg-green-100 p-2 rounded-full">
            <img width={15} height={20} alt="" src="https://raw.githubusercontent.com/Stutimaha/Ahead-App-Redesign/5a6aeb7fc3cfb7ff84ef0c5992ab9746312307e2/public/location-svg.svg" />
          </div>
          <div>AugustraBe 26, 10117 Berlin</div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-green-100 p-2 rounded-full">
            <img width={15} height={20} alt="" src="https://raw.githubusercontent.com/Stutimaha/Ahead-App-Redesign/5a6aeb7fc3cfb7ff84ef0c5992ab9746312307e2/public/mail-svg.svg" />
          </div>
          <div>hi@ahead-app.com</div>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src="https://raw.githubusercontent.com/Stutimaha/Ahead-App-Redesign/5a6aeb7fc3cfb7ff84ef0c5992ab9746312307e2/public/appleStoreIcon.svg"
          alt="download applestore"
          width={150}
          height={150}
        />
      </div>
      <div className="text-center text-sm text-gray-500">
        &copy; 2022 Ahead app. All right reserved
      </div>
    </footer>
  );
};

export default Footer;