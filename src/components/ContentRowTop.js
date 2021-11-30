import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowMovies from './ContentRowMovies';
import Chart from './Chart';
import NotFound from "./NotFound";
import { Route, Routes } from "react-router-dom";

function ContentRowTop() {
	return (
		<React.Fragment>
			{/*<!-- Content Row Top -->*/}
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
				</div>

				{/*<!-- Content Row Movies-->*/}

				<Routes>
					<Route exact path="/metric" element={<ContentRowMovies />} />
					<Route exact path="/movies" element={<Chart />} />
				</Routes>

				<Routes>
					<Route exact path="/" />
					<Route exact path="/metric" />
					<Route exact path="/movies" />
					<Route exact path="/lastMovie" />
					<Route exact path="/genres" />
					<Route path="*" element={<NotFound />} />
				</Routes>

				<ContentRowCenter />

				{/* 					<Routes>
						<Route exact path="/movies" component={Chart} />
					</Routes>
	 */}
			</div>
			{/*<!--End Content Row Top-->*/}

		</React.Fragment>
	)

}
export default ContentRowTop;