import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateNutritionService } from '../services/CreateNutritionService'

export interface DataProps {
    name: string;
    weight: string;
    height: string;
    age: string;
    gender: string;
    objective: string;
    level: string;
}

class CreateNutritionContttroller{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { name, weight, height, age, gender, objective, level } = request.body as DataProps;

        const createNutrition = new CreateNutritionService();

        const nutrition = await createNutrition.execute({
            name,
            weight,
            height,
            age,
            objective,
            level,
            gender
        });

        reply.send(nutrition);
    }
}

export { CreateNutritionContttroller}