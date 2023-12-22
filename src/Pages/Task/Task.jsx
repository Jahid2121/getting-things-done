import UseTask from "../../hooks/UseTask";

const Task = () => {
    const [tasks, refetch] = UseTask()
  return (
    <div>
      {tasks?.map(task => 
        <div key={task._id}>
          <div className="card mb-5  image-full">
  <div className="card-body">
    <h2 className="card-title">{task.task}</h2>
    <p>{task.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"></button>
    </div>
  </div>
</div>
        </div>
      )}
    </div>
  );
};

export default Task;