
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import MyNavbar from './components/MyNavbar';
import Button1 from './components/Button1';
import Footer from './components/Footer';
import FAQSection from './components/FAQSection';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';

function App() {
  return (
    <Container  fluid>
      <Row>
        <Col>
        <MyNavbar/>
          <div className="hero-section">
          <div className="hero-content">
        <h1>We crush your competitors, goals, and sales records - without the B.S.</h1>
        <div className="button1-container">
        <Button1 />
      </div>
      </div>
     </div>

     <div className="App">
      <div className="container o">
        <div className="row align-items-center"> {/* Add align-items-center class */}
          {/* Left part with image */}
          <div className="col-md-4">
            <img src={image1} alt="image1" className="img-fluid" />
          </div>
          {/* Right part with description and button */}
          <div className="col-md-5">
            <div className="right-part">
              <h2>Web & Mobile App Development</h2>
              <p>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
              <button className="btn btn-warning">LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
      


    <div className="App1">
      <div className="container w">
        <div className="row align-items-center"> {/* Add align-items-center class */}
          {/* Right part with description and button */}
          <div className="col-md-5">
            <div className="right-part">
              <div className='d'>
              <h2>Digital Strategy Consulting</h2>
              <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
              <button className="btn btn-warning">LEARN MORE</button>
            </div>
            </div>
          </div>
          {/* Left part with image */}
          <div className="col-md-4">
          <div className='dd'>
            <img src={image2} alt="image2" className="img-fluid" /></div>
          </div>
        </div>
      </div>
    </div>
        
         <FAQSection/>
         <Footer/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
