import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    // load data...
    router.push("/clients/max/projecta");
  }
  return (
    <div>
      <h1>ClientProjectsPage</h1>
      <button onClick={loadProjectHandler}>Load project A</button>
    </div>
  );
};

export default ClientProjectsPage;
