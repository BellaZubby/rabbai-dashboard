import { LucideIcon } from "lucide-react";


export interface SubjectsType {
    subject: string;
  }
export interface ScoreType {
  score: number;
}
export interface SubjectType {
  subject: string;
}
export interface TopicType {
  topic: number;
}
export interface PastQuestionType {
  pastQuestion: number;
}
export interface SuccessRateType {
  rate: number;
}
export interface ChatType {
  icon: LucideIcon;
  name: string;
  text: string;
  reply: string

}
export interface ScoreboardSubjectType {
 subject: string
}
export interface ScoreboardTopicType {
  topic: number
}
export interface ScoreboardQuestionType {
  question: number
}
export interface ScoreboardSigninType {
  sign: number
}
export interface ScoreboardEnrolledType {
  enrolled: number
}
export interface ScoreboardSuccessRateType {
  rate: number
}
export interface TopicSubjectsType {
  subject: string
}
export interface headerType {
  header: string;
}
export interface detailsType {
  subject: string;
  topic: number;
  pastQuestion: number;
  successRate: number;

}

export interface OverallDetailType {
  subject: string;
  topic: number;
  question: number;
  signIn: number;
  enrolled: number;
  successRate: number

}

export interface ratingType {
  subject: string;
  score: number;
}