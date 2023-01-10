import { v4 as uuidv4 } from 'uuid';

const addId = (el) => ({ id: uuidv4(), ...el });
const addIds = (list) => list.map(addId);

export default addIds;