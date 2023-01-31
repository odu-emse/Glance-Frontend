import { Thread } from '@/components/common/community/threads/thread/thread'

const Index = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<p>Communities Index</p>
			<Thread
				body={''}
				upvotes={0}
				userProfile={{
					id: '',
					firstName: '',
					lastName: '',
					image: '',
				}}
				id={''}
			/>
		</div>
	)
}

export default Index
