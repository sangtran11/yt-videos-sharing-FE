import { SHARE, FETCH_VIDEOS } from "../constants/actionsTypes";

const videoReducer = (videos = [], actions) => {
  const regexGetVideoId =
    /(?:https?:\/\/)?(?:www\.|m\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\/?\?v=|\/embed\/|\/)([^\s&\?\/\#]+)/;

  switch (actions.type) {
    case FETCH_VIDEOS:
      actions.payload.map(
        (item) => (item.videoId = item.youtubeUrl.match(regexGetVideoId)[1])
      );
      return actions.payload;
    case SHARE:
      return [...videos, actions.data];
    default:
      return videos;
  }
};

export default videoReducer;
