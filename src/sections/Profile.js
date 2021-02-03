import React from 'react'

const Profile = () => {

	let style = {
 	fontWeight: 'bold',
 	letterSpacing:'0.2em',
 	color: '#7fdff4'
 }
 const pStyle= {
	 color: 'white',
	 width: '100%',
	 fontSize: '1.2em'
 }
return(
	<div className='section-2'>
		<h1>Profile =></h1>
		<h2>About</h2>
		<p>
			{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`}<br />
			<br />
			{`Feel free to browse through my portfolio. Each project has a link to a live demo as well as a github repo.`}
		</p>
		<h2>Skills</h2>
		<p>
			{`=> JavaScript, React, HTML, CSS.`}<br />
			{`=> Git, Node.js, Express, MongoDB.`}
		</p>
		<h2>Experience</h2>
		<p>
			{`Deloper roles`}<br />
			{`=> 2019-2021: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus leo ac purus tempor`}<br />
			<br />
			{`Other roles`}<br />
			{`=> 20017-20019: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus leo ac purus tempor`}<br />
			<br />
			{`=> 2012-20017: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus leo ac purus tempor`}
		</p>
		<hr id="hr_sec_2"></hr>
		<div id='contactInfo'>
			<p><span a href="#" style={style}>you@gmail.com</span> || +98 999 9900</p>
		</div>
		<hr id="hr_sec_2"></hr>
	</div>
	)

}
export default Profile