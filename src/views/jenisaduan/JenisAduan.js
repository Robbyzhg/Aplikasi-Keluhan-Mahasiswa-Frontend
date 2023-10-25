/* eslint-disable */
import React from 'react'
import { CCard, CCardBody, CTable, CButton } from '@coreui/react'

export default function JenisAduan() {

  const columns = [
    {
      key: 'id',
      label: '#',
      _props: { scope: 'col' },
    },
    {
      key: 'jenis_aduan',
      label: 'Jenis Aduan',
      _props: { scope: 'col' },
    },
    {
      key: 'action',
      label: 'Action',
      _props: { scope: 'col' },
    },
  ]
  const items = [
    {
      id: 1,
      jenis_aduan: 'Keuangan',
      action: <div><CButton size='sm' color='warning'>Edit</CButton> | <CButton size='sm' color='danger'>Delete</CButton></div>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 2,
      jenis_aduan: 'Sarana Prasarana',
      action: <div><CButton size='sm' color='warning'>Edit</CButton> | <CButton size='sm' color='danger'>Delete</CButton></div>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 3,
      jenis_aduan: 'Keuangan',
      action: <div><CButton size='sm' color='warning'>Edit</CButton> | <CButton size='sm' color='danger'>Delete</CButton></div>,
      _cellProps: { id: { scope: 'row' } },
    },
  ]
  
  return (
    <CCard>
      <CCardBody>
        <CTable striped columns={columns} items={items} />
      </CCardBody>
    </CCard>
  )
}
