import { useState } from 'react';
import { CNavbar, CNavbarBrand, CNavbarToggler, COffcanvas, COffcanvasHeader, COffcanvasTitle, CCloseButton, COffcanvasBody, CNavbarNav, CNavItem, CNavLink, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CDropdownDivider, CContainer } from '@coreui/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
    const [visible, setVisible] = useState(false)
    return (
    <CNavbar className="bg-body-tertiary" expand="sm">
        <CContainer fluid>
        <CNavbarBrand><h4>Iris Yang</h4></CNavbarBrand>

        <CNavbarToggler
            aria-controls="offcanvasNavbar2"
            aria-label="Toggle navigation"
            onClick={() => setVisible(!visible)}
        />

        <COffcanvas id="offcanvasNavbar2" placement="end" portal={false} visible={visible} onHide={() => setVisible(false)}>
            <COffcanvasHeader>
                <COffcanvasTitle>
                        IrisYang
                </COffcanvasTitle>
                <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
            </COffcanvasHeader>
            <COffcanvasBody>

            <CNavbarNav>
                <CNavItem>
                    <CNavLink href="/" active>
                        About Me
                    </CNavLink>
                </CNavItem>
                <CNavItem>
                    <CNavLink href="/resume">Resume</CNavLink>
                </CNavItem>
                <CDropdown variant="nav-item" popper={false}>
                    <CDropdownToggle color="secondary">Projects</CDropdownToggle>
                    <CDropdownMenu>
                        <CDropdownItem href="#">Action</CDropdownItem>
                        <CDropdownItem href="#">Another action</CDropdownItem>
                        <CDropdownDivider />
                        <CDropdownItem href="#">Something else here</CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>
                
            </CNavbarNav>
            
            </COffcanvasBody>
        </COffcanvas>
        </CContainer>
    </CNavbar>
    )

}

export default Navbar;