import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <div className="footer-container">
      <MDBFooter bgColor='dark'  className='text-center text-lg-start text-muted' >
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block footer-font'>
            <span>Get connected with us on social networks:</span>
          </div>
  
          <div>
            <a href='#' className='me-4 text-reset'>
              <SocialIcon url="https://www.facebook.com/" />
            </a>
            <a href='#' className='me-4 text-reset'>
              <SocialIcon url="https://twitter.com/" />
            </a>
            <a href='#' className='me-4 text-reset'>
              <SocialIcon url="https://www.google.com/search?q=" />
            </a>
            <a href='#' className='me-4 text-reset'>
               <SocialIcon url="https://www.instagram.com/" />
            </a>
            <a href='#' className='me-4 text-reset'>
               <SocialIcon url="https://www.linkedin.com/" />
            </a>
            <a href='#' className='me-4 text-reset'>
               <SocialIcon url="https://github.com/" />
            </a>
          </div>
        </section>
  
        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4 footer-font'>
                  <MDBIcon icon="gem" className="me-3 "/>
                   Cuisine Wizard
                </h6>
                <p>
                 Discover American culinary culture with recipes, chefs, restaurants, and cooking classes.
                </p>
              </MDBCol>
  
              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4 footer-font'>Service</h6>
                <p>
                  <a href='#' className='text-reset text-light'>
                    Catering
                  </a>
                </p>
                <p>
                  <a href='#' className='text-reset text-light'>
                    Dine-in
                  </a>
                </p>
                <p>
                  <a href='#' className='text-reset text-light'>
                    Sitemaping
                  </a>
                </p>
                <p>
                  <a href='#' className='text-reset text-light'>
                    Logistics
                  </a>
                </p>
              </MDBCol>
  
              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 '>
                <h6 className='text-uppercase fw-bold mb-4 footer-font'>Useful links</h6>
                <p>
                  <a href='#' className='text-reset text-light'>
                    Pricing
                  </a>
                </p>
                <p>
                  <a href='#' className='text-reset text-light'>
                    Catalog
                  </a>
                </p>
                <p>
                  <a href='#' className='text-reset text-light'>
                    Orders
                  </a>
                </p>
                <p>
                  <a href='#' className='text-reset text-light'>
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
          © 2023 Copyright:
            Cuisine Wizard
          
        </div>
      </MDBFooter>
    </div>
     )
}