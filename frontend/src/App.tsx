import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [message, setMessage] = useState();
  useEffect(() => {
    axios.get(import.meta.env.VITE_BACKEND_URL + 'hello').then((res) => {
      setMessage(res.data.message);
    });
  }, []);
  return <div>Niyam AI - {message}</div>;
};

export default App;
