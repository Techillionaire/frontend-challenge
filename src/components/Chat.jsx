import React from 'react'
import { BsChat } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";

const Chat = () => {
  return (
    <div className="chat bg-light">
        <div className="top ">
            <div className='d-flex  align-middle justify-content-between' style={{ width: '100%', height: '40px', margin: '0 15px', cursor: 'pointer'}}>
                    <div className='d-flex'>
                            <i style={{ fontSize: '16px', marginTop: '5px'}}>
                                <BsChat />
                            </i>
                            <p className='ms-2 mt-2' style={{fontSize: '14px'}}>Live Discussion</p>
                        </div> 

                        <div>
                            <i className='me-auto'>
                                <GrFormClose />
                            </i>
                        </div>
                        
                        
                    </div>
            </div>
            <p className='ms-4' style={{fontSize: '12px', color: 'orange'}}>Courtney Henry, Ronald Richards and 3 more</p>
            <hr />
    </div>
  )
}

export default Chat