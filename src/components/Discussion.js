export const Discussion = ({discussions}) => {
  return (
    <ul className="discussions__container">
      {discussions.map((x,idx) => {
        return (
          <li key={idx} className="discussion__container">
            <div className="discussion__avatar--wrapper">
              <img
                className="discussion__avatar--image"
                src={x.avatarUrl}
                alt={`avatar of ${x.author}`}
              />
              <p className="author">{x.author}</p>
              <p className="createdAt">{x.createdAt}</p>
            </div>
            <div
              className="discussion__content"
              onClick={() => window.open(x.url)}
            >
              <h2 className="discussion__title">{x.title}</h2>
              <div className="discussion__answered">
                <p></p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Discussion;