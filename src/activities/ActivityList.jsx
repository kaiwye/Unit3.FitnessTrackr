import useQuery from "../api/useQuery";
import { useAuth } from "../auth/AuthContext";
import useMutation from "../api/useMutation";

export default function ActivityList() {
  const {
    data: activities,
    loading,
    error,
  } = useQuery("/activities", "allActivities");
  if (loading || !activities) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;
  return (
    <ul>
      {activities.map((activity) => (
        <ActivityListItem activity={activity} key={activity.id} />
      ))}
    </ul>
  );
}

function ActivityListItem({ activity }) {
  const { token } = useAuth();

  const {
    mutate: deleteActivity,
    loading,
    error,
  } = useMutation("DELETE", "/activities/" + activity.id, ["allActivities"]);
  console.log(token);

  return (
    <li>
      <p>{activity.name}</p>
      {token && (
        <button onClick={() => deleteActivity()}>
          {loading ? "Deleting :(" : error ? error : "Delete"}
        </button>
      )}
    </li>
  );
}
