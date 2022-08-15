import React, {useEffect} from "react";
import ErrorImage from "../../assets/404.jpg";

const Error = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, []);

  return (
    <>
      <div className="container py-12 px-2">
        <div className="flex items-center flex-col md:flex-row">
          <div className="flex-1">
            <h2 className="text-3xl mb-8">
              We are sorry we can't find this page!😢
            </h2>
            <span className="text-lg">you can try this:</span>
            <ul className="list-disc ml-9 mt-4 text-gray-600">
              <li>check the url!</li>
              <li>contact us to fix this problem.</li>
              <li>wait until we fix this problem!</li>
            </ul>
          </div>
          <div className="flex-1">
            <img src={ErrorImage} alt="error 404" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
