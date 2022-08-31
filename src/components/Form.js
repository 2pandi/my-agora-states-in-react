import { useState } from "react";

export const Form = ({handleSubmit}) => {
  const[name, setName] = useState('');
  const[title, setTitle] = useState('');
  const nameSave = (inputName) => {
    setName(inputName);
  };
  const titleSave = (inputTitle) => {
    setTitle(inputTitle);
  };
  return (
    <section className="form__container">
      <form action="" method="get" className="form" onSubmit={ (e) => {e.preventDefault()} }>
        <div className="form__input--wrapper">
          <div className="form__input--name">
            <label htmlFor="name">Enter your name: </label>
            <input type="text" name="name" id="name" required="" onChange={(e) => {nameSave(e.target.value)}} />
          </div>
          <div className="form__input--title">
            <label htmlFor="title">Enter your title: </label>
            <input type="text" name="title" id="title" required="" onChange={(e) => {titleSave(e.target.value)}}/>
          </div>
          <div className="form__textbox">
            <textarea
              id="story"
              name="story"
              placeholder="질문을 작성하세요"
              required=""
            ></textarea>
            <input type="submit" value="submit" onClick={() => {handleSubmit(name, title)}} />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;