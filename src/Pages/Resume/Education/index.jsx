import React from 'react'

import { Grid, Cell } from 'react-mdl'

function Education({ endYear, schoolDescription, schoolName, startYear }) {
	return (
		<Grid>
			<Cell col={4}>
				<p>
					{startYear} - {endYear}
				</p>
			</Cell>
			<Cell col={8}>
				<h4>{schoolName}</h4>
				<p>{schoolDescription}</p>
			</Cell>
		</Grid>
	)
}

export default Education
