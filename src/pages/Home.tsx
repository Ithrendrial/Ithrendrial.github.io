import React from 'react'
import { useNavigate} from 'react-router-dom';

function Homepage() {
    const navigate = useNavigate();

    return (
        <>
        <div>
            Hello there.
        </div>
        <button onClick={() => navigate('/secondpage')}>Go to second page</button>
      </>
    );
  }
  
  export default Homepage;