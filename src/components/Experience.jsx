import {OrbitControls, ScrollControls} from "@react-three/drei"
import { Room } from "./Rooms";
import { Overlay } from "./Overlay";

export const Experience = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <OrbitControls enableZoom={false} />
            <ScrollControls pages={3} damping={0.25}>
                <Overlay />
                <Room />
            </ScrollControls>
        </>
    );
};