import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound } from './Pages/NotFound';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<index/>}/>
            <Route path='/home' element={<home/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    )
}