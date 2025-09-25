import Hero from "./components/Hero/Hero";
import Mission from "./components/Mission/Mission";
import Why from "./components/Why/Why";
import Objectives from "./components/Objectives/Objectives";
import Goals from "./components/Goals/Goals";
import Areas from "./components/Areas/Areas";
import Implementation from "./components/Implementation/Implementation";

export default function Home() {
  return (
    <div >
      <main >
        <Hero/>
        <Mission/>
        <Why/>
        <Objectives/>
        <Goals/>
        <Areas/>
        <Implementation/>
      </main>
      
    </div>
  );
}
