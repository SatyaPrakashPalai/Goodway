export default function Points({ emoji, props }) {
	const myLists = props.myLists
	// const listItems = myLists.map((myList) => <li>{myList}</li>)
	return (
		<section>
			<div className={styles['head']}>
				<img src='' alt='' />
			</div>
			<div>
				<ul>{listItems}</ul>
			</div>
		</section>
	)
}
