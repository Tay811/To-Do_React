import React from 'react';

const PostAddForm = () => {
    return(
        <form className="bottom-panel d-flex">
            <input
            type="text"
            placeholder="New"
            className="form-control new-post-label"
            />
            <buttom
            type="submit"
            className="btn btn-outline-secondary">
                Add
            </buttom>
        </form>
    )
}

export default PostAddForm;