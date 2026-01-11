import { useEffect, useState } from "react";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";

export default function Home() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/ricardoarquimedes/repos?sort=updated&per_page=6")
      .then((r) => r.json())
      .then((data) => setRepositories(Array.isArray(data) ? data : []))
      .catch(() => setRepositories([]));
  }, []);

  return (
    <ContainerBlock title="Ricardo Arquimedes - Developer" description="...">
      <Hero />
      <FavouriteProjects />
      {/* <LatestCode repositories={repositories} /> */}
    </ContainerBlock>
  );
}
