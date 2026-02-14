import QuestionForm from "@/components/QuestionForm";
import React from "react";

const AskQuestionPage = () => {
    return (
        <div className="container mx-auto px-4 pb-20 pt-32">
            <div className="mb-8 max-w-3xl">
                <h1 className="mb-2 text-3xl font-bold">Ask a public question</h1>
                <p className="text-sm text-gray-400">
                    Be specific and imagine you are asking a question to another person. Provide
                    enough details, code, and context so others can help you.
                </p>
            </div>
            <div className="max-w-3xl">
                <QuestionForm />
            </div>
        </div>
    );
};

export default AskQuestionPage;
