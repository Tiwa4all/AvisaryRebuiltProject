import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import './Mycarousel.css'

const slideImages = [
  {
    text: 'Easy Access',
    word: 'We make it easy for small businesses to compete for local government RFPs so you have a more diverse field of vendors to choose from.',
    url:
    'https://www.avisare.com/wp-content/uploads/2018/01/home_UniversalBusinessProfile.jpeg',
    caption: "Slide 1",
    
    
  },
  {
    text: 'Transparency',
    word: 'Visibility for government agencies into what Tier 1 contractors are doing for vendor outreach to ensure you are meeting your diversity goals.',
    url:
    'https://www.avisare.com/wp-content/uploads/2018/01/home_UniversalBusinessProfile.jpeg',
    caption: "Slide 2"
  },
  {
    text: 'Outreach Tracking',
    word: 'Automatically capture outreach details upfront including how you came to select each subcontractor.',
    url:
      'https://www.avisare.com/wp-content/uploads/2022/08/home_OutreachTracking.jpg',
    caption: "Slide 3"
  },
  {
    text: 'Complience Reporting',
    word: 'One-click compliance reporting for subcontracting is a breeze. No stamps or binders necessary!',
    url:
      'https://www.avisare.com/wp-content/uploads/2022/08/home_OutreachTracking.jpg',
    caption: "Slide 4"
  },
  {
    text: 'Efficient Bidding',
    word: 'Small business vendors can spend less time on research and more time bidding on relevant opportunities from government agencies and Tier 1 contractors.',
    url:
    "https://www.avisare.com/wp-content/uploads/2018/01/home_Transparency.jpeg",
    caption: "Slide 5"
  },
  {
    text: 'Universal Business Profile',
    word: 'Small business vendors register once and manage your data on one profile.You won’t have to register for each new opportunity.',
    url:
    'https://www.avisare.com/wp-content/uploads/2018/01/mypostings.jpeg',
    caption: "Slide 6"
  },
  {
    text: 'Private Rfps',
    word: 'Exclusive access to invite-only RFPs from Tier 1 contractors. Makes it easy for vendors to be discovered for the right opportunity.',
    url:
    'https://www.avisare.com/wp-content/uploads/2018/01/home_UniversalBusinessProfile.jpeg',
      
    caption: "Slide 7"
  },
];

const Mycarousel = () => {
  return (
    <div className="slide-container">
      <Slide indicators={true}>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div className="flex">
                <div className="con">
                    <h1>{slideImage.text}</h1>
                    <p>{slideImage.word}</p>
                </div>
                <div className="image">
                    <img src={slideImage.url} />
                </div>
              <br />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}

export default Mycarousel
