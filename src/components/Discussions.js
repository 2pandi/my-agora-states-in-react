import Discussion from "./Discussion";

export const Discussions = ({discussionData}) => {
    return (
      <section className="discussion__wrapper">
        <ul className="discussions__container">
          <Discussion discussionData={discussionData} />
        </ul>
      </section>
    );
}

export default Discussions;