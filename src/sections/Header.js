import React from 'react'

const Header = () => {

	return(
		<div id='headerContainer'>
		
		<div className='headerContent'> 
			<div className='section-1'>
                <h2>Your Name</h2>
                <hr id="hr_logo"></hr>
                <h3 id="webdev">web developer</h3>
                <p className="tag">Country</p>
			</div>	
			 <div className="links">
			 	<a href="#" className='profileLink'>{'<= Profile'}</a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
           		<a href="#"><i className="fab fa-github"></i></a>
           		<a href="#" className='projectsLink'>{'Projects =>'}</a>
             </div>	
		</div>
          	</div>
		)
}
export default Header