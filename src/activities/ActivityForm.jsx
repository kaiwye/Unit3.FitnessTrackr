import useMutation from "../api/useMutation";

export default function ActivityForm() {
  const {
    mutate: add,
    data,
    loading,
    error,
  } = useMutation("POST", "/activities", ["allActivities"]);

  const addActivity = (formData) => {
    const name = formData.get("name");
    const description = formData.get("description");
    add({ name, description });
  };

  return (
    <>
      <h2>Add a new activity</h2>
      <form action={addActivity}>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Description
          <input type="text" name="description" />
          <button>{loading ? "Adding..." : "Add Activity"}</button>
          {error && <output>{error}</output>}
        </label>
      </form>
    </>
  );
}
