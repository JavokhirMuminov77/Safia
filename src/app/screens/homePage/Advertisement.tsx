import React from "react";

export default function Advertisement() {
    return <div className="advertisement">
        <div className="ads-restaurant-frame">
            <video
                className={"ads-video"}
                autoPlay={true}
                loop
                muted
                playsInline
                data-video-media=""
            >
                <source type="video/mp4" src="video/safia-cake.mp4" />
            </video>
        </div>
    </div>;
};