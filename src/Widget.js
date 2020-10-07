import React from "react";
import "./Widget.css";
function Widget() {
  return (
    <div className="widget">
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FReactDevelopersz%2Fposts%2F2588469214798894&show_text=true&width=0&appId=1821859164778901&height=1500"
        width="340"
        height="538"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FReactDevelopersz%2Fposts%2F2586818668297282&show_text=true&width=0&appId=1821859164778901&height=1500"
        width="340"
        height="538"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Widget;
