/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { CCard, CCardBody, CForm, CFormInput, CFormSelect, CButton } from '@coreui/react'
import axios from 'axios'

export default function PengaduanMahasiswa() {
  const [aduanOptions, setAduanOptions] = useState([])
  const [selectedAduan, setSelectedAduan] = useState('')
  const [namaMahasiswa, setNamaMahasiswa] = useState('')
  const [keterangan, setKeterangan] = useState('')

  useEffect(() => {
    fetchAduan()
  }, [])

  const fetchAduan = () => {
    axios
      .get('http://localhost:8000/api/aduans')
      .then((response) => {
        setAduanOptions(response.data.data.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }

  const handleSubmit = () => {
    const data = {
      nama_mahasiswa: namaMahasiswa,
      jenis_aduan: selectedAduan,
      keterangan: keterangan,
    }

    axios
      .post('http://localhost:8000/api/keluhans', data)
      .then((response) => {
        console.log('Data berhasil dikirim:', response.data)
        setNamaMahasiswa('')
        setSelectedAduan('')
        setKeterangan('')
      })
      .catch((error) => {
        console.error('Error saat mengirim data:', error)
      })
  }

  return (
    <div>
      <CCard>
        <CCardBody>
          <CForm>
            <CFormInput
              type="text"
              id="nama_mahasiswa"
              label="Nama Mahasiswa :"
              placeholder="Nama Mahasiswa"
              value={namaMahasiswa}
              onChange={(e) => setNamaMahasiswa(e.target.value)}
            />
            <CFormSelect
              id="jenis_aduan"
              label="Jenis Aduan :"
              value={selectedAduan}
              onChange={(e) => setSelectedAduan(e.target.value)}
            >
              <option value="">Pilih Jenis Aduan</option>
              {aduanOptions.map((aduan) => (
                <option key={aduan.id} value={aduan.jenis_aduan}>
                  {aduan.jenis_aduan}
                </option>
              ))}
            </CFormSelect>
            <CFormInput
              type="text"
              id="keterangan"
              label="Keterangan :"
              placeholder="Keterangan"
              value={keterangan}
              onChange={(e) => setKeterangan(e.target.value)}
            />{' '}
            <br />
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <CButton color="primary" onClick={handleSubmit}>
                Kirim
              </CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
    </div>
  )
}
