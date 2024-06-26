import mongoose from "mongoose";

export interface Video{
    _id?: mongoose.Types.ObjectId;
    title: string,
    category:string,
    description:string,
    tags?:string[],
    videoFile:string,
    isPublished:string,
    uploadedBy: mongoose.Types.ObjectId;
}

export interface Filter {
    title?:string,
    isPublished?: string;
    category?: string[];
    tags?: string[];
    uploadedBy?: mongoose.Types.ObjectId[];
    createdAt?: { start: Date; end: Date };
}

export interface PaginateQuery {
    page: number;
    limit: number;
}

export interface DateRange {
    start: Date; 
    end: Date
}