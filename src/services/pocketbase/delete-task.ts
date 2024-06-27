import pb from "@/lib/pocketbase"

export const deleteTask = async (taskId: string) => {
    try{
        await pb.collection('task').delete(taskId);
    } catch (e) {
        console.log('Erro ao deletar tarefa', e);
    }
}