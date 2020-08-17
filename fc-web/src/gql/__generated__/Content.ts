/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContentImageModerationScore } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: Content
// ====================================================

export interface Content_content_ratingSet_user {
  __typename: "UserType";
  /**
   * The ID of the object.
   */
  id: string;
  displayName: string;
  country: string;
}

export interface Content_content_ratingSet {
  __typename: "RatingType";
  /**
   * The ID of the object.
   */
  id: string;
  createdAt: any | null;
  updatedAt: any | null;
  score1: number;
  score2: number;
  score3: number;
  justification: string | null;
  upvoteCount: number;
  downvoteCount: number;
  user: Content_content_ratingSet_user;
}

export interface Content_content_userRating {
  __typename: "RatingType";
  /**
   * The ID of the object.
   */
  id: string;
  score1: number;
  score2: number;
  score3: number;
  justification: string | null;
  createdAt: any | null;
  upvoteCount: number;
  downvoteCount: number;
}

export interface Content_content {
  __typename: "ContentType";
  /**
   * The ID of the object.
   */
  id: string;
  url: string;
  overallScore: number | null;
  updatedAt: any | null;
  author: string | null;
  searchCount: number;
  title: string | null;
  imageUrl: string | null;
  imageModerationScore: ContentImageModerationScore;
  isBookmarked: boolean | null;
  ratingSet: (Content_content_ratingSet | null)[] | null;
  userRating: Content_content_userRating | null;
}

export interface Content {
  /**
   * The ID of the object
   */
  content: Content_content | null;
}

export interface ContentVariables {
  contentId: string;
}