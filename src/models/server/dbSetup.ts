import { db } from "../name";
import createAnswerCollection from "./answer.collection";
import createCommentCollection from "./comment.collection";
import createQuestionCollection from "./question.collection";
import createVoteCollection from "./vote.collection";

import { databases } from "./config";

export default async function getOrCreateDB(){
    try {
        await databases.get(db)
        console.log("Database Connected");
    } catch (error: any) {
        // Only try to create if database doesn't exist (404)
        if (error.code === 404) {
            try {
                await databases.create({ databaseId: db, name: db })
                console.log("Database Created");
                await Promise.all([
                    createQuestionCollection(),
                    createAnswerCollection(),
                    createCommentCollection(),
                    createVoteCollection(),
                ])
                console.log("Collection created")
                console.log("Database Connected")
            } catch (createError: any) {
                // If creation fails due to database limit, that's ok - database already exists
                if (createError.code === 403) {
                    console.log("Database already exists (limit reached)");
                } else {
                    console.error("Error creating databases or collection", createError);
                }
            }
        } else if (error.code === 403) {
            // 403 means database exists but we hit the limit - this is fine
            console.log("Database already exists");
        } else {
            console.error("Error getting database", error);
        }
    }
    return databases
}
