/* eslint-disable */
import React from 'react'
import { CCard, CCardBody, CTable, CBadge, CButton } from '@coreui/react'

export default function Pengaduan() {

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
      key: 'jenis_aduan',
      label: 'Jenis Aduan',
      _props: { scope: 'col' },
    },
    {
      key: 'status',
      label: 'Status',
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
      nama_mahasiswa: 'Mark Zuckeberg',
      jenis_aduan: 'Keuangan',
      status: <CBadge color="warning">Pending</CBadge>,
      action: <div><CButton size='sm' color='primary'>Detail</CButton> | <CButton size='sm' color='danger'>Delete</CButton></div>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 2,
      nama_mahasiswa: 'Bill Gates',
      jenis_aduan: 'Sarana Prasarana',
      status: <CBadge color="success">Selesai</CBadge>,
      action: <div><CButton size='sm' color='primary'>Detail</CButton> | <CButton size='sm' color='danger'>Delete</CButton></div>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 3,
      nama_mahasiswa: 'Elon Musk',
      jenis_aduan: 'Keuangan',
      status: <CBadge color="danger">Ditolak</CBadge>,
      action: <div><CButton size='sm' color='primary'>Detail</CButton> | <CButton size='sm' color='danger'>Delete</CButton></div>,
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
