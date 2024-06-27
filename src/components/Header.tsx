"use client"
import React, { useEffect, useState } from 'react';
import pb from '@/lib/pocketbase';
import { getUserId, logout } from '@/services/pocketbase/auth';
import { CgLogOff } from 'react-icons/cg';

import './Header.css';
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const loggedIn = pb.authStore.isValid;
  const router = useRouter();

  useEffect(() => {
    const fetchUsername = async () => {
      const user = pb.authStore.model;
      if (user) {
        setUsername(user.name ?? '');
      }
    };

    fetchUsername();
  }, []); // Executa apenas uma vez ao montar o componente

  const handleLogOutButton = async () => {
    await logout();
    window.location.href = '/';
  };

  return (
    <div className="header">
      <h1 style={{ color: '#eee', display: 'inline-block' }}>Minhas Tarefas</h1>
      {(loggedIn && username) && (
        <button
          className="button"
          style={{ width: '50px' }}
          title={`Sair de ${username}`}
          onClick={handleLogOutButton}
        >
          <CgLogOff />
        </button>
      )}
    </div>
  );
};

export default Header;