import React from 'react'

import { Grid, Cell } from 'react-mdl'

import './style.sass'

function LandingPage() {
	return (
		<div className='content'>
			<Grid className='landing-grid'>
				<Cell col={12}>
					<img
						src='https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png'
						alt='avatar'
						className='avatar-img'
					/>
					<div className='banner-text'>
						<h1>Frontend Web Developer</h1>
						<hr />
						<p>HTML/CSS3 | Bootstrap | JavaScript | React | Sass | Oracle | API Rest | Oracle | MYSQL</p>

						<div className='social-links'>
							<a
								href='https://www.linkedin.com/in/elvis-adderly-saavedra-germ%C3%A1n-74888417a/'
								rel='noopener noreferrer'
								target='_blank'>
								<i className='fa fa-linkedin-square' aria-hidden='true' />
							</a>
							<a href='https://github.com/elvissaavedra' rel='noopener noreferrer' target='_blank'>
								<i className='fa fa-github-square' aria-hidden='true' />
							</a>
							<a
								href='https://www.frontendmentor.io/profile/elvissaavedra'
								rel='noopener noreferrer'
								target='_blank'>
								<i className='fa fa-free-code-camp' aria-hidden='true' />
							</a>
						</div>
					</div>
				</Cell>
			</Grid>
		</div>
	)
}

export default LandingPage
