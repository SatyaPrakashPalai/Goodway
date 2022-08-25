import styles from './service.module.css'
export default function Services() {
	return (
		<section className={styles['service']}>
			<div className={styles['info-wrapper']}>
				<div className={styles['head']}>
					<h1 className='h2'>Services</h1>
					<p className='p'>Helping you find better jobs and education</p>
				</div>
				<div className={styles['points']}>
					<div className={styles['subpoints']}>
						<h3 className='h3'>💼 Jobs</h3>
						<ul className={styles['list']}>
							<li>Administrative jobs</li>
							<li>Healthcare jobs</li>
							<li>Technical & non technical jobs</li>
							<li>Marketing jobs</li>
							<li>IT jobs</li>
						</ul>
					</div>
					<div className={styles['subpoints']}>
						<h3 className='h3'>🎓 Education</h3>
						<ul className={styles['list']}>
							<li>Certificate courses</li>
							<li>Management courses</li>
							<li>Engineering courses</li>
							<li>Healthcare courses</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={styles['image-wrapper']}>
				<img className={styles['services-image']} src='/images/services.png' alt='' />
				<img className={styles['bg']} src='/images/service-bg.png' alt='' />
				<img className={styles['mobile-bg']} src='images/service-mobile-bg.png' alt='' />
			</div>
		</section>
	)
}
