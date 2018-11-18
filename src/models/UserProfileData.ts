import mongoose from 'mongoose';
import IUserProfileData from '../interfaces/models/IUserProfileData';

export interface IUserProfileDataDocument extends mongoose.Document, IUserProfileData {}

export interface IUserProfileDataModel extends mongoose.Model<IUserProfileDataDocument> {}

const UserProfileDataSchema: mongoose.Schema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: false,
		default: null,
		ref: '',
	},
	about: {
		type: String,
		required: false,
		default: '',
		maxLength: 24,
		minLength: 1
	},
	status: {
		type: String,
		required: false,
		default: '',
		maxLength: 24,
		minLength: 1
	},
	additional: {
		type: String,
		required: false,
		default: '',
		maxLength: 24,
		minLength: 1
	}
}, { versionKey: false });

const UserProfileData: IUserProfileDataModel = mongoose.model<IUserProfileDataDocument, IUserProfileDataModel>('UserProfileData', UserProfileDataSchema, 'UserProfileDatas');

export default UserProfileData;

