import React, { useState } from "react";
import Shoot from "./Shoot";
import Separator from "../atoms/Separator";

export default function Shoots({ viewShoot }) {
    
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: "\n\n    .hover-image-1{\n        transition: ease-in-out 0.2s;\n    }\n    .hover-image-1:hover{\n        width: 50px;\n        height: 50px;\n    }\n\n" }} />

            <div className="container flex items-center justify-between py-4 px-6 mx-auto text-grey dark:text-white">
                <div className="flex justify-between">
                    <div className="flex items-center flex-shrink-0 space-x-6">
                        <Shoot onclick={viewShoot} storyImage='./assets/profile-img/Untitled.png' />
                        <Shoot onclick={viewShoot} storyImage='./assets/profile-img/images.jpg' />
                        <Shoot onclick={viewShoot} storyImage="https://picsum.photos/200/200?i=201" />
                        <Shoot onclick={viewShoot} storyImage="https://picsum.photos/200/200?i=203" />
                        <Shoot onclick={viewShoot} storyImage="https://picsum.photos/200/200?i=205" />
                    </div>
                </div>
            </div>
            <Separator title="Shoots" />
        </>
    )
}