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