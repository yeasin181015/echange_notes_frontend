"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import FileIcon from "../../images/file.svg";

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
};

const Notes = () => {
  const [user, setUser] = useState(null);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const details = localStorage.getItem("userDetails");

    if (details) {
      const userDetails = JSON.parse(details);
      setUser(userDetails);
    }
  }, []);

  useEffect(() => {
    // Only fetch resources if user is set
    if (user) {
      fetchMyResources();
    }
  }, [user]);

  const fetchMyResources = async () => {
    console.log(user);
    const response = await axios.get(
      `http://localhost:3002/all-resources/${user?.id}`
    );
    if (response.data) {
      setFiles(response.data);
    }
  };
  const formatTime = (time) => {
    const date = new Date(time);
    return date.toLocaleString("en-US", options);
  };

  const handleDownload = (filePath) => {
    // Open the file URL in a new tab or prompt the download
    window.open(filePath, "_blank");
  };

  if (!user) return null;

  return (
    <div className="h-screen flex items-center justify-center">
      <ul className="min-w-[45%] mx-auto">
        {files.length > 0 &&
          files.map((item) => (
            <li
              key={item.id}
              onClick={() => handleDownload(item.filePath)}
              className="cursor-pointer mb-3 border border-gray-300 shadow-md p-3 rounded-md flex items-center justify-between"
            >
              <div>
                <p>File Name: {item.fileName}</p>
                <p>Uploaded time: {formatTime(item.createdAt)}</p>
              </div>

              <Image
                width={40}
                height={40}
                src={FileIcon}
                alt="Download"
                onClick={() => handleDownload(item.filePath)}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Notes;
