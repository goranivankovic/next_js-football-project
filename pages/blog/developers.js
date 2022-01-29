import Navic from '../../components/Navic'
import {Container,Row,Col,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'

import footerStyles from '../../styles/Footer.module.css'
import Footer from '../../components/Footer';



export default function developers(props) {
    return (
        <div>
            <Navic />
            <br></br>
            <Container>
                <Row>
                    <Col xs={12} className="h4">
                    For Developers
                    </Col>
                    <Col>
                    <br></br>
                    Your free Api
                    <br></br>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col xs={12} className="text-center h4  text-danger">
                    Introduction


                    
                    
                    </Col>

                    <Col xs={12} className="text-center">
                        <br></br>
                     
                    You can use our API to access all API endpoints, which can get information about Football.


We have language bindings in C, Java, Javascript, NodeJs, Php, PowerShell, Python, Ruby, Shell! You can view code examples in the light area to the right, and you can look the examples.

                        <br></br>
                      
                    </Col>
                    <Col xs={12}> <br></br> </Col>
                    <Col className="text-center text-primary h3" xs={12}> EXAMPLE ONE
                    
            <br></br>
          

                    </Col>
                    <Col style={{height:'30vh'}}  md={6} className="text-start">
                    <br></br>
                        
                      
                        <span className="h6">Exemple GET a single player by ranking</span>

                        <div className="h6">Exemple URL: <span className="text-primary"> https://next-js-football-project.vercel.app/api/players/p1</span></div>
                        <span className="h6">Exemple gets number 1 ranking</span>
                        <span className="h6">Range between 1 - 10</span>

                    
                    </Col>
                    <Col style={{height:'50vh',overflow:"scroll"}}  md={6} className="border">
                        
                    <br></br>
                    
                       
                     {JSON.stringify(props.data[0])}

                    
                    
                    </Col>


                </Row>
            </Container>

            <br></br>
    


            
          
            <Container>
                    <Row>



                    <Col className="text-center text-primary h3" xs={12}>
                         EXAMPLE TWO
                         
            <br></br>
        

                         
                         </Col>



                    <Col style={{height:'50vh',overflow:"scroll"}}  md={6} className="border">
                        
                     
                         
                           
                         {JSON.stringify(props.data[0])}
                         {JSON.stringify(props.data[1])}
                         {JSON.stringify(props.data[2])}
                         {JSON.stringify(props.data[3])}
                         {JSON.stringify(props.data[4])}
    
                        
                        
                        </Col>
                    <Col style={{height:'30vh'}}  md={6} className="text-end">
                    <br></br>
                      
                      
                        <span className="h6">Exemple GET top 5 players</span><br></br>

                        <div className="h6">Exemple URL: <span className="text-primary"> https://next-js-football-project.vercel.app/api/players/top5</span></div><br></br><br></br>
                       
                    
                    </Col>
                  


                </Row>
            </Container>


            
     
           


            
          
            <Container>
                    <Row>
                        <Col xs={12}> <br></br> </Col>



                    <Col className="text-center text-primary h3" xs={12}>
                    EXAMPLE THREE
                         
        

                         
                         </Col>



                  
                    <Col style={{height:'30vh'}}  md={6} className="text-start">
                    <br></br>
                       
                      
                        <span className="h6">Exemple GET top 10 players</span><br></br>

                        <div className="h6">Exemple URL: <span className="text-primary"> https://next-js-football-project.vercel.app/api/players/top10</span></div><br></br><br></br>
                       
                    
                    </Col>
                    <Col style={{height:'50vh',overflow:"scroll"}}  md={6} className="border">
                        
                        <br></br>
                           
                           
                         {JSON.stringify(props.data)}
     
    
                        
                        
                        </Col>
                  


                </Row>
            </Container>

            <br></br>

            <Footer />
   


            
        </div>
    )
}



export async function getServerSideProps(context) {
    const res = await  fetch(`https://next-js-football-project.vercel.app/api/players/top10`)
    const data = await res.json()
  
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { data }, // will be passed to the page component as props
    }
  }

