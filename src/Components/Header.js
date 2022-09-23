import {FaArrowRight} from 'react-icons/fa'

const Header = () => {
  return (
    <>
    <div className='header'>
      <a href='https://tiwa4all-learncodes.netlify.app/mycodeweb/homepage'>Build by Tiwa4all</a> -
      Creating software that embodies civic responsibility - software that is productive, responsible, caring and contributing. 
        <a href> Read more </a><FaArrowRight className='arrow'/>
    </div>
    </>
  )
}

export default Header
