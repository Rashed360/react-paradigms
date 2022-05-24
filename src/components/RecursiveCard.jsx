import style from 'styles/RecursiveComponent.module.css'
import styled from 'styled-components'
import { useState } from 'react'

const RecursiveCard = props => {
	const [hidden, setHidden] = useState(false)
	const { indent, author, content, replies, parentId, childPostCount, immediateChild } = props || {}
	const { name } = author
	const normalX = 25
	const childX = 78

	const Card = styled.div`
		position: relative;
		margin-left: ${indent * 20 + 'px'};
		margin-bottom: 10px;
		border: 1px solid #999999;
		background: #aaaaaa;
		${parentId !== null &&
		`
		&:before {
			position: absolute;
			content: '';
			top: 11px;
			left: -10px;
			width: 15px;
			height: 2px;
			background: #5c5c5c;
		}
        `}
		${!hidden &&
		childPostCount !== 0 &&
		`
            &:after {
                position: absolute;
                content: '';
                bottom: ${
									(immediateChild > 1 ? -(normalX + childX * (childPostCount - 1)) : -normalX) + 'px'
								};
                left: 8px;
                width: 2px;
                height: ${(immediateChild > 1 ? normalX + childX * (childPostCount - 1) : normalX) + 'px'};
                background: #5c5c5c;
            }
            `}
	`
	const toggleChildHide = () => {
		setHidden(!hidden)
	}

	return (
		<>
			<Card>
				<div className={style.usr} onClick={toggleChildHide}>
					{name}
				</div>
				{!hidden && <div className={style.msg}>{content}</div>}
			</Card>
			{!hidden &&
				replies &&
				replies.length > 0 &&
				replies.map(reply => {
					return <RecursiveCard {...reply} indent={indent + 1} key={reply.id} />
				})}
		</>
	)
}

export default RecursiveCard
