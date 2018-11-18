import mongoose from 'mongoose';
import ISessionInvite from '../interfaces/models/ISessionInvite';

export interface ISessionInviteDocument extends mongoose.Document, ISessionInvite {}

export interface ISessionInviteModel extends mongoose.Model<ISessionInviteDocument> {}

const SessionInviteSchema: mongoose.Schema = new mongoose.Schema({
	updatedAt: {
		type: mongoose.Schema.Types.ObjectId,
		required: false,
		default: null,
		ref: '',
	},
	creator: {
		type: mongoose.Schema.Types.ObjectId,
		required: false,
		default: null,
		ref: '',
	},
	destination: {
		type: mongoose.Schema.Types.ObjectId,
		required: false,
		default: null,
		ref: '',
	},
	sessionId: {
		type: mongoose.Schema.Types.ObjectId,
		required: false,
		default: null,
		ref: '',
	},
	title: {
		type: String,
		required: false,
		default: '',
		maxLength: 24,
		minLength: 1
	},
	description: {
		type: String,
		required: false,
		default: '',
		maxLength: 24,
		minLength: 1
	},
	type: {
		type: String,
		required: false,
		default: '',
		maxLength: 24,
		minLength: 1
	},
	category: {
		type: String,
		required: false,
		default: '',
		maxLength: 24,
		minLength: 1
	},
	tags: {
		type: [{
			type: String,
			ref: ''
		}],
		required: false,
		default: [],
	}
}, { versionKey: false });

const SessionInvite: ISessionInviteModel = mongoose.model<ISessionInviteDocument, ISessionInviteModel>('SessionInvite', SessionInviteSchema, 'SessionInvites');

export default SessionInvite;

