import React from "react";
import Shoot from "./Shoot";
import Separator from "../atoms/Separator";

export default function Shoots() {


    const handleClickShoot = () => {
        const img = "https://picsum.photos/200/200?i=203"
        window.open(img)
    }

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: "\n\n    .hover-image-1{\n        transition: ease-in-out 0.2s;\n    }\n    .hover-image-1:hover{\n        width: 50px;\n        height: 50px;\n    }\n\n" }} />
            <div className="container flex items-center justify-between py-4 px-6 mx-auto text-purple-600 dark:text-purple-300">
                <div className="flex justify-between">
                    <div className="flex items-center flex-shrink-0 space-x-6">
                        <Shoot onclick={handleClickShoot} storyImage='./assets/profile-img/Untitled.png' />
                        <Shoot storyImage="https://picsum.photos/200/200?i=203" />
                        <Shoot storyImage="https://picsum.photos/200/200?i=205" />
                        <Shoot storyImage="https://picsum.photos/200/200?i=207" />
                        <Shoot storyImage="https://picsum.photos/200/200?i=209" />
                    </div>
                </div>
            </div>
            <Separator title="Shoots" />
        </>
    )
}