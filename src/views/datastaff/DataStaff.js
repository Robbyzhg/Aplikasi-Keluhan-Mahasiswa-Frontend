/* eslint-disable */
import React from 'react'
import { CCard, CCardBody, CTable, CButton } from '@coreui/react'

export default function DataStaff() {
  const columns = [
    {
      key: 'id',
      label: '#',
      _props: { scope: 'col' },
    },
    {
      key: 'nama_staff',
      label: 'Nama Staff',
      _props: { scope: 'col' },
    },
    {
      key: 'divisi',
      label: 'divisi',
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
      nama_staff: 'Agus Setiawan',
      divisi: 'BAAK',
      action: (
        <div>
          <CButton size="sm" color="primary">
            Detail
          </CButton>{' '}
          |{' '}
          <CButton size="sm" color="warning">
            Edit
          </CButton>{' '}
          |{' '}
          <CButton size="sm" color="danger">
            Delete
          </CButton>
        </div>
      ),
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 2,
      nama_staff: 'Nina Ester Pangestu',
      divisi: 'Humas',
      action: (
        <div>
          <CButton size="sm" color="primary">
            Detail
          </CButton>{' '}
          |{' '}
          <CButton size="sm" color="warning">
            Edit
          </CButton>{' '}
          |{' '}
          <CButton size="sm" color="danger">
            Delete
          </CButton>
        </div>
      ),
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 3,
      nama_staff: 'Nana Roam',
      divisi: 'Library',
      action: (
        <div>
          <CButton size="sm" color="primary">
            Detail
          </CButton>{' '}
          |{' '}
          <CButton size="sm" color="warning">
            Edit
          </CButton>{' '}
          |{' '}
          <CButton size="sm" color="danger">
            Delete
          </CButton>
        </div>
      ),
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
