import Discussion from "./Discussion";

export const Discussions = ({discussions}) => {
    return (
      <section className="discussion__wrapper">
          <Discussion discussions={discussions}/>
      </section>
    );
}

export default Discussions;