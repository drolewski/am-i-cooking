'use client'
import Image from "next/image";
import {useState} from "react";

export default function Home() {
    const [yes, isYes] = useState<boolean>(false);
    const [no, isNo] = useState<boolean>(false);
    const [dish, setDish] = useState<string>("");

    const handleYes = () => {
        isNo(false);
        isYes(true);
        fetch('/api/dish', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                setDish(data.name)
            })
    }

    const handleNo = () => {
        isNo(true);
        isYes(false);
    }

    return (
        <div
            className="flex flex-col justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col items-center">
                <Image
                    src="/Designer.ico"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />
                {!yes && <div className="flex flex-row items-center justify-center gap-16 m-2">
                    <button className="border-2 border-gray-600 hover:border-gray-400 p-4"
                            onClick={handleYes}>Yes</button>
                    {!no && <button className="border-2 border-gray-600 hover:border-gray-400 p-4"
                            onClick={handleNo}>No</button>}
                </div>}

                <div className=" p-4 pb-4 font-[family-name:var(--font-geist-sans)] text-2xl">
                    {!yes && no && <p>So let`s try my friend! Just pick randomly one of the best world dishes and cook it at home!</p>}
                    {yes && !no && !!dish && <p>{dish}</p>}
                </div>
            </main>
        </div>
    );
}
