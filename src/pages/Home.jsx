import React, { useState } from "react";

const carouselItems = [
    {
        title: "Find the best education",
        description: "Search kindergartens, schools, and universities nearby",
        emoji: "🎓",
    },
    {
        title: "Housing made easy",
        description: "Locate apartments close to your preferred institutions",
        emoji: "🏠",
    },
    {
        title: "Smart recommendations",
        description: "Get personalized suggestions based on age and preferences",
        emoji: "💡",
    },
];

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () =>
        setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    const prevSlide = () =>
        setCurrentSlide((prev) =>
            prev === 0 ? carouselItems.length - 1 : prev - 1
        );

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* NAVBAR */}
            <header className="bg-white shadow sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-blue-800">EduZone</h1>
                    <nav className="space-x-6 hidden md:flex text-gray-700">
                        <a href="#how" className="hover:text-blue-600">
                            How it works
                        </a>
                        <a href="#features" className="hover:text-blue-600">
                            Features
                        </a>
                        <a href="#ideas" className="hover:text-blue-600">
                            Ideas
                        </a>
                        <a href="#cta" className="hover:text-blue-600">
                            Get Started
                        </a>
                    </nav>
                    <div className="space-x-4">
                        <button className="text-gray-700 hover:text-blue-600">
                            Login
                        </button>
                        <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                            Register
                        </button>
                    </div>
                </div>
            </header>

            {/* HERO CAROUSEL */}
            <section className="max-w-7xl mx-auto px-6 py-16 relative">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4 text-blue-800">
                        {carouselItems[currentSlide].title}
                    </h2>
                    <p className="text-gray-600 text-lg mb-8">
                        {carouselItems[currentSlide].description}
                    </p>
                    <div className="text-6xl mb-8">
                        {carouselItems[currentSlide].emoji}
                    </div>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <button className="bg-blue-800 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
                            Start searching
                        </button>
                        <button className="border border-blue-800 text-blue-800 px-6 py-3 rounded-xl hover:bg-blue-50">
                            How it works
                        </button>
                    </div>
                </div>
                {/* Carousel arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 text-3xl text-blue-800 hover:text-blue-600"
                >
                    ◀
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 text-3xl text-blue-800 hover:text-blue-600"
                >
                    ▶
                </button>
            </section>

            {/* HOW IT WORKS */}
            <section id="how" className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-3xl font-bold text-center mb-12 text-blue-800">
                        How EduZone works
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 border border-gray-200 rounded-2xl text-center hover:shadow-lg transition">
                            <div className="text-4xl mb-4">👶</div>
                            <h4 className="font-semibold text-xl mb-2 text-blue-800">
                                Enter age and gender
                            </h4>
                            <p className="text-gray-600">
                                We understand whether you need a kindergarten, school or university
                            </p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-2xl text-center hover:shadow-lg transition">
                            <div className="text-4xl mb-4">🏫</div>
                            <h4 className="font-semibold text-xl mb-2 text-blue-800">
                                Choose education
                            </h4>
                            <p className="text-gray-600">
                                Search by name, district, public or private institutions
                            </p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-2xl text-center hover:shadow-lg transition">
                            <div className="text-4xl mb-4">🏠</div>
                            <h4 className="font-semibold text-xl mb-2 text-blue-800">
                                Find housing nearby
                            </h4>
                            <p className="text-gray-600">
                                If needed, we help you find apartments close to the school
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section id="features" className="max-w-7xl mx-auto px-6 py-16">
                <h3 className="text-3xl font-bold text-center mb-12 text-blue-800">
                    Why EduZone?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="p-5 bg-white rounded-xl shadow text-center hover:shadow-lg transition">
                        📍<p className="mt-2 font-medium text-blue-800">Map integration</p>
                    </div>
                    <div className="p-5 bg-white rounded-xl shadow text-center hover:shadow-lg transition">
                        ❤️<p className="mt-2 font-medium text-blue-800">Save favorites</p>
                    </div>
                    <div className="p-5 bg-white rounded-xl shadow text-center hover:shadow-lg transition">
                        🔍<p className="mt-2 font-medium text-blue-800">Smart search</p>
                    </div>
                    <div className="p-5 bg-white rounded-xl shadow text-center hover:shadow-lg transition">
                        ✅<p className="mt-2 font-medium text-blue-800">Verified listings</p>
                    </div>
                </div>
            </section>

            {/* IDEA SECTION */}
            <section id="ideas" className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-3xl font-bold text-center mb-12 text-blue-800">
                        Our Ideas
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-2xl shadow text-center hover:shadow-lg transition">
                            💡<p className="mt-4 font-semibold text-blue-800">Personalized learning</p>
                            <p className="text-gray-600 mt-2">Suggest institutions based on age, location, and interests</p>
                        </div>
                        <div className="p-6 bg-white rounded-2xl shadow text-center hover:shadow-lg transition">
                            🌐<p className="mt-4 font-semibold text-blue-800">Integrated maps</p>
                            <p className="text-gray-600 mt-2">Show housing and education options together</p>
                        </div>
                        <div className="p-6 bg-white rounded-2xl shadow text-center hover:shadow-lg transition">
                            🏆<p className="mt-4 font-semibold text-blue-800">Verified listings</p>
                            <p className="text-gray-600 mt-2">Ensure quality and trust for parents and students</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="cta" className="bg-blue-800 text-white py-16 text-center">
                <h3 className="text-3xl font-bold mb-4">
                    Ready to get started?
                </h3>
                <p className="mb-6">
                    Create an account and find the best option today
                </p>
                <button className="bg-white text-blue-800 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100">
                    Register now
                </button>
            </section>

            {/* FOOTER */}
            <footer className="bg-blue-900 text-white text-center py-6">
                © 2026 EduZone. All rights reserved.
            </footer>
        </div>
    );
};

export default Home;
