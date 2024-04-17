import { useState } from "react";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar";
import SearchPage from "./components/SearchPage/SearchPage";
import UserRepoTable from "./components/TablePage/UserRepoTable";
import RepoContributorDetailPage from "./components/RepoContributorDetailPage/RepoContributorDetailPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState();
  const [repoId, setRepoId] = useState();
  console.log("Inside App-------------------------------->", userId);

  return (
    <article className="app-article">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage setUserId={setUserId} />} />
        {userId && (
          <Route
            path={`/repo/:userId`}
            element={<UserRepoTable userId={userId} setRepoId={setRepoId}/>}
          />
        )}
        {repoId && (
          <Route path={ `/repo/:userId/:repoId`} element = {<RepoContributorDetailPage userId={userId} repoId={repoId}/>}>

          </Route>
        )}
      </Routes>
      <Footer navigate={navigate} />
    </article>
  );
}

export default App;
