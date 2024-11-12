import React from 'react';

function Video() {
    return (
        <div className="container">
            <div className="page-content video-page">
                <h1>Performance and Teaching Videos</h1>
                <section className="video-section">
                    <h2>Solo Performance</h2>
                    <div className="video-container">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/OcF3JXrHCt4"
                            title="Solo Performance Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>
                <section className="video-section">
                    <h2>Solo Teaching</h2>
                    <div className="video-container">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/jqcTpGCNesg"
                            title="Solo Teaching Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>
                <section className="video-section">
                    <h2>Group Teaching</h2>
                    <div className="video-container">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/6u-tfbVorWk"
                            title="Group Teaching Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Video;