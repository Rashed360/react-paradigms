import { useState, useEffect } from 'react'
import style from 'styles/RecursiveComponent.module.css'
import RecursiveCard from 'components/RecursiveCard'
import { postComments } from 'data/posts'

const RecursiveComponent = () => {
	const [comments, setComments] = useState()
	const { meta, posts } = comments || {}

	useEffect(() => {
		setComments(postComments)
	}, [postComments])

	return (
		<div className={style.container}>
			{comments && (
				<div>
					{posts.map(post => {
						return <RecursiveCard {...post} indent={0} key={post.id} />
					})}
				</div>
			)}
		</div>
	)
}

export default RecursiveComponent
