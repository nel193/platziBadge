import React from "react"

import Modal from "./Modal"

function DeleteBadgeModal(props){
    return (<Modal
            isOpen={props.isOpen}
            onClose={props.onClose}
            >
                <div className="DeleteBadgeModal">
                    <h1>
                        Are You Sure?
                    </h1>
                    <p>You are about to delete this badge.</p>
                    <div>
                        <button onClick={props.onDeleteBadge} className="mx-2 btn btn-danger">Delete</button>
                        <button onClick={props.onClose} className="mx-2 btn btn-primary">Cancel</button>
                    </div>

                </div>
            </Modal>)
}

export default DeleteBadgeModal