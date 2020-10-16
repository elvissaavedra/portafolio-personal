import React from 'react'

import Skills from './Skills'
import { Grid, Cell } from 'react-mdl'
import Experience from './Experience'
import Education from './Education'

import './style.sass'

function Resume() {
	return (
		<div>
			<Grid>
				<Cell col={4}>
					<div className='content-center'>
						<img
							src='https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png'
							alt='avatar'
							height='200'
						/>
					</div>

					<h2 className='title'>Elvis Saavedra</h2>
					<h4 className='sub-title'>Desarrollador de Software</h4>
					<hr className='line' />
					<p>
						Joven apasionado de todo lo que tenga que ver con el Desarrollo software y sistemas, muy autodidacta,
						responsable y exigente conmigo mismo. Trabajé desarrollando o manteniendo diferentes flujos de
						programación Circuitos y paneles así como desarrollando Software Web. Persona proactiva, capaz de
						decidir y trabajar en equipo, gran disponibilidad de tiempo para el trabajo y sólida formación ética y
						moral, desempeño responsable y eficiente.
					</p>
					<hr className='line' />
					<h5>Dirección</h5>
					<p>Asoc. de Viv. San Miguel de Copacabana MZ. B Lt. 12 - Puente Piedra</p>
					<h5>Celular</h5>
					<p>(51) 966 796 101</p>
					<h5>Email</h5>
					<p>elvis.saavedra.german@gmail.com</p>
					<h5>Web</h5>
					<p>elvissaavedra.com</p>
					<hr className='line' />
				</Cell>
				<Cell className='resume-right-col' col={8}>
					<h2>Education</h2>

					<Education
						startYear={2004}
						endYear={2008}
						schoolName='I.E. Andrés Berón Berrios'
						schoolDescription='Escuela Secundaria'
					/>

					<Education
						startYear={2011}
						endYear={2016}
						schoolName='Universidad Pedro Ruiz Gallo'
						schoolDescription='BACHILLER ESCUELA PROFESIONAL DE INGENIERIA ELECTRÓNICA'
					/>
					<hr className='line-two' />

					<h2>Experience</h2>

					<Experience
						startYear={2020}
						endYear={2020}
						jobName='PARIONA S.A.'
						jobDescription='Creación de Aplición de unidades y monitoreo de viajes: Maquetado con Styled-components, ReactJS, Servicios Rest'
					/>

					<Experience
						startYear={2019}
						endYear={2019}
						jobName='KONECTA BTO SL'
						jobDescription='Desarrollo y mantenimiento de módulos de aplicativos de ventas y atención: Maquetado SASS, ReactJS, Servicios Rest, Scrum'
					/>
					<hr className='line-two' />
					<h2>Skills</h2>
					<Skills skill='Javascript' progress={70} />
					<Skills skill='HTML5/CSS' progress={80} />
					<Skills skill='ReactJS' progress={25} />
					<Skills skill='NodeJS' progress={50} />
					<Skills skill='API REST' progress={50} />
					<Skills skill='Oracle' progress={40} />
					<Skills skill='Mysql' progress={60} />
				</Cell>
			</Grid>
		</div>
	)
}

export default Resume
