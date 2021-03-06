interface ISessionNote {
	updatedAt?: string;
	sessionId?: string;
	creator?: string;
	title?: string;
	description?: string;
	type?: string;
	category?: string;
	tags?: Array<string>;
}

export default ISessionNote;

