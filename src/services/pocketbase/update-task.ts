import pb from "@/lib/pocketbase";
import { TaskProps } from "@/types/types";

export const updateTask = async (task: TaskProps) => {
    try{
        if (!task.id) return;
    
        await pb.collection('task').update(task.id, task);
    } catch (e){
        console.log('Erro ao atualizar tarefas', e)
    }
}