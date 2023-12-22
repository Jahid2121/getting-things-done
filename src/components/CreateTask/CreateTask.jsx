import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/UseAxiosPublic";
import { FaPlusCircle } from "react-icons/fa";
import Swal from "sweetalert2";

const CreateTask = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    console.log(data);

    const mealData = {
      task: data.task,
      description: data.description,
      priority: data.priority,
    };
    console.log(mealData);

    const mealRes = await axiosPublic.post("/tasks", mealData);

    console.log(mealRes.data);
    if (mealRes.data.insertedId) {
      Swal.fire({
        title: "Done!",
        text: "Task created successfully!",
        icon: "success"
      });
      reset();
    }
  };

  return (
    <form className="text-black" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-6">
        {/* task */}
        <div className="form-control w-full my-6">
          <label className="label">
            <span className="label-text">task</span>
          </label>
          <input
            type="text"
            placeholder="task"
            {...register("task", { required: true })}
            required
            className="input input-bordered w-full"
          />
        </div>

        {/* priority */}
        <div className="form-control text-black w-full my-6">
          <label className="label">
            <span className="label-text">priority</span>
          </label>
          <select
            defaultValue="Low"
            {...register("priority", { required: true })}
            className="select select-bordered w-full"
          >
            <option disabled value="default">
              Select a priority
            </option>
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select>
        </div>
        </div>
        
      <div className="flex gap-6">
        {/* description */}
        <div className="form-control w-full my-6">
          <label className="label">
            <span className="label-text">description</span>
          </label>
          <textarea
            type="text"
            placeholder="description"
            {...register("description", { required: true })}
            required
            className="input input-bordered w-full"
          />
        </div>
      </div>

  
      

      <button type="submit" className="btn mr-16 mb-10">
        Add Task <FaPlusCircle className="ml-4 "></FaPlusCircle>
      </button>
    </form>
  );
};

export default CreateTask;
