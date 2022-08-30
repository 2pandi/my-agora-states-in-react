import Discussion from "./Discussion";

export const Discussions = () => {
    return (
      <section className="discussion__wrapper">
        <ul className="discussions__container">
          <Discussion />
        </ul>
      </section>
    );
}

export default Discussions;