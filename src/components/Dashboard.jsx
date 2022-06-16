import React from 'react'
import {button} from '../buttonData';
import {Card} from '../cardDetails';
import { BiMenu } from "react-icons/bi";
import { CgLayoutGrid } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import Chat from './Chat';
import './styles.css';
import { BsStar } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {NavLink} from 'react-router-dom'



const Dashboard = () => {

    
  return (
    <div className='dashboard row'>
        
        <div className="left col-lg-9 p-4 col-sm-12 col-md-12 bg-info bg-opacity-10">
            <div className="top d-flex justify-content-between">
                <div className="dashleft ">
                    {button.map((b) => (
                        <a key={b.id} type="button" class="dashboardLeft mx-3 position-relative" >
                            {b.name}
                            <span class="dashboardbadge position-absolute top-0 start-100 translate-middle badge rounded-pill">
                                {b.range}
                            </span>
                        </a>
                    ))}
                </div>

                <div className="right d-flex">
                    <i className='me-4 mt-2 text-secondary'>
                        <BiMenu />
                    </i>

                    <i className='me-4 mt-2 text-secondary'>
                        <CgLayoutGrid />
                    </i>

                    <p className='me-4 mt-2 text-secondary'>Filter</p>

                    <i className='me-4 mt-2 text-secondary'>
                        <BiSearch />
                    </i>

                    <button className='btn btn-success btn-opacity-10'> + New products</button>

                </div>

            </div>

            <div className="bottom d-flex flex-wrap justify-content-center">
                {Card.map((c) => (
                     <div class="card mx-3 my-3 pt-3 px-3" style={{ minWidth: '18rem'}} key={c.id}>
                        <div className="d-flex justify-content-between">
                            <div>
                                {/* <CircularProgress variant="determinate" value={25} /> */}
                                <CircularProgress variant="determinate" value={c.value}/>
                                <Box
                                    sx={{
                                    top: 28,
                                    left: 25,
                                    bottom: 0,
                                    right: 0,
                                    position: 'absolute',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    justifyContent: 'start',
                                    }}
                                >
                                    <Typography variant="caption" component="div" color="#ef6c00">
                                    {`${Math.round(c.percent)}%`}
                                    </Typography>
                                </Box>
                            </div>

                            <div>
                                <i style={{ color: 'orange'}}>
                                    <BsStar />
                                </i>

                                <i className='ms-2' style={{ color: 'orange'}}>
                                    <BsThreeDots />
                                </i>
                            </div>
                        </div>
                     
                     <div class="card-body">
                         <h6 class="card-title">{c.name}</h6>
                         <p class="card-text cardName text-secondary">{c.desc}</p>
                         <hr />
                         <div className='d-flex justify-content-between'>
                            <div>
                                <p style={{ color: 'orange'}}>{c.temp}</p>
                            </div>
                            
                            <div>
                                <div class="avatarGroup d-flex" style={{cursor: 'pointer'}}>
                                    <img style={{height: '35px', width: '35px', margin: '0 -5px'}} class="avatarG rounded-circle" src="data:image/png;base64,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" alt="" />
                                    <img style={{height: '35px', width: '35px', margin: '0 -5px'}} class="avatarG rounded-circle" src="data:image/png;base64,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" alt="" />
                                    <img style={{height: '35px', width: '35px', margin: '0 -5px'}} class="avatarG rounded-circle" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABRFBMVEX///9NoNxFkMbivF1GcIIZKC/t7e3Wsk5Am9pKmtRFndtMn9xGbn5Hk8o9mtpFkMXqwl80TVs5i8RWpd72+v0YJSoAGSw3isNPpeMsR1bs9fvc6/cNIi708e86aXzj7/nbtUvB3PK11e8VHR4AHi1ymakkQlLT5PV9t+SlzOyGpac/bYSMv+dpreGRwugtWHUAFCteWD3YtVvO2+V2q9PO0tRFh7QdMTwoS2MTGBU0aIx4bEOdh0u8n1MAEStTTzqVq6dRdX7Iq1Sewd6esLjc4+lHe5e1olyyub0QN0mLlpyapKlldn9GgKWNuNpZm8w7d6IsVHEsNjSBcURAQjYzODNoXz4yPj3KtnKfrJurkk9XlbqysYrBtICsr5BsmrDNtm5nmLRrgn2blWZ3hXSnm2KJjW5piJd6h45IXmpXanW2zN4pFEOwAAAPtklEQVR4nO2da1fa2B7GGxCFRBIkKCBQBBVh0NoqorVaRxmqTlVatZ4Z59bpzJnR+v3fn71zgUCys68BehbPzFpFoEt+ff6XfUt49myiiSaaaKKJJppImFKLxVxuzVQuV1xMjfoDCVMqV6qtV3VdkmQ5GlVV+H9UliVJ16vrtVLumyYtlmpVyQBSgKR+wacMZHmjVip+e5ypXLmqAzYXmIcAqKpXa2vfEGXRoJMJ4ByOQspycdQfnUS5FzqZdV6UUf1FbtQA/srVdJXKOxelrOq1sYVcLG+oUR48CzKqbpQXRw3jobV1KcpN14WUquNmZGmDLzpdjLK6URo1VE+psq6KxLMgVb08Jg2krAvIPk/GqF4bNdyzAPlMRqk8Yr5SkHwmoz7KfMxVA8g/F6M6srqaWg/Yvy5jdH0kJacEp0BDkiwPP1QXhxGgPYFQHfIwp6wMz0BTsjLMqpqqDikDnVKi1aFl45o0bANNydLacABrQ81ApxR1GGMcEKEj4oMaQqQW9dFEqC1ZD3ilozSyCLWlqIG2xvIoI9RWNMBkfDEOgADxRVCAI60xTkWrgfCNtoj2K5CSmtoYH0CAuCEecWO0XWJQ8oZgvtSYAUJEoS6OH6BoxDEqMj2JrKhjCSgScUwavVuiWn9tXAEBopB5f2l8AQGigGF4UR01ha9U7slUSh/1dMlfis7bM6rj1wj7JXMW1DGuMrb4potr452EplSOFbiUNN5JaEqR2FNRSBKCf6QMQuar3GJPRQGrMpAi1vywv7lX2d2NRCLzQJHd3d3K3ub+/oemFjPweTlZG/8i07mfPr7Yh83K/Ovl5eV5A82W8dM8ePr160hlc/9DXMpw/R5FYdu24YxRJdPcm192cHnLIK3sa1yMbHFa4qyjmc1lHJ0T82OMh5FlETXFez5mb5mUz4Rc/sCBqMj09XSdL0YzH+kAgZb3ORDldVrAHF8dzXygBgSIPC7KtMcZNvhiNMYACBA19t+oUBYbzjKT2SQuMk7NVzh+J2Wx4ZwzxZkAYZzGmH+notMAco5mMvtMQQpM3IuzI1KNbHiHUbuMHkYizRAzoiINzUKpyWghDNM4OyK5ibwrF5l9ZgvnN+MhjRWRfEWDe05RYSfci4dCzC4Sm8i7+BR7zQoYiexqgJDVRdJyyjvk5khDYCIkZHaRsCdyDmfYewXUsknI6KJCtKuY47Uws8echoCwGQpxuKiSjE65F2cyu+yAPUI2RJIpxiL34lCMw0IHIVOgKhJ+PYN/+UnjSEMHIZuLBA1jgxeQq5TalYbZRXyt4a4zbJPfruYdhEwuYmsN/0aF3SzyCy9fLuTxTPn8yspK7319hAwuYrcx+DfTrNnvwt391snBq5WFFSRlfmVhYeH66O7m5uZVZMG0cLePkMFF3LiGP0ilzEeD8DCRCIcTicThwd3tNeQE6roG2SKfXt3cnyRs3ZuElVCIExETpi/4dyqMhv/yHvCZAp9+6/D+4M3d0e3tp+vr60+3t6/ubg4OT+Ar4a4Sb+A/gDny5kKU/cNUwI5vBsws8keOz25hQpwtKPOn8IASByuQ8KOLkDYX/cO0KGBDFBIu3LsIsDqEmQjnhy5RIkb9tvZFnAGGhCtb1IDh8FtIuO9BSIno2/SrIrbzAOEnBsDEdQSue3sR0gWq38qpiIMXinQ+nz9iIXyVN9dpvESD6LeYIaBXmISv6NMwnLhZQRNSuejTL0ScvGAnPAClZr7pCUjnos+wRsS+PTNh+PBlBK6XIkThInq/VMz5J4WVcGthcFjK6CI6EYUcYZMb/4nk75gIr62lNm5E5GE3EacQlUb4KM9GGL7N+xMSIyJPLNYEpKH6U+Iov3LDQpi4y+ePfk4KQESWGgH9Xl5dgoQHTIRvAGHY10RCRGTPF3BACVgIOjfLsNRoiCC8v/c1kQwRtQuV4i80SscItoVDBkDYEPNvEr/5E5I1DdW7mAoY0cirCRBsK/kTFkIwuwAJnPAnJHMRMaoRUErlnxMw2K5Zphbh8MkKSODELxhCEhcRxVTAmE39NQGD7ZYJMHwCEzixijORwEXEBIrzjJBB+BsgvH85OMMn1BacOSe+wxLiXZS9L8Tg3XOyCMOHb9kafnjrEyhRBIR4FxHtQsCoFEYpIGRq+EC3kBAfpXhExFqNCMLfAdvJW6aGD9rF0cJJOPEHCSEmUL0JRRzqlr+HbG+ZGj4kfLkVXvIf1JC56H30e5GbDxD+AZeBb5kaPhzUgCK8RWIh3kWvTbaikOkv7ISMWQjXUcOJXwkJ/V2UveZPOREH841SwyOyQoN10fMsJueJUlNKZ4kP8DMpn7+LUS/CNSEXAKk/c5lIVknxiFGv62jEXAGkyL8usTPi5k7EiJ5XConxECCuMuciRRJaQuVikIQgy+OshKSdAu+id5QKuxBP/o2x4//OQOiN6O2hsCvxjL7PQvgnC6FnoAYbpaDvf2YCxCxg0LjoGaVC+qEp+TumlSjqOoN20bMfChnTmGIz8SdGQC8XPcc0Isal3V/wHf3QhrLZ+7voOS4VMbfoSv1MG6fMWejtotfcQuhFv/Kf1Cbi1thoEBGXBgu9t4D8O52JCf8NC0rE4FYxHL+jQ7dm+plwak+GiCAUchCjK3mVJk7Zmj0SEbHWJmC91CmayTB/jPYjItZLBd8hgqIpJjhaoVPdpoFY8xZ9Ixr5T2ITfxFD2HURsW8h4jRNn9TvyRCZh2tuWS4i9p4E7B8OKEqUimyTJpQMRMT+oYg94H6BVMQjikpCS9BFRfEGFNwuDMQO3sIt/k7Yrxh6Hz+A2+3gU1FgEnYRkceEA7irF36SsSSeUENewhbAbb2whDMBEIbSqDNRAdzXCxDODJ8wjgAM4sZekNAPcSYIwmQDSSi+1BiEaMSZYAhbSELhoxqLEMFovBIAYRp9Rlh8ItqEXogzQRFqPhetC+75mdjlF4vQxWg/vfTlUvM+280qnzQUe891BfBNTfUInZCO52aOp6bEMib9rrcQcc2MxSdJl7OzU1PHMzgBwtmpy4EPmQShq9kPaAl9b4cpKBGBf03wuYGOTzCAJ8bbAGN3eJrUGq3t9nQBqL39dNWhhez4AYq4ds2QxQeEIzysm++zfUw3ntqFwrQt8HD7KkTD6NMroMT0ix7fVP0UQ3hat98KGdONbQeeTdluUfjo0ytEhamDDxD+teQLuPRPvffm51NPLjyLsUGMiB6ymeIc1ihKs+7gA4R/+xPOfHEArk57A0LGJzFByhumSvNdHx+MPX/Ak56Fz39A8kHEbTFBynUGM6PVB/mAif/1M9ERpM/P/ABhpBItBvhXUij2pq+5/DN07Ee41QP0dZAYMY2/pwLrfTEQfP61ZunvOjEgYaAS3OeTZXE/E0fxwUxEtsSl/3Yt/BfLBxFbaQyf75jUFkOtifnwARO/oAB7vfB5m4RwutDABSnR3RMpa42vf36ITkCCGDXUxrRFfJ2BorpPFJhAzGIAIeKWOxeX/nL0egTQztmgiVe+iGnCeyeSj2vgBAnLBxGPTwcQl06+4DvhTuX8/cArbQEWUjQMEv+6Np7OdCGXZk7/rjtfdbrkePiQzV4Upgt9z/kN3whahSmyxQxFahLzmYz/nBpV9eT0n+O6E/D5j465xNnjQ/eHylwFhKnzmenpJx/COPGtdsskDUPBFRg3Y332GGiqDw8S7vQAHirZ8x0btjI3B/58zFYed3r/Bui2jx2SOkRiIjUgWnarKOzMZcF/1o+Fr9kscLfwAEAr3Xz0aRi4WUWfibhMVEQC/mt/+veQ5cLm3cnOVaCdhfdZ8Ohr23xXoYUKU+IsJDPxUhzg81XjsxfaFwAw+76bkT+COmNZ+1gB1loj8yfUuEajAcT2RMVjFsFMaPSKwhmA6Eu4R1BnLN+mH86Buz+a/QJBSNoLbeG2MGJ1/EcnJTwzSwxgcBZNq87YVSdr8MPH3oREI1KnsGcxY2IJYYQ+OmeIhYts9sHRRXYuQAhXQI4WEITUX0+OnWIIQzQIH0ERvXA4ON2umHWmi/g+OzcHG4k3YfKKFhB/X30lLpJwB0Rh1pGFBVhXHRYaUXxuDA28CRm+pwQ7AFcEuWgsXxRgnGbPe5XU2QPtRmlEsWeloS0zpvD7pTEhFfW5SWK2vQur7e0A3t6c0WqUxkvbXoS0ZcYUyXeUCOn7Vsd3tj046LbrjNkoK5a9Bc+BKeNXy5PMMYQg9iWb0fbac91maKRor1F6zRDpRjNO4eNUUQQMbnojb6Ptg4IJ68yj/SQos45GWei4qwxbjEKRHP1WmvyEPzhKytdzOPI2B93mU2A842iUXuttHF+9RnSlkNc6MJ36FtrO2kadcTTDs7ajbbgH3mmO7+wi28ZQ4ryR6pwgmkznla+ItSlXkKYpZoVeIjpiE29y2vjvIM7DxSC0ZaGrknIkoSmyFY24xmejy0T3JiLKQvKVC5TIDrvFQ02iRTekiQigQXBXFiKPsFGI7MRiPBTnYSRcEnaN2NhGa4MiW1yMg0k22eKpN+IOCeJgjPJWGVtk3wcMEGE6MjPidy5ca6Vp+ikTQmTf6QxP/cRD7D6it7gtwMHxGncZZUIEjMyto+2PeJUODpD0u9Xts1tNFiNn65eIkxiGga7TGMnGKL4+3kYERr6jysjZqXdNLZRsofpgYVsb7BMdoYBAdIgG5OUUkZXgPZfNkPE3k51tr2wEBg62iaRwQOAieS72IJvv6lM+ZoKX6sC8eO9vpTtPA4yFwvaV60iU4BC1ECnKjZNSa15eGpwDAmyXlyA0Bw9epjtX2+2CrentlsfRvUAAn1FV1EHMkKY1mwDVEngMD1ciTpUCok6j1Xpqta46mteJtrTIKton4taPVpz0rGzSkOdL4hq9W8QDuCAlaqjmrZJKNJkKFFDIYButok40JQ6ML6lR70/QiqykBoWYDqiI9qtGEqnBIAabgj2tSQSRGgBiMsS1qkYjEKl4G4UjDidCbZUVvI2iEZ+GyAe0WMVno0jEdINx84VDJRlrozDEZDLgJuit1DqWUQxiMnk1zAx0KocNVRGI6UbgTd5HJR1TVbkR09pIAtShsu7vIx9iUmPe/BSosr+PHIjpeGtUCdivlL+PrIhprTwefIZKGyr6/A0LYjLdGXX+DSq3LiGDlRoxGRpp/URpsbyhIiCpEIF95eEPYAiVq+ne0UqMmATVZRztc6hY06Oq+6wREWIyOfZ4porlqq5GB7zEICaTaa1RFrChOyylcgZl1GEmGjGZBnSttTFqDaQqlmpVSQWcsgJIFTciMC6dDjVapeI3SNdVKlcqv6jquiTJkMcQXOrVtE7jqlXKfcts/UotFnO5NVO5XHHx/4dsookmmmiiiSYaA/0PnRWLqaYUKMYAAAAASUVORK5CYII=" alt="" />
                                </div>
                            </div>
                         </div>
                     </div>
                 </div>
                ))}
               
            </div>

        </div>

        <div id="chatparent" className="right col-3 d-sm-none d-lg-block d-md-none d-xs-none">
            <Chat />
        </div>
    </div>
  )
}

export default Dashboard