import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import _ from "lodash";

const API_KEY = "redacted";

class App extends Component {
  constructor(props) {
    super(props);

    this.videoSearch("climbing");

    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      console.log(videos);
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const { videos, selectedVideo } = this.state;
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);
    return (
      <div className="main">
        <SearchBar onSearchTermChange={videoSearch} />
        <div className="side-bar">
          <VideoDetail video={selectedVideo} />
          <VideoList
            videos={videos}
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
