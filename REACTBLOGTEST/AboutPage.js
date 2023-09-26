import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md min-h-[500px]">
        <h1 className="text-3xl font-semibold mb-4">Welcome to My Personal Blog</h1>
        <p className="text-gray-600 text-lg">
            Hey there,
        </p>
        <p className="text-gray-600 text-lg">
            I'm <span className="text-blue-500 font-semibold">the author</span>, and this is my personal blog. Here, I'll be sharing my thoughts, experiences, and whatever's on my mind.  Thanks for stopping by, and I hope you find something here that resonates with you. Stay tuned for more!
        </p>
    </div>
  );
}

export default AboutPage;
