import axios from 'axios';
const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios.post('https://chatengine-hmmq.onrender.com/',
      {username:value}
      )
      .then (r => props.onAuth({ ...r.data, secret: value }))
      .catch(e => console.log("error" , e))
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Agro-Connect👋</div>
  
          <div className="form-subtitle">Set a username to get started</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter ChatRoom
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;