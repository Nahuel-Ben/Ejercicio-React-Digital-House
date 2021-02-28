import {React} from 'react';
import Estadistics from './Estadistics';

function Fluid () {
    return (
        <div>
			<div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
			</div>
			<div className="row">
                <Estadistics color="card border-left-primary shadow h-100 py-2" titulo="Products in database" cifra="135" Icon className="fas fa-clipboard-list fa-2x text-gray-300"/>
                <Estadistics color="card border-left-success shadow h-100 py-2" titulo="Amounts in products" cifra="$546.456" Icon className="fas fa-dollar-sign fa-2x text-gray-300"/>
                <Estadistics color="card border-left-warning shadow h-100 py-2" titulo="Users quantity" cifra="38" Icon className="fas fa-user-check fa-2x text-gray-300" />

		    </div>
	    </div>
    )
}

export default Fluid;