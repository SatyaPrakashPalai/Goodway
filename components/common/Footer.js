import styles from './footer.module.css'

export default function Footer() {
	return (
		<footer>
			<div className=''>
				<div className={styles['footer']}>
					<img className={styles['logo']} src='logo.svg' alt='' />
					<p>© Goodway Resources – All rights reserved</p>
				</div>
			</div>
		</footer>
	)
}
