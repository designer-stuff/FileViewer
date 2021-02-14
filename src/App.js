import React, { useEffect, useState } from "react";
import { getData } from "./services/DataService";
import Content from "./components/Content";
import Thumbnail from "./components/Thumbnail";
import ActionBtn from "./components/ActionBtn";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(0);
  let [currentFile, setCurrentFile] = useState(0);

  useEffect(() => {
    const fileData = [...getData()];
    setData(fileData);
  }, []);

  const handleNext = () => {
    if (currentFile >= data.length - 1) return;
    setCurrentFile(++currentFile);
    setActive(currentFile);
  };

  const handlePrev = () => {
    if (currentFile <= 0) return;
    setCurrentFile(--currentFile);
    setActive(currentFile);
  };

  const handleSelect = (e) => {
    const selectedPos = e.target.dataset.index;
    setCurrentFile(selectedPos);
    setActive(selectedPos);
  };

  const handleDelete = () => {
    const deleteConfirmation = window.confirm(
      "Are you sure you want to delete this file?"
    );
    if (deleteConfirmation) {
      const fileData = [...data];
      const newFileData = fileData.filter((fd) => fd.id !== file.id);
      setData(newFileData);

      if (currentFile == newFileData.length) {
        setCurrentFile(newFileData.length - 1);
        setActive(currentFile);
      }
    }
  };

  const handleDownload = () => {
    fetch(file.url)
      .then((response) => response.blob())
      .then((blob) => (window.location.href = URL.createObjectURL(blob)));
  };

  const file = data[currentFile];

  return (
    <div className="container">
      {data.length && (
        <>
          <div className="wrapper">
            <div className="wrapper-item">
              <Content url={file.url} type={file.file_type} />
            </div>
            <div
              className="wrapper-btn prev"
              onClick={handlePrev}
              title="Previous"
            >
              &lt;
            </div>
            <div className="wrapper-btn next" onClick={handleNext} title="Next">
              &gt;
            </div>
            <ActionBtn
              url={file.url}
              onDelete={handleDelete}
              onDownload={handleDownload}
            />
          </div>
        </>
      )}
      <footer className="footer">
        <div className="thumbnail-container">
          {data.map((d, index) => (
            <Thumbnail
              key={d.id}
              active={active}
              url={d.thumbnailURL}
              select={(e) => handleSelect(e)}
              index={index}
            />
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;
