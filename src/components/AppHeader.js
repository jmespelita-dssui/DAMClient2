import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
// import { logo } from 'src/assets/brand/logo'
// import { logo } from 'src/assets/brand/logo'
import logo from 'src/assets/dssui-logo.png'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <>
      <CHeader position="sticky" className="mb-4">
        <CContainer fluid>
          <CHeaderToggler
            className="ps-1"
            onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          >
            <CIcon icon={cilMenu} size="lg" />
          </CHeaderToggler>
          <CHeaderBrand className="mx-auto d-md-none" to="/">
            {/* <CIcon src={logo} height={48} alt="Logo" /> */}
          </CHeaderBrand>
          <CHeaderNav className="d-none d-md-flex me-auto">
            <CNavItem>
              <CNavLink to="/employees" component={NavLink} activeClassName="active">
                Employees
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink to="/sectors" component={NavLink} activeClassName="active">
                Sectors
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink to="/offices" component={NavLink} activeClassName="active">
                Offices
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink to="/devices" component={NavLink} activeClassName="active">
                Devices
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink to="/accessories" component={NavLink} activeClassName="active">
                Accessories
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink to="/ip-addresses" component={NavLink} activeClassName="active">
                IP Addresses
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink to="/dom-uids" component={NavLink} activeClassName="active">
                Domain UIDs
              </CNavLink>
            </CNavItem>
            {/* <CNavItem>
            <CNavLink href="#">Users</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Settings</CNavLink>
          </CNavItem> */}
          </CHeaderNav>
          {/* <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilList} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav> */}
          {/* <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav> */}
        </CContainer>
        {/* <CHeaderDivider />
        <CContainer fluid>
          <AppBreadcrumb />
        </CContainer> */}
      </CHeader>
    </>
  )
}

export default AppHeader
