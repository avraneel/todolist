import { Todo } from "./modules/todo";

const t1 = new Todo("cook dinner", 1, "4th jan, 2026", "Cook some boiled eggs");

t1.print();

t1.markDone();

t1.print();
