import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <div className="footer-container">
      <MDBFooter bgColor='dark'  className='text-center text-lg-start text-muted' >
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block footer-font'>
            <span>Get connected with us on social networks:</span>
          </div>
  
          <div>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="twitter" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="google" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="instagram" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>
  
        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4 footer-font'>
                  <MDBIcon icon="gem" className="me-3 "/>
                  Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
                </p>
              </MDBCol>
  
              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4 footer-font'>Products</h6>
                <p>
                  <a href='#!' className='text-reset text-light'>
                    Angular
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset text-light'>
                    React
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset text-light'>
                    Vue
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset text-light'>
                    Laravel
                  </a>
                </p>
              </MDBCol>
  
              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 '>
                <h6 className='text-uppercase fw-bold mb-4 footer-font'>Useful links</h6>
                <p>
                  <a href='#!' className='text-reset text-light'>
                    Pricing
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset text-light'>
                    Settings
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset text-light'>
                    Orders
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset text-light'>
                    Help
                  </a>
                </p>
              </MDBCol>
  
              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4 footer-font'>Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2 text-light" />
                  New York, NY 10012, US
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3 text-light" />
                  info@example.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3 text-light" /> + 01 234 567 88
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3 text-light" /> + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
  
        <div className='text-center p-4 footer-font' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2021 Copyright:
            MDBootstrap.com
          
        </div>
      </MDBFooter>
    </div>
     )
}