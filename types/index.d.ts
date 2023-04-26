import { ModuleProgress, Collection } from '@/types/graphql'

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

export interface InstructorProfile {
	id: string
	account?: Nullable<User>
	title?: Nullable<string>
	officeLocation?: Nullable<string>
	officeHours?: Nullable<Nullable<string>[]>
	contactPolicy?: Nullable<string>
	background?: Nullable<string>
	researchInterest?: Nullable<Nullable<string>[]>
	selectedPapersAndPublications?: Nullable<Nullable<string>[]>
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

export interface Course {
	id: string
	name: string
	moduleIDs?: Nullable<Nullable<string>[]>
	required: boolean
	carnegieHours: number
}

export type ModuleBySectionEnrollment = Pick<
	Module,
	'id' | 'name' | 'position'
> & {
	moduleProgress: Array<ModuleProgress>
	collections: Array<Collection>
}

export enum PathStatus {
	DRAFT = 'DRAFT',
	LIVE = 'LIVE',
}

export interface LearningPath {
	id: string
	createdAt: Date
	plan: PlanOfStudy
	planID: string
	paths: Path[]
}

export interface Path {
	id: string
	createdAt: Date
	updatedAt: Date
	course: CoursePath
	status: PathStatus
	hoursSatisfies: number
	learningOutcomes: string[]
}

export interface CoursePath extends Course {
	id: string
	sections: SectionPath[]
}

export interface SectionPath {
	id: string
	name: string
	collections: CollectionPath[]
}

export interface CollectionPath {
	id: string
	name: string
	modules: ModulePath[]
}

export interface ModulePath extends Module {
	id: string
	enrollmentID?: Nullable<string>
}

type Nullable<T> = T | null
