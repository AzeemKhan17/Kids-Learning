import React,{useState} from 'react';
import{Tab,Tabs} from '@mui/material'
import Animal from './Animal';
import AnimalPic from './AnimalPic';
import Articles from './Articles';
import Fruits from './Fruits';
import { Articlegallary } from './ArticleGallary';
import { FruitGallary } from './FruitGallary';
import {SocialMedia} from './SocialMedia';


export const Home = () => {
    const [val,setVal]=useState("animal")
    return (
        <div className='sub'>
            
            <h1 >Home</h1>
            <Tabs value={val} onChange={(e,value)=>setVal(value)}>
                <Tab label="Animal" value="animal"/>
                <Tab label="Fruits" value="fruits"/>
                <Tab label="Article" value="article"/>
                <Tab label="Animal Gallary" value="animalpic"/>
                <Tab label ="Fruits Gallary" value="fruitsgal"/>
                <Tab label="Article Gallary" value="articlesgal"/>
                <Tab label="Social Media" value="socmedia"/>

            </Tabs>
            {val==="animal"&&<Animal/>}
            {val==="fruits"&&<Fruits/>}
            {val==="article"&&<Articles/>}
            {val==="animalpic"&& <AnimalPic/>}
            {val==="articlesgal"&& <Articlegallary/>}
            {val==="fruitsgal"&& <FruitGallary/>}
            {val==="socmedia"&&<SocialMedia/>}
        </div>
    );
};

export default Home;