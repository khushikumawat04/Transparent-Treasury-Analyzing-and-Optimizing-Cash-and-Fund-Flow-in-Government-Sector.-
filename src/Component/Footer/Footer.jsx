import React from 'react'
import './footer.css'
import {MdLocationOn} from 'react-icons/md'
import {BsTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {RiFacebookFill} from 'react-icons/ri'
import {BsTwitter} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {GrLinkedinOption} from 'react-icons/gr'
import { Link } from 'react-router-dom'
const Footer1 = () => {
  return (
	<>
	<div className="footer-container">
		<div className="footer-box">

			<div className="link-box">
			<div className="link-heading">
				<h3>Company <hr /></h3>
			</div>
				<ul className='link-text'>
					<li><Link to="http://digitalsavers.in/" className='link-title' target='_blank'>Dital Savers</Link></li>
					<li><p> Our Service Philosophy Is Proactive Not Reactive. 
						100% Satisfaction Guarantee. We manage your network 
						24/7 to identify issues and address them before they 
						become  problem.</p></li>
				</ul>
			</div>

			<div className="link-box">
			<div className="link-heading">
				<h3>Quick Links <hr /></h3>
				</div>

				<ul className='link-text2'>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/sector">Department</Link></li>
					<li><Link to="/job">Profession</Link></li>
					<li><Link to="/successfull">Achievment</Link></li>
					<li><Link to="/vaccancy">Exams</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
			</div>

			<div className="link-box">
			<div className="link-heading">
				<h3>Get In Touch <hr /></h3>
				</div>

				<ul className='link-text3'>
					<li><a href="/"><span><MdLocationOn/></span>H-83 Ravindra Nagar, Near prakesh Smriti, Khargone Madhya Pradesh 451001</a></li>
					<li><a href="/"> <span><BsTelephoneFill/></span>+91 1010101010</a></li>
					<li><a href="/"><span><MdEmail/></span> edtechsavers@gmail.</a></li>
					
				</ul>
			</div>

			<div className="link-box">
				<div className="link-heading">
				<h3>Follow Us  <hr /></h3>
				</div>

				<ul className='footer-socials'>
					<li><a href="/" className='factive'><RiFacebookFill/></a></li>
					<li><a href="/"><BsTwitter/></a></li>
					<li><a href="/"><FiInstagram/></a></li>
					<li><a href="/"><GrLinkedinOption/></a></li>
				</ul>
			</div>

		</div>
		<div className="caption-box">
			<h2>Copyright 2023 by <span className='logo'>.Gov.in</span></h2>
		</div>
	</div>
	</>
  )
}

export default Footer1