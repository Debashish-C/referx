import Cards from "@/cards";
import Home from "@/components/Home";
import Posts from "@/Posts";


export default function App() {
  return (
    <div className="container w-full mx-auto p-4">
      <Home />
      <div className="flex justify-center">
      <Posts />
      </div>
    </div>
  );
}
