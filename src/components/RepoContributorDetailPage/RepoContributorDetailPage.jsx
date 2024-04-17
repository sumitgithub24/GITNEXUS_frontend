import { useEffect, useState } from "react";
import "./RepoContributorDetailPage.css";
import axios from "axios";

const RepoContributorDetailPage = ({ userId, repoId }) => {
  const [repoDetail, setRepoDetail] = useState({
    commits: [],
    contributors: {},
    issues: [],
  });

  useEffect(() => {
    const fetchRepoDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/getUsers/${userId}/${repoId}`
        );
        console.log(response);
        const repoDetailData = response.data;
        console.log("inside contri detail--> ", repoDetailData);
        setRepoDetail(repoDetailData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRepoDetail();
  }, [userId, repoId]);

  const { commits, contributors, issues } = repoDetail;

  // Slice the first 10 items
  const first10Commits = commits.slice(0, 10);
  const first10Issues = issues.slice(0, 10);
  const first10Contributors = Object.entries(contributors).slice(0, 10);

  return (
    <div className="detail-contributor">
      <div className="inner-detail-contributor">
        <h1 className="repo-contri-heading">{repoId}</h1>
        <h2 className="repo-contri-heading2">Commits:</h2>
        <table className="repo-contri-table">
          <thead>
            <tr className="repo-contri-tr">
              <th className="repo-contri-th">Author</th>
              <th className="repo-contri-th">Message</th>
            </tr>
          </thead>
          <tbody>
            {first10Commits.map((commit, index) => (
              <tr key={index} className="repo-contri-row">
                <td className="repo-contri-td">{commit.author}</td>
                <td className="repo-contri-td">{commit.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="repo-contri-heading2">Contributors:</h2>
        <table className="repo-contri-table">
          <thead>
            <tr className="repo-contri-tr">
              <th className="repo-contri-th">Contributors</th>
              <th className="repo-contri-th">Contributions</th>
            </tr>
          </thead>
          <tbody>
            {first10Contributors.map(([contributor, count]) => (
              <tr key={contributor} className="repo-contri-row">
                <td className="repo-contri-td">{contributor}</td>
                <td className="repo-contri-td">{count}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="repo-contri-heading2">Issues:</h2>
        <table className="repo-contri-table">
          <thead>
            <tr className="repo-contri-tr">
              <th className="repo-contri-th">Title</th>
              <th className="repo-contri-th">State</th>
              <th className="repo-contri-th">Author</th>
            </tr>
          </thead>
          <tbody>
            {first10Issues.map((issue, index) => (
              <tr key={index} className="repo-contri-row">
                <td className="repo-contri-td">{issue.title}</td>
                <td className="repo-contri-td">{issue.state}</td>
                <td className="repo-contri-td">{issue.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RepoContributorDetailPage;
