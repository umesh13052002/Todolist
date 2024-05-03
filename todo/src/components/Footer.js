function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>More About To do list</h5>
            <p>This is a to do list app that is used to store tasks</p>
          </div>
          <div className="col-md-4">
            <h2>Contact Us</h2>
            <p>Email: umesh@gmail.com</p>
            <p>Phone: 9813080816</p>
          </div>
          <div className="col-md-4">
            <h2>Feedback</h2>
            <label>Your Feedback: </label>
            <input type="text" class="form-control mt-3" placeholder="Text" />
            <br />
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
