import { createError } from 'apollo-errors';

export const UnknownError = createError('UnknownError', {
	message: 'An unknown error has occurred. Please try again later.'
});

export const LoginError = createError('LoginError', {
	message: 'Login credentials are invalid.'
});

export const ForbiddenError = createError('ForbiddenError', {
	message: 'You are not allowed to do this'
});

export const AuthenticationRequiredError = createError('AuthenticationRequiredError', {
	message: 'You must be logged in to do this'
});

export const AlreadyAuthenticatedError = createError('AlreadyAuthenticatedError', {
	message: 'You are already authenticated'
});
