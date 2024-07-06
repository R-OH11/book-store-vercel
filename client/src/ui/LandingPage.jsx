import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BookCategory = ({ title, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-300">
        Explore
      </button>
    </div>
  </div>
);

const HomePage = () => {
  const bookCategories = [
    { title: "Fiction", imageUrl: "/images/fiction.jpg" },
    { title: "Non-Fiction", imageUrl: "/images/non-fiction.png" },
    { title: "Mystery", imageUrl: "/images/mystery.jpg" },
    { title: "Science Fiction", imageUrl: "/images/scifi.jpg" },
    { title: "Romance", imageUrl: "/images/romance.jpg" },
    { title: "Biography", imageUrl: "/images/biography.jpg" },
    { title: "History", imageUrl: "/images/history.jpg" },
    { title: "Children Books", imageUrl: "/images/children.jpeg" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-800 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Waterstones</h1>
            <p className="text-xl mb-8">Discover your next favourite book</p>
            <button className="bg-white text-blue-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">
              Browse All Books
            </button>
          </div>
        </section>

        {/* Book Categories Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Explore Book Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {bookCategories.map((category, index) => (
                <BookCategory
                  key={index}
                  title={category.title}
                  imageUrl={category.imageUrl}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Books Section (you can add this later) */}
        {/* <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Books</h2>
            // Add a carousel or grid of featured books here
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
