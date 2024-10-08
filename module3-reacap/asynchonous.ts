const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data = "Data is fetched";
    if (data) {
      resolve(data);
    } else {
      reject("failed to fetch data");
    }
  });
};

const getPromiseData = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = (await response.json()) as ITodo;
  return data;
};

const getTodoData = async (): Promise<void> => {
  const result = await getTodo();
  console.log(result);
};

getTodoData();
