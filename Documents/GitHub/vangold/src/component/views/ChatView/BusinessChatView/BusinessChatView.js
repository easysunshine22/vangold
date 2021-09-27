import React, {useState} from 'react'
import { Col, Container, Row } from "react-bootstrap";
import SideMenu from "../../../core-ui/SideMenu/SideMenu";
import BusinessSideBarDropDown from "../../../core-ui/BusinessSideBarDropDown/BusinessSideBarDropDown1";
import participantsAvatar1 from "../../../../assets/images/avatar/Ellipse-7.png";
import participantsAvatar2 from "../../../../assets/images/avatar/Ellipse-7-1.png";
import participantsAvatar3 from "../../../../assets/images/avatar/Ellipse-7-2.png";
import participantsAvatar4 from "../../../../assets/images/avatar/Ellipse-7-3.png";
import Avatar1 from "../../../../assets/images/business-chat-content/Ellipse1531.png";
import Avatar2 from "../../../../assets/images/business-chat-content/Group43951.png";
import Avatar3 from "../../../../assets/images/business-chat-content/Ellipse1533.png";
import Avatar4 from "../../../../assets/images/business-chat-content/Group43952.png";
import "./BusinessChatView.css";

const BusinessChatView = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [isOpenTwo, setIsOpenTwo] = useState(false);
    const toggleTwo = () => setIsOpenTwo(!isOpenTwo);

    const closePopover = () => {
        setIsOpen(false);
    };

    const closePopoverTwo = () => {
        setIsOpenTwo(false);
    };


    
    const userMembersAdmin = [
        {
            usersAvatar: participantsAvatar1,
            userName: 'Kali Jay',
            messages: 'Hi our deadlines are...',
        },
    ]
    const userMembers = [
        {
            usersAvatar: participantsAvatar2,
            userName: 'Kali Jay',
            messages: 'Hi our deadlines are...',
        },
        {
            usersAvatar: participantsAvatar3,
            userName: 'Kali Jay',
            messages: 'Hi our deadlines are...',
        },
        {
            usersAvatar: participantsAvatar4,
            userName: 'Kali Jay',
            messages: 'Hi our deadlines are...',
        },
    ]
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={10} lg={2} className="mx-auto mt-5 d-none d-lg-block">
                        <SideMenu />
                    </Col>
                    <Col xs={12} md={10} lg={10} className="mx-auto bg-color">
                        <div className="business__channel-header">
                            <div className="business__channel-header-left">
                                <h2>Channel</h2>
                            </div>
                            <div className="business__channel-header-right">
                                <div className="business__channel-header-right-left">
                                    <span>Channel</span>
                                    <span>12 Members</span>
                                </div>
                                <svg style={{cursor: "pointer"}} onClick={toggle} width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                        <div className="business-chat-container">
                            <div className="sideBarBusinessChat d-none d-lg-block">
                                <BusinessSideBarDropDown />
                            </div>
                            <div className="business-chat-view">
                                <div className="inn-business-chat-view">
                                        <div className="business-chat-box-content">
                                            <div className="inn-business-chat-box-content">
                                                <div className="send__message__container">
                                                    <div className="inn-send__message__container">
                                                        <div className="send-biz-msg-box">
                                                            <img src={Avatar3} alt="765353" />
                                                            <div className="inn-send-biz-msg-box">
                                                                <span>Okay, some other time, I guess. Lorem Ipsum jji jksn jikkkms jkola kopol; kppp</span>
                                                            </div>
                                                        </div>
                                                        <div className="send__message__time">
                                                            <span>Saturday 11:50 PM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="middle-message-time-date">
                                                    <span>June 20, 10:46 pm</span>
                                                </div>
                                                <div className="reply__message__container reply__biz__message__container">
                                                    <img src={Avatar1} alt="366764" />
                                                    <div className="inn-send__message__container">
                                                        <div className="reply__message__time">
                                                            <span>Replied to Damola</span>
                                                        </div>
                                                        <div className="reply__to-message__box">
                                                            <span>Hey, Devon. Can we get on a quick call?</span>
                                                        </div>
                                                        <div style={{width: "190px"}} className="reply__message__box desktop__reply__message__box">
                                                            <span style={{color: "#009BBC", fontWeight: "bold"}}>Koyote Stark</span>
                                                            <span>Hi, Damola. Sure, but now I’m busy rn.</span>
                                                        </div>
                                                        <div className="reply__message__time">
                                                            <span>11:50 PM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="reply__message__container reply__biz__message__container">
                                                    <img src={Avatar2} alt="366764" />
                                                    <div className="inn-send__message__container">
                                                        <div style={{width: "186px"}} className="reply__message__box desktop__reply__message__box">
                                                            <span style={{color: "#00237B", fontWeight: "bold"}}>Femi</span>
                                                            <span>Hi, Emmie. Sure, but now I’m busy rn.</span>
                                                        </div>
                                                        <div className="reply__message__time">
                                                            <span>Saturday 11:50 PM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="send__message__container">
                                                    <div className="inn-send__message__container">
                                                        <div style={{width: "161px"}} className="inn-send-biz-msg-box">
                                                            <span>Okay, some other time, I guess.</span>
                                                        </div>
                                                        <div className="send__message__time">
                                                            <span>Saturday 11:50 PM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="reply__message__container reply__biz__message__container">
                                                    <img src={Avatar4} alt="366764" />
                                                    <div className="inn-send__message__container">
                                                        <div style={{width: "245px"}} className="reply__message__box desktop__reply__message__box">
                                                            <span style={{color: "#00237B", fontWeight: "bold"}}>Tola</span>
                                                            <span>Hi, Emmie. Sure, but now I’m busy rn.</span>
                                                        </div>
                                                        <div className="reply__message__time">
                                                            <span>Saturday 11:50 PM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bottom-chat-footer biz-bottom-chat-footer">
                                                <div className="chat-input-box">
                                                    <input type="text" placeholder="Message..." />
                                                    <div className="chat-input-icons">
                                                        <div className="inn-chat-input-icons">
                                                            <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M7 12C8.66 12 9.99 10.66 9.99 9L10 3C10 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3V9C4 10.66 5.34 12 7 12ZM12.3 9C12.3 12 9.76 14.1 7 14.1C4.24 14.1 1.7 12 1.7 9H0C0 12.41 2.72 15.23 6 15.72V19H8V15.72C11.28 15.24 14 12.42 14 9H12.3Z" fill="#333333"/>
                                                            </svg>
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M13.5 9C14.3284 9 15 8.32843 15 7.5C15 6.67157 14.3284 6 13.5 6C12.6716 6 12 6.67157 12 7.5C12 8.32843 12.6716 9 13.5 9Z" fill="#333333"/>
                                                                <path d="M6.5 9C7.32843 9 8 8.32843 8 7.5C8 6.67157 7.32843 6 6.5 6C5.67157 6 5 6.67157 5 7.5C5 8.32843 5.67157 9 6.5 9Z" fill="#333333"/>
                                                                <path d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18ZM10 15.5C12.33 15.5 14.32 14.05 15.12 12H13.45C12.76 13.19 11.48 14 10 14C8.52 14 7.25 13.19 6.55 12H4.88C5.68 14.05 7.67 15.5 10 15.5Z" fill="#333333"/>
                                                            </svg>
                                                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M4.28215 18.4242C2.13255 16.2746 2.13255 12.7957 4.28215 10.6461L11.7068 3.22145C13.2695 1.65874 15.8009 1.65874 17.3636 3.22145C18.9263 4.78415 18.9263 7.3156 17.3636 8.8783L11.3532 14.8887C10.3774 15.8645 8.79349 15.8645 7.81769 14.8887C6.84188 13.9129 6.84188 12.329 7.81769 11.3532L13.121 6.04988L14.5352 7.46409L9.16826 12.831C8.77935 13.2199 9.48646 13.927 9.87537 13.5381L15.9494 7.46409C16.7272 6.68627 16.7272 5.41348 15.9494 4.63566C15.1716 3.85784 13.8988 3.85784 13.121 4.63566L5.69637 12.0603C4.33165 13.425 4.33165 15.6453 5.69637 17.01C7.06108 18.3747 9.2814 18.3747 10.6461 17.01L17.3636 10.2925L18.7778 11.7067L12.0603 18.4242C9.91072 20.5738 6.43176 20.5738 4.28215 18.4242Z" fill="#333333"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <svg className="send__message-btn" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="48" height="48" rx="8" fill="#45B618"/>
                                                    <path d="M34 15L23 26" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M34 15L27 35L23 26L14 22L34 15Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className= {isOpen ? 'popover-link' : 'popover-link-none '}>
                                            <div className="closeBtn-popover">
                                                <svg onClick={closePopover} style={{cursor: "pointer"}} width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.7501 10L14.9996 13.75L11.2499 10L10 11.25L13.7497 15L10 18.75L11.2499 20L14.9996 16.25L18.7501 20L20 18.75L16.2503 15L20 11.25L18.7501 10Z" fill="black"/>
                                                    <circle cx="14.5" cy="14.5" r="13.5" stroke="black" stroke-width="2"/>
                                                </svg>
                                            </div>
                                            <li onClick={() => { closePopover(); toggleTwo();}}>
                                                <span>View Members</span>
                                            </li>
                                        </div>
                                        <div className={isOpenTwo ? 'business-chat-box-members-none' : 'business-chat-box-members '}>
                                            <div className="business-chat-box-members-header">
                                                <span>Members</span>
                                                <svg style={{cursor: "pointer"}} onClick={closePopoverTwo} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#4F4F4F"/>
                                                </svg>
                                            </div>
                                            <div className="business-chat-box-members-popup">
                                                {
                                                    userMembersAdmin.map((userMembeAdmin) => (
                                                        <div className="chat__group__component_participants-data">
                                                            <img className="chat__avatar" src={userMembeAdmin.usersAvatar} alt="chat Avatar" />
                                                            <div className="userChatData">
                                                                <p className="chat__users_name">{userMembeAdmin.userName}</p>
                                                                <p className="chat__users_title">{userMembeAdmin.messages}</p>
                                                            </div>
                                                            <button className="choose-group-admin-button">Group Admin</button>
                                                        </div>
                                                    ))
                                                }
                                                {
                                                    userMembers.map((userMember) => (
                                                        <div className="chat__group__component_participants-data">
                                                            <img className="chat__avatar" src={userMember.usersAvatar} alt="chat Avatar" />
                                                            <div className="userChatData">
                                                                <p className="chat__users_name">{userMember.userName}</p>
                                                                <p className="chat__users_title">{userMember.messages}</p>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default BusinessChatView;
