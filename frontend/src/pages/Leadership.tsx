import React from 'react'
import RShalom from "../assets/images/Rshalom.jpeg"
import MsShalom from "../assets/images/Mshalom.jpeg"

export const Leader = ({ post, name, detail, picture }: any) => {
    return (
        <div className="flex flex-col  bg-black text-gray-200 px-5 md:w-[600px] md:h-[500px] py-10 overflow-hidden items-center ">
            <img src={picture} alt="Person Image" className="rounded-[200px] h-[150px] w-[150px] " />
            <p className="font-semibold">{name}</p>
            <hr className="bg-black w-[200px] " />
            <h2 className="text-gray- mb-2 text-gray-500 font-semibold">{post}</h2>
            <p>{detail}</p>
        </div>
    )
}




const Leadership = ({ isInterSecting }: any) => {
    return (
        <div className={`min-h-screen bg-black flex flex-col md:flex-row justify-center items-center `}>
            <Leader
                picture={RShalom}
                post="General Overseer"
                name="Rev Shalom Hope Osemewegie"
                detail="Rev. Shalom Hope Osemwegie is a seasoned minister of The Gospel of Our
                Lord Jesus Christ, Serving in The Lord's Vineyard for over 30 years.
                He is an ex-banker with New Nigeria bank, Abuja branch, from where
                he answered the call to ministry.
                He enrolled in El-Shaddai Bible Institute, Jos, in 1990 where he had
                his bible school training. In 1992,
                he served as a pastor at Christ Apostolic Church of God Mission Inc.,
                and later moved to Believers Ministry Inc.,
                both in Benin city, Nigeria. From Believers Ministry Inc.,
                in 1996 he received a higher call from God to move to Jos, northern Nigeria to commence his independent ministry;
                Flaming Faith Covenant Ministry Int'l Inc."
            />
            <Leader
                picture={MsShalom}
                post="Pastor"
                name="Pst Mrs Peace Osemwegie"
                detail="Pastor Mrs. Shalom-Hope Osemwegie is also a woman of God. A minister of the gospel not only in Word, but also in
                songs, she is full of the spirit and called by God. She serves the Lord with all her heart and is fully committed
                to improving lives through the grace of God. She started her ministry as a singer in Elshaddai, where she
                received the call and then went on to study at El-Shaddai bible ministry.
                After her bible school, she continued her ministry in El-Shaddai until her marriage where she joined her husband in Believer's ministry."
            />
            <button className="self-end justify-self-end  absolute right-3 text-yellow-400">More {">>"}</button>
        </div>
    )
}

export default Leadership