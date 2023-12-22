import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/UseAxiosPublic";
import UseTask from "../../hooks/UseTask";

const Task = () => {
    const [tasks, refetch] = UseTask()
    const axiosPublic = useAxiosPublic()
    const handleDelete = id => {
      Swal.fire({
        title: "Are You Sure? You  want to delete!",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosPublic.delete(`/tasks/${id}`)
      .then(res => {
        console.log(res.data);
        if(res.data.deletedCount){
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Deleted  Successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch()
          
        }
      })
        }
      });
    }
  return (
    <div>
      {tasks?.map(task => 
        <div key={task._id}>
          <div className="card mb-5  image-full">
  <div className="card-body">
    <h2 className="card-title">{task.task}</h2>
    <p>{task.description}</p>
    <div className="card-actions justify-end">
      <button onClick={() => handleDelete(task._id)} className="btn bg-customOrange text-white">Delete</button>
    </div>
  </div>
</div>
        </div>
      )}
    </div>
  );
};

export default Task;