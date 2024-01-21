export interface Props {
  toDoItem: { id: string; name: string; done: boolean };
  onMutateFn: () => any;
}
