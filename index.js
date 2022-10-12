const Button = (props) => {
  const { className, buttonText } = props;

  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  <div className="social-button-container">
    <div className="content-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="button-container">
        <Button buttonText="Like" className="Like-button" />
        <Button buttonText="Share" className="Share-button" />
        <Button buttonText="Comment" className="Comment-button" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
