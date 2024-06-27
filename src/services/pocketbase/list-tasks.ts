import pb from '@/lib/pocketbase';
import { TaskProps } from '@/types/types';
import { getUserId } from './auth';

export const getTasks = async () => {
    try {
        const userId = await getUserId();
        const records = await pb.collection('task').getFullList({
            filter: `user = "${userId}"`,
            sort: 'created', 
        });

        return records.map(record => ({
            id: record.id,
            title: record.title,
            completed: record.completed,
        } as TaskProps));

    } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
        throw new Error('Não foi possível buscar as tarefas.');
    }
};