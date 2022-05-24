export const postComments = {
	meta: {
		entityId: 'abc123',
		postCount: 7,
	},
	posts: [
		{
			id: 11,
			childPostCount: 4,
			immidiateChild: 1,
			postSequence: 1,
			content: 'I love React.js',
			parentId: null,
			author: {
				id: 232,
				thumbnailUrl: null,
				name: 'Rashed Ahmed',
			},
			replies: [
				{
					id: 21,
					childPostCount: 3,
					immidiateChild: 2,
					postSequence: 2,
					content: 'Same, bro..!!',
					parentId: 11,
					author: {
						id: 334,
						thumbnailUrl: null,
						name: 'Sajeeb Debnath',
					},
					replies: [
						{
							id: 32,
							childPostCount: 1,
							immidiateChild: 1,
							postSequence: 3,
							content: 'Really? Good to know.',
							parentId: 21,
							author: {
								id: 232,
								thumbnailUrl: null,
								name: 'Rashed Ahmed',
							},
							replies: [
								{
									id: 52,
									childPostCount: 0,
									immidiateChild: 0,
									postSequence: 4,
									content: 'Yeah! Thank Man!!',
									parentId: 32,
									author: {
										id: 334,
										thumbnailUrl: null,
										name: 'Sajeeb Debnath',
									},
									replies: [],
								},
							],
						},
						{
							id: 41,
							childPostCount: 0,
							immidiateChild: 0,
							postSequence: 5,
							content: "Wow, It's Really Popular",
							parentId: 21,
							author: {
								id: 132,
								thumbnailUrl: null,
								name: 'Motalib Hossain',
							},
							replies: [],
						},
					],
				},
			],
		},
		{
			id: 56,
			childPostCount: 1,
			immidiateChild: 1,
			postSequence: 6,
			content: 'React.js is really cool to work with!',
			parentId: null,
			author: {
				id: 532,
				thumbnailUrl: null,
				name: 'Atikur Rahman',
			},
			replies: [
				{
					id: 41,
					childPostCount: 0,
					immidiateChild: 0,
					postSequence: 7,
					content: 'Hmm, It is!',
					parentId: 56,
					author: {
						id: 132,
						thumbnailUrl: null,
						name: 'Motalib Hossain',
					},
					replies: [],
				},
			],
		},
	],
}
