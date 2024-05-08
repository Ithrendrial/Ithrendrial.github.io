import React from 'react'
import { useNavigate} from 'react-router-dom';

function SecondPage() {
    const navigate = useNavigate();

    return (
        <>
        <div>
            Hello again.
        </div>
        <button onClick={() => navigate('/')}>Go to home page</button>
      </>
    );
  }
  
  export default SecondPage;