import ActivityList from "./ActivityList";
import ActivityForm from "./ActivityForm";
import { useAuth } from "../auth/AuthContext";

export default function ActivitiesPage() {
  const { token } = useAuth();
  return (
    <>
      <h1>Activities</h1>
      <ActivityList />
      {token && <ActivityForm />}
    </>
  );
}
