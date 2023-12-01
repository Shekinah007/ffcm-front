import React from 'react'
import eventImg from "../assets/images/stuff/ThanksGiving.jpg"
const BulletinDetails = ({ userData }: any) => {
    return (
        <div className="pt-[100px] px-4 pb-8 min-h-screen text-gray-700 md:overflow-scroll">
            <h2 className="text-2xl font-semibold">It's ThanksGiving!!</h2>
            <hr className="bg-gray-400 h-1 rounded-full mb-2" />
            {/* <img src={ } /> */}
            <div className="flex flex-col gap-4 indent-5">
                <img src={eventImg} alt="Stoty Image" className="rounded-lg md:w-[200px] self-center"></img>
                <p>Curiosity is a fundamental human trait that drives us to explore,
                    learn, and discover. It is the spark that ignites our imagination
                    and propels us forward in the pursuit of knowledge. In this essay,
                    we will delve into the power of curiosity, its impact on personal
                    growth, the benefits it brings to society, and how it fuels
                    innovation and progress.
                </p>
                <p>
                    Nurturing curiosity is essential for individuals of all ages.
                    It starts with fostering a sense of wonder and encouraging
                    questioning from a young age. Education systems should prioritize
                    cultivating curiosity by promoting inquiry-based learning, providing
                    opportunities for exploration, and encouraging students to pursue
                    their interests. Embracing lifelong learning and exposing ourselves
                    to diverse experiences also helps sustain curiosity throughout our
                    lives.
                </p>
            </div>
        </div>
    )
}

export default BulletinDetails