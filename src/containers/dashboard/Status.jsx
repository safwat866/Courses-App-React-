import React from "react";

const Status = () => {
  return (
    <div>
      <div className="flex gap-4 flex-wrap">
        <div className="p-5 text-white rounded-l-lg bg-black flex-1 min-w-[250px] status-box relative overflow-hidden border border-white">
          <h3 className="font-bold text-lg mb-2">
            Your courses views last month:
          </h3>
          <span className="font-bold text-2xl">65k view</span>
        </div>
        <div className="p-5 text-white rounded-l-lg bg-black flex-1 min-w-[250px] status-box relative overflow-hidden border border-white">
          <h3 className="font-bold text-lg mb-2">Your courses Count</h3>
          <span className="font-bold text-2xl">13 Course</span>
        </div>
        <div className="p-5 text-white rounded-l-lg bg-black flex-1 min-w-[250px] status-box relative overflow-hidden border border-white">
          <h3 className="font-bold text-lg mb-2">
            Courses have been purchased
          </h3>
          <span className="font-bold text-2xl">100k times</span>
        </div>
      </div>
    </div>
  );
};

export default Status;
