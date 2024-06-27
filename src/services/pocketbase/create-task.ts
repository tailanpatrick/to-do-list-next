import pb from "@/lib/pocketbase";
import { TaskProps } from "@/types/types";

export const createTask = async (task: TaskProps) => {
    const record = await pb.collection('task').create({
        title: task.title,
        completed: task.completed,
        user: pb.authStore.model?.id
    });

    const createdTask: TaskProps = {
        id: record.id,
        title: record.title,
        completed: record.completed,
        userId: record.user
    };

    return createdTask;
}