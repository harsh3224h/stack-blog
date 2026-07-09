import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from "../components"
import { Link } from 'react-router';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.rows)
            }
            // console.log(posts.rows)
        })
    }, [])

    if (!posts || posts.length === 0) {
        return (
            <div className="w-full min-h-[60vh] flex items-center justify-center">
                <Container>
                    <div className="max-w-md mx-auto text-center flex flex-col items-center justify-center p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
                        {/* Elegant Icon Placeholder */}
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                        </div>

                        {/* Text Content */}
                        <h1 className="text-2xl font-bold text-gray-800 tracking-tight mb-2">
                            No posts published yet
                        </h1>
                        <p className="text-gray-500 text-sm mb-6 max-w-sm">
                            Become the first to share your thoughts, stories, or ideas with the world on Scriba.
                        </p>

                        {/* Action Button */}
                        <Link
                            to="/add-post"
                            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-colors duration-200 shadow-sm"
                        >
                            Create a Post
                        </Link>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="flex flex-wrap">
            <div className="w-full block">
                <Container>
                    <div className="flex flex-wrap">
                        {posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard post={post} />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Home