import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'emerald-ui/lib/Modal';

const ActionModal = ({
    children,
    onHide,
    show,
    title
}) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
        </Modal>
    );
};

ActionModal.propTypes = {
    onHide: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    title: PropTypes.string
};

ActionModal.defaultProps = {
    title: 'Modal'
};

export default ActionModal;