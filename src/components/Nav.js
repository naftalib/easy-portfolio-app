import React from 'react'
import FadeIn from 'react-fade-in'

function Nav (props){

	return (
		//this component is the menu of projects in each section
		<FadeIn>
		<div className="project_icons_list">
			<span id='project_icon'>
				<img className='project_img' 
				src={props.detail.img} 
				height='100px' 
				onClick={()=> props.handleClick(props.detail.id)}
				>
				</img>
				<p>{props.detail.title}</p>
			</span>
		</div>           
		</FadeIn>                                                                                                 
		)
}
export default Nav