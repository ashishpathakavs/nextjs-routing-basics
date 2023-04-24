import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
  const router = useRouter();
  console.log(router.pathname, router.query);

  return <div>PortfolioProjectPage</div>;
};

export default PortfolioProjectPage;
