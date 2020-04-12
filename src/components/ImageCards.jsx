import React from "react";

const ImageCards = ({ image }) => {
    const tags=image.tags.split(',')
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 texte-xl mb">
          photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>View: </strong>
            {image.views}
          </li>
          <li>
            <strong>Download: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>likes: </strong>
            {image.likes}
          </li>
        </ul>
        <div className="px-3 py-6">
          {tags.map((tag,index)=>(
              <span key={index} className="inline-blocks bg-gray-200 rounded-full px-1 py-2 text-sm font-semibold text-gray-700 mr-3">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCards;
