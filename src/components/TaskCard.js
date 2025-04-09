import { useRouter } from "next/navigation";
import { useTasks } from "../context/TasksContext";
import { toast } from "react-hot-toast"

export const TaskCard = ({ task }) => {
  const router = useRouter();
  const { deleteTask } = useTasks();

  return (
    <div
      className="bg-gray-700 hover:gb-slate-600 cursor-pointer px-20 py-5 m-2"
      onClick={() => router.push(`/edit/${task.id}`)}
    >
      <div className="flex justify-between">
        <h1>{task.title}</h1>
        <div className="flex gap-2">
          <button
            className="bg-blue-600 hover:bg-blue-500 px-3 py-1 inline-flex items-center"
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/edit/${task.id}`);
            }}
          >
            Edit
          </button>
          <button
            className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center"
            onClick={(e) => {
              e.stopPropagation();
              const accept = window.confirm("Are you sure?");
              if (accept) {
                deleteTask(task.id);
                toast.success("Task deleted successfully");
              }
            }}
          >
            Delete
          </button>
        </div>
      </div>
      <p className="text-gray-300">{task.description}</p>
      <span className="text-gray-400 text-xs">{task.id}</span>
    </div>
  );
};
