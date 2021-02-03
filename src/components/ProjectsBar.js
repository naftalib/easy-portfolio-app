import React from 'react'

function ProjectsBar(props){

	return ( 
	//this component is the main nav
		
	<div className='project_icons_list'>
			<h3 className='project_list' 
			onClick={()=> props.handleNavChange(props.link.id)}
			>
			{props.link.link} 
			</h3>
			<h3 className='list_divider'>||</h3>
	</div>
		
	)
}
export default ProjectsBar