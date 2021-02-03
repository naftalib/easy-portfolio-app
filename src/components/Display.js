import React from 'react'


function Display (props){

	//this component is the display area of each selected project

	let dataStyle = {
 	fontWeight: 'bold',
 	color: '#7fdff4'
 }
	return (		
			<div className='display_container'>	
				<div className='display_img'>
					<img src= {props.info.img} height='400' width='550' alt="?" />
				</div>			
				<div className='display_data'>

					<p><span style={dataStyle}>Project type =></span> {props.info.type}</p>
					<p><span style={dataStyle}>Project title =></span> {props.info.title}</p>
					<p><span style={dataStyle}>About => </span> {props.info.description}</p>
					<hr id='hr_sec_2'/>
					<p>
						<a href={props.info.code} target="_blank">
							<span style={dataStyle}>Check out code => </span> 
								 <i className="fab fa-github"></i>
						 </a>
					</p>
					<hr id='hr_sec_2'/>
					<p>
						<a href={props.info.link} target="_blank">
							<span style={dataStyle}>Live demo => </span> 
								 <i className="fab fa-github"></i>
						 </a>
					</p>	
					<div className='display_data_spacer'></div>
				</div>
			</div>
		)
}

export default Display