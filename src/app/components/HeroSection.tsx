import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { databases } from "@/models/server/config";
import { db, questionAttachmentBucket, questionCollection } from "@/models/name";
import { Query } from "node-appwrite";
import slugify from "@/utils/slugify";
import { storage } from "@/models/client/config";
import HeroSectionHeader from "./HeroSectionHeader";

export default async function HeroSection() {
    const questions = await databases.listDocuments(db, questionCollection, [
        Query.orderDesc("$createdAt"),
        Query.limit(15),
    ]);

    const products = questions.documents.map(q => {
        const thumbnail = storage.getFileView(
            questionAttachmentBucket,
            q.attachmentId
        );
        console.log("Hero thumbnail URL", q.$id, thumbnail);
        return {
            title: q.title,
            link: `/questions/${q.$id}/${slugify(q.title)}`,
            thumbnail,
        };
    });

    return <HeroParallax header={<HeroSectionHeader />} products={products} />;
}
