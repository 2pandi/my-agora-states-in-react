export const Discussion = ({discussionData}) => {
  return (
    <li className="discussion__container">
      <div className="discussion__avatar--wrapper">
        <img
          className="discussion__avatar--image"
          src="https://avatars.githubusercontent.com/u/12145019?s=64&amp;u=5c97f25ee02d87898457e23c0e61b884241838e3&amp;v=4"
          alt="avatar of kimploo"
        />
        <p className="author">kimploo</p>
        <p className="createdAt">2022. 4. 22. 오후 11:08:33</p>
      </div>
      <div
        className="discussion__content"
        onClick={() => window.open('https://github.com/codestates-seb/agora-states-fe/discussions/6')}
      >
        <h2 className="discussion__title">[notice] 좋은 질문하는 법</h2>
        <div className="discussion__answered">
          <p></p>
        </div>
      </div>
    </li>
  );
};

export default Discussion;