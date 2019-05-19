export type SurveyQuestion = {
    _id: string,
    title: string,
    description?: string,
    questionType: string,
    choices: string[],
    createdAt: string,
    updatedAt: string,
}

export interface SurveyQuestionsService {

    getAllSurveyQuestions(): Promise<SurveyQuestion[]>

}