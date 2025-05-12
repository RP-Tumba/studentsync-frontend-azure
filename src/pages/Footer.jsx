import react from 'react';
import './styles/footer.css';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import FmdFacebookIcon from '@mui/icons-material/Facebook';
import FmdYouTubeIcon from '@mui/icons-material/YouTube';
import FmdInstagramIcon from '@mui/icons-material/Instagram';

const FooterPart = () =>{

return(
<>

<div className='background_color_all'>

<div className='grid-column'>


<div className='first-all-paragraph'>
<h3>STUDENTSYNC MANAGEMENT APP</h3><br />

<h6>Students management platform</h6>
<br />
<h4>Our Address</h4>
<br />
<FmdGoodOutlinedIcon/><p className='first-paragraph'> Gasabo District, Kinyina Sector, Murama Cell,Rusenyi Village</p><br/>
 <ExpandCircleDownOutlinedIcon/><p className='first-paragraph'>Working hours: Monday-Friday 08:00-17:00</p>
    
</div>



<div className='second-all-paragraph'>


<h4>Contact Us </h4><br />

<MailOutlinedIcon/><p className='inf-container'> info@thegymcrapstone.rw</p><br />
 <CallOutlinedIcon/><p className='inf-container'>0788-322-223</p>

</div>


<div className='third-all-paragraph'>

<h4 className='sacial-container'>Scoil Media</h4>



<span className='all-icon1'><FmdFacebookIcon/></span>
<span className='all-icon2'><FmdYouTubeIcon/></span>
<span className='all-icon3'><FmdInstagramIcon/> </span>


</div>
</div>

</div>
</>

)



}


export default FooterPart