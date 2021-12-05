import React, { Component } from 'react'
import {Navbar,NavDropdown,Button,Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'
import footerStyles from '../styles/Footer.module.css'




export default class Footer extends Component {
    render() {
        return (
            <div className={footerStyles.main_div}>
             <Container>
                 <Row>
                     <Col className="text-light text-center" xs={12}> <Link href="https://gogadesign.uk"><span style={{color:"white"}}>ALL RIGHTS RESERVED</span></Link> || <Link href="https://gogadesign.uk"><span style={{color:"white"}}> gogaDesign</span></Link>
                     
                     </Col>
                     <Col className="text-light text-center" xs={12}>
                       <br></br>
                       goranivankovic87@gmail.com
                     
                     </Col>
                 
                 </Row>
             </Container>

                
            </div>
        )
    }
}
