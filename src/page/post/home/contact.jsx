import {Link} from "react-router-dom" ;
function Contact(){
  return (<div>
    <section id="aa-property-header">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="aa-property-header-inner">
            <h2>Contact</h2>
            <ol className="breadcrumb">
            <li><Link to="#">HOME</Link></li>            
            <li className="active">Liên hệ</li>
          </ol>
          </div>
        </div>
      </div>
    </div>
  </section> 
 

 <section id="aa-contact">
   <div className="container">
     <div className="row">
       <div className="col-md-12">
          <div className="aa-contact-area">
            <div className="aa-contact-top">
              <div className="aa-contact-top-left">
                
              </div>
              <div className="aa-contact-top-right">
                <h2>Contact</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae placeat aspernatur aperiam, quisquam voluptas enim tempore ab itaque nam modi eos corrupti distinctio nobis labore dolorum quae tenetur. Sapiente, sequi.</p>
                <ul className="contact-info-list">
                  <li> <i className="fa fa-phone"></i> 1-700-564-6321</li>
                  <li> <i className="fa fa-envelope-o"></i> info@homeproperty.com</li>
                  <li> <i className="fa fa-map-marker"></i> 36008 AL-77, Talladega, AL 35160, USA</li>
                </ul>
              </div>
            </div>
            <div className="aa-contact-bottom">
              <div className="aa-title">
                <h2>Send Your Message</h2>
                <span></span>
                <p>Your email address will not be published. Required fields are marked <strong className="required">*</strong></p>
              </div>
              <div className="aa-contact-form">
                <form className="contactform">                  
                  <p className="comment-form-author">
                    <label for="author">Name <span className="required">*</span></label>
                    <input type="text" name="author" value="" size="30" required="required" />
                  </p>
                  <p className="comment-form-email">
                    <label for="email">Email <span className="required">*</span></label>
                    <input type="email" name="email" value="" aria-required="true" required="required" />
                  </p>
                  <p className="comment-form-url">
                    <label for="subject">Subject</label>
                    <input type="text" name="subject" />  
                  </p>
                  <p className="comment-form-comment">
                    <label for="comment">Message</label>
                    <textarea name="comment" cols="45" rows="8" aria-required="true" required="required"></textarea>
                  </p>                
                  <p className="form-submit">
                    <input type="submit" name="submit" className="aa-browse-btn" value="Send Message" />
                  </p>        
                </form>
              </div>
            </div>
          </div>
       </div>
     </div>
   </div>
 </section>
  </div>);
}
export default Contact;