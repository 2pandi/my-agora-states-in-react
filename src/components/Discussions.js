import Discussion from "./Discussion";
import { useState } from "react";

export const Discussions = () => {
  let discussionData = () => {
    return fetch(`http://localhost:4000/discussions/`)
    .then(res => res.json())
  };
  const [data, setData] = useState(discussionData);
    return (
      <section className="discussion__wrapper">
        <ul className="discussions__container">
          <Discussion />
        </ul>
      </section>
    );
}

export default Discussions;