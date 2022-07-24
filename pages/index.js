import getUserSession from "../utils/gunDB/getUserSession";
export default function Home() {
  return <h1>Loading...</h1>;
}

export const getServerSideProps = async (context) => {
  let sessionDetails = await getUserSession();
  return {
    redirect: {
      destination: sessionDetails ? "/home" : "/login",
      permanent: false,
    },
  };
};
