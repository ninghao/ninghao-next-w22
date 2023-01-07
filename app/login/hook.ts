import { useContext, useState } from 'react';
import { apiHttpClient } from '../service';
import { AuthContext } from './provider';

export const useAuth = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { setCurrentUser } = useContext(AuthContext);

  const login = async () => {
    if (name && password) {
      const response = await apiHttpClient('login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });

      const data = await response.json();

      if (response.status === 200) {
        setCurrentUser!(data);
      }
    }
  };

  return { name, setName, password, setPassword, login };
};
