import { Thread } from '@/common/community/threads/thread/thread';
import { WatchedThreads } from '@/common/community/watched_threads/watched_threads';
import { Input } from '@/common/forms/inputs/input/input';
import { ModuleList } from '@/common/pages/module_list/module_list';
import * as React from 'react';

export const MainCommunity: React.FC<MainCommunityProps> = ({
																															threads,
																														}): React.ReactElement => {
	const userName = 'joeldesante';
	const userEmail = 'jdsante@odu.edu';
	const moduleName = 'This is the name of the module';
	return (
		<div className='m-8 flex'>
			<div className='m-10 grow'>
				<p className='text-3xl font-semibold'>{moduleName}</p>
				<div className='flex my-2 items-center'>
					<img
						src='https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg'
						alt='profile image'
						className='shadow-lg rounded-full max-w-full h-4 align-middle border-none'
					/>
					<small className='pl-2 font-bold'>{userName}</small>
					<small>
						<span className='px-1 font-bold'>&bull;</span>
						{userEmail}
					</small>
				</div>
				<div className='flex items-center'>
					<h1 className='text-lg font-semibold flex-none pr-20'>
						Recent Threads
					</h1>
					<Input
						defaultValue=''
						label='Search'
						name='floating_search'
						onChange={function noRefCheck() {
						}}
						role='search'
						type='search'
						options={[]}
					/>
				</div>
				<div className='m-2'>
					{threads.map((thread, index) => (
						<div className='my-4' key={index}>
							<Thread
								body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat diam vitae nibh mollis, dignissim mollis augue porttitor. Aliquam viverra auctor semper. Vestibulum placerat luctus tortor eu iaculis. Fusce a ullamcorper sapien. Phasellus at sollicitudin mauris. Duis suscipit, libero at consectetur vestibulum, leo lectus tristique mauris, convallis gravida est elit eu nibh. Mauris efficitur ultrices tincidunt. Nam sed tincidunt velit. Suspendisse gravida porta mi a egestas.'
								id='12345'
								title='How did the United States land on the moon?'
								upvotes={10}
								userProfile={{
									firstName: 'joel',
									id: 1,
									picURL: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
									lastName: 'desante',
								}}
							/>
						</div>
					))}
				</div>
			</div>
			<aside className='mx-10 flex-none'>
				<div className='mb-10'>
					<ModuleList
						modules={[
							{
								id: 'moduleid1',
								moduleName: 'Module 1',
							},
							{
								id: 'moduleid2',
								moduleName: 'Module 2',
							},
							{
								id: 'moduleid3',
								moduleName: 'Module 3',
							},
							{
								id: 'moduleid4',
								moduleName: 'Module 4',
							},
						]}
					/>
				</div>
				<div className='mb-10'>
					<WatchedThreads
						threads={[
							{
								'id': '63e3f79631115da3472a72dc',
								'title': 'this is testing',
								'parentLesson': {
									id: '63e3f79631115da3472a72dc',
									'collection': {
										id: '641c71563985a78ee17cbca2',
										'module': {
											'moduleName': 'Some dummy data',
											'id': '63e129a9cbfa5080578a7986',
										},
									},
								},
							},
							{
								'id': '641c6f4f3985a78ee17cbca0',
								'title': 'Hydration',
								'parentLesson': {
									id: '641c71563985a78ee17cbca2',
									'collection': {
										id: '641c71563985a78ee17cbca2',
										'module': {
											'moduleName': 'Some dummy data',
											'id': '63e129a9cbfa5080578a7986',
										},
									},
								},
							},
							{
								'id': '641c712a3985a78ee17cbca1',
								'parentLesson': {
									id: '641c71563985a78ee17cbca2',
									'collection': {
										id: '641c71563985a78ee17cbca2',
										'module': {
											'moduleName': 'Some dummy data',
											'id': '63e129a9cbfa5080578a7986',
										},
									},
								},
							},
							{
								'id': '641c71563985a78ee17cbca2',
								'title': 'CATS CATS CATS',
								'parentLesson': {
									id: '641c71563985a78ee17cbca2',
									'collection': {
										id: '641c71563985a78ee17cbca2',
										'module': {
											'id': '63e129a9cbfa5080578a7986',
											'collections': [
												{
													'id': '641c6f4f3985a78ee17cbca0',
													'lessons': [
														{
															'id': '64134bd645693aa3e9813e8e',
															'threads': [],
															name: 'Lesson 1',
															collection: {
																id: '64134bd645693aa3e9813e8e',
																module: {
																	id: '64134bd645693aa3e9813e8e',
																},
															},
														},
													],
												},
											],
										},
									},
								},
							},
						]
						}
					/>
				</div>
			</aside>
		</div>
	);
};

export type MainCommunityProps = {
	threads: Array<object>
	/**
	 * data coming from backend stored as an array of objects
	 */
}

/**
 * {
 *   "data": {
 *     "moduleEnrollment": [
 *       {
 *         "id": "641b47c7294278ca92b95454",
 *         "status": "INACTIVE",
 *         "role": "STUDENT",
 *         "module": {
 *           "id": "63e12ee8a30457c24d67bd1a",
 *           "moduleName": "AModule",
 *           "collections": [
 *             {
 *               "lessons": [
 *                 {
 *                   "id": "641b5491294278ca92b9547f",
 *                   "threads": [
 *                     {
 *                       "id": "641887420e920e6804b3f36c",
 *                       "title": "This is an updated thread",
 *                       "body": "Is this thread updatable?",
 *                       "author": {
 *                         "id": "63da9e40020a625cc55f64c5",
 *                         "firstName": "DANIEL B.",
 *                         "lastName": "PAPP",
 *                         "email": "dpapp001@odu.edu",
 *                         "picURL": "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
 *                       },
 *                       "upvotes": [],
 *                       "updatedAt": "03/22/2023"
 *                     },
 *                     {
 *                       "id": "6419c570967b0d1196ecdd8d",
 *                       "title": null,
 *                       "body": "How does this look?",
 *                       "author": {
 *                         "id": "6419c56f967b0d1196ecdd8a",
 *                         "firstName": "Testing",
 *                         "lastName": "Account",
 *                         "email": "amhv6ka2fownbuh5tdyr0pko7sjvb8zxrue49wqmgpicdxiqescjylf3tn1zlg@test.com",
 *                         "picURL": ""
 *                       },
 *                       "upvotes": [],
 *                       "updatedAt": "03/22/2023"
 *                     },
 *                     {
 *                       "id": "6419d4fc9b3009ca0ed20ed5",
 *                       "title": null,
 *                       "body": "How does this look?",
 *                       "author": {
 *                         "id": "6419d4fb9b3009ca0ed20ed2",
 *                         "firstName": "Testing",
 *                         "lastName": "Account",
 *                         "email": "6rbua2mgo9farqikgmwzxjt1njybycd8vheip5zlksf3elnd4qvcwx7hsptu0o@test.com",
 *                         "picURL": ""
 *                       },
 *                       "upvotes": [],
 *                       "updatedAt": "03/22/2023"
 *                     }
 *                   ]
 *                 }
 *               ]
 *             }
 *           ]
 *         }
 *       },
 *       {
 *         "id": "641b47da294278ca92b9545a",
 *         "status": "ACTIVE",
 *         "role": "STUDENT",
 *         "module": {
 *           "id": "63e129a9cbfa5080578a7986",
 *           "moduleName": "Some dummy data",
 *           "collections": [
 *             {
 *               "lessons": [
 *                 {
 *                   "id": "64134bd645693aa3e9813e8e",
 *                   "threads": [
 *                     {
 *                       "id": "63e3f79631115da3472a72dc",
 *                       "title": "this is testing",
 *                       "body": "testin ALMP-555",
 *                       "author": {
 *                         "id": "63dabf67020a625cc55f64ff",
 *                         "firstName": "This",
 *                         "lastName": "IsMe",
 *                         "email": "perm@test.user",
 *                         "picURL": null
 *                       },
 *                       "upvotes": [
 *                         {
 *                           "id": "63da9e40020a625cc55f64c5"
 *                         },
 *                         {
 *                           "id": "63e51cbd14406c6ad63f73a6"
 *                         },
 *                         {
 *                           "id": "63e51cbd48df9640d9efccdb"
 *                         }
 *                       ],
 *                       "updatedAt": "03/22/2023"
 *                     },
 *                     {
 *                       "id": "641c6f4f3985a78ee17cbca0",
 *                       "title": "Hydration",
 *                       "body": "How does SWR even work?",
 *                       "author": {
 *                         "id": "63da9e40020a625cc55f64c5",
 *                         "firstName": "DANIEL B.",
 *                         "lastName": "PAPP",
 *                         "email": "dpapp001@odu.edu",
 *                         "picURL": "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
 *                       },
 *                       "upvotes": [],
 *                       "updatedAt": "03/23/2023"
 *                     },
 *                     {
 *                       "id": "641c702367ae8870fbad429e",
 *                       "title": "This is a very long post",
 *                       "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus urna leo, at aliquam risus cursus eu. Quisque condimentum hendrerit eleifend. Nulla facilisi. Aliquam dictum feugiat est eu tristique. Aenean vulputate non elit vel pulvinar. Nullam vulputate eget sem vitae vestibulum. Praesent mauris lectus, sodales ac euismod sit amet, aliquam ac lorem. Maecenas et fermentum quam. Pellentesque ac mi quis arcu suscipit commodo vel id nulla. Sed pretium suscipit quam, ac laoreet sapien egestas a. Proin tincidunt velit quis purus ornare, non commodo diam luctus.  Maecenas volutpat tincidunt est ac consectetur. In eget ullamcorper orci. Fusce vitae rutrum mauris. Vivamus odio nisl, lobortis eu sem eget, ultricies vehicula eros. Pellentesque sed sagittis arcu, id efficitur nunc. Etiam ac maximus sapien, ac cursus metus. Curabitur nec sapien mollis tellus posuere tristique ut id orci.  Aliquam condimentum dignissim leo. Pellentesque interdum, neque a pulvinar interdum, lacus nibh iaculis arcu, eget gravida velit erat id libero. Quisque mauris ligula, pharetra eu est non, iaculis fringilla lorem. Sed interdum accumsan nibh quis facilisis. Nunc nec ante sed turpis congue consectetur. Duis quis egestas augue, vitae cursus mauris. Phasellus eu porttitor turpis, a rhoncus ex.",
 *                       "author": {
 *                         "id": "63da9e40020a625cc55f64c5",
 *                         "firstName": "DANIEL B.",
 *                         "lastName": "PAPP",
 *                         "email": "dpapp001@odu.edu",
 *                         "picURL": "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
 *                       },
 *                       "upvotes": [],
 *                       "updatedAt": "03/23/2023"
 *                     },
 *                     {
 *                       "id": "641c712a3985a78ee17cbca1",
 *                       "title": "More data",
 *                       "body": "There is so many more things to talk about",
 *                       "author": {
 *                         "id": "63da9e40020a625cc55f64c5",
 *                         "firstName": "DANIEL B.",
 *                         "lastName": "PAPP",
 *                         "email": "dpapp001@odu.edu",
 *                         "picURL": "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
 *                       },
 *                       "upvotes": [],
 *                       "updatedAt": "03/23/2023"
 *                     },
 *                     {
 *                       "id": "641c71563985a78ee17cbca2",
 *                       "title": "CATS CATS CATS",
 *                       "body": "And sometimes switches in french and say 'miaou' just because well why not munch, munch, chomp, chomp. Ooooh feather moving feather! car rides are evil. Going to catch the red dot today going to catch the red dot today hiding behind the couch until lured out by a feathery toy. Morning beauty routine of licking self leave fur on owners clothes trip on catnip but bite nose of your human all of a sudden cat goes crazy. Human is washing you why halp oh the horror flee scratch hiss bite favor packaging over toy so has closed eyes but still sees you and chirp at birds or be superior. Car rides are evil demand to be let outside at once, and expect owner to wait for me as i think about it, crash against wall but walk away like nothing happened have secret plans bawl under human beds yet pooping rainbow while flying in a toasted bread costume in space. Slap owner's face at 5am until human fills food dish freak human out make funny noise mow mow mow mow mow mow success now attack human. Eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap meowsiers. Sweet beast jump off balcony, onto stranger's head. Drool under the bed. Jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water paw at your fat belly so throwup on your pillow. Stand in front of the computer screen destroy the blinds. Kitty loves pigs run up and down stairs yet at four in the morning wake up owner meeeeeeooww scratch at legs and beg for food then cry and yowl until they wake up at two pm jump on window and sleep while observing the bootyful cat next door that u really like but who already has a boyfriend end up making babies with her and let her move in yet scratch the postman wake up lick paw wake up owner meow meow",
 *                       "author": {
 *                         "id": "63da9e40020a625cc55f64c5",
 *                         "firstName": "DANIEL B.",
 *                         "lastName": "PAPP",
 *                         "email": "dpapp001@odu.edu",
 *                         "picURL": "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
 *                       },
 *                       "upvotes": [],
 *                       "updatedAt": "03/23/2023"
 *                     }
 *                   ]
 *                 }
 *               ]
 *             }
 *           ]
 *         }
 *       }
 *     ]
 *   }
 * }
 */
