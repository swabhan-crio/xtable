import { useState } from "react";

const XTable = () => {
  const initialData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  const [data, setData] = useState(initialData);

  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateComparison = new Date(b.date) - new Date(a.date);
      return dateComparison !== 0 ? dateComparison : b.views - a.views;
    });

    setData(sortedData);
  };

  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      const viewsComparison = b.views - a.views;
      return viewsComparison !== 0
        ? viewsComparison
        : new Date(b.date) - new Date(a.date);
    });

    setData(sortedData);
  };

  return (
    <div>
      <div>
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
      </div>

      <table>
        <thead>
          <tr>
            <td>
              <h4
                style={{
                  paddingLeft: "15px",
                  marginBottom: "3px",
                  marginTop: "0px",
                }}
              >
                Date
              </h4>
            </td>
            <td>
              <h4 style={{ marginBottom: "3px", marginTop: "0px" }}>Views</h4>
            </td>
            <td>
              <h4 style={{ marginBottom: "3px", marginTop: "0px" }}>Article</h4>
            </td>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.views}</td>
              <td>{entry.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default XTable;