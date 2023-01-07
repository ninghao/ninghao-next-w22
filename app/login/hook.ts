import { useState } from 'react';
import { apiHttpClient } from '../service';

export const useAuth = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

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
      console.log(data);
    }
  };

  return { name, setName, password, setPassword, login };
};
