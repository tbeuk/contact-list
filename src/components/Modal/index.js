import React from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'

import styles from './modal.module.css'

export default function Modal({ open, onClose, onConfirm }) {
  const handleCloseModal = (event) => {
    event.stopPropagation()
    onClose()
  }

  const handleConfirmModal = (event) => {
    event.stopPropagation()
    onConfirm()
  }

  if (!open) return null

  return ReactDom.createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.modalTitle}>Delete</div>
        <div className={styles.modalContent}>
          <p className={styles.message}>
            Are you sure you want to delete this contact?
          </p>
          <div className={styles.modalButtons}>
            <button
              className={`${styles.button} ${styles.grayButton}`}
              onClick={handleCloseModal}
            >
              Cancel
            </button>
            <button
              className={`${styles.button} ${styles.greenButton}`}
              onClick={handleConfirmModal}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

Modal.defaultProps = {
  open: false,
  onClose: () => {},
  onSubmit: () => {},
}

Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
}

export { Modal }
