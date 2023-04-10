import { BubbleMessage } from '@/components/common/chat/bubble_message/bubble_message'
import { ChatHistory } from '@/components/common/chat/chat_history/chat_history'

const Index = () => {
	return (
		<>
			<div className="flex">
				<div className=" flex w-1/4 h-screen">
					<ChatHistory
						handle={() => {}}
						messages={[
							{
								image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
								name: 'AVantika',
								newNotification: false,
								selected: false,
								timestamp: 1664376815,
							},
							{
								image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
								name: 'AVantika',
								newNotification: true,
								selected: false,
								timestamp: 1748347589,
							},
							{
								image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
								name: 'AVantika',
								newNotification: false,
								selected: false,
								timestamp: 1231211842,
							},
							{
								image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
								name: 'AVantika',
								newNotification: false,
								selected: false,
								timestamp: 1748347589,
							},
							{
								image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
								name: 'AVantika',
								newNotification: false,
								selected: false,
								timestamp: 1341465382,
							},
							{
								image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
								name: 'AVantika',
								newNotification: false,
								selected: false,
								timestamp: 1034500193,
							},
						]}
					/>
				</div>
				<div className=" w-full ">
					<BubbleMessage
						currentUserID={1}
						message={[
							{
								message: 'HiI',
								timestamp: 1664376815,
								user: {
									id: 1,
									image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
								},
							},
							{
								message: 'How are you',
								timestamp: 1664376815,
								user: {
									id: 2,
									image: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=320&amp;q=80',
								},
							},
							{
								message: 'I am fine',
								timestamp: 1664376815,
								user: {
									id: 1,
									image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
								},
							},
							{
								message: 'How do you do',
								timestamp: 1664376815,
								user: {
									id: 2,
									image: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=320&amp;q=80',
								},
							},
						]}
					/>
					{/*
					FIXME: Replace this with a component
					ALMP-559 
					<MessageInput /> */}
				</div>
			</div>
		</>
	)
}
export default Index
