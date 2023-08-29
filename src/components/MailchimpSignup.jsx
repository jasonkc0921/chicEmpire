import React from 'react';
import { useState } from 'react';
import styled from 'styled-components'

const MailchimpSignup = () => {

    const [email, setEmail] = useState('');

  return (
    <MailChimContainer>
    <div id="mc_embed_shell">
      <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />

      <div id="mc_embed_signup">
        <form
          action="https://gmail.us21.list-manage.com/subscribe/post?u=2a2c7be514229fd56cbe865c4&amp;id=b4b5ae1a02&amp;f_id=0094e2e6f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <h2>Want To Be Updated With Our Progress?</h2>
            {/* <div className="indicates-required">
              <span className="asterisk">*</span> Email Required
            </div> */}
            <div className="mc-field-group">
              {/* <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label> */}
              <input
                type="email"
                name="EMAIL"
                className="requiredemail"
                id="mce-EMAIL"
                required=""
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='Enter your email address'
              />
            </div>
            <div id="mce-responses" className="clearfoot">
              <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
              <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
            </div>
            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
              <input
                type="text"
                name="b_2a2c7be514229fd56cbe865c4_b4b5ae1a02"
                tabIndex="-1"
                value=""
              />
            </div>
            <div className="optionalParent">
              <div className="clearfoot">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                  value="Keep Me Informed!"
                />
                <p style={{ margin: '0px auto' }}>
                  <a href="http://eepurl.com/iyv0wE" title="Mailchimp - email marketing made easy and fun">
                    <span style={{ display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px' }}>
                      {/* <img
                        className="refferal_badge"
                        src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                        alt="Intuit Mailchimp"
                        style={{ width: '220px', height: '40px', display: 'flex', padding: '2px 0px', justifyContent: 'center', alignItems: 'center' }}
                      /> */}
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
      <script type="text/javascript">
        {`
          (function($) {
            window.fnames = new Array();
            window.ftypes = new Array();
            fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';
            fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';
            fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';
          })(jQuery);
          var $mcj = jQuery.noConflict(true);
        `}
      </script>
    </div>
    </MailChimContainer>
  );
};

export default MailchimpSignup;

const MailChimContainer = styled.nav`

.indicates-required {
    color: black;
    margin-bottom: 10px;
}


#mc_embed_shell, #mc_embed_signup {
    background: none;
}

#mc_embed_shell {
    margin-top: 50px;
}

.mc-field-group, .optionalParent {

    display: inline;

}

#mc_embed_signup .button {
    background-color: black;
}

`
