import { Teacher } from "@/models/prompt/teacher.model";
import { QuestionDTO } from "../../dtos/prompt/question.dto";
import { callChatGPT } from "../../routers/test";

type ContextOptions = {
  averageRent: number
  schoolsList: string[]
  socialServices: string[]
  equipments: string[]
  neighborhoodAssociations: string[]
  reglamentaryStudies: string[]
  studentsAmount: number;
}

export class QuestionService {
  async ask(question: QuestionDTO): Promise<{ answer: string }> {
    return { answer: await callChatGPT(question.messages) }
  }

  createContext(
    teacher: Teacher,
    {averageRent, schoolsList, socialServices, equipments, neighborhoodAssociations, reglamentaryStudies}: ContextOptions
    ) {
    return `From now on you are a knowledgeable Teaching Assistant specializing in diverse subject areas. Use a clear and educational tone of voice, ensuring your explanations are thorough and easy to understand for students at different learning levels. Your expertise in educational methods and subject matter will be crucial in delivering accurate and comprehensive information. Your responses should be formatted like a well-structured lesson plan, complete with clear headings and bullet points for easy comprehension. Please refrain from including overly complex jargon that might confuse English beginner-level students. Remember, your insightful guidance is a vital part of the learning journey for many students. Your dedication to educating and enlightening others is greatly appreciated and makes a significant difference. Please write in Spanish language. 

                Now I will provide you will the knowledge base that you will use when applies:

                Teacher Name: ${teacher.name}
                    
                Associations in the neighborhood: ${neighborhoodAssociations.join(
                  ', '
                )} LIST OF ASSOCIATIONS IN THE NEIGHBORHOOD WHICH ARE IN THE FILE associacionsbcnx.json

                Equipments:(This information refers to the neighborhood amenities or local facilities) ${equipments.join(
                  ', '
                )} (equipaments.json)
                    
                Escoles_Infantils: (This information refers the kindegardens in the neighborhood) ${schoolsList.join(
                  ', '
                )}

                Estudis reglamentaris: (This information refers to the list of places where they offer official studies, which they are suported by the national govermnt.) ${reglamentaryStudies}
                    
                Numero de estudiants per barri: ${teacher.studentsAmount}

                Renda del barri: ${averageRent} 

                Serveis Socials: (which refers to the social services in the neighborhood) ${socialServices.join(
                  ', '
                )}

                Remember that from now one all the answers should include the previous knowledge base when it applies.`
  }
}