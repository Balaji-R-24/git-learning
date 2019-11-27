import React from 'react';


class Customerform extends React.Component
{
  render()
  {
    return(
      <div>
        <form>
            <div class="row">
                 <div class="col-6 ">
                    <label>firstname</label>
                    <input type="text" name="firstname" />
                </div>
                <div class="col-6 ">
                    <label>lastname</label>
                    <input type="text" name="lastname" />
                </div>
           </div>
           <div class="row">
                 <div class="col-6 ">
                    <label>Date of Birth</label>
                     <input type="text" name="dob" />
                </div>
                <div class="col-6 ">
                      <label>Address1</label>
                    <input type="text" name="address1" />       
                 </div>
            </div>
           <div class="row">
                 <div class="col-6 ">
                    <label>Address2</label>
                    <input type="text" name="address2" />
                </div>
                <div class="col-6 ">
                    <label>Area</label>
                     <input type="text" name="area" />
            </div>
           </div>
           <div class="row">
                 <div class="col-6 ">
                    <label>City</label>
                    <input type="text" name="city" />
                </div>
                <div class="col-6 ">
                    
                    <label>State</label>
                    <input type="text" name="state" />
                </div>
           </div>
           <div class="row">
                 <div class="col-6 ">
                    <label>CountryId</label>
                    <input type="text" name="countryid" />
                </div>
                <div class="col-6 ">
                    <label>Pincode</label>
                    <input type="text" name="pincode" />
                </div>
           </div>
           <div class="row">
                 <div class="col-6 ">
                    <label>Mobileno</label>
                    <input type="text" name="mobileno" />
                </div>
                <div class="col-6 ">
                    <label>EmailId</label>
                     <input type="text" name="emailid" />
                </div>
           </div>
            
            
            
           
           
           
           
            
        </form>
      </div>
    )
  }
}

export default Customerform;
