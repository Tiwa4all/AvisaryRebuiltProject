import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaArrowRight} from 'react-icons/fa';

const GA = "https://www.avisare.com/wp-content/uploads/2022/08/Vector-Smart-Object12.png";
const GB = "https://www.avisare.com/wp-content/uploads/2022/08/Vector-Smart-Object.png";
const GC = "https://www.avisare.com/wp-content/uploads/2022/08/Vector-Smart-Object2.png";

const Section3 = () => {
  return (
    <div className="s3">
        <div style={{textAlign: 'center', padding:'40px'}}>
            <h1 style={{fontFamily:'TimesNewRoman', fontSize:'3.66211vw'}}>DISCOVER A SMARTER SOLUTION TO SOURCING</h1>
            <p style={{fontSize: '2.74658vw'}}>Avisare is a cloud-based system for public and private sector RFx marketing, vendor registration, online certification workflow, RFP matching, e-bidding, outreach tracking, and prime contractor compliance reporting.</p>
        </div>

        <div className='d-flex justify-content-around gu'>
            <div style={{backgroundColor:'white'}} className='df'>
                <div className='guimg'>
                    <img src={GA} alt="" srcset="" />
                </div>
                <h1>GOVERNMENT <br/>AGENCY</h1>
                <p>Contact us to<br/> Schedule a demo</p>
                <div className="myb">
                    <a href style={{textAlign:'center'}}> Learn More <FaArrowRight className='arrow'/><br/></a>
                    <Button className='btv' type='submit'>CONTACT US</Button>
                </div>
            </div>
            <div style={{backgroundColor:'white'}} className='df'>
                <div className='guimg'>
                    <img src={GB} alt="" srcset="" />
                </div>
                <h1>TIER 1 <br/>CONTRACTOR</h1>
                <p>Contact us to <br/>Schedule a demo</p>
                <div className="myb">
                    <a href style={{textAlign:'center'}}> Learn More <FaArrowRight className='arrow'/><br/></a>
                    <Button className='btv' type='submit'>CONTACT US</Button>
                </div>
            </div>
            <div style={{backgroundColor:'white'}} className='df'>
                <div className='guimg'>
                    <img src={GC} alt="" srcset="" />
                </div>
                <h1>SMB <br/> VENDOR</h1>
                <p>Contact us to<br/> Schedule a demo</p>
                <div className="myb">
                    <a href style={{textAlign:'center'}}> Learn More <FaArrowRight className='arrow'/><br/></a>
                    <Button className='btv'type='submit'>JOIN</Button>
                </div>
            </div>
        </div>

    </div>
    
  )
}

export default Section3
