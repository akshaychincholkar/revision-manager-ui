import React from "react";
import { ReactDOM } from "react";
import {BsFillTrashFill,BsFillPencilFill} from "react-icons/bs"
import "./Table.css"
export const Table = () => {
    return(
        <div className="table-wrapper">
            <table style={{color:"blue"}} className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th className="expand">Topic</th>
                        <th>Tags</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/05/2023</td>
                        <td>Concurrency</td>
                        <td>Java</td>
                        <span className="actions">
                            <td>
                                <BsFillPencilFill/>  
                                <BsFillTrashFill className="delete-btn"/>
                            </td>
                        </span>
                    </tr>
                    <tr>
                        <td>03/06/2023</td>
                        <td>AWS</td>
                        <td>cloud</td>
                        <span className="actions"> 
                            <td>
                                <BsFillPencilFill/>  
                                <BsFillTrashFill className="delete-btn"/>
                            </td>
                        </span>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Table;