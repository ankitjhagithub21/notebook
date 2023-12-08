import React from 'react'

const About = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <img
                            alt="content"
                            className="object-cover object-center h-full w-full"
                            src="https://images.unsplash.com/photo-1456324463128-7ff6903988d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">

                            <div className="flex flex-col items-center text-center justify-center gap-2">
                                <img src="https://ankitjha.vercel.app/profile.jpg" alt="logo" width={100} className='rounded-full' />
                                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                                    Ankit Jha
                                </h2>
                                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                                <p className="text-base">
                                Hello, I'm Ankit Jha, a highly motivated and skilled MERN Stack Developer with a passion for crafting scalable and efficient web applications.
                                </p>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left flex flex-col gap-3">
                            <h2 className='text-lg'>Overview</h2>
                            <p>Welcome to our application! This platform was built to help you manage your notes effectively. Whether it's for work, study, or personal use, our goal is to provide a simple and user-friendly experience.</p>

                            <h2 className='text-lg fw-bold'>Features</h2>
                            <ul className='list-disc p-2 text-left'>
                                <li>Create new notes with a title and description.</li>
                                <li>Edit existing notes to update their content.</li>
                                <li>Delete notes that you no longer need.</li>
                                <li>Persist notes data in localStorage for data retention across sessions.</li>

                            </ul>


                            <h2 className='text-lg'>Developed by</h2>
                            <p>This application was developed by <a className="text-indigo-500 inline-flex items-center" target='_blank' href='https://ankitjha.vercel.app/'>
                                Ankit Jha

                            </a></p>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About