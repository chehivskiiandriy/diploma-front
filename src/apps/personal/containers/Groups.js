/* eslint-disable */
import React, { useEffect } from 'react';

import api from '../../../api';
import { COOKIE_TOKEN_KEY, deleteToken } from '../../../api/token';

// todo only for test - will be deleted
const Groups = () => {
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    api.get('degree', null, { signal, query: { hoj: 'qjwkeq', 'kdaskja&93fsd': 'fsg4%6ld' }})
    // api.get('degree')
      .then(data => { console.log('data', data); })
      .catch(e => { console.dir(e); });
    // controller.abort();
  }, []);

  const create = () => {
    api.post('degree', { name: 'Lol' })
      .then(data => { console.log(data); })
      .catch(e => { console.log(e); });
    // fetch('http://localhost:3000/degree', {
    //   method: 'post',
    //   credentials: 'include',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     accept: 'application/json',
    //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG4uZG9lMTJAdGVzdC5jb20iLCJpc0FjdGl2ZSI6dHJ1ZSwiaWF0IjoxNjAxNDc5ODIwLCJleHAiOjE2MDE1NjYyMjB9.bO-1vrqPWADdr3oil25IGnm12pYvKRPCJ-s-1oqMlSM',
    //   },
    //   body: JSON.stringify({
    //     name: 'Test222',
    //     // departmentId: 1,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(data => { console.log(data); })
    //   .catch(e => { console.log(e); });
  };

  const getHandler = () => {
    api.get('degree');
  };

  const deleteHandler = () => {
    deleteToken(COOKIE_TOKEN_KEY)
  };

  return (
    <div>
      Groups
      <button onClick={create}>Create</button>
      <button onClick={getHandler}>Get</button>
      <button onClick={deleteHandler}>Delete token</button>
    </div>
  );
};

export default Groups;
