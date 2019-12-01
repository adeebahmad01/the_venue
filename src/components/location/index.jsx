import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
        <iframe allowFullScreen src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d327.49202568965325!2d73.09257865954159!3d31.436583450381608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1575216504018!5m2!1sen!2s" width="100%" height="500px" frameBorder="0"></iframe>
      <div className="location_tag">
        <div className="">
          Location
        </div>
      </div>
    </div>
  );
};

export default Location;