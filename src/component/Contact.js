import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state={
            isRedirect:false,
            // fname:"",
            // fmail:"",
            // fphone:"",
            // fmess:""
            fselect: 12
            
        }
    }
    getGiaTri = () => {
        var noiDung="";
        noiDung +="Ten nhan duoc la: "+ this.state.fname;
        noiDung +=" / Mail nhan duoc la: "+ this.state.fmail;
        noiDung +=" / Phone nhan duoc la : "+ this.state.fphone;
        noiDung +=" / Mess nhan duoc la: "+ this.state.fmess;
        noiDung +="/ so nhan duoc la: " + this.state.fselect;
        return noiDung;
    }
    isChange=(event)=>{
        const ten=event.target.name;
        const giatri=event.target.value;
        // console.log(ten);
        // console.log(giatri);
        this.setState({
            [ten]:giatri
        })

    }
    submitForm=(event)=>{
        event.preventDefault();
        this.setState(
            {
                isRedirect:true
            }
        )
      
    }
     
    render() {
        if (this.state.isRedirect===true) {
            console.log(this.getGiaTri());
            return <Redirect to="/trang-chu" />;
          }
        return (
            <div>
                {/* header */}
                    <header className="masthead">
                    <div className="container h-100">
                        <div className="row h-100">
                        <div className="col-lg-12 my-auto">
                            <div className="header-content mx-auto">
                            <h1 className="mb-5 text-center">Liên hệ với chúng tôi</h1>
                            </div>
                        </div>
                        </div>
                    </div>
                    </header>
                    {/* endheader */}
                    <br />
                    {/* content */}
                    {/* Contact Section */}
                    <section id="contact">
                    <div className="container">
                        <h4 className="text-center text-uppercase text-secondary mb-0">Contact Me</h4>
                        <hr className="star-dark mb-5" />
                        <div className="row">
                        <div className="col-lg-8 mx-auto">
                            {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                            {/* The form should work on most web servers, but if the form is not working you may need to configure your web server differently. */}
                            <form name="sentMessage" id="contactForm" noValidate="novalidate">
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Name</label>
                                <input name="fname" onChange={(event)=> this.isChange(event)} className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Email Address</label>
                                <input name="fmail" onChange={(event)=> this.isChange(event)} className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Phone Number</label>
                                <input name="fphone" onChange={(event)=> this.isChange(event)} className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Message</label>
                                <textarea name="fmess" onChange={(event)=> this.isChange(event)}  className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                                <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="form-group">
                              <label>Chọn giá trị</label>
                              <select value={this.state.fselect} onChange={(event)=> this.isChange(event)} className="form-control" name="fselect" id="">
                                <option>12</option>
                                <option>34</option>
                                <option>56</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label></label>
                              <input type="file" className="form-control-file" name="ffile" id="" placeholder="" aria-describedby="fileHelpId"/>
                              <small id="fileHelpId" className="form-text text-muted">Help text</small>
                            </div>
                            <br />
                            <div id="success" />
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-xl" id="sendMessageButton" onClick={(event)=> this.submitForm(event)}>Send</button>
                            </div>
                           
                            </form>
                        </div>
                    </div>
                </div>
                    </section>
                {/* endcontent */}
            </div>
        );
    }
}

export default Contact;