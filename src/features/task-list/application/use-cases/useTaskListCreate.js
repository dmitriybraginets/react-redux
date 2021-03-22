import { useDialogContext } from "features/dialog/application/context/useDialogContext";
import { useEffect } from "react";
import { TaskListCreateDialog } from "../components/TaskListCreateDialog";

export function useTaskListCreate() {
  const {
    dialogOpenHandler,
    dialogRegisterHandler,
    dialogUnregisterHandler,
  } = useDialogContext();

  useEffect(() => {
    dialogRegisterHandler('task-list/create', TaskListCreateDialog);

    return () => dialogUnregisterHandler('task-list/create')

  }, [dialogRegisterHandler, dialogUnregisterHandler]);

  return {
    createTaskList: () => {
      dialogOpenHandler("task-list/create");
    },
  };
}
