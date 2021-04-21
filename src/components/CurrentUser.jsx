import React from 'react';

import moment from 'moment';

const CurrentUser = ({ displayName, photoURL, email, createdAt, children }) => {
  return (
    <section>
      <div>
        {photoURL && <img src={photoURL} alt={displayName} />}
        <div>
          <h2>{displayName}</h2>
          <p>{email}</p>
          <p>{moment(createdAt).calendar()}</p>
        </div>
      </div>
      <div>
        <div>{children}</div>
        <button>Sign Out</button>
      </div>
    </section>
  );
};

CurrentUser.defaultProps = {
  displayName: 'Bill Murray',
  email: 'billmurray@mailinator.com',
  photoURL: 'https://www.fillmurray.com/300/300',
  createdAt: new Date(),
};

export default CurrentUser;
