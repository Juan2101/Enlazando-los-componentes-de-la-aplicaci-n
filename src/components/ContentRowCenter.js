import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import { Route, Routes } from "react-router-dom";

function ContentRowCenter() {
    return (
        <div className="row">

            <Routes>    
                <Route exact path="/lastMovie" element={<LastMovieInDb/>} />
                <Route exact path="/genres" element={<GenresInDb/>} />
            </Routes>

        </div>
    )
}

export default ContentRowCenter;