import React from 'react'
import styles from './button.module.css'

export default function Button({ text, variant, link }) {
	return (
		<button types='button' className={`${styles['button']} ${styles[variant]}`}>
			<a href={link}> {text}</a>
		</button>
	)
}
