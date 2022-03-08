import React from "react";

export default function Header() {
  return (
    <div>
      <div class="header">
        <h1>My Website</h1>
        <p>Resize the browser window to see the effect.</p>
      </div>

      <div class="topnav">
        <b>Link</b>
        <b>Link</b>
        <b>Link</b>
        <b style={{float:"right"}}>
          Link
        </b>
      </div>
    </div>
  );
}
