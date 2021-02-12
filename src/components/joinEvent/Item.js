import React from 'react';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";
import { Link } from "react-router-dom";

const JoinButton = styled.button`
    width: 80px;
    margin: 20px 0;
    height: 30px;
    font-size: 1rem;
    border: 1px solid #7DC81F;
    border-radius: 25px;
    background-color: #7DC81F;
`


function Item(props) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleOpen = () => {
        let prevState = !isOpen;
        setIsOpen(prevState);
    };   
    
    // const handleClick = () => {
    //     console.log('hello');
    // }
  
    return (
        <motion.li 
            layout 
            onClick={toggleOpen} 
            initial={{ borderRadius: 10 }}
            className="join-list-item"
        >
           
            <motion.div className="join-item-heading">
                <motion.div className="join-item-avatar" layout>
                    {
                        isOpen 
                            ? (<FontAwesomeIcon className="join-event-minus" icon={faMinus} />)
                            : (<FontAwesomeIcon className="join-event-plus" icon={faPlus} />)
                    }            
                        
                </motion.div>
                <motion.h4 layout>{props.item.name}</motion.h4>
            </motion.div>           
            
            <AnimatePresence>
                {
                    isOpen && 
                        <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <p className="join-event-row">{props.item.description}</p> 

                            {/* This is the join button that connects to the map  */}
                            <Link to="/myEvents">
                                <JoinButton id={props.id} onClick={(e) => props.onClick(e)}>Join</JoinButton> 
                            </Link>
                        </motion.div>
                }
            </AnimatePresence>
        </motion.li>
    );
}

export default Item;