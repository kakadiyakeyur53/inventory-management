import React, { Component } from 'react';
import Keyur from "../Photoes/keyur.jpeg";
import Kartik from "../Photoes/kartik.jpeg";
import Rashvin from "../Photoes/rashvin.jpeg";
import Brijesh from "../Photoes/brijesh.jpeg";
import Nishita from "../Photoes/nishita.jpeg";
import Manav from "../Photoes/manav.jpeg";


export default class Information extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inventory: [],
            newItemDescription: '',
            newItemQuantity: '',
            currentPage: 1,
            paginationCount: 5,
        }
    }

    render() {
        return (
            <div className="container">
                <div className="mx-auto my-3 " style={{ color: "black", textAlign: "center" }}>
                    <p className="title" style={{ margin: "12px 0px 20px 12px", fontSize: "40px" }}>Information</p>
                </div>                
                <p>This application is a simple inventory management system.
                    It interacts with an API to access a live database so the information modified, created, or deleted on this application will impact the database. Feel free to mess around with the application in anyway you feel like.
                    Using the above links in the navigation bar will allow you to interact with the various functions of this application. What each page does is described below.
                    <br /><b>Note*</b> When there are more than 5 items in the inventory list, every table will have pagination enabled allowing you to use the previous/next buttons to view the inventory list in 5 item increments.

                    <br /><br /><b>Inventory:</b> Shows the name of items in inventory and their current quantity.
                    <br /><b>Restock/Use:</b> Change quantity of items in inventory by entering the amount and pressing the restock/use buttons.
                    <br /><b>Create Items:</b> Fill in the respective item information and press the create button to add new items to the inventory list.
                    <br /><b>Remove Items:</b> Remove items in the inventory list by selecting the delete button next to the item in the table.

                </p>
                <section class="section-3a p-4">
                    <div class="container-fluid p-5">
                        <div className="mx-auto my-3 " style={{ color: "black", textAlign: "center" }}>
                            <p className="title" style={{ margin: "12px 0px 20px 12px", fontSize: "40px" }}>About Us</p>
                        </div>
                        <div class="row mx-auto">
                            <div class="col-sm-4">
                                <center>
                                    <a href="https://www.linkedin.com/in/keyur-kakadiya/"><img src={Keyur} class="leader-image" alt="" /></a>
                                </center>
                                <center>
                                    <h3 style={{ color: "black" }} class="mt-3">keyur kakadiya</h3>
                                    <h5 style={{ color: "black" }}>3rd Year-Div1</h5>
                                </center>
                            </div>
                            <div class="col-sm-4">
                                <center>
                                    <a href="https://www.linkedin.com/in/nishita-pandya-4714a820b/"><img src={Nishita} class="leader-image" alt="" /></a>
                                </center>
                                <center>
                                    <h3 style={{ color: "black" }} class="mt-3">Nishita Pandya</h3>
                                    <h5 style={{ color: "black" }}>3rd Year-Div1</h5>
                                </center>
                            </div>
                            <div class="col-sm-4">
                                <center>
                                    <a href="https://www.linkedin.com/in/kartik-jetani/"><img src={Kartik} class="leader-image" alt="" /></a>
                                </center>
                                <center>
                                    <h3 style={{ color: "black" }} class="mt-3">Kartik Jetani</h3>
                                    <h5 style={{ color: "black" }}>3rd Year-Div1</h5>
                                </center>
                            </div>
                            <div class="col-sm-4">
                                <center>
                                    <a href="https://www.linkedin.com/in/brijesh-soni-75a5b4178/"><img src={Brijesh} class="leader-image" alt="" /></a>
                                </center>
                                <center>
                                    <h3 style={{ color: "black" }} class="mt-3">Brijesh Patadiya</h3>
                                    <h5 style={{ color: "black" }}>3rd Year-Div1</h5>
                                </center>
                            </div>
                            <div class="col-sm-4">
                                <center>
                                    <a href="https://www.linkedin.com/in/manav-dobariya-572b711a3/"><img src={Manav} class="leader-image" alt="" /></a>
                                </center>
                                <center>
                                    <h3 style={{ color: "black" }} class="mt-3">Manav Dobariya</h3>
                                    <h5 style={{ color: "black" }}>3rd Year-Div1</h5>
                                </center>
                            </div>
                            <div class="col-sm-4">
                                <center>
                                    <a href="https://www.linkedin.com/in/rashvin-kathiriya-66b21b1b0/"><img src={Rashvin} class="leader-image" alt="" /></a>
                                </center>
                                <center>
                                    <h3 style={{ color: "black" }} class="mt-3">Rashvin Kathiriya</h3>
                                    <h5 style={{ color: "black" }}>3rd Year-Div1</h5>
                                </center>
                            </div>
                        </div>

                    </div>
                </section>
                <footer style={{ marginTop: "70px" }}>
                </footer>
            </div>

        )
    }
}