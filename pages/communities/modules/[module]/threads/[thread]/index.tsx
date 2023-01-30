import { Thread } from '@/common/community/thread/thread/thread'
import { Button } from 'emse-ui'
import { Layout } from '@/common/pages/layouts/layout/layout'
const ThreadPage = () => {
	return (
		<>
			<div>
				<Button
					label="< Back"
					className="mt-6 ml-4 bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={() => history.back()}
				/>
				<div className="flex justify-center items-center">
					<h1>Communities Thread</h1>
				</div>
			</div>
			<div className="m-3  h-fit">
				<div className=" flex my-4 justify-end">
					<Thread
						body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat diam vitae nibh mollis, dignissim mollis augue porttitor. Aliquam viverra auctor semper. Vestibulum placerat luctus tortor eu iaculis. Fusce a ullamcorper sapien. Phasellus at sollicitudin mauris. Duis suscipit, libero at consectetur vestibulum, leo lectus tristique mauris, convallis gravida est elit eu nibh. Mauris efficitur ultrices tincidunt. Nam sed tincidunt velit. Suspendisse gravida porta mi a egestas."
						id="12345"
						title="How did the United States land on the moon?"
						upvotes={10}
						userProfile={{
							firstName: 'joel',
							id: 1,
							image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
							lastName: 'desante',
						}}
					/>
				</div>
				<Thread
					body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat diam vitae nibh mollis, dignissim mollis augue porttitor. Aliquam viverra auctor semper. Vestibulum placerat luctus tortor eu iaculis. Fusce a ullamcorper sapien. Phasellus at sollicitudin mauris. Duis suscipit, libero at consectetur vestibulum, leo lectus tristique mauris, convallis gravida est elit eu nibh. Mauris efficitur ultrices tincidunt. Nam sed tincidunt velit. Suspendisse gravida porta mi a egestas."
					id="12345"
					title="How did the United States land on the moon?"
					upvotes={10}
					userProfile={{
						firstName: 'joel',
						id: 1,
						image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
						lastName: 'desante',
					}}
				/>
			</div>
		</>
	)
}

ThreadPage.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default ThreadPage
