import {Link} from "react-router-dom";
function NotFound(){
    return ( <section className="container-fluid app-not-found">
    <div class="app-not-found__content">
         <h1>404</h1>
         <h3>There's nothing here !</h3>
         <p>Sorry, the page you were looking for in this blog does not exist.</p>
         <button>Home</button>
    </div>
</section>)
}
export default NotFound;