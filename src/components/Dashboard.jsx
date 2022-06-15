import React from 'react'
import {button} from '../buttonData';
import {Card} from '../cardDetails';
import { BiMenu } from "react-icons/bi";
import { CgLayoutGrid } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import Chat from './Chat';


const Dashboard = () => {
  return (
    <div className='row'container>
        <div className="left col-9 p-4 bg-info bg-opacity-10">
            <div className="top d-flex justify-content-between">
                <div className="left ">
                    {button.map((b) => (
                        <button key={b.id} type="button" class="mx-3 btn btn-outline position-relative">
                        {b.name}
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor:'orange'}}>
                            {b.range}
                            <span class="visually-hidden">unread messages</span>
                        </span>
                    </button>
                    ))}
                    
                </div>

                <div className="right d-flex">
                    <i className='me-4 mt-2'>
                        <BiMenu />
                    </i>

                    <i className='me-4 mt-2'>
                        <CgLayoutGrid />
                    </i>

                    <p className='me-4 mt-2'>Filter</p>

                    <i className='me-4 mt-2'>
                        <BiSearch />
                    </i>

                    <button className='btn btn-success btn-opacity-10'> + New products</button>

                </div>

            </div>

            <div className="bottom d-flex flex-wrap justify-content-center">
                {Card.map((c) => (
                     <div class="card mx-3 my-3" style={{width: '18rem'}} key={c.id}>
                     <img src="..." class="card-img-top" alt="..." />
                     <div class="card-body">
                         <h5 class="card-title">{c.name}</h5>
                         <p class="card-text">{c.desc}</p>
                         <a href="#" class="btn btn-primary">{c.link}</a>
                     </div>
                 </div>
                ))}
               
            </div>

        </div>

        <div className="right col-3">
            <Chat />
        </div>
    </div>
  )
}

export default Dashboard