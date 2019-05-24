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

    getAllSurveyQuestions(): Promise<SurveyQuestion[]>;

    getOneSurveyQuestion(id: string): Promise<SurveyQuestion>;

    createSurveyQuestion(title: string, description: string, questionType: string, choices: string[]): Promise<String>;

    deleteSurveyQuestion(id: string): Promise<String>;

    updateSurveyQuestion(id: string, title: string, description: string, questionType: string, choices: string[]): Promise<String>;

}
