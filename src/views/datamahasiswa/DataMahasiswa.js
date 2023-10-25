/* eslint-disable */
import React from 'react'
import { CCard, CCardBody, CTable, CButton } from '@coreui/react'

export default function DataMahasiswa() {
  const columns = [
    {
      key: 'id',
      label: '#',
      _props: { scope: 'col' },
    },
    {
      key: 'nama_mahasiswa',
      label: 'Nama Mahasiswa',
      _props: { scope: 'col' },
    },
    {
      key: 'jurusan',
      label: 'Jurusan',
      _props: { scope: 'col' },
    },
    {
      key: 'semester',
      label: 'Semester',
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
      nama_mahasiswa: 'Arif Broznki',
      jurusan: 'Teknologi Informasi',
      semester: '7',
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
      nama_mahasiswa: 'David Baskara',
      jurusan: 'Sistem Informasi',
      semester: '6',
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
      nama_mahasiswa: 'Siska Jumiati',
      jurusan: 'Manajemen Bisnis',
      semester: '2',
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
