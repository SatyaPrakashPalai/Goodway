import Button from 'components/common/Button'
import styles from './hero.module.css'

export default function Hero() {
	return (
		<section className={styles['hero']}>
			<div>
				<div className={styles['hero-bg-wrapper']}>
					<img src='/icons/hero-bg.svg' alt='' />
				</div>
				<div className={styles['hero-bg-tablet']}>
					<img src='/images/hero-bg-tablet.png' alt='' />
				</div>
				<div className={styles['hero-main']}>
					<div className={styles['info']}>
						<h1 className='h1'>
							Careers <br /> & Education
						</h1>
						<p className={styles['para']}>Consultancy Services</p>
						<Button className={styles['talk-button']} text="Let's talk" />
						<Button text='Explore' variant={'white'} />
					</div>
					<div className={styles['image-wrapper']}>
						<img src='./images/hero.jpg' alt='' />
					</div>
				</div>
			</div>
		</section>
	)
}
