import {React} from 'react';

function Category (props) {
    return (
        <div class="col-lg-6 mb-4">
		    <div class="card bg-info text-white shadow">
				<div class="card-body">
				    {props.name}
				</div>
			</div>
		</div>
    )
}

export default Category;