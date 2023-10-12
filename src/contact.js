import React from 'react';

const ContactPage = ({college,vesId}) => {
  return (
    <div>
      <p>
        My College:{college}<br/>
        You can contact me at: {vesId}
      </p>
    </div>
  );
};

export default ContactPage;
