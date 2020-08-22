import React from 'react';

const Buttons = ({ deleteList }) => {
    return (
        <div className="row d-flex justify-content-center mt-2 mb-4">
                <div className="col-md-3">
                    <button onClick={deleteList}>Delete All</button>
                </div>
{/*                 <div className="col-md-3">
                    <button>Save List</button>
                </div>
                <div className="col-md-3">
                    <button>Create User</button>
                </div> */}
        </div>
    )
};

export default Buttons;