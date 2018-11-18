
export const typeDefs: string = `
type Project {
updatedAt: String
creator: String
title: String
description: String
features: [String]
type: String
category: String
tags: [String]
}
`;

export const queries: string = `
projects: [Project!]!
project(id: String!): Project!
`;

export const mutations: string = `
createProject(updatedAt: String, creator: String, title: String, description: String, features: [String], type: String, category: String, tags: [String]): Project
`;
