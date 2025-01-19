

const Dashboard = () => {
  return (
    <div>
      <div className="col-xxl-8 mb-6 order-0">
        <div className="card">
          <div className="d-flex align-items-start row">
            <div className="col-sm-7">
              <div className="card-body">
                <h5 className="card-title text-primary mb-3">Congratulations John! 🎉</h5>
                <p className="mb-6">You have done 72% more sales today. Check your new badge in your profile.</p>
                <a href="javascript:;" className="btn btn-sm btn-outline-primary">View Badges</a>
              </div>
            </div>
            <div className="col-sm-5 text-center text-sm-left">
              <div className="card-body pb-0 px-0 px-md-6">
                <img 
                  src="https://i.pinimg.com/736x/d9/b7/02/d9b70237f2569ba9dd5f386d16d95dab.jpg" 
                  height="175" 
                  className="scaleX-n1-rtl" 
                  alt="View Badge User"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;