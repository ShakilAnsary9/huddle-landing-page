import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './App.css';
import bgDesktop from './images/bg-desktop.svg';
import illustration from './images/illustration-mockups.svg';
import logo from './images/logo.svg';


function App() {
  return (
    <div className="App" style={{
      backgroundImage: `url(${bgDesktop})`
    }}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="content">
        <div className="illustration">
          <img src={illustration} alt="" />
        </div>
        <div className="text">
          <h1>Build The Community <br/> Your Fans Will Love</h1>
          <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
          </p>
          <button>
            Register
          </button>
        </div>
      </div>
      <div className="social">
          <div className='icon'><FaFacebookF className='FaFacebook'/></div>
          <div className='icon'><FaTwitter className='FaTwitter'/></div>
          <div className='icon'><FaInstagram className='FaInstagram'/></div>
      </div>
    </div>
  );
}

export default App;
