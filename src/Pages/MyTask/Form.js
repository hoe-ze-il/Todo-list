import MyTaskCSS from "./MyTask.module.css";
function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Add a Task" />
      <button>Add</button>
    </form>
  );
}

export default Form;
