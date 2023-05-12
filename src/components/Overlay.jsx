import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
    return (
        <section 
            className={`h-screen flex flex-col justify-center p-10 ${
                props.right ? "items-end" : "items-start"
            }`}
            style={{
                opacity: props.opacity
            }}
        >
            <div className="w-1/2 flex items-center justify-center">
                <div className="max-w-sm w-full">
                    <div className="bg-white rounded-lg px-8 py-12">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Overlay = () => {

    const scroll = useScroll();
    const [opacityFirstSection, setOpacityFirstSection] = useState(1);
    const [opacitySecondSection, setOpacitySecondSection] = useState(1);
    const [opacityThirdSection, setOpacityThirdSection] = useState(1);

    useFrame(() => {
        setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
        setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
        setOpacityThirdSection(scroll.range(2 / 3, 1 / 3));
    });

    return (
    <Scroll html>
        <div className="w-screen">
            <Section opacity={
                opacityFirstSection
            }>
                <h1 className="font-serif text-2xl">Hello, I'm SR</h1>
                <p className="text-gray-500">Welcome to my test of Three.js!</p>
                <p className="mt-3">Through This Exercise I've Learned:</p>
                <ul className="leading-9">
                    <li>Node.js</li>
                    <li>Three.js</li>
                    <li>React</li>
                    <li>VueJS</li>
                    <li>Tailwind</li>
                    <li>Bash</li>
                </ul>
                <p className="animate-bounce mt-6">↓</p>
            </Section>

            <Section right opacity={
                opacitySecondSection
            }>
                <h1 className="font-semibold font-serif text-2xl">Future Prospects</h1>
                <p className="text-gray-500">What I plan to do with what I've learned and what I plan to learn!</p>
                <p className="mt-3">
                    <b>To Learn</b>
                </p>
                <ul className="leading-9">
                    <li>Bake lights into 3D model</li>
                    <li>More React</li>
                    <li>More Three.js</li>
                    <li>... and a lot more!</li>
                </ul>
                <p className="mt-3">
                    <b>To Do</b>
                </p>
                <ul className="leading-9">
                    <li>Incorporate Three.js into personal art website, and thus cool 3D models</li>
                </ul>
                <p className="animate-bounce mt-6">↓</p>
            </Section>

            <Section opacity={
                opacityThirdSection
            }>
                <h1 className="font-serif text-2xl">Thank You</h1>
                <p className="text-gray-500">This was really fun! I will work hard to be able to make projects beyond this basic scope :D</p>
            </Section>
        </div>
    </Scroll>);
};