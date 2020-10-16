import React from 'react'

import { Grid, Cell, ProgressBar } from 'react-mdl'

import './style.sass'

function Skills({ progress, skill }) {
	return (
		<Grid>
			<Cell col={12}>
				<div className='content-skill'>
					{skill} <ProgressBar className='progress' progress={progress} />{' '}
				</div>
			</Cell>
		</Grid>
	)
}

export default Skills
