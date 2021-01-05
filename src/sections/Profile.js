import React from 'react'

const Profile = () => {

	let style = {
 	fontWeight: 'bold',
 	letterSpacing:'0.2em',
 	color: '#7fdff4'
 }
return(
	<div className='section-2'>
		<h1>Profile =></h1>
		<h2>About</h2>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas sint et nihil iusto eius nostrum sit error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas sint et nihil iusto eius nostrum sit error.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas sint et nihil iusto eius nostrum sit error.</p>
		<h2>Experience</h2>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis in maiores autem quidem</p>
		<h2>Skills</h2>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis in maiores autem quidem obcaecati excepturi! .</p>
		<hr id="hr_sec_2"></hr>
		<div id='contactInfo'>
			<p><span a href="#" style={style}>naftalib@gmail.com</span> || +972 5331 55534</p>
		</div>
		<hr id="hr_sec_2"></hr>
	</div>
	)

}
export default Profile