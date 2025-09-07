import React from 'react';

const PaymentAddress = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold p-2 bg-primaryColor text-white text-center'>Billing Address</h1>
            <div className='grid grid-1 gap-y-4 pl-6 py-4 text-primaryColor'>
               <div>
                <span className="font-bold text-lg py-4">Your Name :</span>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Type Your Name"
                    className="w-[90%] border border-primaryColor rounded-lg py-2 px-5 outline-none	bg-transparent mx-auto "
                />
              </div>

              <div>
                <span className="font-bold text-xl py-4">Phone Number :</span>
                <input
                    type="number"
                    id="number"
                    name="number"
                    placeholder="Type Phone Number"
                    className="w-[90%] border border-primaryColor rounded-lg py-2 px-5 outline-none	bg-transparent mx-auto"
                />
              </div>

              <div>
                <span className="font-bold text-xl py-4">Your Full Address :</span>
                <textarea
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Type Your Full Address"
                    className="w-[90%] border border-primaryColor rounded-lg py-2 px-5 outline-none	bg-transparent mx-auto"
                />
              </div>

              <div>
                <span className="font-bold text-xl py-4">Delivery Charge :</span>
                <input
                    type="text"
                    id="charges"
                    name="charge"
                    list="charge"
                    placeholder="Type Or Select Address"
                    className="w-[90%] border border-primaryColor rounded-lg py-2 px-5 outline-none	bg-transparent mx-auto"
                />
                <datalist id="charge">
                    <option value='Inside Dhaka (80)'></option>
                    <option value='Outside Dhaka (150)'></option>
                </datalist>
              </div>
            </div>
            <button className="inline-flex items-center justify-center px-8 py-3 mb-2 font-sans font-bold tracking-wide text-white bg-primaryColor rounded-lg w-[86%] mx-auto ml-6">
                Confirm Your Order
            </button>
        </div>
    );
};

export default PaymentAddress;