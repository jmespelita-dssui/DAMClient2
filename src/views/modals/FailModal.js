import {
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
  } from '@coreui/react'

const FailModal = ({ visible, popupMsg, onClose }) => {

  return (
    <CModal size="sm" visible={visible} onClose={onClose}>
      <CModalHeader>
        <CModalTitle>Error</CModalTitle>
      </CModalHeader>
      <CModalBody>{popupMsg}</CModalBody>
    </CModal>
  )
}

export default FailModal
