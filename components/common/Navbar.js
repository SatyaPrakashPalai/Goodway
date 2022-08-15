import styles from './navbar.module.css'
import Link from 'next/link'
import Button from './Button'

export default function Navbar() {
	return (
		<nav className={styles['navbar']}>
			<img src='/logo.svg' />
			<ul className={styles['nav-links']}>
				<li>
					<Link href='#'>Home</Link>
				</li>
				<li>
					<Link href='#'>About</Link>
				</li>
				<li>
					<Link href='#'>Service</Link>
				</li>
				<li>
					<Button variant={'white'} text='Contact' />
				</li>
			</ul>

			<img src='./icons/menu.svg' className={styles['menu-icon']} />
		</nav>
	)
}
