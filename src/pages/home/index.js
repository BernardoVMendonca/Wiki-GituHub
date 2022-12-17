import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Container } from "./styles";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Item } from "../../components/itemRepo";
import { api } from "../../services/api";
const Home = () => {
  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState("");

  const handleRemove = (e) => {
    let index = 0;
    const isExist = repos.filter((repo) => {
      if (repo.id.toString() !== e.target.id.toString()) {
        console.log(repo.id)
        console.log(e.target.id)
        return repo; 
      }
    });
    console.log(isExist)
    setRepos(isExist);
  };
  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);
    if (data.id) {
      const isExist = repos.find((repo) => repo.id === data.id);

      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        return;
      } else {
        alert("Repositório já existente ou não encontrado");
      }
    }
  };
  return (
    <Container>
      <img src={logo} width={72} height={72} />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <Item key={repo.id} repo={repo} onClick={handleRemove} />
      ))}
    </Container>
  );
};

export { Home };
