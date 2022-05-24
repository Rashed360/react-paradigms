import style from 'styles/RecursiveComponent.module.css'
import styled from 'styled-components'

const RecursiveCard = props => {
	const { indent, author, content, replies, parentId, childPostCount, immediateChild } = props || {}
	const { name } = author
	const height = 25

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
		${childPostCount !== 0 &&
		`
            &:after {
                position: absolute;
                content: '';
                bottom: ${immediateChild > 1 ? -(height + 78 * (childPostCount - 1)) + 'px' : -height + 'px'};
                left: 8px;
                width: 2px;
                height: ${immediateChild > 1 ? height + 78 * (childPostCount - 1) + 'px' : height + 'px'};
                background: #5c5c5c;
            }
            `}
	`

	return (
		<>
			<Card>
				<div className={style.usr}>{name}</div>
				<div className={style.msg}>{content}</div>
			</Card>
			{replies &&
				replies.length > 0 &&
				replies.map(reply => {
					return <RecursiveCard {...reply} indent={indent + 1} key={reply.id} />
				})}
		</>
	)
}

export default RecursiveCard
