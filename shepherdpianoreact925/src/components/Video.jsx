import React from 'react';

function Video() {
    return (
        <div className="video-page">
            <h1>Performance Videos</h1>

            <section className="video-section">
                <h2>Solo Performances</h2>
                <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/watch?v=ZZ5LpwO-An4"
                        title="Solo Performance Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <p>Description of the solo performance video.</p>
            </section>

            <section className="video-section">
                <h2>Student Recitals</h2>
                <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/watch?v=ggNRXu1avDk&list=PL60h0ZH7rNxtKsS9oFH_rssvkQewnOilv"
                        title="Student Recital Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <p>Highlights from recent student recitals.</p>
            </section>

            <section className="video-section">
                <h2>Collaborative Performances</h2>
                <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/watch?v=vHhfewvyfHU&list=PLKWF_aeBV2BETY-ev-ZlWF0BmYANoyeoA"
                        title="Collaborative Performance Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <p>Collaborative performances with other musicians.</p>
            </section>
        </div>
    );
}

export default Video;