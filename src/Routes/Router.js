import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Joke from '../Pages/Joke';

export const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/joke/:id&:colorIdx" element={<Joke />} />
    </Routes>
  );
};
