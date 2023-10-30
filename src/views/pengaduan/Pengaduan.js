/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CTable, CBadge, CButton } from '@coreui/react'
import axios from 'axios'

export default function Pengaduan() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/keluhans')
      .then((response) => {
        setDatas(response.data.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/keluhans/${id}`)
      .then(() => {
        setDatas((prevData) => prevData.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
  };

  const columns = [
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
      key: 'keterangan',
      label: 'Keterangan',
      _props: { scope: 'col' },
    },
    {
      key: 'action',
      label: 'Action',
      _props: { scope: 'col' },
    },
  ]

  const items = datas.map((item) => ({
    key: item.id,
    nama_mahasiswa: item.nama_mahasiswa,
    jenis_aduan: item.jenis_aduan,
    keterangan: item.keterangan,
    status: item.status,
    action: (
      <CButton
        size='sm'
        color="danger"
        onClick={() => handleDelete(item.id)}
      >
        Delete
      </CButton>
    ),
  }));
  
  return (
    <CCard>
      <CCardBody>
        <CTable striped columns={columns} items={items} />
      </CCardBody>
    </CCard>
  )
}
