import { redirect } from "next/navigation";
const default_category_id = "01";

const Home = async () => {
  // Redirect to default category. Note: Avoid multi-line strings in redirect() as they can introduce invalid characters (like newlines) in HTTP headers.
  redirect(`/category/${default_category_id}`);
};

export default Home;
