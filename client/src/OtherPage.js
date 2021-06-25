import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      Thanks Mina I'm the other Page!
      <Link to="/">Go back home</Link>
    </div>
  );
};
