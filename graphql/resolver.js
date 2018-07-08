import { people, getById } from '../db/db';

const resolvers = {
    Query: {
        people: () => people,
        // person: () => getById()
        person: (_, {id}) => getById(id)
    }

};

export default resolvers;
