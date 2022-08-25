import styles from './section.module.css'

export default function Section({ h2, link }) {
	return (
		<div className='margin'>
			<section className={styles['section']}>
				<div className={styles['image-wrapper']}>
					<img className={styles['image']} src={link} alt='' />
					<img className={styles['section-bg']} src='./images/blue.jpg' alt='' />
				</div>
				<div className={styles['info-wrapper']}>
					<h2 className='h2'>{h2}</h2>
					<div className={styles['para-wrapper']}>
						<p className='p'>
							Tellus in etiam nunc at. At odio odio lobortis ultricies fermentum est proin habitant
							laoreet. Id at auctor porta et lorem augue. Aliquam velit facilisis felis, volutpat
							cursus tempus vitae. Diam mauris mi, sed neque quam sed. Aliquam nunc, sed pharetra,
							facilisis. Nibh dolor facilisi porttitor in at viverra sed pharetra ac.
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}
