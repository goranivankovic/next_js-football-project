import React, { Component } from 'react'
import {Navbar,NavDropdown,Button,Container,Offcanvas,Nav,Form,FormControl,FormGroup } from 'react-bootstrap'
import Link from 'next/link'
import router from 'next/router'


export default class Navic extends Component {
    constructor(props){
        super(props)

        this.state={
            num:1,
         
        }
        this.getNumber=this.getNumber.bind(this)
        this.submitNumber=this.submitNumber.bind(this)

    }
 async   getNumber(a){

     await   this.setState({
            num:a.target.value
        })
    
      

    }

   async submitNumber(b){

       try{
           b.preventDefault()
  
         router.push(`/blog/${this.state.num}`)


       }catch(err){
           console.log(err);
       }

   
   }



    render() {
 
        return (
            <div>


<Navbar bg="dark" variant="dark" expand={false}>
  <Container fluid>
 <Navbar.Brand><Link href="/"><span style={{color:"white",cursor:"pointer"}}> Next js Blog</span></Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
    
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
        
          <NavDropdown title="Menu" className="text-danger">
    
  
    <NavDropdown.Item> <Link href="/"><span style={{color:"black"}}> Home</span></Link></NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item> <Link href="/blog/developers"><span style={{color:"black"}}>For Developors</span></Link></NavDropdown.Item>
    <NavDropdown.Divider />
          <NavDropdown.Item><Link href="/blog/1"><span style={{color:"black"}}> First Place</span></Link> </NavDropdown.Item>
            <NavDropdown.Divider />
    
            <NavDropdown.Item><Link href="/blog/2"><span style={{color:"black"}}>Second Place</span></Link></NavDropdown.Item>
            <NavDropdown.Divider /> 
         
    
           <NavDropdown.Item><Link href="/blog/3"><span style={{color:"black"}}>Third Place</span></Link> </NavDropdown.Item>
 
            <NavDropdown.Divider />

            <NavDropdown.Item><Link href="/blog/top5"><span style={{color:"black"}}> Top Five Ranking</span></Link>  </NavDropdown.Item>
            <NavDropdown.Divider />
     
            <NavDropdown.Item><Link href="/blog/top10"><span style={{color:"black"}}> Top Ten Ranking</span></Link>  </NavDropdown.Item> 
         
          </NavDropdown>
        </Nav>
        <br></br>
        <Form className="d-flex" onSubmit={this.submitNumber}>
            <FormGroup>
      
          <FormControl
            type="number"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            
            max={10}
            min={1}
            
            onChange={this.getNumber}
          />
        
          <Form.Text>Get footballer by ranking Select number betwen 1 -10</Form.Text>
       
          <br></br>
          <Form.Text></Form.Text>
          <br></br>
          <Button variant="outline-success" type="submit">Search</Button>
          </FormGroup>
        </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
                
            </div>
        )
    }
}
