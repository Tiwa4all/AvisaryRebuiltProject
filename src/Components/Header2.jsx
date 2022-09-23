import React from 'react'
import Avi from './Avi.png'
// import logo from './logo.png'
import Menu from './Menu'
import BGContent from './BGContent'
import { FaTimes } from 'react-icons/fa'
import { useRef } from 'react'

const Header2 = ({}) => {
    const navRef = useRef();
    const showNavbar = ()=> {
        navRef.current.classList.toggle('responsive_nav');
}
   
  return (
    <>
    <div className="im1">
        <img src={Avi} alt="" srcset="" />  
        <div className="showbar">
            <Menu onClick={showNavbar}/>
        </div>    
    </div>

    <div ref={navRef} className='allsection'>
        
            <div className='sectionimg'>
                <div className="im">
                    <img src={Avi} alt="" srcset="" />      
                </div>
                <div className="showbar close">
                <FaTimes className='menu-icon close'onClick={showNavbar}/>
                </div>
            </div>
                    
            <div className='menu'>
                <div className="sol sol-one">SOLUTION
                    <div className="drop-down one-drop">
                        <a href ='#'><p>FOR GOVERNMENT AGENCIES</p></a>
                        <a href ='#'><p>FOR TIER 1 CONTRACTOR</p></a>
                        <a href ='#'><p>FOR SMB VENDORS</p></a>                 
                    </div>
                 </div>

                <div className="sol sol-two ">COMPANY
                    <div className="drop-down two-drop">
                        <a href ='#'><p>ABOUT AVISARY</p></a>
                        <a href ='#'><p>COMPANY VALUE</p></a>
                        <a href ='#'><p>CAREER</p></a>
                        <a href ='#'><p>CONTACT US</p></a>
                    </div>
                </div>

                <div className="sol sol-three">RESOURCE
                    <div className="drop-down three-drop">
                        <a href ='#'><p>HELP CENTRE</p></a>
                    </div>       
                </div>
            </div>
            <div className ='bt'>
                <button className='sbtn'>SIGN UP</button>
                 <button className='lbtn'>LOGIN</button>
            </div>   
    </div>
    <BGContent/>
    </>
  )
}

export default Header2
