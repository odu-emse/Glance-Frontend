export type Module = {
	id: string
	moduleNumber?: number
	moduleName?: string
	description?: string
	duration?: number
	intro?: string
	numSlides?: number
	keywords?: string[]
	objectives?: string[]
	createdAt?: Date
	updatedAt?: Date
	members?: ModuleEnrollment[]
	parentModules?: Module[]
	subModules?: Module[]
	collections?: Collection[]
	courseIDs?: string[]
}

export type User = {
	id: string
	openID: string
	email: string
	picURL?: string | ''
	createdAt?: string
	firstName?: string | null
	lastName?: string | null
	middleName?: string | null
	isAdmin?: boolean | null
	isActive?: boolean | null
	plan?: PlanOfStudy | null
	dob: string
	biography: string | null
	phoneNumber: string | null
	social?: Social | null
	watchedThreads?: Array<ThreadType | null> | null
	createdThreads?: Array<ThreadType | null> | null
}

export type Social = {
	id: string
	github?: string | null
	linkedin?: string | null
	portfolio?: string | null
	facebook?: string | null
	twitter?: string | null
}

export type PlanOfStudy = {
	id: string
	student?: User | null
	modules?: Array<ModuleEnrollment | null> | null
	modulesLeft?: Array<ModuleEnrollment | null> | null
}

export type ModuleEnrollment = {
	id: string
	enrolledAt?: Date
	role?: 'STUDENT' | 'TEACHER' | 'GRADER'
	status?: 'ACTIVE' | 'INACTIVE'
	module?: Module
	plan?: PlanOfStudy | null
	inactivePlan?: PlanOfStudy | null
}

export type Collection = {
	id: string
	name?: string
	createdAt?: Date
	updatedAt?: Date
	lessons?: Nullable<Nullable<Lesson>[]>
	module?: Module
	moduleID?: string
	position?: Nullable<number>
}

export type ThreadType = {
	id: string
	title?: string | null
	author?: User
	body?: string
	comments?: Array<ThreadType | null> | null
	upvotes?: Array<User | null>
	usersWatching?: Array<User | null>
	createdAt?: Date
	updatedAt?: Date
	parentThread?: Nullable<ThreadType>
	parentThreadID?: Nullable<string>
	topics: [string]
}

export type Lesson = {
	id: string
	name?: string
	position?: Nullable<number>
	collection?: Collection
	lessonProgress?: Array<LessonProgress>
}

export type LessonProgress = {
	id: string
	status?: number
	completed?: boolean
	createAt?: Date
	updatedAt?: Date
	enrollment?: ModuleEnrollment
	lesson?: Lesson
}

export type LessonByModuleEnrollment = Pick<
	Lesson,
	'id' | 'name' | 'position' | 'collection'
> & {
	lessonProgress: Array<LessonProgress>
}

type Nullable<T> = T | null
