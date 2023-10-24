import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilSpeedometer, cilFile, cilChatBubble, cilUser, cibCodesandbox } from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'MAIN MENU',
  },
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Pengaduan',
    to: '/pengaduan',
    icon: <CIcon icon={cilChatBubble} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Laporan',
  },
  {
    component: CNavItem,
    name: 'Laporan',
    to: '/laporan',
    icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'MASTER DATA',
  },
  {
    component: CNavItem,
    name: 'Data Mahasiswa',
    to: '/datamahasiswa',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Data Staff',
    to: '/datastaff',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Jenis Aduan',
    to: '/jenisaduan',
    icon: <CIcon icon={cibCodesandbox} customClassName="nav-icon" />,
  },
]

export default _nav
