/* eslint-disable */
import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CTable,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
  CFormInput,
} from '@coreui/react'
import axios from 'axios'

export default function JenisAduan() {
  const [datas, setDatas] = useState([])
  const [visible, setVisible] = useState(false)
  const [jenisAduanInput, setJenisAduanInput] = useState('');

  useEffect(() => {
    fetchDatas()
  }, [])

  const fetchDatas = () => {
    axios
      .get('http://localhost:8000/api/aduans')
      .then((response) => {
        setDatas(response.data.data.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/aduans/${id}`)
      .then(() => {
        setDatas((prevData) => prevData.filter((item) => item.id !== id))
        fetchDatas()
      })
      .catch((error) => {
        console.error('Error deleting data:', error)
      })
  }

  const handleAddJenisAduan = () => {
    const newData = {
      jenis_aduan: jenisAduanInput,
    };

    axios
      .post('http://localhost:8000/api/aduans', newData)
      .then((response) => {
        setDatas((prevData) => [...prevData, response.data]);
        setVisible(false);
        setJenisAduanInput('');
        fetchDatas()
      })
      .catch((error) => {
        console.error('Error adding data:', error);
      });
  }

  const columns = [
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

  const items = datas.map((item) => ({
    key: item.id,
    jenis_aduan: item.jenis_aduan,
    action: (
      <div>
        <CButton size="sm" color="danger" onClick={() => handleDelete(item.id)}>
          Delete
        </CButton>
      </div>
    ),
  }))

  return (
    <CCard>
      <CCardBody>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <CButton size="" color="primary" onClick={() => setVisible(!visible)}>
            Tambah Jenis Aduan
          </CButton>
        </div>
        <CTable striped columns={columns} items={items} />
      </CCardBody>
      <CModal
        scrollable
        visible={visible}
        alignment="center"
        onClose={() => setVisible(false)}
      >
        <CModalHeader>
          <CModalTitle id="ScrollingLongContentExampleLabel2">Tambah Jenis Aduan</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CFormInput
              type="text"
              id="jenis_aduan"
              label="Jenis Aduan :"
              placeholder="Jenis Aduan"
              value={jenisAduanInput}
              onChange={(e) => setJenisAduanInput(e.target.value)}
            />
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton onClick={handleAddJenisAduan} color="primary">Add</CButton>
        </CModalFooter>
      </CModal>
    </CCard>
  )
}
