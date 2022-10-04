import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CButton,
  CForm,
  CCol,
  CFormInput,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'

const EditIPAddress = ({ visible, onClose, formContent, onDelete, onCloseEdit }) => {
  return (
    <CModal visible={visible} backdrop="static" onClose={onClose}>
      <CModalHeader onClose={() => setVisibleIPAddress(false)}>
        <CModalTitle>IP Address</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm className="add-user row g-3 needs-validation justify-content-center">
          <CInputGroup>
            <CFormInput
              className="form-control"
              type="text"
              name="ipAddress"
              disabled
              defaultValue={formContent.ip_address}
              maxLength={3}
              required
            />
          </CInputGroup>
          <CCol xs={12} className="modal-footer">
            <CButton color="secondary" onClick={onCloseEdit}>
              Cancel
            </CButton>
            <CButton color="primary" onClick={() => onDelete(formContent.ip_address)}>
              Delete IP Address
            </CButton>
          </CCol>
        </CForm>
      </CModalBody>
    </CModal>
  )
}

export default EditIPAddress
