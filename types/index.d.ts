export type Module = {
	id: string;
	moduleNumber: number;
	moduleName: string;
	description: string;
	duration: number;
	intro: string;
	numSlides: number;
	keywords: string[];
	objectives: string[];
	createdAt: Date;
	updatedAt: Date;
	members: ModuleEnrollment[];
	parentModules: Module[];
	subModules: Module[];
	collections: Collection[];
	courseIDs: string[];
}

export type User = {
	id: string;
	openID: string;
	email: string;
	picURL: string | "";
	createdAt?: string;
	firstName: string|null
	lastName: string|null
	middleName?: string|null
	isAdmin?: boolean|null
	isActive?: boolean|null
	plan?: PlanOfStudy | null;
	watchedThreads?: Array<ThreadType | null> | null;
	createdThreads?: Array<ThreadType | null> | null;
}

export type PlanOfStudy = {
	id: string;
	student?: User | null;
	modules?: Array<ModuleEnrollment | null> | null;
	modulesLeft?: Array<ModuleEnrollment | null> | null
}

export type ModuleEnrollment = {
	id: string;
	enrolledAt: Date;
	role: "STUDENT" | "TEACHER" | "GRADER";
	status: "ACTIVE" | "INACTIVE";
	module: Module;
	plan?: PlanOfStudy | null;
	inactivePlan?: PlanOfStudy | null;
}

export type Collection = {
	id: string;
	name: string;
	createdAt: Date;
	updatedAt: Date;
	lessons?: Nullable<Nullable<Lesson>[]>;
	module: Module;
	moduleID: string;
	position?: Nullable<number>;
}

export type ThreadType = {
	id: string;
	title?: string | null;
	author: User;
	body: string;
	comments?: Array<ThreadType | null> | null;
	upvotes?: Array<User | null>;
	usersWatching?: Array<User | null>;
	parentLesson?: Nullable<Lesson>;
	createdAt: Date;
	updatedAt: Date;
	parentThread?: Nullable<ThreadType>;
	parentThreadID?: Nullable<string>;
}

type Lesson = {
	id: string;
	name: string;
	threads?: Nullable<Nullable<ThreadType>[]>;
	position?: Nullable<number>;
}

type Nullable<T> = T | null;