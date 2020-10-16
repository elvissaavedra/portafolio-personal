import React from 'react'

import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

import './style.sass'

function Contact() {
	return (
		<div className='contact-body'>
			<Grid className='contact-grid'>
				<Cell col={6}>
					<h2>Elvis Saavedra</h2>
					<img
						src='https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png'
						alt='avatar'
						height='250'
					/>
					<p className='textDescription'>
						Joven apasionado de todo lo que tenga que ver con el Desarrollo software y sistemas, muy autodidacta,
						responsable y exigente conmigo mismo. Trabajé desarrollando o manteniendo diferentes flujos de
						programación Circuitos y paneles así como desarrollando Software Web. Persona proactiva, capaz de
						decidir y trabajar en equipo, gran disponibilidad de tiempo para el trabajo y sólida formación ética y
						moral, desempeño responsable y eficiente.
					</p>
				</Cell>
				<Cell col={6}>
					<h2>Contáctame</h2>
					<hr />
					<div className='contact-list'>
						<List>
							<ListItem>
								<ListItemContent className='item-list-contact'>
									<i className='fa fa-phone-square' aria-hidden='true' />
									(51) 966 796 101
								</ListItemContent>
							</ListItem>

							<ListItem>
								<ListItemContent className='item-list-contact'>
									<i className='fa fa-fax' aria-hidden='true' />
									(01) 765 9410
								</ListItemContent>
							</ListItem>

							<ListItem>
								<ListItemContent className='item-list-contact'>
									<i className='fa fa-envelope' aria-hidden='true' />
									elvis.saavedra.german@gmail.com
								</ListItemContent>
							</ListItem>

							<ListItem>
								<ListItemContent className='item-list-contact'>
									<i className='fa fa-skype' aria-hidden='true' />
									e.saavedra_7@hotmail.com
								</ListItemContent>
							</ListItem>
						</List>
					</div>
				</Cell>
			</Grid>
		</div>
	)
}

export default Contact
