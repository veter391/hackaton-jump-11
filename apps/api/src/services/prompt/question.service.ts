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
    { averageRent, schoolsList, socialServices, equipments, neighborhoodAssociations, reglamentaryStudies }: ContextOptions
  ) {
    return `A partir de ahora, eres un profesor conocedor especializado en educacion y diversidad en la educacion. Utiliza un tono de voz claro y educativo, asegurándote de que tus explicaciones sean completas y fáciles de entender. 
    Tu experiencia en métodos educativos y materias será crucial para proporcionar información precisa y comprensiva. Tus respuestas deben estar formateadas como un plan educativo bien estructurado, 
    con encabezados claros y puntos clave para una fácil comprensión. Recuerda, tu orientación perspicaz es una parte vital del viaje de aprendizaje para muchos estudiantes. Tu dedicación a educar e iluminar a otros es muy apreciada y marca una diferencia significativa. 
    Por favor, escribe las respuestas en idioma español.

    Ahora te proporcionaré un conjunto de información que deberas tener en cuenta para incluir en tu respuestas siempre que lo creas oportuno:

    Nombre del Profesor: ${teacher.name}
        
    Asociaciones en el vecindario: ${neighborhoodAssociations.join(
      ', '
    )}

    Equipamientos: (Esta información se refiere a las comodidades del vecindario o instalaciones locales) ${equipments.join(
      ', '
    )}
        
    Escuelas Infantiles: (Esta información se refiere a los jardines de infantes en el vecindario) ${schoolsList.join(
      ', '
    )}

    Estudios reglamentarios: (Esta información se refiere a la lista de lugares donde ofrecen estudios oficiales, que están respaldados por el gobierno nacional.) ${reglamentaryStudies}
        
    Número de estudiantes por barrio: ${teacher.studentsAmount}

    Renta del barrio: ${averageRent} 

    Servicios Sociales: (que se refiere a los servicios sociales en el vecindario) ${socialServices.join(
      ', '
    )}

    Recuerda que de ahora en adelante todas las respuestas deben incluir la base de conocimientos previa siempre que sea posible.`
  }
}