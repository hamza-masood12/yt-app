import axios from 'axios';

const KEY = 'AIzaSyDM07KdBKx2kv0qTpngYZjgMAtIT8D0UV4';

export default axios.create ({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
      }
});