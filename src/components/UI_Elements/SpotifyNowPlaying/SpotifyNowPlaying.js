import React from "react";
import "./SpotifyNowPlaying.css";

const SpotifyNowPlaying = (props) => {
  return (
    <div>
      <div className="player-body">
        <div className="player-spotify-icon">
          <i className="fa-brands fa-spotify"></i>
        </div>
        <div className="player-text-body">
          <div className="player-on-repeat">
            <p>On repeat</p>
          </div>
          <a
            href="https://open.spotify.com/album/3kVakoirMWEX5BwkicGWZv"
            rel="noreferrer"
            target="_blank"
          >
            {props.song}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpotifyNowPlaying;
