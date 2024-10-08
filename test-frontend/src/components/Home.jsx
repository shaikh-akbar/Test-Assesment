import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewsHeadlines = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/news`);
        setHeadlines(response.data);
      } catch (err) {
        toast.error('Failed to fetch headlines. Please try again later.');
      }
    };
    fetchHeadlines();
  }, []);

  return (
    <div className="p-4">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-6 text-center">Latest News Headlines</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {headlines.map((article, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-sm text-gray-600 mb-4">Source: {article.source.name}</p>
              <p className="text-sm text-gray-500 mb-4">
                Published on: {new Date(article.publishedAt).toLocaleDateString()}
              </p>
            </div>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-auto"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsHeadlines;
